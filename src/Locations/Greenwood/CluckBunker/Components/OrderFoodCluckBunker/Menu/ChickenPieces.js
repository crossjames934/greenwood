import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {faDrumstickBite} from '@fortawesome/free-solid-svg-icons';
import {updateStats, pushNotification, passMinutes} from "../../../../../../Redux/actions/actions";
import StandardButton from "../../../../../../Components/StandardButton/StandardButton";

class ChickenPieces extends Component {
  componentDidMount() {
    window.updateStats = (stats) => this.props.updateStats(stats);
  }

  determineChickenQuality = () => {
    const rnd = Math.random();
    if (rnd > 0.9) return "good";
    if (rnd > 0.6) return "decent";
    if (rnd > 0.3) return "greasy";
    return "bad";
  };

  determineHealthChange = (quality) => {
    switch (quality) {
      case "good":
        return 10;
      case "decent":
        return 3;
      case "greasy":
        return -1;
      default:
        return -4;
    }
  };

  determineNotificationText = (quality) => {
    switch (quality) {
      case "good":
        return "That was some really good chicken! Delicious!";
      case "decent":
        return "That was some standard quality chicken, can't complain.";
      case "greasy":
        return "That chicken was a bit greasy, not good for the heart.";
      default:
        return "That chicken was terrible. Yuck.";
    }
  };

  determineNotificationColor = (quality) => {
    switch (quality) {
      case "good":
        return "success";
      case "decent":
        return "secondary";
      case "greasy":
        return "warning";
      default:
        return "danger";
    }
  };

  determineNotification = (quality) => {
    return {
      text: this.determineNotificationText(quality),
      color: this.determineNotificationColor(quality)
    }
  };

  determineZenChange = (quality) => {
    switch (quality) {
      case "good":
        return +2;
      case "bad":
        return -2;
      default:
        return 0;
    }
  };

  orderChickenPieces = () => {
    const {updateStats, pushNotification, passMinutes} = this.props;
    const moneySpent = 3;
    const quality = this.determineChickenQuality();
    const healthChange = this.determineHealthChange(quality);
    console.log(healthChange);
    const notification = this.determineNotification(quality);
    const zenChange = this.determineZenChange(quality);
    updateStats({
      health: healthChange,
      money: -moneySpent,
      zen: zenChange
    });
    passMinutes(2);
    pushNotification(notification);
  };

  render() {
    return(
      <div>
        <StandardButton color="warning" icon={faDrumstickBite} text="Chicken Pieces" clickFunction={this.orderChickenPieces}/>
      </div>
    )
  }
}

const mapStateToProps = ({}) => (
  {}
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({updateStats, pushNotification, passMinutes}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ChickenPieces);