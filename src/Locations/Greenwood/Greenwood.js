import React, {Component} from 'react';
import {connect} from "react-redux";
import {faHome, faDrumstickBite} from '@fortawesome/free-solid-svg-icons';
import {bindActionCreators} from 'redux';
import {setActiveComponent} from "../../Redux/actions/actions";
import SqualorSquare from "./SqualorSquare/SqualorSquare";
import StandardButton from "../../Components/StandardButton/StandardButton";
import CluckShack from "./CluckShack/CluckShack";

class Greenwood extends Component {
  goToSqualorSquare = () => {
    this.props.setActiveComponent(<SqualorSquare/>);
  };

  goToCluckShack = () => {
    this.props.setActiveComponent(<CluckShack/>);
  };

  render() {
    return(
      <div>
        <h1>Greenwood</h1>
        <StandardButton color="info" icon={faHome} text="Squalor Square" clickFunction={this.goToSqualorSquare}/>
        <StandardButton color="warning" icon={faDrumstickBite} text="Cluck Shack" clickFunction={this.goToCluckShack}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => (
  bindActionCreators({setActiveComponent}, dispatch)
);

export default connect(null, mapDispatchToProps)(Greenwood);