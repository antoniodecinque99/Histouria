import { useEffect, useState } from "react";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function LoadingScreen() {
    const [percentage, setPercentage] = useState(0)
    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {
        if (isRunning && percentage < 100) {
            setTimeout(() => setPercentage(prev => prev + 4), 100)
        }
        if (percentage == 100) {
            setIsRunning(false)
        }
    }, [percentage, isRunning])


    useEffect(() => {
        setTimeout(() =>{vanish()}, 4000);
    }, [])

    function vanish() {
        document.querySelector("#loading-backdrop").classList.add("displayNone");
        document.querySelector("#loading-content").classList.add("displayNone");

    }

    return (
        <>
        <div className="loading-backdrop" id="loading-backdrop">
            <div className='loading-content' id="loading-content">
                Loading Tour... 
                <div style={{width: "100px", height: "100px", marginTop: "20px", marginLeft: "40%"}}>
                <CircularProgressbar 
                                value={percentage} 
                                strokeWidth={15} 
                                styles={{
                                    path: {stroke: 'rgb(10, 132, 255)'},
                                    trail: {stroke: '#282828'}
                                }}
                            />
                </div>
            </div>
        </div>
        
        </>
        );
}

export default LoadingScreen; 