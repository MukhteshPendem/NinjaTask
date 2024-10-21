import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create a CSS file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Ninja TaskManager</h1>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create Task</Link>
                </li>
                <li>
                    <Link to="/task-list">Task List</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
