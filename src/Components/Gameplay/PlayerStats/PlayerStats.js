import React, {Component} from 'react';
import TimeAndDate from "./TimeAndDate/TimeAndDate";
import Money from "./Money/Money";
import LifeStats from "./LifeStats/LifeStats";

class PlayerStats extends Component {
  render() {
    return (
      <div className="player-stats">
        <TimeAndDate/>
        <Money/>
        <LifeStats/>
      </div>
    );
  }
}

export default PlayerStats;