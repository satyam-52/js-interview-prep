// Custom window.confirm

import React, { useEffect } from 'react'
import useWindowConfirm from '../../hooks/useWindowConfirm/useWindowConfirm'

export default function WindowConfirm() {
  const { prompt, isOpen, proceed, cancel } = useWindowConfirm();

  function handleOuterClick (e) {
    cancel();
  }

  function handleInnerClick (e) {
    e.stopPropagation();
  }

  useEffect(() => {
    if(isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto"
  }, [isOpen]);

  return isOpen && (
    <div className='popup--wrapper' onClick={handleOuterClick}>
      <div className="popup--content" onClick={handleInnerClick}>
        <p>{prompt}</p>
        <div className="btn--container">
          <button className='action--btn' onClick={cancel}>Cancel</button>
          <button className='action--btn' onClick={proceed}>Okay</button>
        </div>
      </div>
    </div>
  )
}
