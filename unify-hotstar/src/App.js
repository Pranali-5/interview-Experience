import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import useFetchData from './hooks/useFetchData';
import Modal from './components/Modal';

function App() {
  const {loading, success, error} = useFetchData()
console.log(loading, success, error)
const [open, setOpen] =useState(false)
const handleOpen=()=>{
setOpen(true)
}
const handleClose=()=>{
setOpen(false)
}

  return (
    <div className="App">
      <button onClick={handleOpen}>Open Modal</button>
      <Modal handleClose={handleClose} open={open}/>
    </div>
  );
}

export default App;
