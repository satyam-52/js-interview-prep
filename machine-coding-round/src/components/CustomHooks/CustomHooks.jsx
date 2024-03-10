import React, { useEffect, useState } from 'react'
import useCustomEffect from '../../hooks/useCustomEffect/useCustomEffect'
import useCustomState from '../../hooks/useCustomState/useCustomState';

export default function CustomHooks() {
  const [count, setCount] = useCustomState(() => 0);

  useCustomEffect(() => {
    console.log({count});
  },[count])

  // useEffect(() => {
  //   console.log({count});
  // },[count])

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
    </div>
  )
}
