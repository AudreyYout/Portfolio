import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CardBackgroundImage } from './CardBackgroundImage';
import { CardContent } from './CardContent';


const propTypes = {
  tag: PropTypes.elementType,
  defaultClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.node,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,

};

const defaultProps = {
  tag: 'div',
  defaultClassName: 'm-card',
  children: '',
  className: '',
  isDisabled: false,
};

export const Card = forwardRef(({
  tag: Tag,
  defaultClassName,
  children,
  className,
  isDisabled,
  ...props
}, ref) => {
  const classes = classnames(
    defaultClassName,
    isDisabled ? 'as--disabled' : '',
    className
  );


  return (
    <Tag type={Tag === 'a' ? 'a' : null} {...props} className={classes} ref={ref}>
      <div className="m-card__overlay"></div>
      <CardBackgroundImage>{children}</CardBackgroundImage>
      <CardContent>{children}</CardContent>
    </Tag>
  );
});

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card
