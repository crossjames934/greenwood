import React, {Component} from 'react';
import {connect} from "react-redux";

class Money extends Component {
  render() {
    return(
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = ({money}) => (
  {money}
);

export default connect(mapStateToProps)(Money);