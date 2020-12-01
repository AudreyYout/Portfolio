import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { StepCategory } from "./stepCategory"
import { StepContent  }from "./stepContent"

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: 'l-process',
};

export const StepProject = ({
  children,
  className,
  ...attributes
}) => {
  const classes = classnames(
    className
  );

  return (

  <div className={classes}>
    <div className="g-grid as--no-wrap as--gutter-none as--stretch">
      <StepCategory/>
    </div>
    <div className="g-grid as--no-wrap as--gutter-none as--stretch">
      <StepContent>{children}</StepContent>
    </div>
  </div>
  );
};



StepProject.propTypes = propTypes;
StepProject.defaultProps = defaultProps;

export default StepProject
