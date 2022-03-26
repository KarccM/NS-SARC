import React from 'react';
import NavBar from './navbar';
import NavItem from './navItems';

const NavBarFactory = ({ userRole }) => {
  let roleNav;
  switch (userRole) {
    case 'guest':
      console.log('Guest');
      break;
    case 'warehouseManger':
      roleNav = [
        {
          label: 'إضافة/مناقلة',
          link: 'add',
        },
        {
          label: 'إتلاف',
          link: 'destroy',
        },
        {
          label: 'السجل',
          link: 'warehouse/id/transection',
        },
      ];
      break;
    default:
      console.log('Other');
  }
  console.log('ROLE :', roleNav);
  return (
    <>
      {roleNav ? (
        <NavBar>
          {roleNav.map((item) => {
            return <NavItem link={item.link} label={item.label} />;
          })}
        </NavBar>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavBarFactory;
