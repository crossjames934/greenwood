import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {setActiveComponent} from "../../../Redux/actions/actions";
import StandardButton from "../../../Components/StandardButton/StandardButton";

class SqualorSquare extends Component {
  goToBedroom = () => {
    this.props.setActiveComponent();
  };

  render() {
    return(
      <div>
        <h1>Squalor Square</h1>
        <StandardButton text="Bedroom" clickFunction={this.goToBedroom}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({setActiveComponent}, dispatch)
);

export default connect(null, mapDispatchToProps)(SqualorSquare);