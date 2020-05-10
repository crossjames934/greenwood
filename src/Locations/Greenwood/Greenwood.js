import React, {Component} from 'react';
import {connect} from "react-redux";
import {faHome, faDrumstickBite, faBong, faBeer, faCapsules} from '@fortawesome/free-solid-svg-icons';
import {bindActionCreators} from 'redux';
import {setActiveComponent} from "../../Redux/actions/actions";
import SqualorSquare from "./SqualorSquare/SqualorSquare";
import CluckBunker from "./CluckBunker/CluckBunker";
import NavigationButton from "../../Components/NavigationButton/NavigationButton";

class Greenwood extends Component {
  render() {
    return(
      <div>
        <h1>Greenwood</h1>
        <NavigationButton color="info" icon={faHome} text="Squalor Square" targetComponent={<SqualorSquare/>}/>
        <NavigationButton color="warning" icon={faDrumstickBite} text="Cluck Bunker" targetComponent={<CluckBunker/>}/>
        <NavigationButton color="warning" icon={faBong} text="Your Highness" targetComponent={<div/>}/>
        <NavigationButton color="warning" icon={faBeer} text="Thunderforks" targetComponent={<div/>}/>
        <NavigationButton color="warning" icon={faCapsules} text="Totally Doctors" targetComponent={<div/>}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({setActiveComponent}, dispatch)
);

export default connect(null, mapDispatchToProps)(Greenwood);