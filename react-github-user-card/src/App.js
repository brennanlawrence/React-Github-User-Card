import './App.css';
import React from "react";
import axios from 'axios';
import UserContainer from "./UserContainer";

class App extends React.Component {
  state = {
    userData: [],
    followersData: []
  }


  componentDidMount() {
    axios.get("https://api.github.com/users/brennanlawrence")
      .then((result) => {
        //console.log(result.data);
        this.setState({ userData: result.data })
      })
      .catch((error) => {
        console.log(error);
      })
      axios.get("https://api.github.com/users/brennanlawrence/followers")
      .then((result) => {
        //console.log(result.data);
        this.setState({ followersData: result.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    console.log(this.state.userData);
    return(
      <div>
        <div className="flex items-center justify-center h-24 mb-8 shadow-md">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-800">GitHub Users</h1>  
        </div>
        <UserContainer data={this.state.userData} followers={this.state.followersData}/>
      </div>
    )
  }
}

export default App;
