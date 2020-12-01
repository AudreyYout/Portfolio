import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { modifierCSS } from '../helpers/index';

const propTypes = {
  tag: PropTypes.elementType,
  defaultClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['', 'primary', 'secondary','ternary'/* 'success', 'warning', 'danger' */]),

};

const defaultProps= {
  tag: 'span',
  defaultClassName: 'a-badge',
  children: '',
  color:'',
  className: '',
  size: '',
};

export const Badge = forwardRef(({
  tag: Tag,
  defaultClassName,
  children,
  color,
  className,
  ...props
}, ref) => {
  const classes = classnames(
    defaultClassName,
    modifierCSS(color),
    className
  );

  const renderLabel = () => {
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






  return (
    <Tag type={Tag === 'span' ? 'span' : null} {...props} className={classes} ref={ref}>
      {renderLabel()}
    </Tag>
  );
});

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge