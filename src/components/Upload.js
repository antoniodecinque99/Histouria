import "../styles/Upload.css";
import { useState } from "react";

function Upload({isDisplayed, setDisplayed, scene}) {
    const [nbrOfQuizzes, setnbrOfQuizzes] = useState(0);

    if (isDisplayed) {
        return (
        <div className="upload-backdrop">
            <h2>Upload the Tour ?</h2>
            <div className="upload-content">
                <div className="upload-resume">
                    <p>Number of Scenes : {scene}</p>
                    <p>Numeber of Quizzes : {nbrOfQuizzes} </p>
                    <button>Add quizzes</button>
                </div>
                <div className="upload-buttons">
                    <button>Upload</button>
                    <button onClick={() => setDisplayed(false)}>Go back to the tour</button>
                </div>
            </div>
        </div>
        );
    } else {
        return <></>;
    }
    
}

export default Upload;