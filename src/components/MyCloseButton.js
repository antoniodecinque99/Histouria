import { BsXCircle } from "react-icons/bs";

function MyCloseButton({setDisplayed}) {
    return (
    <div id="close-btn" className="my-btn" onClick={() => {setDisplayed(true)}}>
        <div className="btn-content">
            <div className="btn-icon-container">
                <BsXCircle className={"btn-icon"}/>
            </div>
            <div className="btn-text">
                Close
            </div>
        </div>
        
        
    </div>
    );
}

export default MyCloseButton;