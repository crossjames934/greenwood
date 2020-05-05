import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {updateStats, pushNotification} from "../../../../Redux/actions/actions";
import {faBed} from '@fortawesome/free-solid-svg-icons';
import StandardButton from "../../../../Components/StandardButton/StandardButton";

class Bedroom extends Component {
  peacefulSleep = () => {
    const {pushNotification, updateStats} = this.props;
    pushNotification({
      text: "You slept surprisingly well, despite the sirens and occasional gunshots",
      color: "success"
    });
    updateStats({
      energy: 100,
      hygiene: -30,
      health: 20,
      nourishment: -30,
      zen: 10
    });
  };

  sleep = () => {
    this.peacefulSleep();
  };

  render() {
    return(
      <div>
        <h1>Bedroom</h1>
        <div>
          <StandardButton color="dark" icon={faBed} text="Sleep" clickFunction={this.sleep}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({energy, hygiene, health, nourishment, zen, gameTime}) => (
  {energy, hygiene, health, nourishment, zen, gameTime}
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({updateStats, pushNotification}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Bedroom);