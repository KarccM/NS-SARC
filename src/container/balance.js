import React from 'react';
import { Warehouse } from '../components/warehouse';
import { data } from '../Data/pointsAndBalance';
import NavBarFactory from '../components/Nav_Bars/NavBarFactory';
import useLocalStorage from '../hooks/useLocalStorage';

export class Balance extends React.Component {
  // i shuold add loading for make sure on auth
  constructor(props) {
    super(props);
    this.state = {
      user: 'كريم الصيدناوي',
    }; //useLocalStorage('user',{})
  }
  render() {
    return (
      <>
        <div className="text-white font-sans">
          <NavBarFactory userRole={'warehouseManger'} />
          <h1 className="text-center text-4xl py-6">أهلاً {this.state.user}</h1>
          <div className="">
            <Warehouse fullData={data} />
          </div>
        </div>
      </>
    );
  }
}
