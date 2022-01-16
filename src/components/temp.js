import React, { useEffect, useState } from 'react';
//Search and Add Button Should add To This Component
const tableName = 'حركة مستودعات دوما';
const headerData = [
  'الرقم المعرف',
  'الكمية',
  'المرسل',
  'المستقبل',
  'التاريخ',
  'الحالة',
]; //Header Data
const tableData = [
  ['098', '3210', 'مستودع الفرع', 'مستودع دوما', '2021-12-10', 'داخل'],
  ['234', '470', 'مستودع زملكا', 'المستفيدين', '2021-11-10', 'خارج'],
  ['077', '210', 'مستودع الفرع', 'مستودع دوما', '2021-12-10', 'داخل'],
  ['004', '120', 'مستودع زملكا', 'المستفيدين', '2021-11-10', 'داخل'],
  ['098', '3210', 'مستودع الفرع', 'مستودع دوما', '2021-12-10', 'داخل'],
  ['234', '470', 'مستودع زملكا', 'المستفيدين', '2021-11-10', 'خارج'],
  ['077', '210', 'مستودع الفرع', 'مستودع دوما', '2021-12-10', 'داخل'],
  ['004', '120', 'مستودع زملكا', 'المستفيدين', '2021-11-10', 'داخل'],
  ['098', '3210', 'مستودع الفرع', 'مستودع دوما', '2021-12-10', 'خارج'],
  ['234', '470', 'مستودع زملكا', 'المستفيدين', '2021-11-10', 'خارج'],
]; //Row data

const Comp = () => {
  return (
    <div className="h-screen font-sans bg-gradient-to-r from-red-600 to-red-900">
      <h1 className="text-6xl text-center text-white py-6 font-thin">
        {tableName}
      </h1>
      <div className="w-auto mx-8">
        <div className="grid grid-cols-6 bg-gray-900 py-2 text-white font-bold border-b-2">
          {headerData.map((singleData) => {
            return (
              <button className="border-l-2 hover:bg-red-600 transition duration-300 ">
                {singleData}
              </button>
            );
          })}
        </div>

        {tableData.map((singleData, id) => {
          return (
            <>
              {id % 2 === 0 ? (
                <button className="grid grid-cols-6 bg-gradient-to-r from-red-600 to-red-900 py-2 text-white font-bold border-b-2 w-full hover:bg-gray-700 transition duration-300">
                  <DataRow data={singleData} />
                </button>
              ) : (
                <button className="grid grid-cols-6 bg-gray-900 py-2 text-white font-bold border-b-2 w-full hover:bg-gray-700 transition duration-300">
                  <DataRow data={singleData} />
                </button>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
const DataRow = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((sd) => {
        return (
          <>
            {sd === 'داخل' ? (
              <span className="bg-green-600 text-center rounded-md mx-4">
                {sd}
              </span>
            ) : sd === 'خارج' ? (
              <span className="bg-red-500 text-center rounded-md mx-4">
                {sd}
              </span>
            ) : (
              <span className="text-center">{sd}</span>
            )}
          </>
        );
      })}
    </>
  );
};
export default Comp;
