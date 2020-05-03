import React, {Component} from 'react';
import {connect} from "react-redux";

class CurrentView extends Component {
  render() {
    const {activeComponent} = this.props;
    return(
      <div className="p-2">
        {activeComponent}
      </div>
    )
  }
}

const mapStateToProps = ({activeComponent}) => (
  {activeComponent}
);

export default connect(mapStateToProps)(CurrentView);