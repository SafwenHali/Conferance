import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Conferences from "./pages/List";
import About from "./pages/About";
import Conf from "./pages/Conferance";

import Login from "./pages/Login";

import Dashboard from "./pages/dashboard/Dashboard";
import GererConf from "./pages/dashboard/GererConferences";
import AddConf from "./pages/dashboard/AddConferences";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/conferences" element={<Conferences/>}/>
        <Route path="/conf" element={<Conferences/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/conf/:id" element={<Conf/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Admin" element={<Dashboard/>}/>
        <Route path="/Admin/Conf" element={<GererConf/>}/>
        <Route path="/Admin/AddConf" element={<AddConf/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
