import React, {Component} from 'react';
import {Progress} from 'reactstrap';
import PropTypes from 'prop-types';

class SingleStat extends Component {
  determineProgressColor = (value, max) => {
    const fraction = value / max;
    if (fraction > 0.6) return 'success';
    if (fraction > 0.3) return 'warning';
    return 'danger';
  };

  render() {
    const {label, icon, value, max} = this.props;
    const progressColor = this.determineProgressColor(value, max);
    return(
      <div className="d-flex justify-content-between">
        <div>
          {icon}
          <span className="ml-2">{label}</span>
        </div>
        <div className="w-50">
          <Progress color={progressColor} value={value} max={max}>
            {value} / {max}
          </Progress>
        </div>
      </div>
    )
  }
}

SingleStat.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.any,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default SingleStat;