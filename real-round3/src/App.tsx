import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className="App">
      <button onClick={handleOpen}>Open</button>
      <Modal open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
