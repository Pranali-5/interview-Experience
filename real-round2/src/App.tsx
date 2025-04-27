import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchWithTableData from './components/SearchWithTableData';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <SearchWithTableData />
      {/* <Books /> */}
    </div>
  );
}

export default App;

// 1. search with debouncing with table data
// 2. paginationation with next prev
// 3. sorting des and asc

// Search: https://609cd6ba04bffa001792d638.mockapi.io/books?search=fan
// pagination: https://609cd6ba04bffa001792d638.mockapi.io/books?limit=10&page=1
// Sorting: https://609cd6ba04bffa001792d638.mockapi.io/books?sortBy=name&order=desc