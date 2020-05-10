import React, {Component} from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeartbeat, faBatteryFull, faShower, faUtensils, faDove} from '@fortawesome/free-solid-svg-icons';
import SingleStat from "./SingleStat";

class LifeStats extends Component {
  healthIcon = () => <FontAwesomeIcon icon={faHeartbeat}/>;
  energyIcon = () => <FontAwesomeIcon icon={faBatteryFull}/>;
  nourishmentIcon = () => <FontAwesomeIcon icon={faUtensils}/>;
  hygieneIcon = () => <FontAwesomeIcon icon={faShower}/>;
  zenIcon = () => <FontAwesomeIcon icon={faDove}/>;

  render() {
    const {healthIcon, energyIcon, nourishmentIcon, hygieneIcon, zenIcon} = this;
    const {health, energy, nourishment, hygiene, zen, maxHealth, maxEnergy} = this.props;
    return(
      <div>
        <SingleStat icon={healthIcon()} label={"Health"} value={health} max={maxHealth}/>
        <SingleStat icon={energyIcon()} label={"Energy"} value={energy} max={maxEnergy}/>
        <SingleStat icon={nourishmentIcon()} label={"Nourishment"} value={nourishment} max={100}/>
        <SingleStat icon={hygieneIcon()} label={"Hygiene"} value={hygiene} max={100}/>
        <SingleStat icon={zenIcon()} label={"Zen"} value={zen} max={100}/>
      </div>
    )
  }
}

const mapStateToProps = ({health, energy, nourishment, hygiene, zen, maxHealth, maxEnergy}) => (
  {health, energy, nourishment, hygiene, zen, maxHealth, maxEnergy}
);

export default connect(mapStateToProps)(LifeStats);