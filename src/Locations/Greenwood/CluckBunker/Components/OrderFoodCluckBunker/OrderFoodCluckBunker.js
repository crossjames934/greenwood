import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {updateStats} from "../../../../../Redux/actions/actions";
import ChickenPieces from "./Menu/ChickenPieces";
import NavigationButton from "../../../../../Components/NavigationButton/NavigationButton";
import CluckBunker from "../../CluckBunker";

class OrderFoodCluckBunker extends Component {
  render() {
    return(
      <div>
        <h1>
          Order Food - Cluck Bunker
        </h1>
        <div>
          <ChickenPieces/>
          <NavigationButton targetComponent={<CluckBunker/>} icon={faBuilding} text="Exit (To Cluck Bunker)"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({}) => (
  {}
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({updateStats}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(OrderFoodCluckBunker);