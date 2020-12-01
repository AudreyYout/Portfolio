import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  tag: PropTypes.elementType,

  /**
   * The component default class.
   */
  defaultClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /**
   * The Button content.
   */
  children: PropTypes.node,

  /**
   * The className property allows you to add more classes to the component.
   */
  className: PropTypes.string,
  /**
   * The Button minimum width: to maintain consistency in size when Button components are aligned.
   */
  minWidth: PropTypes.oneOf(['', 'xs', 'sm', 'md', 'lg', 'xl']),

};

const defaultProps = {
  tag: 'button',
  defaultClassName: 'o-button',
  children: '',
  className: '',
  minWidth: '',
};

export const Button = forwardRef(({
  tag: Tag,
  defaultClassName,
  children,
  className,
  minWidth,
  ...props
}, ref) => {
  const classes = classnames(
    defaultClassName,
    minWidth ? `as--min-width-${minWidth}` : '',
    className
  );


  return (
    <Tag type={Tag === 'button' ? 'button' : null} {...props} className={classes} ref={ref}>
      {children}
    </Tag>
  );
});

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
