import React from 'react';
import { Balance } from './balance';
import { Home } from '../components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './register';
import { Login } from '../components/login';
import { Profile } from '../container/profile';
import Temp from '../components/temp';
import { Users } from '../components/users';
import GuestRoute from '../components/Routes/GuestRoute';
import AuthRoute from '../components/Routes/AuthRoute';
import Sidebar from '../components/Sidebar';
import NavFactory from '../components/Nav_Bars/SideBarFactory';
import useLocalStorage from '../hooks/useLocalStorage';

const links = ['register', 'users', 'balance', 'login'];

const guestRoutes = [
  {
    path: '/login',
    comp: <Login />,
  },
  {
    path: '/register',
    comp: <Register />,
  },
  {
    path: '/',
    comp: <Home />,
  },
];

const authRoutes = [
  {
    path: '/users',
    comp: <Users />,
  },
  {
    path: '/profile/:id',
    comp: <Profile />,
  },
  {
    path: '/warehouse',
    comp: <Balance />,
  },
];

const WarehouseApp = () => {
  const [k, setK] = useLocalStorage('loggedIn', 'True');
  return (
    <div>
      <Router>
        <NavFactory userRole={'guest'} />

        <div className="md:hidden lg:inline">
          <Sidebar />
        </div>
        <div className="lg:ml-64 md:mx-auto">
          <Switch>
            {guestRoutes.map(({ path, comp }) => {
              // return <Route exact path={path}>{comp}</Route>
              return (
                <GuestRoute exact path={path}>
                  {comp}
                </GuestRoute>
              );
            })}

            {authRoutes.map(({ path, comp }) => {
              // return <Route exact path={path}>{comp}</Route>
              return (
                <AuthRoute exact path={path}>
                  {comp}
                </AuthRoute>
              );
            })}
            <Route path="*">
              <Temp />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default WarehouseApp;
