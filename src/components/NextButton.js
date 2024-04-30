import { useEffect } from "react";
import {BsArrowRightCircle } from "react-icons/bs"

function NextButton({ sceneIndex, setSceneIndex, scenesLength }) {
    function nextScene() {
        let newIdx = sceneIndex;
        if (sceneIndex < scenesLength - 1) {
            newIdx = sceneIndex + 1;
        }
        setSceneIndex(newIdx);
    }

    useEffect(() => {
        // display button
        if (sceneIndex < scenesLength - 1) {
            document.querySelector("#next-btn").classList.remove("visibilityHidden");
        } else {
            document.querySelector("#next-btn").classList.add("visibilityHidden");
        }
    }, [sceneIndex]);

    return (
    <div id="next-btn" className="my-btn" onClick={() => {nextScene()}}>
        <div className="btn-content">
            <div className="btn-icon-container">
                <BsArrowRightCircle className={"btn-icon"}/>
            </div>
            <div className="btn-text">
                Next
            </div>
        </div>
    </div>
    );
}

export default NextButton;