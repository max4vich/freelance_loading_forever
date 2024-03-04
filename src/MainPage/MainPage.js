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
        }, 7000);

        return () => clearInterval(timer);
    }, [progress]);
    return (
        <div id="app">
            <div id="hero">
                <h1>Please wait</h1>
                <div className="loading-container">
                    <p className="loading-text">{messages[index]}</p>
                </div>
                <div className="loading-barr-container">
                    <span className="loading-barr-progress">
                        {progress}%
                    </span>
                    <div className="loading-barr">

                    </div>
                </div>
                <nav>
                    <a href='/home'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact_us'>Contact us</a>
                </nav>
                <Neon/>

            </div>
        </div>
    )
}

export default MainPage;