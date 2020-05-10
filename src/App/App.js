import React, {Component} from 'react';
import PlayerStats from "../Components/Gameplay/PlayerStats/PlayerStats";
import {ToastContainer} from 'react-toastify';
import Notifications from "../Components/Gameplay/Notifications/Notifications";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import CurrentView from "../Components/Gameplay/CurrentView/CurrentView";

class App extends Component {
  render() {
    return(
      <div className="app">
        <PlayerStats/>
        <CurrentView/>
        <Notifications/>
        <ToastContainer/>
      </div>
    )
  }
}

export default App;


