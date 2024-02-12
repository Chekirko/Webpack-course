import React, { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  return (
    <>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <h1>{count}</h1>
      <button className={classes.buttonYellow} onClick={increment}>
        Inc
      </button>
      <button className={classes.buttonBlue} onClick={decrement}>
        Dec
      </button>

      <Outlet />
    </>
  );
};
