import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {locationData} from "./Components/Locations/locationData/locationData";
import {LOCATION} from "./Components/Shared/StringConstants/Statistics";
import {defaultActionEffect} from "./Components/Shared/Methods/DefaultActionEffect";
import {pushToNotifications} from "./Components/Shared/Methods/PushToNotifications";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDirections} from '@fortawesome/free-solid-svg-icons';

class CurrentView extends Component {
  actionContent = (actionOptions) => {
    const {gameStats} = this.props;
    if (!actionOptions) return null;
    return actionOptions.map((option, index) => {
      const {label, checkIfAllowed} = option;
      const isAllowed = checkIfAllowed ? checkIfAllowed(gameStats) : true;
      if (!isAllowed) return null;
      const buttonID = "button_"+index;
      return(
        <div className="my-2" key={"option_"+index}>
          <Button color="light" id={buttonID} onClick={() => { this.performAction(option) }}>
            {label}
          </Button>
        </div>
      );
    });
  };

  performAction = (option) => {
    const {gameStats, setGameStats} = this.props;
    const {action, specialAction, notification} = option;
    if (specialAction) return specialAction(gameStats, setGameStats);
    if (notification) pushToNotifications(notification, gameStats, setGameStats);
    defaultActionEffect(action, gameStats, setGameStats, notification);
  };

  navContent = (navOptions) => {
    if (!navOptions) return null;
    return navOptions.map((option, index) => {
      const {label, id, color, icon} = option;
      const showIcon = icon || faDirections;
      return(
        <div className="my-2" key={"option_"+index}>
          <Button color={color} onClick={() => { this.props.setGameStats({[LOCATION]: id}) }}>
            <FontAwesomeIcon icon={showIcon}/>
            <span className="ml-2">{label}</span>
          </Button>
        </div>
      );
    });
  };

  content = () => {
    const {LOCATION} = this.props.gameStats;
    const data = locationData[LOCATION];
    const {component, navOptions, actionOptions} = data;
    if (component) return <component {...this.props}/>;
    return(
      <div>
        {this.navContent(navOptions)}
        {this.actionContent(actionOptions)}
      </div>
    )
  };

  render() {
    const {LOCATION} = this.props.gameStats;
    const data = locationData[LOCATION];
    const {name, description} = data;
    return(
      <div className="p-2">
        <h2>{name}</h2>
        <h3>{description}</h3>
        {this.content()}
      </div>
    );
  }
}

export default CurrentView;
