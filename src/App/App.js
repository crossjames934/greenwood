import React, {Component} from 'react';
import PlayerStats from "../Components/Gameplay/PlayerStats/PlayerStats";
import {ToastContainer} from 'react-toastify';
import Notifications from "../Components/Gameplay/Notifications";
import TestVenue from "../Components/TestVenue/TestVenue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="app">
        <PlayerStats/>
        <TestVenue/>
        <Notifications/>
        <ToastContainer/>
      </div>
    )
  }
}

export default App;
