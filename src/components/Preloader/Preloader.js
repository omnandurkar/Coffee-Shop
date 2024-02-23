import React, { useState, useEffect } from 'react';
import './Preloader.css'; // Import CSS for styling

export default function Preloader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 1000);

        // Hide the loader immediately when the component is mounted after 2 seconds
        window.addEventListener('load', () => {
            clearTimeout(timer);
            setShow(false);
        });

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader-container loading-text   ${show ? 'show' : 'hide'}`}>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

        </div>
    );
}
