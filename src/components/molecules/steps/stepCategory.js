import PropTypes from 'prop-types';
import classnames from 'classnames';
import React, { Fragment } from 'react';



const propTypes = {
  className: PropTypes.string,
  defaultClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  color: PropTypes.oneOf(['', 'primary', 'secondary', 'ternary']),
  title: PropTypes.string,
};

const defaultProps = {
  defaultClassName: 'category',
  className: '',
  title:'',
  color: '',
};

export const StepCategory = ({
  className,
  defaultClassName,
  title,
  color,
  ...attributes
}) => {
  const classes = classnames(
    defaultClassName,
    className,
    title,
    color,
  );


  const renderColor = () => {
    switch (color) {
    case 'primary':
      return "as--primary";
    case 'secondary':
      return "as--secondary";
    case 'ternary':
      return "as--ternary";
    default:
      return '';
    }
  };

  const renderTag = () => {
    switch (color) {
    case 'primary':
      return "UX_UI";
    case 'secondary':
      return "Front-end Dev";
    case 'ternary':
      return "Product Design";
    default:
      return '';
    }
  };

  const renderLabel= () => {
    switch (color) {
    case 'primary':
      return "l-process__label as--primary";
    case 'secondary':
      return "l-process__label as--secondary";
    case 'ternary':
      return "l-process__label as--ternary";
    default:
      return '';
    }
  };


  return (
    <Fragment>
      <div className="g-grid__item as--pull as--auto">
        <div className="l-process__signal" id="UX_UI">
          <span className={renderColor()}></span>
        </div>
      </div>
      <div className="g-grid__item as--middle">
        <div className={renderLabel()}>
          <div className="category" >
          {renderTag()}
          </div>
          <div className="step">
              {title}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

StepCategory.propTypes = propTypes;
StepCategory.defaultProps = defaultProps;

export default StepCategory