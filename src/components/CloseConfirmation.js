import { useNavigate } from "react-router";

function CloseConfirmation({isDisplayed, setDisplayed}) {

    let navigate = useNavigate();

    if (isDisplayed) {
        return (
        <div className="close-backdrop" id="close-backdrop">
            <div className='close-box'>
                <div id="close-title">
                    <h1>Close The Virtual Tour?</h1>
                </div>
                
                <div id="close-caption">
                    Are you sure you want to close the VR tour?<br /><br />
                    <em>This will send you back to the previous menu.</em>
                </div>
                <div id="close-buttons-container">
                    <div id="close-buttons-back-container">
                    <div className="close-screen-button" id="close-screen-back-button" onClick={() => {setDisplayed(false)}}>
                        No, go back to the tour.
                    </div>
                    </div>
                    <div id="close-buttons-exit-container">
                        <div className="close-screen-button" id="close-screen-exit-button"  onClick={() => {navigate(-1)}}>
                            Yes, close the VR tour.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    } else {
        return <></>;
    }
    
}

export default CloseConfirmation;