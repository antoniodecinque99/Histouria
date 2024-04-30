import HtmlParser from "react-html-parser";
import { BsX } from "react-icons/bs";



function InfoOverlay(props) {
    function onClickFunction() {
        document.querySelector("#info-overlay-" + props.sceneId + "-" + props.questionMarkId).classList.add('displayNone');
    }
    return (
        <div className="info-overlay displayNone" id={"info-overlay-" + props.sceneId + "-" + props.questionMarkId}>
            <div className="info-overlay-x-wrapper">
                <div className="info-overlay-x-spacer">
                </div>
                <div className="info-overlay-x"  onClick={() => {onClickFunction()}}>
                        <BsX/>
                </div>
            </div>
            <div className="info-overlay-content">
            <h1>{props.info.title}</h1>
            <div className="info-overlay-text">
                {HtmlParser(props.info.text)}
            </div>
            </div>
            <div className="info-overlay-image-wrapper">
                <div className="info-overlay-image">
                    <img draggable="false" alt={props.info.imageCaption} src={props.info.image} />
                </div>
                <div className="info-overlay-image-caption">
                        {props.info.imageCaption}
                </div>
            </div>
            
            
        </div>
    )
}

export default InfoOverlay;