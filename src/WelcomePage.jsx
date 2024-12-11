import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import passportGif from './assets/insert_passport.jpg';
import passportBio from './assets/biometric_page.jpg';// Adjust the path if needed
import timer from './timer'; // Ensure this points to your timer module

function WelcomePage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();



   // Set initial language to English and update when i18n.language changes
   useEffect(() => {
    i18n.changeLanguage('en');
  }, []);
  
  // Keydown event for '1' key to navigate to another page and start the timer
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === '1') {
        timer.start(); // Start the global timer when '1' is pressed
        navigate('/PassportScanning'); // Redirect to /PassportScanning
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [navigate]);

  // Text-to-speech effect for the welcome message
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const welcomeMessage = t('welcome');
      const utterance = new SpeechSynthesisUtterance(welcomeMessage);
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
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-red-500 mt-4 text-center" style={{ fontWeight: 700 }}>
        {t('checkIn')}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-700 mt-2 text-center" style={{ fontWeight: 400 }}>
        {t('welcome')}
      </p>

          <div className="flex justify-center mt-8">
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
}

export default WelcomePage;
