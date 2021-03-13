import { Link } from 'react-router-dom';

const LinksList = ({ links }) => {
  if (!links.length) {
    return <p>Ссылок пока нет</p>;
  }
  return (
    <>
      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
        <thead>
          <tr className="text-left border-b border-gray-300">
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Оригинальная</th>
            <th className="px-4 py-3">Сокращённая</th>
            <th className="px-4 py-3">Детально</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link, index) => {
            return (
              <tr
                className="bg-gray-700 border-b border-gray-600"
                key={link._id}
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{link.from}</td>
                <td className="px-4 py-3">{link.to}</td>
                <td className="px-4 py-3">
                  <Link
                    className="hover:text-indigo-500"
                    to={`/detail/${link._id}`}
                  >
                    Открыть
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default LinksList;
