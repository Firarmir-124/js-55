import React, {useState} from 'react';
import './App.css';

import baconImage from '../../../assets/bacon.svg';
import meatImage from '../../../assets/meat.svg';
import cheeseImage from '../../../assets/cheese.svg';
import saladImage from '../../../assets/salad.svg';

import Ingredient from "../../Ingredient/Ingredient";

import Burger from "../../Burger/Burger";
import Generation from "../../Burger/Generation";
import Prise from "../../Prise/Prise";

const INGREDIENTS = [
  {name: 'Meat', price: 80, image: meatImage, id: 'm1'},
  {name: 'bacon', price: 60, image: baconImage, id: 'b2'},
  {name: 'cheese', price: 50, image: cheeseImage, id: 'c3'},
  {name: 'salad', price: 10, image: saladImage, id: 's4'},
]

function App() {

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', counter: 0},
    {name: 'bacon', counter: 0},
    {name: 'cheese', counter: 0},
    {name: 'salad', counter: 0},
  ]);

  const addIngredient = (id: string) => {
    const index = INGREDIENTS.findIndex(d => d.id === id);
    const ingredient = INGREDIENTS[index];

    const copy = [...ingredients];
    copy.forEach(item => {
      if (ingredient.name === item.name) item.counter > 3 ? alert('Превышен лимит ингредиентов') : item.counter++
    })
    setIngredients(copy)
  }

  const remove = (id: string) => {
    const index = INGREDIENTS.findIndex(d => d.id === id);
    const ingredient = INGREDIENTS[index];

    const copy = [...ingredients];
    copy.forEach(item => {
      if (ingredient.name === item.name) item.counter <= 0 ? item.counter = 0 : item.counter--
    })
    setIngredients(copy)
  }

  const getPrise = () => {
    let prise:number = 0;
    ingredients.forEach((item, index ) => prise += INGREDIENTS[index].price * item.counter);
    return prise
  }

  return (
    <div className="App">
      <div className='block-ingredient'>
        {
          INGREDIENTS.map((name, index) => (
            <Ingredient
              counter={`x${ingredients[index].counter}`}
              key={name.id}
              name={name.name}
              prise={name.price}
              image={name.image}
              click={() => addIngredient(name.id)}
              remove={() => remove(name.id)}
            />
          ))
        }
      </div>

      <div className="block-burger">
        <Burger>
          <Generation
            counter1={ingredients[0].counter}
            counter2={ingredients[1].counter}
            counter3={ingredients[2].counter}
            counter4={ingredients[3].counter}
          />
        </Burger>

        <Prise name={getPrise()}/>
      </div>
    </div>
  );
}

export default App;
