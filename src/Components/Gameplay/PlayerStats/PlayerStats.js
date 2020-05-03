import React, {Component} from 'react';
import TimeAndDate from "./TimeAndDate/TimeAndDate";

class PlayerStats extends Component {
  render() {
    return (
      <div className="player-stats">
        <TimeAndDate/>
      </div>
    );
  }
}

export default PlayerStats;