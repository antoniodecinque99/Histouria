import { BsEyeglasses } from "react-icons/bs";

function GuideButton({ setDisplayed }) {
    return (
    <div className='my-btn' id="tutorial-btn" onClick={() => {setDisplayed(true)}}>
      <div className="btn-content">
        <div className="btn-icon-container">
            <BsEyeglasses className={"btn-icon"}/>
        </div>
        <div className="btn-text">
            Tutorial
        </div>
      </div>
    </div>);
}

export default GuideButton;