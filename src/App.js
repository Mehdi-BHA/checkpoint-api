import React from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <UserList/>
    </div>
  );
}

export default App;
