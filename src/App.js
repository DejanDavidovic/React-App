import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

let blue = 'blue'
let black = 'black'
let white = 'white'
let margin = '10px'
let history = {user:
  {lessons: 'Ancient Grecce',
   
  }
};
class History extends Component{
   
    render() {
      return(
          <div style={{height:'50px', background:black,  color:white, width:'20%', display:'inline-block',margin}}>
             <h2 style={{margin}}> History </h2>
             
          </div>
      ); 
    }
}

class Geography extends Component{
   
  render() {
    return(
        <div style={{height:'50px', background:black,  color:white, width:'20%', display:'inline-block',margin}}>
           <h2 style={{margin}}> Geography </h2>
           
        </div>
    ); 
  }
}


class Politics extends Component{
   
  render() {
    return(
        <div style={{height:'50px', background:black,  color:white, width:'20%', display:'inline-block',margin}}>
           <h2 style={{margin}}> Politics </h2>
           
        </div>
    ); 
  }
}



class Culture extends Component{
   
  render() {
    return(
        <div style={{height:'50px', background:black,  color:white, width:'20%', display:'inline-block',margin}}>
           <h2 style={{margin}}> Culture </h2>
           
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
  constructor() {
    super();
    this.state = {serverData: {}}
  }

  componentDidMount(){
    setTimeout(() =>{
    this.setState({serverData: history});
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
         <h1> 
          {this.state.serverData.user.lessons} lessons
        </h1>
        <History />
        <Geography />
        <Politics />
        <Culture/>
        
        <Main/>
        <Footer/></div>: <h1>Loading...</h1>
        }
        
        
        </div> 
    );
    
  }
}

export default App;
