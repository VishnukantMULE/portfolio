import React, { useState, useRef, useEffect } from 'react';
import './Skills.css'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si"
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


import { FaDocker } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { SiCockroachlabs } from "react-icons/si";
import { SiApachecassandra } from "react-icons/si";

import { SiAuth0 } from "react-icons/si";


import { DiNginx } from "react-icons/di";

const skillsList = [
    FaReact,
    FaNodeJs,
    SiPython,
    IoLogoJavascript,
    SiTypescript,
    SiMysql,
    FaHtml5,
    SiCss3,
    SiMongodb,
    FaDocker,
    SiRedis,
    DiGoogleCloudPlatform,
    SiCplusplus,
    SiSocketdotio,
    FaGolang,
    FaGithub,
    FaLinux,
    SiCockroachlabs,
    SiApachecassandra,
    SiAuth0,
    DiNginx,
  ];



  const Skills = () => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX - translateX);
    };
  
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newTranslateX = e.clientX - startX;
  
        // Limit the translation to keep icons within the container
        const maxTranslateX = 0;
        const minTranslateX = containerRef.current.offsetWidth - containerRef.current.scrollWidth;
        const limitedTranslateX = Math.max(minTranslateX, Math.min(newTranslateX, maxTranslateX));
  
        setTranslateX(limitedTranslateX);
      }
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
      // eslint-disable-next-line
    }, [isDragging]);
  
    return (
      <div
        className='skill-container'
        ref={containerRef}
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab', overflow: 'hidden' }}
      >
        <div className='windowrec' style={{ transform: `translateX(${translateX}px)` }}>
          {skillsList.map((Skill, index) => (
            <div key={index} className='skill-item'>
              <Skill size={40} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;