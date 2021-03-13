const LinkCard = ({ link }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <div className="relative pb-11 w-full max-w-lg flex flex-col items-center">
        <div className="w-full max-w-lg bg-gray-800 border-gray-700 flex flex-col py-6 px-7 rounded-lg shadow-lg text-gray-200">
          <div className="text-gray-200">
            <div className="flex flex-wrap space-x-2">
              <span>Короткая ссылка:</span>
              <a
                href={link.to}
                className="text-indigo-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.to}
              </a>
            </div>
            <div className="flex space-x-2 text-gray-400">
              <span className="text-gray-500 ml-0">
                Кликов по ссылке: {link.clicks}
              </span>
              <span className="text-gray-500">
                Дата создания: {new Date(link.date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex space-x-2 mt-3 text-gray-400">
              <span className="flex-grow-0 flex-shrink-0">
                Оригинал ссылки:
              </span>
              <a
                href={link.from}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.from}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
