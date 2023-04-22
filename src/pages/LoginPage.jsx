import '../styles/LoginPage.css';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import getImages from '../functions/getImages';
import signInWithEmail from '../modules/auth/signInWithEmail';

export default function LoginPage({setUser}) {
	const images = getImages();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	function handlerEmail(e) {
		e.preventDefault();
		setEmail(e.target.value);
	}

	function handlerPassword(e) {
		e.preventDefault();
		setPassword(e.target.value);
	}
	
	function handleSubmit(e) {
		e.preventDefault();
		signInWithEmail(email, password, setUser, navigate);
	}

	return (
		<main>
			<div className="container">
				<form method="post" onSubmit={handleSubmit}>
					<h1 className="form-header">Sign in</h1>
					<label name="email">
						<MyInput type="email" placeholder="Email" value={email} onChange={handlerEmail}/>
					</label>
					<label name="password">
						<MyInput type="password" placeholder="Password" value={password} onChange={handlerPassword}/>
					</label>
					<div className="buttons-container">
						<MyButton className="button submitButton">Log in</MyButton>
						<MyButton className="button"><Link to="/register">Register</Link></MyButton>
					</div>
					<div className="others">
						<h2>Sign in with:</h2><br/>
						<button type="button"><img href={images.socials.google} alt="Google" /></button>
						<button type="button"><img href={images.socials.github} alt="GitHub" /></button>
					</div>
				</form>
			
			</div>
		</main>
	)
}