import React, { useEffect, useRef, useState } from 'react';
import './MyService.css';

function MyService() {
    const step1Ref = useRef(null);
    const step2Ref = useRef(null);
    const step3Ref = useRef(null);
    const step4Ref = useRef(null);
    const step5Ref = useRef(null);
    
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const updateLines = () => {
            const steps = [
                step1Ref.current,
                step2Ref.current,
                step3Ref.current,
                step4Ref.current,
                step5Ref.current
            ];

            const newLines = steps.slice(0, -1).map((step, index) => {
                const nextStep = steps[index + 1];
                const stepRect = step.getBoundingClientRect();
                const nextStepRect = nextStep.getBoundingClientRect();

                return {
                    x1: stepRect.right,
                    y1: stepRect.top + stepRect.height / 2,
                    x2: nextStepRect.left,
                    y2: nextStepRect.top + nextStepRect.height / 2
                };
            });

            setLines(newLines);
        };

        updateLines();
        window.addEventListener('resize', updateLines);

        return () => window.removeEventListener('resize', updateLines);
    }, []);

    return (
        <div className='myservices'>
            <div className='service-step' ref={step1Ref}>
                <div className='service-data'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000">
                        <path d="M400.06-300Q508-300 584.5-376.13 661-452.25 661-561q0-107.92-76.5-183.46T400.06-820q-107.94 0-183.5 75.54T141-561q0 108.75 75.56 184.87Q292.12-300 400.06-300ZM371-448v-267h60v267h-60Zm-145 0v-184h60v184h-60Zm290 0v-143h60v143h-60ZM838-80 605-314q-42 35-94.24 54.5Q458.51-240 400-240q-133 0-226-93.5T81-560.7q0-133.71 92.8-226.5Q266.59-880 400.3-880q133.7 0 227.2 93T721-561q0 58.51-19.5 110.76Q682-398 647-356l233 233-42 43Z" />
                    </svg>
                    <br />
                    Requirement Analysis
                </div>
            </div>
            <div className='service-step' ref={step2Ref}>
                <div className='service-data'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000">
                        <path d="M392-80v-170l302-302q9-9 20.5-13t22.5-4q11 0 21.96 4.5Q769.93-560 779-551l84 84q9 9 13 20.5t4 22.69q0 11.18-4 22Q872-391 863-382L562-80H392Zm428-345-84-84 84 84ZM452-140h85l173-173-43-42-43-42-172 171v86Zm215-215-43-42 43 42 43 42-43-42ZM430-605l-42-42 83-83H316q-8 32-31 55t-55 31v328q39 10 64.5 42t25.5 74q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-41.76 25.5-73.88T170-316v-328q-39-10-64.5-42T80-760q0-50 35-85t85-35q42 0 74 25.5t42 64.5h155l-83-83 42-42 156 155-156 155Zm330-275q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-50 35-85t85-35ZM200-140q25.5 0 42.75-17.25T260-200q0-25.5-17.25-42.75T200-260q-25.5 0-42.75 17.25T140-200q0 25.5 17.25 42.75T200-140Zm0-560q25.5 0 42.75-17.25T260-760q0-25.5-17.25-42.75T200-820q-25.5 0-42.75 17.25T140-760q0 25.5 17.25 42.75T200-700Zm560 0q25.5 0 42.75-17.25T820-760q0-25.5-17.25-42.75T760-820q-25.5 0-42.75 17.25T700-760q0 25.5 17.25 42.75T760-700ZM200-200Zm0-560Zm560 0Z" />
                    </svg>
                    <br />
                    Planning
                </div>
            </div>
            <div className='service-step' ref={step3Ref}>
                <div className='service-data'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000">
                        <path d="m379-343 44-44-93-93 92-92-44-44-136 136 137 137Zm202 0 137-137-137-137-44 44 93 93-93 93 44 44ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z" />
                    </svg>
                    <br />
                    Development
                </div>
            </div>
            <div className='service-step' ref={step4Ref}>
                <div className='service-data'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000">
                        <path d="M480-180q72 0 123-50.5T654-353v-167q0-72-51-122.5T480-693q-72 0-123 50.5T306-520v167q0 72 51 122.5T480-180Zm-80-140h160v-60H400v60Zm0-173h160v-60H400v60Zm80 57h.5-.5.5-.5.5-.5.5-.5Zm0 316q-65 0-121-31t-83-89H160v-60h92q-7-26-7-52.5V-406h-85v-60h85q0-29 .5-57.5T254-580h-94v-60h120q14-28 37-49t51-35l-77-76 40-40 94 94q28-10 56.5-10t56.5 10l94-94 40 40-76 76q28 14 49.5 35.5T683-640h117v60h-94q9 28 8.5 56.5T714-466h86v60h-86q0 27 .5 53.5T708-300h92v60h-118q-29 57-84.5 88.5T480-120Zm.5-320Z" />
                    </svg>
                    <br />
                    Testing
                </div>
            </div>
            <div className='service-step' ref={step5Ref}>
                <div className='service-data'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M450-154v-309L180-619v309l270 156Zm60 0 270-156v-310L510-463.16V-154Zm-30-360 266-155-266-154-267 154 267 155ZM150-258q-14.25-8.43-22.12-22.21Q120-294 120-310v-340q0-16 7.88-29.79Q135.75-693.57 150-702l300-173q14.33-8 30.16-8 15.84 0 29.84 8l300 173q14.25 8.43 22.13 22.21Q840-666 840-650v340q0 16-7.87 29.79Q824.25-266.43 810-258L510-85q-14.33 8-30.16 8Q464-77 450-85L150-258Zm330-222Z" /></svg>              
                <br/>
                Deployment
                </div>
            </div>

            <svg className="line-svg">
                {lines.map((line, index) => (
                    <line
                        key={index}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="black"
                        strokeWidth="2"
                    />
                ))}
            </svg>
        </div>
    );
}

export default MyService;
