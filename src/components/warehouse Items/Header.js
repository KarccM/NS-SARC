const headerStyle =
  'text-4xl  text-center text-white font-sans bg-gray-900 py-6';
const Header = ({ title }) => {
  return <h1 className={headerStyle}>{title}</h1>;
};
export default Header;
