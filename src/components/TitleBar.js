import profile_pic from "../assets/profile_pic.jpeg"

import { Navbar, Col, Row } from 'react-bootstrap';
import Separator from "./Separator";
import { useState } from "react";
import { FaSearch } from 'react-icons/fa'

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    props.resizable ? 
    <div className="search-container-resizable">
      <FaSearch style={{marginRight: '6px'}} size="25px"></FaSearch>
        <input
          className="search-input"
          type="text"
          placeholder="Search in page..."
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
    </div>
    :
    <div className="search-container">
      <FaSearch style={{marginRight: '6px'}} size="25px"></FaSearch>
      <input
        className="search-input"
        type="text"
        placeholder="Search in page..."
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </div> 
  );
};


function TitleBar({ title, resizable }) {
  return (
    <>
      <Navbar bg="black" variant="dark" sticky="top" style={{zIndex: "1000"}}>
        <Col xs={6} style={{ paddingLeft: "3%", paddingTop: "10px" }}>
          <h1 className="title" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{title}</h1>
        </Col>
        <Col xs={6} style={{ paddingRight: "3%", paddingTop: "10px", display: 'flex', flexWrap: 'nowrap', justifyContent: 'flex-end'}}>
          <div style={{marginRight: "10px"}}>
          {/* <SearchBar resizable={resizable}></SearchBar> */}
          </div>
          <div>
            <img src={profile_pic} alt="Profile" className="profile-picture" />
          </div>
        </Col>
    </Navbar>
    <Separator></Separator>
    </>
  );
}

TitleBar.defaultProps = {
  resizable: false
};

export default TitleBar;
