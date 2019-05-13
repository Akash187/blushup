import React, {Fragment} from 'react';
import SelectSortBy from "../layouts/SelectSortBy";
import ShopInfo from "./ShopInfo";
import MapContainer from "../layouts/MapContainer";
import ReactPaginate from 'react-paginate';

const SearchResult = () => {

  return (
    <Fragment>
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
      <div className="result-pagination">
        <ReactPaginate
          previousLabel={ <i className="fas fa-chevron-circle-left"/>}
          nextLabel={<i className="fas fa-chevron-circle-right"/>}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={10}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={(data) => console.log(data)}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
      <br/>
    </Fragment>
  );
};

export default SearchResult;
