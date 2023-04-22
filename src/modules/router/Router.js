import { Routes, Route} from 'react-router-dom';

import StartPage from '../../pages/StartPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';

export default function Router({auth, setUser, newTasks, progressTasks, finishedTasks}) {
	return (
		<Routes>
			<Route 
			path="/" 
			element={
				auth ?
				<HomePage newTasks={newTasks} progressTasks={progressTasks} finishedTasks={finishedTasks} />
				:
				<StartPage/>
			}>
			</Route>
			<Route path="login" element={<LoginPage auth={auth} setUser={setUser}/>}></Route>
			<Route path="register" element={<RegisterPage />}></Route>
			<Route path="about" element={<AboutPage />}></Route>
			<Route path="contacts" element={<ContactPage />}></Route>
		</Routes>
	)
}