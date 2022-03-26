import { Link } from 'react-router-dom';

export default function NavItem({ link, label }) {
  return (
    <Link
      to={'/' + link}
      className={`px-4 py-2 rounded-md transition-color hover:text-white hover:bg-red-600 duration-500 `}
      activeClassName={'bg-red-800 text-red-200'}
    >
      {label}
    </Link>
  );
}
