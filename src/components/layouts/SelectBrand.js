import React from 'react'
import Select from 'react-select';

const options = [
  { value: 'allbrands', label: 'All Brands' },
  { value: 'bobbibrown', label: 'Bobbi Brown' },
  { value: 'chanel', label: 'Chanel' },
  { value: 'chrlotte', label: 'Chrlotte Tilbury' },
  { value: 'cle', label: 'cle de Peau' },
  { value: 'dior', label: 'Dior' },
  { value: 'estee', label: 'Estee lauder' },
  { value: 'hourglass', label: 'Hourglass' },
  { value: 'inglot', label: 'Inglot' },
  { value: 'kiko', label: 'Kiko Milano' },
  { value: 'lancome', label: 'Lancome' },
  { value: 'laura', label: 'Laura Mercier' },
  { value: 'mac', label: 'MAC' },
  { value: 'makeup', label: 'Makeup Forever' },
  { value: 'nars', label: 'NARS' },
  { value: 'tom', label: 'Tom Ford' },
];

const SelectBrand = () => {
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

export default SelectBrand;
