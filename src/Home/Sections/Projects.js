// Projects.js

import React from "react";
import "./Projects.css";
import psLogo from "./Images/PravahStudio.png";
import ccLogo from "./Images/CourseCrafter AI.png";
import cxLogo from "./Images/clinicx.png";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { FaCloud } from "react-icons/fa";
import { PiTreePalmBold } from "react-icons/pi";
import { FaCcStripe } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { FaUniversalAccess } from "react-icons/fa6";

import { FaExternalLinkSquareAlt } from "react-icons/fa";








export default function Projects() {
  return (
    <div className="projects-container">
      <div className="project-item pravahstudio-item">
        {" "}
        <div className="project-details">
          <h2 className="prjctname" >PravahStudio - Streaming Platform</h2>
          <p>
            <FaReact size={35} color="#61DBFB" /> &nbsp;
            <IoLogoNodejs size={35} color="green" /> &nbsp;
            <BiLogoMongodb size={35} color="green" />
            &nbsp;
            <FaCloud size={35} color="blue" />
          </p>
          <a className="btnlink" href="https://pravah-ghx9.vercel.app/"> <button className="details-button"><FaExternalLinkSquareAlt /> &nbsp; Access</button></a>
          <a className="btnlink" href="https://pravah-ghx9.vercel.app/"> <button className="details-button"><FaUniversalAccess /> &nbsp; About</button></a>
        </div>
        <div className="project-image">
          <img src={psLogo} alt="PravahStudio Logo" className="project-logo" />
        </div>
      </div>

      <div className="project-item">
        <div className="project-image">
          <img
            src={ccLogo}
            alt="CourseCrafter AI Logo"
            className="project-logo"
          />
        </div>
        <div className="project-details">
          <h2 className="prjctname" >CourseCrafter AI - Personalized Course Generator SaaS</h2>
          <p><FaReact size={35} color="#61DBFB" /> &nbsp;
          <IoLogoNodejs size={35} color="green" /> &nbsp;
          <PiTreePalmBold  size={35} color="orange" /> &nbsp;
          <FaCcStripe   size={35} color="blue" /> &nbsp;
          <BiLogoMongodb size={35} color="green" />
          </p>
          <a className="btnlink" href="https://course-crafter-ai.vercel.app/"> <button className="details-button"><FaExternalLinkSquareAlt /> &nbsp; Access</button></a>
          <a className="btnlink" href="https://pravah-ghx9.vercel.app/"> <button className="details-button"><FaUniversalAccess /> &nbsp; About</button></a>

          
        </div>
      </div>

      <div className="project-item clinic-management-item">
        {" "}
        <div className="project-details">
          <h2 className="prjctname" >Clinic Management System</h2>
          <p><FaPython  size={35} color="#3F76A5" /> &nbsp;
          <SiMysql size={35} color="#E59208" /> &nbsp;
          <SiAuth0 size={35} color="red"  />

          </p>
          <a className="btnlink" href="https://course-crafter-ai.vercel.app/"> <button className="details-button"><FaExternalLinkSquareAlt /> &nbsp; Access</button></a>
          <a className="btnlink" href="https://pravah-ghx9.vercel.app/"> <button className="details-button"><FaUniversalAccess /> &nbsp; About</button></a>
        </div>
        <div className="project-image">
          <img
            src={cxLogo}
            alt="Clinic Management System Logo"
            className="project-logo"
          />
        </div>
      </div>
    </div>
  );
}
