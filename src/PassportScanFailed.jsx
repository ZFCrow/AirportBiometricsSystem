import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import passportGif from './assets/insert_passport.jpg'; // Updated to match WelcomePage
import passportBio from './assets/biometric_page.jpg'; // Updated to match WelcomePage

const PassportScanFailed = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    // Function to handle speech synthesis for failure message
    const speak = (message) => {
        if ('speechSynthesis' in window) {
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(message);
            utterance.lang = i18n.language;
            utterance.pitch = 1;
            utterance.rate = 1;
            synth.speak(utterance);
        }
    };

    // Handle key press to restart scanning
    const handleKeyDown = (event) => {
        if (event.key === '1') {
            navigate('/passportScanning');
        }
    };

    // Initialize on mount to speak failure message and add keydown listener
    useEffect(() => {
        speak(t('wrongPageInserted'));
        speak(t('flipToCorrectPage'));

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate, t, i18n.language]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-[90vh] mx-auto p-4 bg-gray-150" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-red-500 mt-4 text-center">
                {t('wrongPageInserted')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-700 mt-2 text-center">
                {t('flipToCorrectPage')}
            </p>

            {/* Display Passport Images */}
            <div className="flex justify-center mt-8 w-full">
                <img
                    src={passportBio}
                    alt="Which Side Passport"
                    className="w-auto h-64 max-w-sm"
                />
                <img
                    src={passportGif}
                    alt="Insert Passport"
                    className="w-auto h-64 max-w-sm"
                />
            </div>
        </div>
    );
};

export default PassportScanFailed;
