import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Test from './Test';



class Foods extends React.Component {
constructor() {
super();
//sets initial state of rests and search at empty
this.state = {
  rests: [],
  search: ""
};

}


//fetches the data and sets the rests state to the JSON response
componentWillMount() {
const url = 'http://localhost:59618/api/Rests';
 fetch(url)
 .then((resp) => resp.json())
 .then((data) => {
   console.log(data)

this.setState({rests: data});

  })
}


// takes in input from input and sets the state to the value
upDateSearch(event) {
  this.setState({search: event.target.value.substr(0, 20)});
}





render() {
const buttonStyle = {backgroundColor: '#65872b', borderRadius: 12, width: 80,}
  const spacer = {backgroundColor: 'black'};
  let myArray = []

  //filters the userinput in search bar to match Restauraunt names
let filteredContacts = this.state.rests.filter(
(rest) => {
  return rest.restName.toLowerCase().indexOf(this.state.search) !==-1;
}
)


//maps the foodlist and so that it displays each food in the database
  let foodList = filteredContacts.map((rest, index) => <li key={rest.foodId}>
  <h1>{rest.restName}</h1>
  <h2> Style: <b>{rest.style} </b> </h2>
  <button style={buttonStyle}>
  <a href={rest.menu} style={{color: 'black'}}> <b>View Menu</b></a>
</button>
<div style={{height: 20}}></div>
    <div style={spacer}>.</div>

</li>
)





//returns a list of the and the searchBar

return(

  <div style={{backgroundColor: '#f9f9a2', padding: 50}}>
    <ul style={{float: 'left', listStyleType: 'none', margin: 0, padding: 0, width: 200, backgroundColor: '#f1f1f1'}}>
    <li><Link to="/" style={{display: 'block', color: '#000', padding: 8, textDecoration: 'none'}}>Foods</Link></li>
    <li><Link to="/about" style={{display: 'block', color: '#000', padding: 8, textDecoration: 'none'}}>Submit New Restauraunt</Link></li>
    </ul>
    <span style={{float: 'right', padding: 50,}}>


<input type="text" placeholder="Search for Restauraunt Menu" value={this.state.search}
  style={{width: 200}} onChange={this.upDateSearch.bind(this)} ></input>

</span>
<br>

</br>
    <h1 style={{color: '#65872b', fontSize: 65, padding: 20}}> <b>Restauraunt Menu </b> </h1>

    <button style={{padding: 15, float: 'right', backgroundColor: '#65872b', borderRadius: 12, width: 130}}> <Link to="/about" style={{color: 'black'}}>Enter new Restauraunt </Link> </button>
  <div style={{height: 40}}></div>
    <ul className="myUL">
      {foodList}
  </ul>
  <Route path="/about" component={Test}/>
  </div>
  )
  }
}


export default Foods;
