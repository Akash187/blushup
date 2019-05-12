import React from 'react';
import SelectDate from "../layouts/SelectDate";
import SelectTime from "../layouts/SelectTime";
import SelectBrand from "../layouts/SelectBrand";
import SelectService from "../layouts/SelectService";

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <div className="searchbar-options">
        <div className="searchbar-option">
          <span className='searchbar-option-title'>Date</span>
          <SelectDate/>
        </div>
        <div className="searchbar-option">
          <span className='searchbar-option-title'>Time</span>
          <SelectTime/>
        </div>
        <div className="searchbar-option">
          <span className='searchbar-option-title'>Brand</span>
          <SelectBrand/>
        </div>
        <div className="searchbar-option" style={{border: 'none'}}>
          <span className='searchbar-option-title'>Date</span>
          <SelectService/>
        </div>
      </div>
      <div className="btn searchbar-btn"><i className="search-icon fas fa-search"/></div>
    </div>
  );
};

export default SearchBar;
