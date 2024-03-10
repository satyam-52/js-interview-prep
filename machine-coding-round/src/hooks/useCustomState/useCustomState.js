import { useCallback, useReducer } from 'react'

const reducer = (state, action) => {
  switch(action.type) {
    case "update_state":
      return {state: action.state};
    default:
      return state;
  }
}

export default function useCustomState(initialValue) {
  const [state, dispatch] = useReducer(
    reducer, 
    {
      state: typeof initialValue === "function" ? 
                initialValue() : 
                initialValue
    }
  );

  const setState = useCallback((newState) => {
    if(typeof newState === "function") {
      let updatedState = newState(state.state);
      dispatch({type: "update_state", state: updatedState});
      return;
    }
    dispatch({type: "update_state", state: newState})
  }, [state.state]);

  return [state.state, setState];
}
