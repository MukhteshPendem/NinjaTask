import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";
import CreateService from "./services/CreateService";
import Navbar from "./components/Navbar";

function App() {





    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/task-list" element={<TaskList />} />

                    <Route path="/" element={<Home />} />

                    <Route path="/create" element={<TaskForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
