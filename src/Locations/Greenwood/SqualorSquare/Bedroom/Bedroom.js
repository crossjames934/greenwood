import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {setActiveComponent} from "../../../../Redux/actions/actions";
import StandardButton from "../../../../Components/StandardButton/StandardButton";

class Bedroom extends Component {
  peacefulSleep = () => {

  };

  sleep = () => {
    this.peacefulSleep();
  };

  render() {
    return(
      <div>
        <h1>Bedroom</h1>
        <div>
          <StandardButton text="Sleep" clickFunction={this.sleep}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({energy, hygiene, health, nourishment, zen, gameTime}) => (
  {energy, hygiene, health, nourishment, zen, gameTime}
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({setActiveComponent}, dispatch)
);

export default connect(mapStateToProps)(Bedroom);