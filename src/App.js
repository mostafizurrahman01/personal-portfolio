// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home/Home";
import Projects from "./components/Projects/Projects/Projects";
import Resume from "./components/Resume/Resume/Resume";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/projects">
          <Projects></Projects>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/testimonial">
          <Testimonials></Testimonials>
        </Route>
        <Route exact path="/resume">
          <Resume></Resume>
        </Route>
        <Route exact path="/contact">
          <Contacts></Contacts>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
