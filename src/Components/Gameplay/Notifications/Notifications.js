import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {connect} from 'react-redux';

class Notifications extends Component {
  singleNotification = (notification, index) => {
    const {text, color, dateTime} = notification;
    return(
      <ListGroup className="m-2 fade-in" key={"notification_" + index}>
        <ListGroupItem color={color}>
          {text}
          <small className="float-right">{dateTime.format("HH:mm DD/MM/YYYY")}</small>
        </ListGroupItem>
      </ListGroup>
    );
  };

  render() {
    return(
      <div className="notifications">
        {this.props.notifications.map((notification, index) => this.singleNotification(notification, index))}
      </div>
    )
  }
}

const mapStateToProps = ({notifications}) => ({
  notifications
});

export default connect(mapStateToProps)(Notifications);