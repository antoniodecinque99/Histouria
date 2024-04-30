import { BsFillCapslockFill } from "react-icons/bs";

function MyUploadButton({setDisplayed}) {
    return (
    <div id="upload-btn" className="my-btn">
        <div className="btn-content">
            <div className="btn-icon-container">
                <BsFillCapslockFill className={"btn-icon"}/>
            </div>
            <div className="btn-text">
                Upload
            </div>
        </div>
        
        
    </div>
    );
}

export default MyUploadButton;