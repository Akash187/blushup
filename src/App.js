import React from 'react';
import './styles/Style.css';
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchbar/SearchBar";
import SearchResult from "./components/searchResult/SearchResult";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <SearchBar/>
        <SearchResult/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
