import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

let blue = 'blue'
let black = 'black'
let white = 'white'
let margin = '10px'
class Navbar extends Component{
    render() {
      return(
          <div style={{height:'50px', background:black,  color:white, width:'30%', display:'inline-block',margin}}>
             <h2 style={{margin}}> Button  </h2>
             
          </div>
      ); 
    }
}


class Main extends Component {
  render(){
    return(
      <div style={{background:black, color:white, margin, height:'500px'}}>
        Main Bar
      </div>
    );
  }   
}
  
class Footer extends Component {
  render(){
    return(
      <div style={{background:blue, color:white, height:'40px', margin}}>
        Footer
      </div>
    );
  }   
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title </h1>
        <Navbar/>
        <Navbar/>
        <Navbar/>
        <Main/>
        <Footer/>
        
        
      </div>
    );
  }
}

export default App;
