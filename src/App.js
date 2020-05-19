import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import TaskList from "./components/task-list.component";
import CreateTask from "./components/create-task.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/user" component={CreateUser} />
      <Route path="/" exact component={TaskList} />
      <Route path="/create" component={CreateTask} />
      
      
      </div>
      
    </Router>
  );
}

export default App;