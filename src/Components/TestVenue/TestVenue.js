import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {setLocation} from "../../Redux/actions/setLocation";
import {Button} from 'reactstrap';
import {connect} from 'react-redux';

const mapStateToProps = ({location}) => ({
  location
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({setLocation}, dispatch)
);


class TestVenue extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    return(
      <div>
        HELLO I AM TEST VENUE
        LOCATION IS {this.props.location}
        <Button onClick={() => this.props.setLocation("Outside")}>Change To Outside</Button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestVenue);