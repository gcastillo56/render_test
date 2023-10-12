const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

var names = [];
var tasks = [];

app.route("/").get((req, res) => {
  res.render(__dirname + "/html/index.html", { names: names, tasks: tasks });
});

// This method receives parameter from url via get query
app
  .route("/greet")
  .get((req, res) => {
    var name = req.query.name;
    if (name) {
      names.push(name);
      console.log(names);
    }
    res.redirect("/");
  })
  .put((req, res) => {
    var name = req.query.name;
    if (name) {
      names.push(name);
      console.log(names);
    }
    res.json(names);
  });

app.route("/greet/:pos").get(
  (req, res, next) => {
    var position = req.params.pos;
    if (position < names.length) {
      res.render(__dirname + "/html/wazzup.html", { name: names[position] });
    }
    next();
  },
  (req, res, next) => {
    console.log("Position out of range.");
    res.render(__dirname + "/html/index.html", {
      names: names,
      tasks: tasks,
      error: "Position out of range.",
    });
  }
);

app
  .route("/task")
  .get((req, res) => {
    res.json(tasks);
  })
  .post((req, res) => {
    var task = req.body.task;
    if (task) {
      tasks.push(task);
      console.log(tasks);
    }
    res.redirect("/");
  })
  .delete((req, res) => {
    var idx = req.body.idx;
    console.log("delete " + idx);
    tasks.splice(idx, 1);
    res.json(tasks);
  });

app.route("/task/del/:idx").get((req, res) => {
  var idx = req.params.idx;
  console.log("delete " + idx);
  tasks.splice(idx, 1);
  res.redirect("/");
});

app.route("/task/:dir.:pos").get((req, res) => {
  var direction = req.params.dir;
  var position = Number(req.params.pos);
  if (
    (direction === "up" && position == 0) ||
    (direction === "dn" && position == tasks.length - 1)
  ) {
    console.log("noaction");
    res.redirect("/");
  } else if (direction === "up") {
    var npos = tasks[position - 1];
    tasks[position - 1] = tasks[position];
    tasks[position] = npos;
    res.redirect("/");
  } else if (direction === "dn") {
    var kpos = tasks[position + 1];
    tasks[position + 1] = tasks[position];
    tasks[position] = kpos;
    res.redirect("/");
  }
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000");
});
