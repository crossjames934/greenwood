import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {setState, pushNotification, setActiveComponent, passMinutes, setTimeTo} from "../../../Redux/actions/actions";
import {faBriefcase, faCity} from '@fortawesome/free-solid-svg-icons';
import StandardButton from "../../../Components/StandardButton/StandardButton";
import Greenwood from "../Greenwood";
import NavigationButton from "../../../Components/NavigationButton/NavigationButton";
import WorkAtCluckBunker from "./Components/WorkAtCluckBunker/WorkAtCluckBunker";

class CluckBunker extends Component {
  render() {
    return (
      <div>
        <h1>
          Cluck Bunker
        </h1>
        <div>
          <WorkAtCluckBunker/>
          <NavigationButton icon={faCity} targetComponent={<Greenwood/>} text="Exit (To Greenwood)"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({energy, hygiene, zen, money, gameTime}) => (
  {energy, hygiene, zen, money, gameTime}
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({setState, pushNotification, setActiveComponent, passMinutes, setTimeTo}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CluckBunker);