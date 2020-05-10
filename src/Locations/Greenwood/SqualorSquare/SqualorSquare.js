import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {faBed, faCity} from '@fortawesome/free-solid-svg-icons';
import {setActiveComponent} from "../../../Redux/actions/actions";
import Bedroom from "./Bedroom/Bedroom";
import NavigationButton from "../../../Components/NavigationButton/NavigationButton";
import Greenwood from "../Greenwood";

class SqualorSquare extends Component {
  render() {
    return(
      <div>
        <h1>Squalor Square</h1>
        <NavigationButton targetComponent={<Bedroom/>} icon={faBed} text="Bedroom"/>
        <NavigationButton targetComponent={<Greenwood/>} icon={faCity} text="Exit (To Greenwood)"/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({setActiveComponent}, dispatch)
);

export default connect(null, mapDispatchToProps)(SqualorSquare);