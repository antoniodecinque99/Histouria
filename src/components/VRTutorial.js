import { useEffect, useState } from "react";

function VRTutorial({ isDisplayed, setDisplayed }) {

    useEffect(() => {
        setScreenIndex(0);
    }, [isDisplayed]);

    function nextScreen() {
        if (screenIndex < screens.length - 1) {
            setScreenIndex(screenIndex + 1);
        } else {
            setDisplayed(false);
        }
    }

    const [screenIndex, setScreenIndex] = useState(0);

    const screens = [
        {
            img: "img/turn-device.gif",
            caption: "First, orient your device horizontally."
        },
        {
            img: "img/hand-move.gif",
            caption: "Use your finger or the mouse to look around."
        },
        {
            img: "img/question-mark.gif",
            caption: "Click on Checkpoints to see more information."
        },
        {
            img: "img/tutorial-corner.gif",
            caption: "You can view this tutorial again using the button in the bottom left corner."
        }
    ]
    if (isDisplayed) {
        return (
            <>
            <div className="vr-tutorial-backdrop" id="vr-tutorial-backdrop">
                <div className='vr-tutorial'>
                    <div id="vr-tutorial-title">
                        <h1>Controlling The Virtual Tour</h1>
                    </div>
                <img alt="turn-device" src={screens[screenIndex].img} draggable="false"/>
                <div id="vr-tutorial-caption">
                    {screens[screenIndex].caption}
                </div>
                <div id="vr-tutorial-buttons-container">
                    <div className="vr-tutorial-button" id="vr-tutorial-skip-button" onClick={() => {setDisplayed(false)}}>
                        Skip
                    </div>
                    <div className="vr-tutorial-button" id="vr-tutorial-next-button"  onClick={() => {nextScreen()}}>
                        OK
                    </div>
                </div>
                </div>
            </div>
            
            </>
            );
    } else {
        return <></>;
    }
}

export default VRTutorial; 