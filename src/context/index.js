// External Dependencies
import React, { useReducer } from 'react';

// Internal Dependencies
import { actions } from './actions';

// Local Variables
const initialState = {
  latestResponse: {
    data: null,
  },
  people: {
    data: [],
  },
  person: {
    data: null,
  },
};
export const Context = React.createContext(initialState);

const isDev = process.env.NODE_ENV === 'development';
const withDevTools = isDev && !!window && window.__REDUX_DEVTOOLS_EXTENSION__;
const devTools = withDevTools && window.__REDUX_DEVTOOLS_EXTENSION__.connect();

if (devTools) {
  devTools.send('@@INIT', initialState)
}

const reducer = (state = initialState, action) => {
  const newState = actions[action.type](state, action)
  if (devTools) {
    devTools.send(action.type, newState);
  }
  return newState;
};

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
