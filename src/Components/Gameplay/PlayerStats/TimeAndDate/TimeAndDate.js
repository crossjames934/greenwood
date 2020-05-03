import React, {Component} from 'react';
import {connect} from "react-redux";
import Moment from "moment";

class TimeAndDate extends Component {
  render() {
    const {gameTime} = this.props;
    const dateDisplay = gameTime.format("DD/MM/YYYY");
    const timeDisplay = gameTime.format("HH:mm");
    const daysOfWeek = Moment.weekdays();
    const currentDayOfWeekIndex = gameTime.day();
    const weekdayName = daysOfWeek[currentDayOfWeekIndex];
    return (
      <div>
        <h2>
          {weekdayName}
        </h2>
        <h3>
          {dateDisplay}
        </h3>
        <h4>
          {timeDisplay}
        </h4>
      </div>
    );
  }
}

const mapStateToProps = ({gameTime}) => (
  {gameTime}
);

export default connect(mapStateToProps)(TimeAndDate);