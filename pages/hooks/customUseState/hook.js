import { useState } from 'react';


export const useCounter = (start, finish, step) => {
  //Definition of our state
  const [count, setCount] = useState(start);

  //Implementation of our handleCount method
  const handleCount = () => {
    if (count === finish) {
      return setCount(start);
    } else {
      return setCount(count + step);
    }
  };

  //Return our custom hook array

  return [count, handleCount]
};