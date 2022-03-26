import React, { useState, useEffect } from 'react';
import List from './warehouse Items/List';

const btnStyle =
  'bg-gray-900 text-white hover:opacity-90 transition duration-300 ease-out px-4 opacity-20';
// i Should Make Loading in Table
export const Warehouse = ({ fullData }) => {
  const [index, setIndex] = useState(0);
  const [currentData, setCurrentData] = useState(fullData[index]);
  useEffect(() => {
    setCurrentData(fullData[index]);
  }, [index]);
  const increaseValue = () => {
    setIndex((prev) => {
      return prev + 1;
    });
  };
  const decreaseValue = () => {
    setIndex((prev) => {
      return prev - 1;
    });
  };
  return (
    //Condition For Authorization
    <container className="flex flex-row justify-center">
      <button
        className={btnStyle}
        onClick={(e) => {
          console.log(index);
          if (index - 1 >= 0) decreaseValue();
        }}
      >
        {'<'}
      </button>
      <div className={'text-center bg-gray-100 text-black px-12 text-xl'}>
        <p className="text-2xl pb-12">
          مستودع<span className="text-red-500"> {currentData.name} </span>{' '}
          التابع ل <span className="text-red-500">{currentData.parent}</span>
        </p>
        <List materials={currentData.balance} />
      </div>
      <button
        className={btnStyle}
        onClick={(e) => {
          console.log(index);
          if (index + 1 < Object.keys(fullData).length) increaseValue();
        }}
      >
        {'>'}
      </button>
    </container>
  );
};
