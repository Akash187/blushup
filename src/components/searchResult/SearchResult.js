import React from 'react';
import SelectSortBy from "../layouts/SelectSortBy";
import ShopInfo from "./ShopInfo";
import MapContainer from "../layouts/MapContainer";

const SearchResult = () => {
  return (
    <div className='search-results'>
      <div className="search-result">
        <div className="search-result-header">
          <span className="search-result-count">18 stores available</span>
          <div className='search-result-dropdown'>
            <SelectSortBy/>
            <i className="search-result-dropdown-icon fas fa-caret-down"/>
          </div>
        </div>
        <div className="search-result-shops">
          <ShopInfo/>
          <ShopInfo/>
          <ShopInfo/>
          <ShopInfo/>
          <ShopInfo/>
          <ShopInfo/>
        </div>
      </div>
      <div className="search-result-map">
        <MapContainer/>
      </div>
    </div>
  );
};

export default SearchResult;
