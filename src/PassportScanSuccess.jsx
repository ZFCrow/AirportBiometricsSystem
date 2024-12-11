import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PassportScanSuccess = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

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

    useEffect(() => {
        speak(t('removePassport'));
        speak(t('proceedToNextStation'));

        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [t, i18n.language]);

    // Navigate once countdown reaches 0
    useEffect(() => {
        if (countdown <= 0) {
            navigate('/FaceScanner');
        }
    }, [countdown, navigate]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-300 font-sans">
            {/* Main Heading */}
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-red-500">
                {t('removePassport')}
            </h2>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-blue-700 mb-4">
                {t('proceedToNextStation')}
            </p>

            {/* Countdown */}
            <p className="text-2xl md:text-3xl text-red-500">
                {t('redirectingInSeconds', { countdown })}
            </p>
        </div>
    );
};

export default PassportScanSuccess;
