import { Outlet } from 'react-router-dom';

import Router from './modules/router/Router';
import Header from './components/Header';
import Footer from './components/Footer';

import initApp from './functions/initApp';
// import taskController from './modules/taskController/taskController';
import useAuth from './hooks/useAuth';
import useNewTasks from './hooks/useNewTasks';

import { useState, useEffect } from 'react';

//Для useEffect
import getTasks from './modules/taskController/getTasks';
import { getAuth} from 'firebase/auth';
import { onValue } from 'firebase/database';
import realtimeDatabase from './modules/database/realtimeDatabase';



export default function App() {
const [tasks, setTasks] = useNewTasks();
const [user, setUser] = useState(null);


const app = initApp();
const auth = useAuth( setUser );

useEffect(() => {
  if(user) {
    const db = realtimeDatabase(app);
    const auth = getAuth();
    const {newTasks, progressTasks, finishedTasks} = getTasks(db, user.uid);

    onValue(newTasks, (snapshot) => {
      const data = snapshot.val();
      for (let key in data) {
        const task = data[key];
        setTasks(prev => {
          return [...prev, {key, task}]
        })
      }
    })
  }else {
    console.log('пользователь не авторизован');
    setTasks([]);
  }
}, [user])



useEffect(() => {
  console.log('таски обновились');
}, [tasks])

  return (
    <>
      <Header auth={auth}/>
      <Outlet />
      <Footer />
      
      <Router auth={auth} setUser={setUser} tasks={tasks}/>
    </>
  );
}
