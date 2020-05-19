import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { ConnectionStates } from 'mongoose';





const Task = props => {
  const startdate = new Date (Number(props.task.startdate))
  const enddate = new Date (Number(props.task.enddate))
  console.log(props.task.startdate, startdate )
return   (
  <tr>
    <td>{props.task.username}</td>
    <td>{props.task.task}</td>
    <td>{props.task.project}</td>
    <td>{`${startdate.getDate()}/${startdate.getMonth()+1}/${startdate.getFullYear()}`  }</td>
    <td>{`${enddate.getDate()}/${enddate.getMonth()+1}/${enddate.getFullYear()}`  }</td>
    {/* <td>
      <Link to={"/edit/"+props.task._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTask(props.task._id) }}>delete</a>
    </td> */}
  </tr>
)
}

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this)

    this.state = {task: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/task')
      .then(response => {
        this.setState({ task: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTask(id) {
    axios.delete('http://localhost:5000/task/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      tasks: this.state.task.filter(el => el._id !== id)
    })
  }

  taskList() {
    return this.state.task.map(currenttask => {
      return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Tasks</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Task</th>
              <th>Project</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            { this.taskList() }
          </tbody>
        </table>
      </div>
    )
  }
}