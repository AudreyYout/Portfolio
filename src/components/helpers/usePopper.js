import React from 'react';
import ReactDOM from 'react-dom';
import { Popper } from 'react-popper';

export const usePopper = (placement, portal = { target: document.body, isDisabled: false }) => {
  const mountPopperNode = (func) => {
    const popperNode = (
      <Popper
        placement={placement}
        // The hide property is added in order to prevent a warning
        // from react-popper in the console
        modifiers={{ preventOverflow: { enabled: false }, hide: { enabled: false } }}
      >
        {func}
      </Popper>
    );

    if (portal.isDisabled) {
      return popperNode;
    }

    return ReactDOM.createPortal(popperNode, portal.target);
  };

  return { mountPopperNode };
};
