import { Outlet } from 'react-router-dom';

import Router from './modules/router/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import MyModal from './UI/MyModal/MyModal';

import initApp from './functions/initApp';
import useAuth from './hooks/useAuth';
import useTasks from './hooks/useTasks';
import useUser from './hooks/useUser';

import { useOpenModal } from './context/ModalContext';
import { useState, useEffect } from 'react';


export default function App() {
const {user, setUser} = useUser();
const app = initApp();
const auth = useAuth( setUser );
const {isOpen, modalType} = useOpenModal()

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
        <Router auth={auth} setUser={setUser} newTasks={newTasks} progressTasks={progressTasks} finishedTasks={finishedTasks} />
        {isOpen && modalType==="edit" &&
			<MyModal modalHeader="Edit task" />
			}
			{
				isOpen && modalType==="new" && 
				<MyModal modalHeader="Create task" modalType={modalType} />
			}
    </>
  );
}
