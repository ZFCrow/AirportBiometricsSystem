import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const FingerScanning = () => {
    const { t, i18n } = useTranslation(); // Initialize translation
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    // Function to handle speech synthesis
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

    // Function to handle key press once loading is complete
    const handleKeyPress = (event) => {
        if (!loading) {
            if (event.key === '1') {
                speak(t('scanSuccess'));
                navigate('/done');
            } else if (event.key === '2') {
                speak(t('scanFailed'));
                navigate('/');
            }
        }
    };

    // Simulate loading bar progress and speak scanning fingerprint
    useEffect(() => {
        speak(t('scanningFingerprint'));

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 10;
                } else {
                    setLoading(false);
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 200);

        return () => clearInterval(interval);
    }, [t, i18n.language]);

    // Add event listener for keypress once loading is complete
    useEffect(() => {
        if (!loading) {
            window.addEventListener('keydown', handleKeyPress);
        }
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [loading]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-300 text-center font-sans">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-700">
                {t('scanningFingerprint')}
            </h2>

            {/* Loading bar */}
            <div className="w-3/4 md:w-1/2 h-12 bg-gray-400 rounded-lg overflow-hidden mb-6">
                <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-green-500 rounded-lg transition-all duration-200"
                ></div>
            </div>


        </div>
    );
};

export default FingerScanning;
