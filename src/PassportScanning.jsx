import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import timer from './timer';

const PassportScanning = () => {
    const { t, i18n } = useTranslation();
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    // Simulate loading bar progress
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 10;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    // Handle key press for navigation
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (progress >= 100) {
                if (event.key === '1') {
                    navigate('/passportScanSuccess');
                } else if (event.key === '2') {
                    navigate('/passportScanFailed');
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [progress, navigate]);

    // Text-to-speech effect for the scanning process
    useEffect(() => {
            if ('speechSynthesis' in window) {
                const synth = window.speechSynthesis;
                const scanningMessage = t('scanningPassport');
                const utterance = new SpeechSynthesisUtterance(scanningMessage);
                utterance.lang = i18n.language;
                utterance.pitch = 1;
                utterance.rate = 1;
    
                // Cancel any ongoing speech
                synth.cancel();
                synth.speak(utterance);
            }
        }, [t, i18n.language]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-[90vh] mx-auto p-4 bg-gray-150" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {/* Header */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-700 mt-4 text-center">
                {t('scanningPassport')}
            </h1>

            {/* Loading Bar */}
            <div className="w-3/4 md:w-1/2 h-8 bg-gray-300 rounded-lg overflow-hidden mt-8">
                <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-green-500 rounded-lg transition-all duration-200"
                ></div>
            </div>

        </div>
    );
};

export default PassportScanning;
