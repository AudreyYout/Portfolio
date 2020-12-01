import PropTypes from 'prop-types';
import classnames from 'classnames';
import React, { Fragment } from 'react';
import { modifierCSS } from '../../helpers/index';

const propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.elementType,
  className: PropTypes.string,
  defaultClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  color: PropTypes.oneOf(['', 'primary', 'secondary','ternary']),
};

const defaultProps = {
  tag: 'div',
  className: '',
  defaultClassName: '',
  color:'primary',
};

export const StepContent = ({
  children,
  tag: Tag,
  defaultClassName,
  className,
  color,
  ...attributes
}) => {
  const classes = classnames(
    defaultClassName,
    className,
    modifierCSS(color),
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

  return (
    <Fragment>
      <div className="g-grid__item as--pull as--auto">
        <div className="l-process__line">
          <span className={renderColor()}></span>
        </div>
      </div>
      <div className="g-grid__item">
        <div className="l-process__content">
          {children}
        </div>
      </div>
    </Fragment>
  );
};

StepContent.propTypes = propTypes;
StepContent.defaultProps = defaultProps;

export default StepContent