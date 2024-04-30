import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { BiHome } from "react-icons/bi"
import { AiOutlineMessage } from "react-icons/ai"
import { BsHeadsetVr, BsGearFill} from "react-icons/bs"
import { FaStore } from "react-icons/fa"
import { useLocation } from 'react-router-dom';

function BottomNavbar() {
  const location = useLocation()
  return (
    location.pathname !== '/createQuiz' ?
    <Nav className="navbar" style={{zIndex: "99999999"}}>
      <div className="container">
        {/* <NavLink className="navbar-brand" to="/home"><BiHome className='navbar-icon'/><span className='d-none d-lg-block'>Home</span></NavLink> */}
        <NavLink className="navbar-brand" to="/quizList"><AiOutlineMessage className='navbar-icon'/><span className='d-none d-lg-block' style={{userSelect: 'none'}}>Quizzes</span></NavLink>
        <NavLink className="navbar-brand" to="/vrmenu"><BsHeadsetVr className='navbar-icon'/><span className='d-none d-lg-block' style={{userSelect: 'none'}}>VR Menu</span></NavLink>
        <NavLink className="navbar-brand" to="/store"><FaStore className='navbar-icon'/><span className='d-none d-lg-block' style={{userSelect: 'none'}}>Store</span></NavLink>
        <NavLink className="navbar-brand" to="/settings"><BsGearFill className='navbar-icon'/><span className='d-none d-lg-block' style={{userSelect: 'none'}}>Settings</span></NavLink>
      </div>
    </Nav> : <></>
  );
}

export { BottomNavbar }