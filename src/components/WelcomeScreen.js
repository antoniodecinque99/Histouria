import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import bg1 from '../assets/WelcomeScreen/bg1.png';
import bg2 from '../assets/WelcomeScreen/bg2.png';
import bg3 from '../assets/WelcomeScreen/bg3.png';

const backgrounds = [bg1, bg2, bg3];

function WelcomeScreen() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let next_value = (value + 1) % backgrounds.length;
            document.querySelector("#welcome-screen-bg-" + value).classList.replace("opacity100", "opacity0");
            document.querySelector("#welcome-screen-bg-" + next_value).classList.replace("opacity0", "opacity100");
            setValue((value + 1) % backgrounds.length);
            console.log("new value: " + value)
        }, 4000);
        return () => clearInterval(interval);
    });


    return (
        <div style={{width: '100%', height: '100vh'}}>
            <div className="welcome-screen-overlay"></div>
            {/* <img src={backgrounds[value]} alt="histouria-bg" className="welcome-screen-bg"/> */}
            {backgrounds.map((bg, i) => <img src={bg} alt="histouria-bg" className={"welcome-screen-bg " + (i === 0 ? "opacity100" : "opacity0")} id={"welcome-screen-bg-" + i}/>)}
            <div className="overlay-content">
                <h1 style={{color: 'white', fontSize: '90px', fontFamily: "Georgia, 'Roboto Black', Arial, Helvetica, sans-serif"}}>Histouria</h1> 
                <h3 style={{color: 'white', margin: '25px', fontFamily: "Georgia, 'Roboto Black', Arial, Helvetica, sans-serif"}}> Where history is played and written</h3>
                <Link to="/vrmenu">
                    <Button variant="dark" size="lg" >Enter</Button>
                </Link>
            </div>
        </div>
    )
}

export default WelcomeScreen;
