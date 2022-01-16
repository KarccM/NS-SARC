import React, { useState } from 'react';
import NavBarFactory from './Nav_Bars/NavBarFactory';
import Header from './warehouse Items/Header';
import List from './warehouse Items/List';

export const Warehouse = () => {
  const [show, setShow] = useState(false);
  return (
    //Condition For Authorization
    <div className={'text-center text-xl bg-gray-100 text-black'}>
      <NavBarFactory userRole={'warehouseManger'} />
      <Header
        point={'DOUMA'}
        coordinator={'Kareem-Domani'}
        materials={['1', '2', '3', '4', '5']}
      />
      <p>balance</p>
      <p>sub-warehouses</p>
      <List materials={['DM1', 'DM2', 'DM3']} />
      <p>table of trans</p>
      <List materials={['TR1', 'TR2']} />
      {show === true ? (
        <div className={'absolute h-60 w-1/2 bg-gray-800'}></div>
      ) : (
        <></>
      )}
      <button
        onClick={(e) => {
          setShow(!show);
        }}
      >
        Click Me
      </button>
    </div>
  );
};
