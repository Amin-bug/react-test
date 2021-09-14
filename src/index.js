import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

// this structure is : reactELement , React DOM , [function callback]

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)


//  in this example : 
// first run componentWillMount () in Parent Component then run render method
// then run componentWillMount () in Child Component  then render method
// then run componentDidMount () in Child Component
// and then run componentDidMount() in Parent Component


// note : if mounting the components in DOM is done !  components is ready
// and each component mounted : means inserted to DOM


// Error Boundary
// Context 
// Portal
// Refs   ==> refs use 2 way --> 1.React.createRef() and pass the ref to element ... 2. use for callbacks example in below: 
// this.input = null;
// this.callBack = (element) => { this.input = element }
// pass the this.input for ref to element
// now : use in componentDidMount for name : this.input
// ---------

// Forwarding Refs 

