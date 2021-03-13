import { useState, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/auth.context';
import { useHistory } from 'react-router-dom';

const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState('');

  const pressHandler = async (event) => {
    if (event.key === 'Enter') {
      try {
        const data = await request(
          '/api/link/generate',
          'POST',
          {
            from: link,
          },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <div className="relative pb-11 w-full max-w-md flex flex-col items-center">
        <div className="w-full max-w-md bg-gray-800 border-gray-700 flex flex-col py-6 px-7 rounded-lg shadow-lg text-gray-200">
          <div className="text-gray-200">
            <div className="flex flex-col">
              <input
                placeholder="Вставьте ссылку"
                id="link"
                type="text"
                name="link"
                value={link}
                className="w-full text-center border-b bg-transparent border-white-100 focus:border-indigo-500 py-1 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                onChange={(event) => setLink(event.target.value)}
                onKeyPress={pressHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
