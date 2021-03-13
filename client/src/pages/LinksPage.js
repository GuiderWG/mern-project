import { useState, useContext, useCallback, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/auth.context';
import Loader from '../components/common/Loader/Loader';
import LinksList from '../components/LinksList';

const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request(`/api/link`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetched);
    } catch (e) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {!loading && <LinksList links={links} />}
    </div>
  );
};

export default LinksPage;
