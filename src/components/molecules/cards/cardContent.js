import PropTypes from 'prop-types';
import classnames from 'classnames';
import React from 'react';
import Badge from "../../atoms/badges"

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
  defaultClassName: 'm-card__content',
  color:'',
};

export const CardContent = ({
  children,
  tag: Tag,
  defaultClassName,
  className,
  color,
  ...attributes
}) => {
  const classes = classnames(
    defaultClassName,
    className
  );



  return (
    <div className={classes}>
        <div className="m-card__title">
          <Badge color={color}/>
          <h4>{children}</h4>
        </div>
      </div>

  );
};

CardContent.propTypes = propTypes;
CardContent.defaultProps = defaultProps;

export default CardContent