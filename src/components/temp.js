import React, { useEffect, useState } from 'react';
import { providers, materials, points } from '../Data/Fake';
import { greenBtn, redBtn } from '../styles/componentStyle';
import Header from './warehouse Items/Header';
import StatusCard from '../Dash/components/StatusCard';

const headerData = ['رقم المعرف', 'اسم المادة', 'الكمية', 'الداعم', 'الاشارات'];

const volunteer = ['المتطوع كريم', 'العضو كريم', 'مسؤول التوزيع كريم'];

const Comp = () => {
  const [id, setID] = useState(1);
  const [stokes, setStokes] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
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

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    console.log(volunteers);
    setVolunteers([
      ...volunteers,
      {
        id: id,
        name: e.target.volunteer.value,
      },
    ]);
  };

  useEffect(() => {
    setID(stokes.length + 1);
  }, [stokes]);

  useEffect(() => {
    setID(volunteers.length + 1);
  }, [volunteers]);

  const removeRecord = (id) => {
    setStokes(() => {
      return stokes.filter((stoke) => stoke.id !== id);
    });
    console.log(stokes);
  };

  const inputStyle =
    'rounded-full pl-2 text-center ouline-none border-none focus:ring-4 focus:ring-indigo-800   ';

  return (
    <div className=" bg-gradient-to-tl from-gray-100 to-gray-400 h-screen font-serif xl:text-xl md:text-md">
      <Header title="مذكرة إتلاف" />
      <div className="grid grid-cols-6 pt-8 ">
        <form className="grid grid-cols-4 col-start-2 col-span-4 mb-8 gap-x-10">
          <select className={inputStyle} name="material" disabled>
            <option>إتلاف</option>
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
        <div className="grid grid-cols-5 text-white bg-gray-900 col-span-4 col-start-2 text-center py-2">
          {headerData.map((header) => {
            return <span>{header}</span>;
          })}
        </div>
        {stokes.map((stoke) => {
          return (
            <div className="grid grid-cols-5 border-t py-2 text-white bg-gray-900 col-span-4 col-start-2 text-center">
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
        <form
          className="grid grid-cols-2 col-start-2 col-span-4 mt-8 gap-x-10  "
          onSubmit={handleVolunteerSubmit}
        >
          <select className={inputStyle} name="volunteer">
            {volunteer.map((vol) => {
              return <option>{vol}</option>;
            })}
          </select>

          <button type="submit" className={greenBtn}>
            إضافة شاهد
          </button>
        </form>
      </div>
      <div className="grid grid-cols-4 col-start-2 mt-12">
        {volunteers.map((volunteer) => {
          console.log(volunteer);
          return (
            <StatusCard
              color={'red'}
              icon={volunteer.id}
              title={'غير مؤكد'}
              amount={volunteer.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comp;
