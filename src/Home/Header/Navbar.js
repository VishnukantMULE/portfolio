import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import { GrResources } from "react-icons/gr";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

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

    return (
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

                <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {(isDesktop || isOpen) && (
                    <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                        <button className='navbtn' href="/">Home</button>
                        <button className='navbtn' href="/contact">Contact</button>
                        <button className='navbtn' href="/resources"> <GrResources />Resources</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
