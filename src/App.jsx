import { Outlet } from 'react-router-dom';

import Router from './modules/router/Router';
import Header from './components/Header';
import Footer from './components/Footer';

import initApp from './functions/initApp';
import { useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {

initApp();
const a = getAuth();

useEffect(() => {
  onAuthStateChanged(a, (user) => {
    if(user) {
      setAuth(true)
      console.log('login');
    } else {
      console.log('logout');
      setAuth(false)
    }
  })

}, [a])




const [auth, setAuth] = useState('');


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
