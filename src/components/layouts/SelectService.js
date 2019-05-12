import React from 'react'
import Select from 'react-select';

const options = [
  { value: 'makeup', label: 'Makeup' },
  { value: 'facial', label: 'Facial' },
  { value: 'waxing', label: 'Body waxing' },
  { value: 'haircut', label: 'Haircut' },
  { value: 'headmassage', label: 'Head Massage' },
  { value: 'pedicure', label: 'Pedicure' },
  { value: 'trimming', label: 'Trimming' },
  { value: 'bleaching', label: 'Bleaching' },
  { value: 'haircoloring', label: 'Hair Coloring' },
  { value: 'manicure', label: 'Manicure' },
  { value: 'nailart', label: 'Nail art' },
];

const SelectService = () => {
  return (
    <Select
      options={options}
      defaultValue={options[0]}
      isSearchable={false}
      className='react-select-container'
      classNamePrefix="react-select"
    />
  );
};

export default SelectService;
