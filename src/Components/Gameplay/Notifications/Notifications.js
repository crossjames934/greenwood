import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({notifications}) => ({
  notifications
});

class Notifications extends Component {
  singleNotification = (notification, index) => {
    const {text, color} = notification;
    const listItemClass = color ? `text-${color}` : "";
    return(
      <li key={"notification_"+index} className={listItemClass}>
        {text}
      </li>
    )
  };

  render() {
    console.log(this.props.notifications);
    return(
      <div className="notifications">
        <ul>
          {this.props.notifications.map((notification, index) => this.singleNotification(notification, index))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Notifications);