import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export default function Header({auth}) {

	function handlerSignOut(e) {
		e.preventDefault();
		const auth = getAuth();
		signOut(auth);
	}

return (
	<header className="header">
		<Link to="/" className="logo">Task Manager</Link>
		<nav className="header-nav">
			<Link to="https://github.com/Sanarix/Task-manager.git" className="header-nav-link" data-name="null">GitHub</Link>
			<Link to="/about" className="header-nav-link" data-name="about">About</Link>
			<Link to="/contacts" className="header-nav-link" data-name="contacts">Contacts</Link>
			<Link to="/login" className={auth ? 'header-nav-link log-in ' : 'header-nav-link log-in visible'} data-name="log-in">Sign in</Link>
			<Link href="/login" className={auth ? 'header-nav-link log-out visible' : 'header-nav-link log-out'} data-name="log-out" onClick={handlerSignOut}>Log out</Link>
		</nav>
	</header>
	)
}