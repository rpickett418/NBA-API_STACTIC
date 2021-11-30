import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      teams: []
    }
  }

  async componentDidMount() {
    const url = "https://www.balldontlie.io/api/v1/teams"
    let result = null; 
    try{
      result = await axios(url, {
        headers: {
          Accept: "application/json"
        }
      })
    } catch(e) {
      console.log(e)
      
    }
    this.setState({teams: result.data.data})
  }
  render(){
    const {teams} = this.state;
    console.log({teams})
    let mappedArray = (teams).map((teams) =>{
      return(
        <li>
        
        {teams.name} 
        </li>
      )
    })
  return (
    <div className="App">
      <ul>{mappedArray}</ul>
    </div>
  );
}
}

export default App;
