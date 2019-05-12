import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const SelectDate = () => {

  const [startDate, setDate] = useState(new Date());

  const updateDateTime = date => {
    setDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        customInput={<ExampleCustomInput />}
        onChange={updateDateTime}
        minDate={new Date()}
      />
    </div>
  );
};

class ExampleCustomInput extends React.Component{
  render(){
    return <div
      onClick={this.props.onClick}>
      {this.props.value}
    </div>
  }
}

export default SelectDate;
