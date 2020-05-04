import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class StandardButton extends Component {
  render() {
    const {color, icon, text, clickFunction} = this.props;
    return (
      <div className="mb-2">
        <Button color={color} onClick={clickFunction}>
          <FontAwesomeIcon icon={icon}/>
          <span className="ml-2">{text}</span>
        </Button>
      </div>
    );
  }
}

StandardButton.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string.isRequired,
  clickFunction: PropTypes.func.isRequired
};

export default StandardButton;