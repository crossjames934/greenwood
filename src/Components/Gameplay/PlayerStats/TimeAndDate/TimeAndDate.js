import React, {Component} from 'react';
import {connect} from "react-redux";
import {faCalendarAlt, faClock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
        <h3>
          {weekdayName}
        </h3>
        <h4>
          <FontAwesomeIcon icon={faCalendarAlt}/>
          <span className="ml-2">{dateDisplay}</span>
        </h4>
        <h4>
          <FontAwesomeIcon icon={faClock}/>
          <span className="ml-2">{timeDisplay}</span>
        </h4>
      </div>
    );
  }
}

const mapStateToProps = ({gameTime}) => (
  {gameTime}
);

export default connect(mapStateToProps)(TimeAndDate);