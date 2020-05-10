import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StandardButton from "../StandardButton/StandardButton";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setActiveComponent} from "../../Redux/actions/actions";

class NavigationButton extends Component {
  goToTarget = () => {
    const {targetComponent, setActiveComponent} = this.props;
    setActiveComponent(targetComponent);
  };

  render() {
    const {icon, text, color} = this.props;
    const buttonColor = color || "info";
    return(
      <StandardButton icon={icon} color={buttonColor} text={text} clickFunction={this.goToTarget}/>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({setActiveComponent}, dispatch)
);

NavigationButton.propTypes = {
  icon: PropTypes.string.isRequired,
  targetComponent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(NavigationButton);