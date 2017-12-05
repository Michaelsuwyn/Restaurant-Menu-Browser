import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Foods from './Foods';
import Test from './Test';





ReactDOM.render(
  <BrowserRouter>

  <div style={{backgroundColor: '#f4b942', padding: 20, borderStyle: "groove", borderWidth: 20, borderColor: 'green'}}>



<Route exact path="/" component= {Foods}/>
<Route path="/about" component={Test}/>

  </div>

</BrowserRouter>,
  document.getElementById('root'));
