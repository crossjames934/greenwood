import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {faBed} from '@fortawesome/free-solid-svg-icons';
import {setActiveComponent} from "../../../Redux/actions/actions";
import StandardButton from "../../../Components/StandardButton/StandardButton";
import Bedroom from "./Bedroom/Bedroom";

class SqualorSquare extends Component {
  goToBedroom = () => {
    this.props.setActiveComponent(<Bedroom/>);
  };

  render() {
    return(
      <div>
        <h1>Squalor Square</h1>
        <StandardButton color="info" icon={faBed} text="Bedroom" clickFunction={this.goToBedroom}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({setActiveComponent}, dispatch)
);

export default connect(null, mapDispatchToProps)(SqualorSquare);