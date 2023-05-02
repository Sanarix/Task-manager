import { Outlet } from 'react-router-dom';

import Router from './modules/router/Router';
import Header from './components/Header';
import Footer from './components/Footer';

import initApp from './functions/initApp';
import useAuth from './hooks/useAuth';
import useTasks from './hooks/useTasks';
import useUser from './hooks/useUser';

import { useState, useEffect } from 'react';

export default function App() {
const {user, setUser} = useUser();
const app = initApp();
const auth = useAuth( setUser );

const {
  newTasks,
  progressTasks,
  finishedTasks,
} = useTasks(auth, app, user);

  return (
    <>
      <Header auth={auth}/>
      <Outlet />
      <Footer />
      <Router auth={auth} setUser={setUser} newTasks={newTasks} progressTasks={progressTasks} finishedTasks={finishedTasks}/>
    </>
  );
}
