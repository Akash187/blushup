import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const SelectTime = () => {

  const [startDate, setTime] = useState(new Date());

  const updateTime = time => {
    setTime(time);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        customInput={<ExampleCustomInput />}
        onChange={updateTime}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
        timeCaption="Time"
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

export default SelectTime;
