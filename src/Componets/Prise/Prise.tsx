import React from 'react';
import './Prise.css';

interface PriseType {
  name: number;
}

const Prise:React.FC<PriseType> = (props) => {
  return (
    <div className='prise'>
      Цена: {props.name} сом
    </div>
  );
};

export default Prise;