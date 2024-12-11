import React, { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import timer from './timer'; // Ensure this points to your timer module

const Done = () => {
    const { t } = useTranslation(); // Get translation function
    const navigate = useNavigate();

    useEffect(() => {
        // Stop the global timer when component mounts
        timer.stop();

        // Redirect back to main page after 5 seconds
        const timeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timeout); // Clean up timer on component unmount
    }, [navigate]);

    return (
        <div
            className="flex flex-col items-center justify-center w-full h-screen bg-gray-300 text-center"
            style={{
                fontFamily: 'Roboto, sans-serif',
                overflow: 'hidden', // Prevent scrolling
            }}
        >
            <h2
                className="text-8xl md:text-5xl lg:text-6xl font-bold mb-4"
                style={{ fontFamily: 'Roboto, sans-serif', color: '#3A5A9F' }}
            >
                {t('immigrationFinished')} {/* Translated text */}
            </h2>
            <p className="text-4xl md:text-3xl lg:text-4xl text-gray-600">
                {t('enjoyYourTrip')} {/* Translated text */}
            </p>
        </div>
    );
};

export default Done;
