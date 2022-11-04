import React from 'react';
import './Ingredient.css';
import Counter from "./Counter/Counter";

interface IngredientType {
  name: string;
  prise: number;
  image: string;
  counter: string;
  click: React.MouseEventHandler;
  remove: React.MouseEventHandler;
}

const Ingredient:React.FC<IngredientType> = (props) => {
  return (
    <div className='section-ingredient'>
      <div className='ingredient' onClick={props.click}>
        <img src={props.image} alt=""/>
        <h3>{props.name}</h3>
        <span>${props.prise}</span>
        <Counter name={props.counter}/>
      </div>
      <button onClick={props.remove}></button>
    </div>

  );
};

export default Ingredient;