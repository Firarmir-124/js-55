import React from 'react';

interface CounterType {
  name: string;
}

const Counter:React.FC<CounterType> = (props) => {
  return (
    <div>
      {props.name}
    </div>
  );
};

export default Counter;