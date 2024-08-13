import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import img2 from '../../Assets/Images/vishnukant_mule_rc.jpg';
import img1 from '../../Assets/Images/vishnukant_mule_travel.jpg';
import img3 from '../../Assets/Images/vishnukant_mule_ggl.jpg';
// import img1 from '../../Assets/Images/1685885175222.jpeg';
// import img1 from '../../Assets/Images/myimag3.jpg';
// import img1 from '../../Assets/Images/LRM_20230909_155617.jpg';
// import img7 from '../../Assets/Images/vishnukant_mule_iphn.jpg';
import './Landing.css';

const Landing = () => {
    const [images, setImages] = useState([img1, img2, img3]);
    const controls = useAnimation();
    const imageControls = useAnimation();
    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const animateImage = async (clickedIndex) => {
        await imageControls.start({ x: clickedIndex === 0 ? 100 : -100, opacity: 0 });
        setImages((prevImages) => {
            const newImages = [...prevImages];
            const temp = newImages[1];
            newImages[1] = newImages[clickedIndex];
            newImages[clickedIndex] = temp;
            return newImages;
        });
        await imageControls.start({ x: 0, opacity: 1 });
    };

    const handleClick = async (clickedIndex) => {
        if (clickedIndex !== 1) {
            await animateImage(clickedIndex);
        }
    };

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    return (
        <div className="landing-container">
        <div className="imgcontainer">
        {images.map((image, index) => (
    <motion.div
        key={index}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="circle"
        style={{
            width: index === 1 ? '50vw' : '15vw',
            height: index === 1 ? '38vw' : '10vw', // Adjusted height for index 1 on mobile
            marginBottom: '20px',
        }}
        onClick={() => handleClick(index)}
    >
        {index === 1 ? (
            <motion.img
                src={image}
                alt="Vishnukant Mule"
                className="circle-image"
                animate={imageControls}
                variants={variants}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
        ) : (
            <img src={image} alt="Vishnukant Mule" className="circle-image" />
        )}
    </motion.div>
))}

        </div>

        <div className="mydetail">
                <h1 className="headingname">Vishnukant Mule</h1>
                <motion.div className="text-section">
                    <Typewriter
                        options={{
                            strings: ["Full Stack Developer"],
                            autoStart: true,
                            loop: true,

                            onInit: (typewriter) => {
                                typewriter
                                    .typeString("Full Stack Developer")
                                    .start();
                            },
                        }}
                    />
                    <p className='intro-para'> Hello, I'm Vishnukant Mule, a passionate Full Stack Developer with a
                        focus on creating innovative and efficient solutions. I have
                        experience in developing web applications and a strong foundation in
                        front-end and back-end technologies.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Landing;
