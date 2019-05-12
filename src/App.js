import React from 'react';
import './styles/Style.css';
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchbar/SearchBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
