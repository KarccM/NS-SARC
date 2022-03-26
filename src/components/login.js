import { useState, createContext } from 'react';
import { login as data } from '../Data/inputs';
import { Field } from './inputFiled';
import photo from '../2.jpg';
import { btn } from '../styles/componentStyle';
import { useForm as handleForm } from '../hooks/useForm';
import axios from 'axios';

const loginContext = createContext();
const filedStyle =
  'mx-4 mt-4 w-2/3 rounded-full bg-white px-2 lg:px-4 lg:py-2 lg:my-4';

export const Login = () => {
  const [login, setLogin] = useState(data);

  const handleSubmit = (e) => {
    const email = login[0].value;
    const password = login[1].value;
    e.preventDefault();
    setLogin(data);
    axios
      .post('http://127.0.0.1:8000/api/auth/login', { email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const changeUser = (e) => {
    var newlog = handleForm(e, login);
    setLogin(newlog);
  };

  return (
    <>
      <loginContext.Provider value={{ changeUser }}>
        <div className="h-screen flex">
          <div className="m-auto mx-32 flex rounded-md bg-gray-100">
            <img
              alt="sarc volunteer"
              src={photo}
              className=" w-1/2 rounded-md object-cover object-center"
            />
            <div className=" lg:text-xl w-full text-center">
              <h1 className="lg:text-3xl text-lg my-4">Login Into Account</h1>
              <form className="" onSubmit={handleSubmit}>
                <div>
                  {login.map((field) => {
                    return (
                      <Field
                        style={filedStyle}
                        field={field}
                        Context={loginContext}
                      />
                    );
                  })}
                </div>
                <button className={cosBTN} type="submit">
                  Login
                </button>
                <a
                  className="text-red-600 hover:text-red-400
                                                text-sm text-right
                                                font-semibold mr-2
                                                cursor-pointer block
                                                lg:text-lg
                                                "
                >
                  Forget Password?
                </a>
                <p className=" mb-4 mt-4 border-t-2 border-gray-200 pt-2">
                  Don't have an account?{' '}
                  <a className="text-red-600 hover:text-red-400 text-sm lg:text-lg text-right font-semibold mr-2 cursor-pointer">
                    Register Here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </loginContext.Provider>
    </>
  );
};

const cosBTN = btn + ' ml-2 rounded-full w-2/3 uppercase';
