import React, { useEffect, useState } from 'react';
//Search and Add Button Should add To This Component
const tableName = 'حركة مستودعات دوما';
const headerData = [
  'الرقم المعرف',
  'اسم المادة',
  'الكمية',
  'المرسل',
  'المستقبل',
  'التاريخ',
  'الحالة',
]; //Header Data
const tableData = [
  [
    '098',
    'غذائية',
    '3210',
    'مستودع الفرع',
    'مستودع دوما',
    '2021-12-10',
    'داخل',
  ],
  ['234', 'صحية', '470', 'مستودع شيفونية', 'المستفيدين', '2021-11-10', 'خارج'],
  ['077', 'صحية', '210', 'مستودع الفرع', 'مستودع دوما', '2021-12-10', 'داخل'],
  [
    '014',
    'غذائية',
    '730',
    'مستودع شيفونية',
    'المستفيدين',
    '2021-11-10',
    'داخل',
  ],
  ['098', 'صحية', '110', 'مستودع الفرع', 'مستودع دوما', '2021-12-10', 'داخل'],
  [
    '234',
    'غذائية',
    '440',
    'مستودع شيفونية',
    'المستفيدين',
    '2021-11-10',
    'خارج',
  ],
  ['077', 'غذائية', '210', 'مستودع الفرع', 'مستودع دوما', '2021-12-10', 'داخل'],
  [
    '004',
    'غذائية',
    '1120',
    'مستودع دوما مساكن',
    'المستفيدين',
    '2021-11-10',
    'داخل',
  ],
  ['098', 'صحية', '510', 'مستودع الفرع', 'مستودع دوما', '2021-12-10', 'خارج'],
  [
    '234',
    'غذائية',
    '390',
    'مستودع دوما مساكن',
    'المستفيدين',
    '2021-11-10',
    'خارج',
  ],
]; //Row data

export const Transection = () => {
  return (
    <div className="h-screen font-sans bg-gradient-to-r from-red-600 to-red-900">
      <h1 className="text-6xl text-center text-white py-6 font-thin">
        {tableName}
      </h1>
      <div className="w-auto mx-8">
        <div className="grid grid-cols-7 bg-gray-900 py-2 text-white font-bold border-b-2">
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
                <button
                  className="grid grid-cols-7 bg-gradient-to-r from-red-600 to-red-900 py-2 text-white 
                font-bold border-b-2 w-full hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 
                transition duration-300"
                >
                  <DataRow data={singleData} />
                </button>
              ) : (
                <button
                  className="grid grid-cols-7 bg-gray-900 py-2 text-white font-bold border-b-2 w-full 
                hover:bg-gray-700 transition duration-300"
                >
                  <DataRow data={singleData} />
                </button>

                //Summary Section
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
              <span className="bg-green-500 text-center rounded-md mx-4">
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
