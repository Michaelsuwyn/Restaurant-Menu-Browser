import React from "react";
import axios from "axios";
import {BrowserRouter, Route, Link} from 'react-router-dom';



class Test extends React.Component {
  constructor() {
  super();
  this.state = {
    name: "",
    style: "",
    menu: "",
    location: ""
  }
}

addRest() {

  axios.post('http://localhost:59618/api/Rests', {
    RestName: this.state.name.toString(),
    style: this.state.style.toString(),
    menu: this.state.menu.toString(),
    location: this.state.location.toString()
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

upDateName(event) {
  this.setState({name: event.target.value.substr(0, 1000)});
}
upDateStyle(event) {
  this.setState({style: event.target.value.substr(0, 1000)});
}
upDateMenu(event) {
  this.setState({menu: event.target.value.substr(0, 1000)});
}
upDateLocation(event) {
  this.setState({location: event.target.value.substr(0, 1000)});
}

  render() {
    const space = {padding: 5,};
    return (
      <div>

        <ul style={{float: 'left', listStyleType: 'none', margin: 0, padding: 0, width: 200, backgroundColor: '#f1f1f1'}}>
        <li><Link to="/" style={{display: 'block', color: '#000', padding: 8, textDecoration: 'none'}}>Foods</Link></li>
        <li><Link to="/about" style={{display: 'block', color: '#000', padding: 8, textDecoration: 'none'}}>Submit New Restauraunt</Link></li>
        </ul>
        <div style={{height: 100}}> </div>
        <h1>New Restauraunt</h1>
  Restauraunt  <input className="restName" value={this.state.name} onChange={this.upDateName.bind(this)}/>
    <div style={space}></div>

    Style Of Food  <input className="style" value={this.state.style} onChange={this.upDateStyle.bind(this)}/>
      <div style={space}></div>

    Menu URL  <input className="menu" value={this.state.menui} onChange={this.upDateMenu.bind(this)}/>
        <div style={space}></div>

      Location   <input className="location" value={this.state.location} onChange={this.upDateLocation.bind(this)}/>
        <div style={space}></div>
        <button style={{backgroundColor: '#65872b', borderRadius: 12, width: 120,}} onClick={this.addRest.bind(this)}>Submit Restauraunt</button>

      </div>
    )
  }
}
export default Test;
