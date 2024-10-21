import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/create');
    };

    return (
        <div className="Home-page">
            <div className="home-content">
                <h1 className="home-title">Welcome to Ninja TaskManager!</h1>
                <p className="home-description">
                    Conquer your tasks with the precision of a Shinobi. Unleash your potential and start your journey
                    now!
                </p>

                <button className="get-started-button" onClick={handleGetStarted}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;
