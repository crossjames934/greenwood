import React, {Component} from 'react';
import {connect} from "react-redux";
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Money extends Component {
  render() {
    return(
      <h4 className='font-weight-bold text-success'>
        <FontAwesomeIcon icon={faMoneyBill}/>
        <span className="ml-2">{this.props.money}</span>
      </h4>
    )
  }
}

const mapStateToProps = ({money}) => (
  {money}
);

export default connect(mapStateToProps)(Money);