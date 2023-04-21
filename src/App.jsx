import { Outlet } from 'react-router-dom';

import Router from './modules/router/Router';
import Header from './components/Header';
import Footer from './components/Footer';

import initApp from './functions/initApp';
import useAuth from './hooks/useAuth';

function App() {

initApp();
const auth = useAuth()


  return (
    <>
      <Header auth={auth}/>
      <Outlet />
      <Footer />
      
      <Router auth={auth} />
    </>
  );
}

export default App;
