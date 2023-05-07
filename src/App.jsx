import { Outlet } from 'react-router-dom';

import Router from './modules/router/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import MyModal from './UI/MyModal/MyModal';

import initApp from './functions/initApp';
import useTasks from './hooks/useTasks';
import useUser from './hooks/useUser';
import {useFirebase} from './context/FirebaseContext';

import { useOpenModal } from './context/ModalContext';
import { useState, useEffect } from 'react';
import Overlay from './components/Overlay';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


export default function App() {
  const {app, auth, db} = useFirebase();
  // const [user, loading, error] = useUser();
  const {isOpen, modalType} = useOpenModal()
	const [user, loading, error] = useAuthState(auth);

  const {
    newTasks,
    progressTasks,
    finishedTasks,
  } = useTasks(app, user);


  return (
    <>
      <Header auth={auth}/>
        <Outlet />
        <Footer />
        <Router auth={auth} newTasks={newTasks} progressTasks={progressTasks} finishedTasks={finishedTasks} />
        {isOpen && modalType==="edit" &&
        <Overlay>
          <MyModal modalHeader="Edit task" />
        </Overlay>
			}
			{
				isOpen && modalType==="new" && 
        <Overlay>
          <MyModal modalHeader="Create task" modalType={modalType} />
        </Overlay>
			}
    </>
  );
}
