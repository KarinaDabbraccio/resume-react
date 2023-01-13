import { Link } from 'react-router-dom';
import logo from './cook-9.jpg';

function Navigation() {
	return (
		<header>
			
			<nav className='navbar navbar-expand-lg navbar-light bg-light navbar-brand p-3' >
				<img src= {logo} className="App-logo" alt="cookie" />
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link to='/resume' className="nav-link">Experience</Link>
					</li>
					<li className="nav-item">
						<Link to='/education' className="nav-link">Education</Link>
					</li>
					<li className="nav-item">
						<Link to='/personal-info' className="nav-link">Personal</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navigation;