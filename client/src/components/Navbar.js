import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import Logo from './common/Logo';

const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <nav className="fixed top-0 font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 mb-5 bg-gray-800 shadow sm:items-baseline w-full">
      <div className="mb-6 sm:mb-0 flex flex-row self-center">
        <div className="flex items-center text-3xl self-center mr-2">
          <Logo />
        </div>
      </div>

      <div className="sm:mb-0 self-center">
        <NavLink
          to="/create"
          className="text-md no-underline text-grey-darker hover:text-indigo-500 ml-2 px-1"
        >
          Создать
        </NavLink>
        <NavLink
          to="/links"
          className="text-md no-underline text-white hover:text-indigo-500 ml-2 px-1"
        >
          Ссылки
        </NavLink>
      </div>

      <div className="sm:mb-0 self-center">
        <a
          href="/"
          className="text-md no-underline text-white opacity-50 hover:opacity-100 ml-6 px-1"
          onClick={logoutHandler}
        >
          Выйти
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
