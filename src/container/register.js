import React, { useState, createContext, useEffect } from 'react';
import { register } from '../Data/inputs';
import { Logo } from '../components/logo';
import { Field } from '../components/inputFiled';
import { btn } from '../styles/componentStyle';
import { useForm as handleForm } from '../hooks/useForm';
import axios from 'axios';
import ErrorModel from '../components/errorModel';

const registerContext = createContext();

const Register = () => {
  const [user, setUser] = useState(register);
  const [flag, setFlag] = useState(false);
  const [section, setSection] = useState('personal');
  const style = btn + ' col-span-2 w-full font-bold py-2';

  useEffect(
    (e) => {
      {
        flag ? <ErrorModel e={e} /> : <></>;
      }
    },
    [flag]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:8000/api/register', user)
      .then((res) => {
        console.log(res);
        setUser(register);
        setFlag(false);
      })
      .catch((e) => {
        setFlag(true);
      });
    setUser(register); //Should do inside Succ
  };

  const changeUser = (e, section) => {
    var newState = handleForm(e, user[section]);
    var newUser = { ...user };
    newUser[section] = newState;
    setUser({ ...newUser });
  };

  return (
    <>
      <div className="h-screen flex">
        <div className="m-auto bg-white p-32 ">
          <registerContext.Provider value={{ changeUser }}>
            <Logo style="rounded-full mb-4 mx-auto" />
            <div className="block text-center">
              <button
                className={swapper}
                onClick={() => {
                  setSection('personal');
                }}
              >
                personal
              </button>

              <button
                className={swapper}
                onClick={() => {
                  setSection('work');
                }}
              >
                Work
              </button>

              <button
                className={swapper}
                onClick={() => {
                  setSection('user');
                }}
              >
                User
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="text-xl grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4">
                {section === 'work'
                  ? user.Work.map((field) => {
                      return (
                        <Field
                          key={field.name}
                          field={field}
                          style="rounded-t-xl border border-gray-200 my-2 px-4 py-2 bg-gray-200"
                          Context={registerContext}
                          section={'Work'}
                        />
                      );
                    })
                  : section === 'personal'
                  ? user.Personal.map((field) => {
                      return (
                        <Field
                          key={field.name}
                          field={field}
                          style="rounded-t-xl border border-gray-200 my-2 px-4 py-2 bg-gray-200"
                          Context={registerContext}
                          section={'Personal'}
                        />
                      );
                    })
                  : user.User.map((field) => {
                      return (
                        <Field
                          key={field.name}
                          field={field}
                          style="rounded-t-xl border border-gray-200 my-2 px-4 py-2 bg-gray-200"
                          Context={registerContext}
                          section={'User'}
                        />
                      );
                    })}
              </div>
              <button className={style} type="submit">
                تسجيل
              </button>
            </form>
          </registerContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Register;

const swapper =
  'border-2 px-8 py-2  m-2 hover:bg-red-500 transtion hover:text-white ';
