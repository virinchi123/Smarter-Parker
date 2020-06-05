import React,{Component} from 'react';
import Login from './components/Login/Login'
import './App.css';
import Monitor from './components/Monitor/Monitor'
import axios from 'axios'

class App extends Component {

  state={
    home:false
  }

  switched = () =>{
    this.setState({
      home:true
    })
  }

  logout = () =>{
    this.setState({
      home:false
    })
  }

  render(){

    let component = null
    if(this.state.home)
    {
      component= <Monitor logout ={this.logout}/>
    }
    else{
      component=<Login signin={this.switched} signup={this.switched}/>
    }
    

    return <div className="App">
      {component}
    </div>
  }
}

export default App;
