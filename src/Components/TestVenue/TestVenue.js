import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {setActiveComponent} from "../../Redux/actions/actions";
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import TestVenueOther from "./TestVenueOther";

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