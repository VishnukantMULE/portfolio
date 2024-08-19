import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import { GrResources } from "react-icons/gr";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { SiGoogledocs } from "react-icons/si";
import ContactModal from './ContactModal';
import { useNavigate } from "react-router-dom";
// import mylogo from '../../Assets/logo/profile.png'
import mylogosvg from '../../Assets/logo/vector/default-monochrome.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
  const [showContactModal, setShowContactModal] = useState(false);
  const navigate = useNavigate();


  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const brandVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const openContactModal = () => {
    setShowContactModal(true);
    setIsOpen(false);
  };



  return (
    <nav className="ffffff">
      <div className="navbar-container">

        <div className="navbar-brand">
          <motion.div
            variants={brandVariants}
            initial="hidden"
            animate="visible"
            whileHover="visible"
            transition={{ duration: 0.5 }}
          >
            {/* <a href="/">Vishnukant Mule</a> */}
            <img src={mylogosvg} alt="Vishnuknat mule" className='logoimag'/>


          </motion.div>
        </div>

        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {(isDesktop || isOpen) && (
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <button className='navbtn' onClick={() => navigate('/docs')}>&nbsp;Docs</button>
            <button className='navbtn' onClick={openContactModal}>&nbsp;Contact</button>
            <button className='navbtn' onClick={() => navigate('/resourses')}>&nbsp;Resources</button>
          </div>
        )}

        {showContactModal && <ContactModal closeModal={() => setShowContactModal(false)} />}
      </div>
      <hr className='navhr'/>
    </nav>
  );
};

export default Navbar;
