import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Directory from "./components/Directory";
import Archive from "./components/Archive";
import Profiler from "./components/Profiler";
import Navbar from "./components/Navbar";

function App() {
  var today = new Date();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeLoggedState() {
    setIsLoggedIn(!isLoggedIn);
    console.log("Loggedin: " + isLoggedIn);
  }

  function CheckLogStatus(props) {
    return isLoggedIn ? (
      <props.component listener={changeLoggedState} />
    ) : (
      <Navigate to='/' />
    );
  }

  return (
    <div className='App container'>
      <Header />
      {<CheckLogStatus component={Navbar} />}
      <Routes>
        <Route
          exact
          path='/'
          element={
            isLoggedIn ? (
              <Navigate to='/dash' />
            ) : (
              <Login listener={changeLoggedState} />
            )
          }
        />
        <Route
          path='dash'
          element={<CheckLogStatus component={Directory} />}
        />
        <Route
          path='archive'
          element={<CheckLogStatus component={Archive} />}
        />
        <Route
          path='profiler'
          element={<CheckLogStatus component={Profiler} />}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
      <p>Copyright {today.getFullYear()}</p>
    </div>
  );
}

export default App;
