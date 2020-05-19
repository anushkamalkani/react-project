import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import Timer from "./timer.component";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTask = this.onChangeTask.bind(this);
    this.onFocusProject = this.onFocusProject.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      task: '',
      startdate: new Date(),
      enddate: new Date(),
      users: [],
      projects: [],

    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/user/')
      .then(response => {
        if (response.data.length > 0) {
          console.log("users", response.data)
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

      axios.get('http://localhost:5000/project/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            projects: response.data.map(project => project.Project),
            project: response.data[0].Project
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
 

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeTask(e) {
    this.setState({
      task: e.target.value
    })
  }

  onFocusProject(e) {
    this.setState({
      project: e.target.value
    })
  }

  onChangeStartDate(e) {
    console.log(e)
    this.setState({
      startdate: e
      
    })
  }
  
  onChangeEndDate(e) {
    
    this.setState({
      enddate: e
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const task = {
      username: this.state.username,
      task: this.state.task,
      project: this.state.project,
      startdate: this.state.startdate,
      enddate: this.state.enddate,
    }

    console.log(task);

    axios.post('http://localhost:5000/task/add', task)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Task Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              placeholder="Username"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Task: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.task}
              onChange={this.onChangeTask}
              />
        </div>
        <div className="form-group"> 
          <label>Project : </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.project}
              onChange={this.onFocusProject}>
              {
                this.state.projects.map(function(project) {
                  console.log(project)
                  return <option 
                    key={project}
                    value={project}>{project}
                    </option>;
                })
              }
          </select>
        </div>
        
        <div className="form-group">
          <label>Start Date: </label>
          <div>
            <DatePicker
              selected={this.state.startdate}
              onChange={this.onChangeStartDate}
            />
          </div>
          <label>End Date: </label>
          <div>
            <DatePicker
              selected={this.state.enddate}
              onChange={this.onChangeEndDate}
            />
          </div>
          {/* <div className="form-group">
            <label>Counter</label>
            <div>
        <Timer startcount='0' />
        </div>
        </div> */}
      </div >
        

        <div className="form-group">
     
          <input type="submit" value="Create Task Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}