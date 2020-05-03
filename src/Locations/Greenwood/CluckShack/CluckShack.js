import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {setState} from "../../../Redux/actions/actions";
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import StandardButton from "../../../Components/StandardButton/StandardButton";

class CluckShack extends Component {
  work = () => {
    const {setState, energy, hygiene, zen, money} = this.props;
    if (energy.value < 40) return alert("Come back with more energy");
    setState({
      energy: {value: energy.value - 20, max: energy.max},
      money: money + 42
    });
  };

  render() {
    return(
      <div>
        <h1>Cluck Shack</h1>
        <div>
          <StandardButton color="warning" icon={faBriefcase} text="Work" clickFunction={this.work}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({energy, hygiene, zen, money}) => (
  {energy, hygiene, zen, money}
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({setState}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CluckShack);