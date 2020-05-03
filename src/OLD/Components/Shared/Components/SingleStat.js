import React, {Component} from 'react';
import {Progress} from 'reactstrap';
import PropTypes from 'prop-types';

class SingleStat extends Component {
  determineProgressColor = (percentage) => {
    if (percentage > 60) return 'success';
    if (percentage > 30) return 'warning';
    return 'danger';
  };

  progressView = () => {
    const {label, value, max} = this.props;
    const percentage = (value / max) * 100;
    const color = this.determineProgressColor(percentage);
    return(
      <div className="d-flex justify-content-between">
        <b>{label}</b>
        <div className="w-50">
          <Progress value={percentage} color={color}>
            <span className="m-2">
              {value} / {max}
            </span>
          </Progress>
        </div>
      </div>
    );
  };

  render() {
    const {label, value, max} = this.props;
    if (max) return this.progressView();
    return(
      <div className="d-flex justify-content-between">
        <b>{label}</b>
        <div>
          {value}
        </div>
      </div>
    )
  }
}

SingleStat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number
};

export default SingleStat;