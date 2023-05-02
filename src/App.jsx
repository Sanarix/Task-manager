import { Outlet } from 'react-router-dom';

import Router from './modules/router/Router';
import Header from './components/Header';
import Footer from './components/Footer';

import initApp from './functions/initApp';
import useAuth from './hooks/useAuth';
import useTasks from './hooks/useTasks';


import { useState, useEffect } from 'react';

//Для useEffect
import getTasks from './modules/taskController/getTasks';
import realtimeDatabase from './modules/database/realtimeDatabase';

export default function App() {
const {
  newTasks,
  setNewTasks,
  progressTasks,
  setProgressTasks,
  finishedTasks,
  setFinishedTasks
} = useTasks();

const [user, setUser] = useState(null);
const app = initApp();
const auth = useAuth( setUser );

useEffect(() => {
  if(auth) {
    const db = realtimeDatabase(app);
    getTasks(db, user.uid, setNewTasks, setProgressTasks, setFinishedTasks);
  }else {
    setNewTasks([]);
    setProgressTasks([]);
    setFinishedTasks([]);
  }
}, [auth])

//exclude duplicates of tasks
useEffect(() => {
  setNewTasks(newTasks)
  setProgressTasks(progressTasks)
  setFinishedTasks(finishedTasks)
}, [newTasks, progressTasks, finishedTasks, auth])

  return (
    <>
      <Header auth={auth}/>
      <Outlet />
      <Footer />
      <Router auth={auth} setUser={setUser} newTasks={newTasks} progressTasks={progressTasks} finishedTasks={finishedTasks}/>
    </>
  );
}
