const SideBarFactory = ({ userRole }) => {
  switch (userRole) {
    case 'guest':
      console.log('Guest');
      break;
    case 'warehouseManger':
      console.log('Warehouse Manger');
      break;
    default:
      console.log('Other');
  }
  return <></>;
};

export default SideBarFactory;
