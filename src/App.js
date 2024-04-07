import React from 'react';
import './style.css';
import { Home } from './pages/Home';
import { Users } from './pages/Users';

export default function App() {
  return (
    <div className="App">
      <Home />
      <Users />
    </div>
  );
}
