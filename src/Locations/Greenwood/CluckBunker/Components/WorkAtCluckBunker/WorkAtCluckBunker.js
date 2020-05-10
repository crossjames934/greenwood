import React, {Component} from 'react';
import StandardButton from "../../../../../Components/StandardButton/StandardButton";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {bindActionCreators} from "redux";
import {
  pushNotification,
  setActiveComponent,
  setState,
  setTimeTo
} from "../../../../../Redux/actions/actions";
import {connect} from "react-redux";

class WorkAtCluckBunker extends Component {
  determineNotification = (quality) => {
    switch (quality) {
      case "good":
        return {
          text: "You had a surprisingly good shift, even the manager is smiling!",
          color: "success"
        };
      case "bad":
        return {
          text: "You had a pretty bad day at work, some idiots tried to throw some chips at you while you were working.",
          color: "danger"
        }
      default:
        return {
          text: "You had a normal day at work without getting in to too much trouble. Another day another dollar.",
          color: "secondary"
        }
    }
  };

  determineZenChange = (quality) => {
    switch (quality) {
      case "good":
        return 5
      case "bad":
        return -10
      default:
        return -5;
    }
  };

  notEnoughEnergy = () => {
    const notification = {
      text: "Come back with more energy",
      color: "warning"
    };
    this.props.pushNotification(notification);
  };

  determineQualityOfWorkDay = () => {
    const rnd = Math.random();
    if (rnd > 0.9) return "good";
    if (rnd > 0.1) return "normal";
    return "bad";
  };

  work = () => {
    const {setState, energy, hygiene, zen, money, pushNotification, setTimeTo} = this.props;
    if (energy.value < 60) return this.notEnoughEnergy();
    const workQuality = this.determineQualityOfWorkDay();
    const zenChange = this.determineZenChange(workQuality);
    const notification = this.determineNotification(workQuality);
    pushNotification(notification);
    setTimeTo("16:00");
    setState({
      energy: -60,
      money: money + 42,
      hygiene: hygiene - 10,
      zen: zen + zenChange,
    });
  };

  render() {
    return <StandardButton color="warning" icon={faBriefcase} text="Work" clickFunction={this.work}/>;
  }
}

const mapStateToProps = ({energy, hygiene, zen, money, gameTime}) => (
  {energy, hygiene, zen, money, gameTime}
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({setState, pushNotification, setActiveComponent, setTimeTo}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(WorkAtCluckBunker);

