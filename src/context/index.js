// External Dependencies
import React, { useReducer } from 'react';

// Internal Dependencies
import { actions } from './actions';

// Local Variables
const initialState = {
  people: {
    data: [],
  },
  person: {
    data: null,
  },
};
export const Context = React.createContext(initialState);

const reducer = (state = initialState, action) => actions[action.type](state, action);

// Component Definition
const AppContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ dispatch, state }}>
      {props.children}
    </Context.Provider>
  )
}

export default AppContext;
