import "../styles/VRComponent.css";
import { Col, Row, Button, Overlay, Tooltip } from 'react-bootstrap';

import start from "../assets/VRMenu/start.png"
import Popup from 'reactjs-popup';
import { Link, useNavigate } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { useRef, useState } from "react";


function VRComponent({ backPicture, picture, name, subtitle, description, size, downloaded, setDL, wikiLink, tourName, tourId}) {
    const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
    const [showLaunchOverlay, setShowLaunchOverlay] = useState(false);
    const target = useRef(null);
    const target2 = useRef(null);
    const navigate = useNavigate();

    return (
        downloaded ? (
            <div className="vrMenuComponent">
                <div className="vrMenuComponent-item">
                    <img className="item-img" src={backPicture} alt={`${name}`}/>
                    <div className="vrMenuComponent-title-overlay">
                        <h3>{name}</h3>
                        <div className="vrMenuComponent-subtitle">
                            <span>{subtitle}</span>
                        </div>
                        <div className="play-button-container-VR">
                        <Popup trigger={<span className='vr-info-launch-btn'>ENTER</span>} modal nested 
                        overlayStyle={{
                            position: "absolute",
                            top: '0',
                            left: '0',
                            zIndex: '1002'
                        }}
                        contentStyle={{marginTop: "50px", width: "100%", height: "100%"}}>
                        {close => (
                        <div className="vr-info-popup">        
                            <div className="close" onClick={() => close()}>
                                <BsX />
                            </div>
                            <div className="vr-info-img">
                                    <img src={picture} alt={`${name}`}/>
                            </div>
                            <div className="vr-info-title-overlay">
                                <Row>
                                <Col xs={12} lg={8}>
                                <h3>{name}</h3>
                                <div className="vr-info-subtitle">
                                    <span>{subtitle}</span>
                                </div>
                                </Col>
                                <Col xs={12} lg={4} style={{textAlign: "right"}}>
                                    <div className="vr-info-launch-btn" ref={target2} onClick={() => setShowLaunchOverlay(!showLaunchOverlay)}>
                                        LAUNCH VR
                                    </div>
                                    <Overlay target={target2.current} show={showLaunchOverlay} placement="left" delay={{ show: 250, hide: 400 }}>
                                            {(props) => (
                                            <Tooltip id="tooltip-bottom" {...props}>
                                                <span>This will launch the VR experience.</span>
                                                <div className="tooltipButtonsContainer">
                                                    <div className="tooltipLaunchButton" onClick={() => {navigate("/tour?tourId=" + tourId.toString())}}> {/* CHANGE THIS FOR INTERACTIVITY! */}
                                                        LAUNCH
                                                    </div>
                                                </div>
                                            </Tooltip>
                                            )}
                                    </Overlay>
                                </Col>
                                </Row>
                            </div>
                            <div className="vr-info-content">
                                <div className="vr-info-content-text">
                                    <h3>Overview</h3>
                                    <p>{description}</p>
                                    <h3>Authors</h3>
                                    <p>Antonio De Cinque, Luigi Mario</p>
                                    <h3>More information</h3>
                                    <p>You can visit <a href={wikiLink}>Wikipedia</a> for more info about the Colosseum and Roman history.</p>
                                    <h3>Technical details</h3>
                                    <p className="technical-details-p"><strong>Number of scenes:</strong> 2</p>
                                    <p className="technical-details-p"><strong>File size:</strong> {size}</p>
                                    <div className="deleteTourButtonContainer">
                                        <div className="vr-info-launch-btn-delete" ref={target} onClick={() => setShowDeleteOverlay(!showDeleteOverlay)}>
                                            DELETE TOUR
                                        </div>
                                        <Overlay target={target.current} show={showDeleteOverlay} placement="top" delay={{ show: 250, hide: 400 }}>
                                            {(props) => (
                                            <Tooltip id="overlay-example" {...props}>
                                                <span>Are you sure you want to delete this tour?</span>
                                                <div className="tooltipButtonsContainer">
                                                    <div className="tooltipDeleteButton" onClick={() => {alert("Just kidding!! :))))))))))))))))))"); setShowDeleteOverlay(!showDeleteOverlay)}}>
                                                        DELETE
                                                    </div>
                                                    <div className="tooltipKeepButton" onClick={() => setShowDeleteOverlay(!showDeleteOverlay)}>
                                                        KEEP
                                                    </div>
                                                </div>
                                            </Tooltip>
                                            )}
                                        </Overlay>
                                        <p className="deleteTourDescription">You may download this tour again from the Store page.</p>
                                    </div>
                                </div>
                            </div>       
                        </div>
                        )}
                    </Popup>
                        </div>
                    </div>
                    
                    
                </div>           
            </div>
        ) : null
    );
}

export default VRComponent;