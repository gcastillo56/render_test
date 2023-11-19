const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Not a page to access on its own. Use RestfulAPI</h1>");
});

app.post("/login", (req, res) => {
  console.log("Hitting server");
  const user = req.body.user;
  const pass = req.body.pass;
  console.log(user);
  console.log(pass);
  let authorization = {
    user: user,
    status: "Unauthorized",
    statusCode: -1,
  };
  if (user === "Gabriel" && pass === "123") {
    authorization.status = "Authorized";
    authorization.statusCode = 1;
  }
  res.json(authorization);
});

app.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
