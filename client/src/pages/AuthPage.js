import { useState, useEffect, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/auth.context';

import './Pages.scss';
import Logo from '../components/common/Logo';

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      setTimeout(() => setErrorMessage(null), 5000);
    }
    clearError();
  }, [error, clearError]);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      alert(data.message);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <div className="relative pb-11 w-full max-w-xs flex flex-col items-center">
        <div className="flex items-center text-3xl my-8">
          <Logo />
        </div>
        <div className="w-full max-w-xs bg-gray-800 border-gray-700 flex flex-col py-6 px-7 rounded-lg shadow-lg text-gray-200">
          <div className="text-gray-200">
            <div className="mb-4 text-xl font-bold uppercase">Авторизация</div>
            <div className="">
              <div className="flex flex-col mb-6">
                <input
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name="email"
                  value={form.email}
                  className="text-center border-b bg-transparent border-white-100 py-1 focus:border-indigo-500 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col mb-5">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  value={form.password}
                  className="text-center border-b bg-transparent border-white-100 focus:border-indigo-500 py-1 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center my-4 space-x-4">
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              onClick={loginHandler}
              disabled={loading}
            >
              Войти
            </button>
            <button
              className="focus:outline-none focus:shadow-outline"
              onClick={registerHandler}
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className="text-red-700 text-sm mb-2 mt-3 absolute bottom-0 left-0 right-0">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
