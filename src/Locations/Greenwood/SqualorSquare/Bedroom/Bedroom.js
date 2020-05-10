import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {updateStats, pushNotification, passMinutes} from "../../../../Redux/actions/actions";
import {faBed, faHome} from '@fortawesome/free-solid-svg-icons';
import StandardButton from "../../../../Components/StandardButton/StandardButton";
import NavigationButton from "../../../../Components/NavigationButton/NavigationButton";
import SqualorSquare from "../SqualorSquare";

class Bedroom extends Component {
  peacefulSleep = () => {
    const {pushNotification, updateStats} = this.props;
    pushNotification({
      text: "You slept surprisingly well, despite the sounds of sirens and occasional gunshots",
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

  badSleep = () => {
    const {pushNotification, updateStats} = this.props;
    pushNotification({
      text: "You slept really badly, one of your neighbours spent the whole night screaming.",
      color: "danger"
    });
    updateStats({
      energy: 60,
      hygiene: -30,
      health: 5,
      nourishment: -30,
      zen: -10
    });
  }

  determineEffectOfSleep = () => {
    const rnd = Math.random();
    if (rnd > 0.9) return this.peacefulSleep();
    return this.badSleep();
  };

  sleep = () => {
    const {passMinutes} = this.props;
    passMinutes(8 * 60);
    this.determineEffectOfSleep();
  };

  render() {
    return(
      <div>
        <h1>Bedroom</h1>
        <div>
          <StandardButton color="dark" icon={faBed} text="Sleep" clickFunction={this.sleep}/>
          <NavigationButton icon={faHome} targetComponent={<SqualorSquare/>} text="Exit (To Squalor Square)"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({energy, hygiene, health, nourishment, zen, gameTime}) => (
  {energy, hygiene, health, nourishment, zen, gameTime}
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({updateStats, pushNotification, passMinutes}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Bedroom);