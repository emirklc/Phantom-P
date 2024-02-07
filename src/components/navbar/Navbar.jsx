import React, { useState } from "react";
import "./navbar.css";
import { Home2, LocationDiscover, Scanner, Microscope, ArrowRight2 } from "iconsax-react";
import { Link } from "react-router-dom";
import {setPrefix} from "../../Redux/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const dispatch = useDispatch();
  const myPrefix = useSelector((state) => state.api.prefix);

  const handleSectionClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const handleToolSelection=(tool)=>{
  console.log("tool:", tool)
    // console.log("first:",first);
    // dispatch(setMyData({ ...params, params: selectedOption }));
    dispatch(setPrefix({ ...myPrefix, prefix: tool }));
  }

  return (
    <div className="Container">
      <div className="title">
        <p className="p1">Phantom</p>
        <p className="p2">Pentest</p>
      </div>

      <div className="optionsContainer">
        <div className={`options ${activeSection === 0 ? "active" : ""}`} onClick={() => handleSectionClick(0)}>
          <div className="childSectionHead" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <Home2 size="26" color="white" />
            <Link to="/" className="textOptions" style={{ textDecoration: 'none' }}>
              <p>Home</p>
            </Link>
          </div>
        </div>
        <div className={`options ${activeSection === 1 ? "active" : ""}`} onClick={() => handleSectionClick(1)}>
          <div className="childSectionHead" style={{ display: "flex", paddingLeft: "20px", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <LocationDiscover size="26" color="white" />
            <p className="textOptions">Discovery</p>
          </div>
          <div className={`childSections ${activeSection === 1 ? "visible" : ""}`}>
            <div style={{ display: "flex", flexDirection: "column", }}>
              <Link to="/discovery" className="textOptions" style={{ textDecoration: 'none' }} onClick={() => handleToolSelection('subfinder')}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
                  <ArrowRight2 size="18" color="black" />
                  <p className="childSectionsText">subfinder</p>
                </div>
              </Link>
              <Link to="/" className="textOptions" style={{ textDecoration: 'none' }} >
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
                  <ArrowRight2 size="18" color="black" />
                  <p className="childSectionsText">naabu</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={`options ${activeSection === 2 ? "active" : ""}`} onClick={() => handleSectionClick(2)}>
          <div className="childSectionHead" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <Scanner size="26" color="white" />
            <p className="textOptions">Enrich</p>
          </div>
          <div className={`childSections ${activeSection === 2 ? "visible" : ""}`}>
          <div style={{ display: "flex", flexDirection: "column", }}>
              <Link to="/Httpx" className="textOptions" style={{ textDecoration: 'none' }} >
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
                  <ArrowRight2 size="18" color="black" />
                  <p className="childSectionsText">Httpx</p>
                </div>
              </Link>
            </div>
       
          </div>
        </div>
        <div className={`options ${activeSection === 3 ? "active" : ""}`} onClick={() => handleSectionClick(3)}>
          <div className="childSectionHead" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <Microscope size="26" color="white" />
            <p className="textOptions">Detect</p>
          </div>
          <div className={`childSections ${activeSection === 3 ? "visible" : ""}`}>
            <p className="childSectionsText">nuclei</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
