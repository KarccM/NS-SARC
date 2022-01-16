import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import H6 from '@material-tailwind/react/Heading6';

const deafaultVeiw = [
  {
    content: 'Dashborad',
    path: '/',
  },
  {
    content: 'Profile',
    path: '/profile/1',
  },
  {
    content: 'Users',
    path: '/users',
  },
  {
    content: 'Register',
    path: '/register',
  },
  {
    content: 'Login',
    path: '/login',
  },
];

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState('-left-64');
  return (
    <>
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <p className="mt-2 text-center w-full inline-block">
            <H6 color="gray">NS-SARC</H6>
          </p>

          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            <ul className="flex-col min-w-full flex list-none">
              {deafaultVeiw.map(({ content, path }) => {
                return <Item path={path} content={content} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const Item = ({ path, content }) => {
  const style =
    'flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-200 ';
  const activeStyle =
    'bg-gradient-to-tr from-red-500 to-red-700 text-white shadow-md';

  return (
    <li>
      <NavLink exact to={path} className={style} activeClassName={activeStyle}>
        {content}
      </NavLink>
    </li>
  );
};
