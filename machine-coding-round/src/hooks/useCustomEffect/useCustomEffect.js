import { useRef } from 'react'

export default function useCustomEffect(cb, deps) {
  const isInitialRender = useRef(true);
  const previousDeps = useRef(deps);
  const depsChanged = useRef(false);

  // Initial or First render
  if(isInitialRender.current) {
    isInitialRender.current = false;
    cb();
  }

  // If no deps are passed
  if(!deps) cb();
  
  // When any of the deps change
  previousDeps.current?.map((prevDep, idx) => {
    if(prevDep !== deps[idx]) depsChanged.current = true;
  })

  if(depsChanged.current) {
    previousDeps.current = deps;
    depsChanged.current = false;
    cb();
  }
  
}
