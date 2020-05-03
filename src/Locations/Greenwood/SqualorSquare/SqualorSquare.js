import React, {Component} from 'react';
import {connect} from "react-redux";

class SqualorSquare extends Component {
  render() {
    return(
      <div>
        <h1>Squalor Square</h1>
      </div>
    )
  }
}

const mapStateToProps = ({}) => (
  {}
);

export default connect(mapStateToProps)(SqualorSquare);