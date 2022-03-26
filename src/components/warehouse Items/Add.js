import React, { useEffect, useState, useRef } from 'react';
import { greenBtn, redBtn } from '../../styles/componentStyle';
import Header from './Header';
import { points, providers, materials, journyFileds } from '../../Data/Fake';

const inputStyle =
  'rounded-full pl-2 text-center ouline-none border-none focus:ring-4 focus:ring-indigo-800   ';

const Add = () => {
  const headerData = [
    'رقم المعرف',
    'اسم المادة',
    'الداعم',
    'الكمية',
    'العملية',
  ];

  const senderRef = useRef(null);

  useEffect(() => {
    senderRef.current.focus();
  }, []);

  const hideJounry = () => {
    setJourny(false);
  };
  const [journy, setJourny] = useState(false);
  const [id, setID] = useState(1);
  const [stokes, setStokes] = useState([]);
  const handleStokeSubmit = (e) => {
    e.preventDefault();
    setStokes([
      ...stokes,
      {
        id: id,
        name: e.target.material.value,
        provider: e.target.provider.value,
        count: e.target.quantity.value,
      },
    ]);
    e.target.quantity.value = '';
  };
  const handleForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setID(stokes.length + 1);
  }, [stokes]);
  const [title, setTitle] = useState('إضافة/مناقلة حمولة جديدة');
  const removeRecord = (id) => {
    setStokes(() => {
      return stokes.filter((stoke) => stoke.id !== id);
    });
    console.log(stokes);
  };
  var curr = new Date();
  var date = curr.toISOString().substr(0, 10);

  return (
    <div className=" bg-gradient-to-tl from-red-300 to-red-700 h-screen font-serif xl:text-xl md:text-md">
      {journy === true ? <Journy hideJounry={hideJounry} /> : <></>}
      <Header title={title} />
      <div className="grid grid-cols-6 pt-8 ">
        <form
          className="grid grid-cols-6 col-span-6 mb-8 "
          onSubmit={handleForm}
        >
          <input type={'date'} value={date} name="writeDate" disabled hidden />
          <div className="grid grid-cols-4 col-start-2 col-span-4 mt-8 gap-x-10">
            <input
              className={inputStyle}
              type={'text'}
              disabled
              placeholder="رقم الرحلة"
            />
            <select className={inputStyle} disabled>
              <optgroup label="المرسل">
                {points.map((point) => {
                  return <option>{point}</option>;
                })}
              </optgroup>
            </select>
            <input
              ref={senderRef}
              className={inputStyle}
              type={'date'}
              value={date}
              name="batchDate"
            />
            <button
              onClick={() => {
                setJourny(true);
              }}
              className={greenBtn}
            >
              إضافة رحلة
            </button>
          </div>
        </form>
        <form
          className="grid grid-cols-4 col-start-2 col-span-4 mb-8 gap-x-10  "
          onSubmit={handleStokeSubmit}
        >
          <select className={inputStyle} name="material">
            {materials.map((material) => {
              return <option>{material}</option>;
            })}
          </select>
          <select className={inputStyle} name="provider">
            {providers.map((provider) => {
              return <option>{provider}</option>;
            })}
          </select>
          <input
            className={inputStyle}
            type={'text'}
            placeholder="الكمية"
            name="quantity"
          />
          <button type="submit" className={greenBtn}>
            إضافة صنف
          </button>
        </form>
        <form className="grid grid-cols-4 col-start-2 col-span-4 mb-8 gap-x-10">
          <select className={inputStyle} name="material">
            <option>مناقلة</option>
            <option>إضافة</option>
          </select>
          <select className={inputStyle} name="material">
            <optgroup label="المستقبل">
              {points.map((point) => {
                return <option>{point}</option>;
              })}
            </optgroup>
          </select>
          <button type="submit" className={greenBtn}>
            حفظ
          </button>
          <button type="submit" className={redBtn}>
            إلغاء
          </button>
        </form>
        <div className="grid grid-cols-5 text-white bg-gray-900 col-span-4 col-start-2 text-center">
          {headerData.map((header) => {
            return <span>{header}</span>;
          })}
        </div>
        {stokes.map((stoke) => {
          return (
            <div className="grid grid-cols-5 border-b py-2   text-white bg-gray-900 col-span-4 col-start-2 text-center">
              <span>{stoke.id}</span>
              <span>{stoke.name}</span>
              <span>{stoke.provider}</span>
              <span>{stoke.count}</span>
              <button
                className="bg-red-600 w-9 h-9 mx-auto font-extrabold rounded-full "
                onClick={() => {
                  removeRecord(stoke.id);
                }}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Add;

const Journy = ({ hideJounry }) => {
  return (
    <div className="  bg-gradient-to-tl from-white to-gray-400 mx-auto  py-10 absolute rounded-xl left-1/3 mt-60 top-1/5">
      <div className="grid grid-cols-3">
        {journyFileds.map((fild, key) => {
          return (
            <input
              className={inputStyle + ' m-4 p-2 focus:ring focus:ring-red-800'}
              placeholder={fild}
              key={key}
            />
          );
        })}
      </div>
      <div className="flex justify-center gap-x-8">
        <button
          type="button"
          className={greenBtn}
          onClick={() => {
            hideJounry();
          }}
        >
          إضافة
        </button>
        <button
          type="button"
          onClick={() => {
            hideJounry();
          }}
          className={redBtn}
        >
          إلغاء
        </button>
      </div>
    </div>
  );
};
