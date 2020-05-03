import React, {Component} from 'react';
import {Button} from 'reactstrap';
import TestVenueOther from "./TestVenueOther";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setActiveComponent} from "../../Redux/actions/actions";

const mapDispatchToProps = dispatch => (
  bindActionCreators({setActiveComponent}, dispatch)
);

class TestVenue extends Component {
  render() {
    return(
      <div>
        HELLO I AM TEST VENUE
        <Button onClick={() => this.props.setActiveComponent(<TestVenueOther/>)}>Change To Outside</Button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(TestVenue);