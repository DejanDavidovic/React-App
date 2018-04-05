import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

let blue = 'blue'
let black = 'black'
let white = 'white'
let margin = '10px'
let player = {user:
  {type: 'MP3 music player',
  playlists:[
    {name:'My List',
     songs:[{name: 'song 1', duration:189},{ name:'song 2', duration:204},{name: 'song 3', duration:198}]},
    {name:'My List 1',
     songs:[{name: 'song 1.1', duration:198},{ name:'song 1.2', duration:214},{name: 'song 1.3', duration:215}]},
    {name:'My List 2',
     songs:[{name: 'song 2.1', duration:300},{ name:'song 2.2', duration:224},{name: 'song 2.3', duration:298}]},
    {name:'My List 3',
     songs:[{name: 'song 3.1', duration:199},{ name:'song 3.2', duration:209},{name: 'song 3.3', duration:187}]},
  ]
         
   
  }
};

class Playlists extends Component{
   
    render() {  
      return(
          <div style={{height:'50px', background:black,  color:white, width:'40%', display:'inline-block',margin}}>
             <h2 style={{margin}}>{this.props.playlists.length} Playlists found </h2>
             
          </div>
      ); 
    }
}

class Filter extends Component {
  render (){
    return (
      <div style={{ background:black,  color:white, width:'40%', display:'inline-block'}}>
        <input type='text' onKeyUp={event=>
          this.props.onTextChange(event.target.value)}/>
         
      </div>);
    }
  }





class Main extends Component {
  render(){
    let playlists= this.props.playlists
    return(
      <div id='list'>
        <h3>{playlists.name}</h3>
        <ul>
          {playlists.songs.map(song=>
              <li>{song.name }  -   {song.duration} seconds</li>
          )}
        </ul>
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
    this.state = {serverData: {},
                  filterString:''}
  }

  componentDidMount(){
    setTimeout(() =>{
    this.setState({serverData: player});
    }, 1000);
    
  }
  render() {
    let playlistsToRender = this.state.serverData.user? this.state.serverData.user.playlists
    .filter(playlists=>playlists.name
      .toLowerCase().includes(this.state.filterString.toLowerCase())) :  []
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
         <h1> 
          {this.state.serverData.user.type} 
        </h1>
        <Playlists playlists={playlistsToRender} />
        <Filter onTextChange={text => this.setState({filterString: text})}/>
        {this.state.serverData.user.playlists
        .filter(playlists=>playlists.name
          .toLowerCase().includes(this.state.filterString.toLowerCase()))
        .map(playlists=>
        <Main  playlists={playlists}/>)}
        <Footer/></div>: <h1>Loading...</h1>}
        
        </div> 
    );
    
  }
}

export default App;

