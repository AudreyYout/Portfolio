import PropTypes from 'prop-types';
import classnames from 'classnames';
import React from 'react';



const propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.elementType,
  className: PropTypes.string,
  defaultClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

const defaultProps = {
  tag: 'div',
  className: '',
  defaultClassName: 'm-card__thumbnail-picture',
};

export const CardBackgroundImage = ({
  children,
  tag: Tag,
  defaultClassName,
  className,
  ...attributes
}) => {
  const classes = classnames(
    defaultClassName,
    className
  );

  return (

    <Tag className={classes} >
    {children}
    </Tag>

  );
};

CardBackgroundImage.propTypes = propTypes;
CardBackgroundImage.defaultProps = defaultProps;

export default CardBackgroundImage