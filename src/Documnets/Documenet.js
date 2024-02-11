import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { GrResources } from 'react-icons/gr';
// import { PiContactlessPaymentFill } from 'react-icons/pi';
import { IoDocumentText } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Certifications from "./Certifications";
import Educational from "./Educational";
import ProjectDoc from "./ProjectDoc";

import "./style/Doc.css";

export default function Document() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
  const [activeTab, setActiveTab] = useState("certifications");
  const navigate = useNavigate();

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const brandVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <motion.div
              variants={brandVariants}
              initial="hidden"
              animate="visible"
              whileHover="visible"
              transition={{ duration: 0.5 }}
            >
              <a href="/">Vishnukant Mule</a>
            </motion.div>
          </div>

          <div
            className={`menu-toggle ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {(isDesktop || isOpen) && (
            <div className={`navbar-links ${isOpen ? "active" : ""}`}>
              <button
                className={`navbtn ${
                  activeTab === "certifications" ? "underline" : ""
                }`}
                onClick={() => handleTabClick("certifications")}
              >
                <IoDocumentText />
                &nbsp;Certifications
              </button>
              <button
                className={`navbtn ${
                  activeTab === "educational" ? "underline" : ""
                }`}
                onClick={() => handleTabClick("educational")}
              >
                {" "}
                <IoDocumentText />
                &nbsp;Resume
              </button>
              <button
                className={`navbtn ${
                  activeTab === "projectDoc" ? "underline" : ""
                }`}
                onClick={() => handleTabClick("projectDoc")}
              >
                <IoDocumentText />
                &nbsp;Project Doc
              </button>
            </div>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {activeTab && (
          <motion.div
            className="document-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {activeTab === "certifications" && <Certifications />}
            {activeTab === "educational" && <Educational />}
            {activeTab === "projectDoc" && <ProjectDoc />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
