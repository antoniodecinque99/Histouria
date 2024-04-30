import { useEffect } from "react";
import {BsArrowLeftCircle } from "react-icons/bs"

function PreviousButton({ sceneIndex, setSceneIndex, scenesLength }) {
    function previousScene() {
        let newIdx = sceneIndex;
        if (sceneIndex > 0) {
            newIdx = sceneIndex - 1;
        }
        setSceneIndex(newIdx);

    }

    useEffect(() => {
        // display button
        if (sceneIndex > 0) {
            document.querySelector("#previous-btn").classList.remove("visibilityHidden");

        } else {
            document.querySelector("#previous-btn").classList.add("visibilityHidden");
        }
    }, [sceneIndex])

    return (
    <div id="previous-btn" className="my-btn" onClick={() => {previousScene()}}>
        <div className="btn-content">
            <div className="btn-icon-container">
                <BsArrowLeftCircle className={"btn-icon"}/>
            </div>
            <div className="btn-text">
                Prev
            </div>
        </div>
    </div>
    );
}

export default PreviousButton;