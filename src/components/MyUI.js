import { Button } from "react-bootstrap";
import { BsBag, BsBarChartSteps, BsCardChecklist, BsCart, BsGear, BsGearFill, BsHeadsetVr, BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

function MyUI({canvas, setCanvas}) {
    return (
        <div className="main-menu">
            <div className="main-menu-upper-bar">
                <div className="upper-bar-left-corner">
                    {/* empty */}
                </div>
                <div className="upper-bar-title-container">
                    <h1 style={{color: 'white', marginBottom: '4px', fontSize: '45px', fontFamily: "Georgia, 'Roboto Black', Arial, Helvetica, sans-serif"}}>Histouria</h1> 
                    <h3 style={{color: 'white', margin: '0px', fontFamily: "Georgia, 'Roboto Black', Arial, Helvetica, sans-serif"}}> Where history is played and written</h3>
                </div>
                <div className="upper-bar-settings-container">
                    {/*<div className="main-menu-btn" id="btn-settings">
                        <div className="main-menu-btn-icon">
                            <BsGear />
                        </div>
                        <div className="main-menu-btn-text">
                            Settings
                        </div>
                        
    </div>*/}
                </div>
            </div>
            <div className="main-menu-content">
                <Link to="/vrmenu">
                    <div className="main-menu-btn big-main-menu-btn" id="btn-vr">
                        <div className="main-menu-btn-icon">
                            <BsHeadsetVr />
                        </div>
                        <div className="main-menu-btn-text">
                            VR Experience
                        </div>
                        <div className="main-menu-btn-small-text">
                            Explore historical sights through the magic of Virtual Reality.
                        </div>
                    </div>
                </Link>
                <Link to="/interactiveQuiz">
                <div className="main-menu-btn big-main-menu-btn" id="btn-quiz">
                        <div className="main-menu-btn-icon">
                            <BsCardChecklist />
                        </div>
                        <div className="main-menu-btn-text">
                            Interactive Quiz
                        </div>
                        <div className="main-menu-btn-small-text">
                            Quiz your students about historical topics in a fun and engaging way.
                        </div>
                    </div>
                </Link>
            </div>
            <div className="main-menu-lower-bar">
                <div className="lower-bar-left-corner">
                    {/* empty, for now */}
                </div>
                <div className="lower-bar-spacer">
                    {/* spacer, empty */}
                </div>
                <div className="lower-bar-store-container">
                {/*<Link to="/store">
                    <div className="main-menu-btn" id="btn-store">
                        <div className="main-menu-btn-icon">
                            <BsBag />
                        </div>
                        <div className="main-menu-btn-text">
                            Store
                        </div>
                    </div>
    </Link>*/}
                </div>
            </div>
        </div>
    )
}

export default MyUI;