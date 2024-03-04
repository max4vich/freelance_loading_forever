import './MainPage.css'
import Neon from "../Neon";
import {useEffect, useState} from "react";

function MainPage(){
    const messages = [
        "Site is still loading...",
        "Loading assets....",
        "We are working on it....",
        "Just a few more moments...",
        "Please hang tight...",
        "Loading is taking longer than expected...",
        "We appreciate your patience...",
        "We're doing our best to speed things up...",
        "Almost there...",
        "Thank you for waiting..."
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % messages.length);
        }, 7000); // Change the delay according to your preference

        return () => clearInterval(interval);
    }, []);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 98) {
                setProgress(progress + 1);
            } else {
                clearInterval(timer);
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [progress]);
    return (
        <div id="app">
            <div id="hero">
                <h1>Please wait</h1>
                <div className="loading-container">
                    <p className="loading-text">{messages[index]}</p>
                </div>
                <div className="loading-bar-container">
                    <span className="loading-bar-progress">
                        {progress}%
                    </span>
                    <div className="loading-bar">

                    </div>
                </div>
                <nav>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact us</a>
                </nav>
                <Neon/>

            </div>
        </div>
    )
}

export default MainPage;