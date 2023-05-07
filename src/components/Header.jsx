import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import useUser from "../hooks/useUser";

export default function Header({auth}) {
	const [user, loading, error] = useUser();

	function handlerSignOut(e) {
		e.preventDefault();
		signOut(auth);
	}

return (
	<header className="header">
		<Link to="/" className="logo">Task Manager</Link>
		<nav className="header-nav">
			<Link to="https://github.com/Sanarix/Task-manager.git" className="header-nav-link" data-name="null">GitHub</Link>
			<Link to="/about" className="header-nav-link" data-name="about">About</Link>
			<Link to="/contacts" className="header-nav-link" data-name="contacts">Contacts</Link>
			<Link to="/login" className={user ? 'header-nav-link log-in ' : 'header-nav-link log-in visible'} data-name="log-in">Sign in</Link>
			<Link href="/login" className={user ? 'header-nav-link log-out visible' : 'header-nav-link log-out'} data-name="log-out" onClick={handlerSignOut}>Log out</Link>
		</nav>
	</header>
	)
}