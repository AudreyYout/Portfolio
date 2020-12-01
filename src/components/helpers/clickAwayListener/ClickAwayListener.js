import React, {
  forwardRef, useCallback, useEffect, useRef,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useEventCallback } from '../useEventCallback';
import { setRef, useForkRef } from '../useForkRef';

const propTypes = {
  /**
   * Children to set inside the Tabs.
   */
  children: PropTypes.node,
  /**
   * Disable outside click.
   */
  isClickOutsideDisabled: PropTypes.bool,
  /**
   * Function to run when the user click outside of the component.
   */
  onClickOutside: PropTypes.func,
};

const defaultProps = {
  children: '',
  isClickOutsideDisabled: false,
  onClickOutside: () => {},
};

/**
 * Component to trigger an action when click outside of the component it wraps.
 */
export const ClickAwayListener = forwardRef((
  {
    children,
    isClickOutsideDisabled,
    onClickOutside,
  }, ref) => {
  /**
   * Ref to check that the component is mounted.
   */
  const mountedRef = useRef(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleNodeRef = useForkRef(nodeRef, ref);
  // Can be dropped when all components support ref forwarding.
  const handleOwnRef = useCallback(
    (instance) => {
      // #StrictMode ready
      // eslint-disable-next-line react/no-find-dom-node
      setRef(handleNodeRef, ReactDOM.findDOMNode(instance));
    },
    [handleNodeRef],
  );
  const handleRef = useForkRef(children.ref, handleOwnRef);

  /**
   * Handle the click outside of the ClickAwayListener.
   */
  const handleClickAway = useEventCallback((event) => {
    // IE 11 support, which trigger the handleClickAway even after the unbind
    if (!mountedRef.current) {
      return;
    }

    // The child might render null.
    if (!nodeRef.current) {
      return;
    }

    if (!isClickOutsideDisabled && !nodeRef.current.contains(event.target) && onClickOutside) {
      onClickOutside(event);
    }
  });

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickAway);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickAway);
    };
  });

  return <>{React.cloneElement(children, { ref: handleRef })}</>;
});

ClickAwayListener.propTypes = propTypes;
ClickAwayListener.defaultProps = defaultProps;
