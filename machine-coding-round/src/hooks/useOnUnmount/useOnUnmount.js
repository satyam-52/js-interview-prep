import React, { useEffect, useRef } from 'react'

export default function useOnUnmount(cb, deps) {
  const isUnmounting = useRef(false);

  useEffect(() => {
    return () => {
      isUnmounting.current = true;
    }
  },[])

  useEffect(() => {
    return () => {
      if(isUnmounting.current) cb();
    }
  },deps)
  
}
