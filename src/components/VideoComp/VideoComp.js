import React, { useRef, useEffect } from 'react';
import Video1 from './Beans.mp4';
import './VideoComp.css';

export default function VideoComp() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Ensure the video is muted and autoplayed when the component mounts
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play()
                .catch(error => {
                    console.error('Autoplay was prevented:', error);
                    // Handle or display a message that autoplay is prevented
                });
        }
    }, []);

    return (
        <>
            <div className="videoo">
                <video ref={videoRef} className="full-screen" loop>
                    <source src={Video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    );
}
