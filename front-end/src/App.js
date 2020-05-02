import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './styles/App.css';
/* Components */
import Home from "./components/Home";
import Admittance from "./components/Admitere";
import Teachers from "./components/Cadre-Didactice";
import StudyPrograms from "./components/Programe-Studiu";
import News from "./components/Anunturi";
import Contact from "./components/Contact";

/* Creates an icons library to use throughout the application */

function App() {

  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admitere" component={Admittance} />
          <Route path="/cadre-didactice" component={Teachers} />
          <Route path="/programe-studiu" component={StudyPrograms} />
          <Route path="/anunturi" component={News} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <footer>
          <p>Copyright &copy; 2020 All rights reserved</p>
        </footer>
    </Router>
  );
}

export default App;
