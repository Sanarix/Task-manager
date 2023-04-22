import { Outlet } from 'react-router-dom';

import Router from './modules/router/Router';
import Header from './components/Header';
import Footer from './components/Footer';

import initApp from './functions/initApp';
import useAuth from './hooks/useAuth';

import useNewTasks from './hooks/useNewTasks';
import useProgressTasks from './hooks/useProgressTasks';
import useFinishedTasks from './hooks/useFinishedTasks';

import { useState, useEffect } from 'react';

//Для useEffect
import getTasks from './modules/taskController/getTasks';
import realtimeDatabase from './modules/database/realtimeDatabase';



export default function App() {
const [newTasks, setNewTasks] = useNewTasks();
const [progressTasks, setProgressTasks] = useProgressTasks();
const [finishedTasks, setFinishedTasks] = useFinishedTasks();
const [user, setUser] = useState(null);


const app = initApp();
const auth = useAuth( setUser );

useEffect(() => {
  if(user) {
    const db = realtimeDatabase(app);
    getTasks(db, user.uid, setNewTasks, setProgressTasks, setFinishedTasks);

  }else {
    console.log('пользователь не авторизован');
    setNewTasks([]);
    setProgressTasks([]);
  }
}, [user])


useEffect(() => {
  console.log('таски обновились');
}, [newTasks, progressTasks, finishedTasks])

  return (
    <>
      <Header auth={auth}/>
      <Outlet />
      <Footer />
      
      <Router auth={auth} setUser={setUser} newTasks={newTasks} progressTasks={progressTasks} finishedTasks={finishedTasks} />
    </>
  );
}
