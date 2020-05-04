import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {setState, pushNotification} from "../../../Redux/actions/actions";
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import StandardButton from "../../../Components/StandardButton/StandardButton";

class CluckShack extends Component {
  determineZenChange = () => {
    const {pushNotification} = this.props;
    const rnd = Math.random();
    if (rnd > 0.9) {
      pushNotification({
        text: "You had a surprisingly good shift, even the manager is smiling!",
        color: "success"
      });
      return 5;
    }
    if (rnd < 0.1) {
      pushNotification({
        text: "You had a pretty bad day at work, some idiots tried to throw some chips at you while you were working.",
        color: "danger"
      });
      return -10;
    }
    pushNotification({
      text: "You had a normal day at work without getting in to too much trouble. Another day another dollar.",
      color: "secondary"
    });
    return -1;
  };

  notEnoughEnergy = () => {
    const notification = {
      text: "Come back with more energy",
      color: "warning"
    };
    this.props.pushNotification(notification);
  };

  work = () => {
    const {setState, energy, hygiene, zen, money} = this.props;
    if (energy.value < 40) return this.notEnoughEnergy();
    const zenChange = this.determineZenChange();
    setState({
      energy: {value: energy.value - 20, max: energy.max},
      money: money + 42,
      hygiene: hygiene - 10,
      zen: zen + zenChange
    });
  };

  render() {
    return(
      <div>
        <h1>Cluck Shack</h1>
        <div>
          <StandardButton color="warning" icon={faBriefcase} text="Work" clickFunction={this.work}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({energy, hygiene, zen, money}) => (
  {energy, hygiene, zen, money}
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({setState, pushNotification}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CluckShack);