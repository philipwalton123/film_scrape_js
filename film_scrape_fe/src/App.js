import axios from 'axios'
import { useState } from 'react';
import './App.css';
import InputBar from './components/InputBar.js';
import List from './components/List.js';

function App() {

  const [roles, setRoles] = useState()

  return (
    <div className="App">
      <header className="App-header">FilmScrape</header>
      <InputBar setRoles={setRoles}/>
      <List roles={roles}/>
    </div>
  );
}

export default App;
