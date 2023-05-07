import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useFirebase } from "../context/FirebaseContext";

export default function RegisterPage() {
	const {auth} = useFirebase();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error
	] = useCreateUserWithEmailAndPassword(auth);

	function handlerEmail(e) {
		e.preventDefault();
		setEmail(e.target.value);
	}

	function handlerPassword(e) {
		e.preventDefault();
		setPassword(e.target.value);
	}

	async function handleSubmit(e) {
	e.preventDefault();
	await createUserWithEmailAndPassword(email, password);
	loading ? console.log(error) :navigate('/'); 
}

	return (
		<>
			{loading && <main>loading</main>}
			{!loading && 
				<main>
				<div className="container">
					<form method="post" onSubmit={handleSubmit}>
						<h1 className="form-header">Registration</h1>
						<label name="email">
							<MyInput type="email" placeholder="Email" value={email} onChange={handlerEmail}/>
						</label>
						<label name="password">
							<MyInput type="password" placeholder="Password" value={password} onChange={handlerPassword}/>
						</label>
						<div className="buttons-container">
							<MyButton className="button submitButton" onClick={handleSubmit}>Register</MyButton>
							<MyButton className={'button'} onClick={()=>{navigate('/login')}}>Back</MyButton>
						</div>
					</form>
				</div>
			</main>
			}
		</>
	)
}