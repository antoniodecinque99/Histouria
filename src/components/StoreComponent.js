import "../styles/StoreComponent.css";
import Popup from 'reactjs-popup';
import { BsX } from "react-icons/bs";
import { Col, Overlay, Row, Tooltip } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function StoreComponent({ backPicture, picture, name, subtitle, description, size, downloaded, setDL, wikiLink, comingSoon, tourId}) {
    function downloadTour() {
        console.log(`Donwload : ${name}`);
        setDL(true);
        //TODO: when Tour menu will be done
    }

    const [progressBar, setProgressBar] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (isRunning && percentage < 100) {
            setTimeout(() => setPercentage(prev => prev + 1), 100)
        }
        if (percentage == 100) {
            downloadTour()
            setIsRunning(false)
        }
    }, [percentage, isRunning])

    const [showLaunchOverlay, setShowLaunchOverlay] = useState(false);
    const target = useRef(null);
    const target2 = useRef(null);
    const navigate = useNavigate();
    return (
        <div className="storeComponent">
                <div className="storeComponent-item">
                    {downloaded ?
                    <div className="owned-overlay">
                        <div className="owned-text">
                            In Library
                        </div>
                    </div> : <></> }
                    {comingSoon ?
                    <div className="owned-overlay">
                        <div className="owned-text">
                            COMING SOON
                        </div>
                    </div> : <></> }
                    <img className="item-img" src={backPicture} alt={`${name}`}/>
                    <div className="storeComponent-title-overlay">
                        <h3>{name}</h3>
                        <div className="vrMenuComponent-subtitle">
                            <span>{subtitle}</span>
                        </div>
                        <div className="play-button-container-VR">
                    <Popup trigger={<span className='store-info-launch-btn'>{
                        isRunning ? 
                        <><div style={{width: '14px', height: '14px', display: 'inline-block', marginRight: '10px'}}>
                            <CircularProgressbar 
                                value={percentage} 
                                strokeWidth={20} 
                                styles={{
                                    path: {stroke: 'rgb(10, 132, 255)'},
                                    trail: {stroke: '#282828'}
                                }}
                            />
                        </div></> : <></>}INFO</span>
                        } modal nested 
                        overlayStyle={{
                            position: "absolute",
                            top: '0',
                            left: '0',
                            zIndex: '1002'
                        }}
                        contentStyle={{marginTop: "50px", margin: 0, width: "100%", height: "100%"}}>
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
                                {comingSoon ? 
                                <Col xs={12} lg={4} style={{textAlign: "right"}}>
                                    <div className="vr-info-launch-btn-disabled" ref={target2} onClick={() => {downloadTour()}}>
                                        COMING SOON
                                    </div>
                                </Col> :
                                <Col xs={12} lg={4} style={{textAlign: "right"}}>
                                    {downloaded ? 
                                    <>
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
                                    </>
                                    :
                                    (progressBar ?
                                        <div className="vr-info-launch-btn" ref={target2} onClick={() => {setProgressBar(false); setIsRunning(false); setPercentage(0)}}>
                                            <div style={{width: '30px', height: '30px', display: 'inline-block', marginRight: '10px'}}>
                                                    <CircularProgressbar 
                                                        value={percentage} 
                                                        strokeWidth={20} 
                                                        styles={{
                                                            path: {stroke: 'rgb(10, 132, 255)'},
                                                            trail: {stroke: '#282828'}
                                                        }}
                                                    />
                                            </div>STOP
                                        </div>
                                    :
                                    <div className="vr-info-launch-btn" ref={target2} onClick={() => {setProgressBar(true); setIsRunning(true)}}>
                                        GET
                                    </div>
                                    )
                                    }
                                </Col>
                                }
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
                                </div>
                            </div>       
                        </div>
                        )}
                    </Popup>
                        </div>
                    </div>
                    
                    
                </div>           
            </div>
    );
}

export default StoreComponent;