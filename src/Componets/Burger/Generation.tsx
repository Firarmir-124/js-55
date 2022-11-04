import React from 'react';

import Salad from "./Salad/Salad";
import Meat from "./Meat/Meat";
import Cheese from "./Cheese/Cheese";
import Bacon from "./Bacon/Bacon";

interface LiveBurgerType {
  counter1: number;
  counter2: number;
  counter3: number;
  counter4: number;
}


const LiveBurger:React.FC<LiveBurgerType> = (props) => {


  const meat:React.ReactNode[] = [];
  for(let i = 0; i < props.counter1; i++) {
    meat.push(<Meat key={Math.floor(Math.random() * Date.now())}/>)
  }

  const bacon:React.ReactNode[] = [];
  for(let i = 0; i < props.counter2; i++) {
    bacon.push(<Bacon key={Math.floor(Math.random() * Date.now())}/>)
  }

  const cheese:React.ReactNode[] = [];
  for(let i = 0; i < props.counter3; i++) {
    cheese.push(<Cheese key={Math.floor(Math.random() * Date.now())}/>)
  }

  const salad:React.ReactNode[] = [];
  for(let i = 0; i < props.counter4; i++) {
    salad.push(<Salad key={Math.floor(Math.random() * Date.now())}/>)
  }

  return (
    <>
      {meat}
      {bacon}
      {cheese}
      {salad}
    </>
  );
};

export default LiveBurger;