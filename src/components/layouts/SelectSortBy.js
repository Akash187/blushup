import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'rating', label: 'Rating' },
  { value: 'newest', label: 'Newest' },
];

const SelectSortBy = () => {
  return (
    <Select
      options={options}
      placeholder={"SORT BY"}
      isSearchable={false}
      className='react-select-container'
      classNamePrefix="react-select"
    />
  );
};

export default SelectSortBy;
