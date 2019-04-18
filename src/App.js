import React from 'react';
import './App.css';

import People from './components/People';
import AppContext from './context';
import Person from './components/Person';

const App = () => (
  <AppContext>
    <div className="App">
      <header className="App-header">
        <People />

        <Person />
      </header>
    </div>
  </AppContext>
)

export default App;
