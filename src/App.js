import React from 'react';
import './App.css';

import People from './components/People';
import AppContext from './context';
import Person from './components/Person';
import LatestResponse from './components/LatestResponse';

const App = () => (
  <AppContext>
    <div className="App">
      <header className="App-header">
        <LatestResponse />

        <People />

        <Person />
      </header>
    </div>
  </AppContext>
)

export default App;
