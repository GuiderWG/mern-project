import { useRoutes } from './pages/routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/auth.context';

import Navbar from './components/Navbar';
import Loader from './components/common/Loader/Loader';

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const rotes = useRoutes(isAuthenticated);
  if (!ready) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      {isAuthenticated && <Navbar />}
      <div className="container mx-auto px-4">{rotes}</div>
    </AuthContext.Provider>
  );
}

export default App;
