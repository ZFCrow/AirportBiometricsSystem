import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FaceScanner = () => {
  const videoRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [glowColor, setGlowColor] = useState('0px 0px 20px 10px rgba(0, 255, 0, 0.6)');
  const [errorKey, setErrorKey] = useState('');
  const [instructionKey, setInstructionKey] = useState('centerYourFace'); // Updated default key
  const navigate = useNavigate();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();
  }, []);

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
    const handleKeyDown = (event) => {
      switch (event.key) {
        case '1':
          setGlowColor('0px 0px 20px 10px rgba(0, 255, 0, 0.6)');
          break;
        case '2':
          setGlowColor('0px 0px 20px 10px rgba(255, 0, 0, 0.6)');
          break;
        case '3':
          setErrorKey('centerYourFace');
          speak(t('centerYourFace'));
          break;
        case '4':
          setInstructionKey('lookLower');
          speak(t('lookLower'));
          break;
        case '5':
          setInstructionKey('lookHigher');
          speak(t('lookHigher'));
          break;
        case '6':
          setInstructionKey('removeYourCap');
          speak(t('removeYourCap'));
          break;
        case '7':
          setInstructionKey('removeYourGlasses');
          speak(t('removeYourGlasses'));
          break;
        case '8':
          setErrorKey('success');
          speak(t('success'));
          setTimeout(() => {
            navigate('/done');
          }, 1000);
          break;
        case '9':
          setErrorKey('failed');
          speak(t('failed'));
          setTimeout(() => {
            navigate('/fingerScanner');
          }, 1000);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate, t, i18n.language]);

  const isSuccessMessage = errorKey === 'success';
  const isErrorMessage = errorKey && !isSuccessMessage;

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-300 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="relative flex items-center justify-center" style={{ boxShadow: glowColor }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          width="940"
          height="780"
          className="shadow-lg rounded-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-64 h-80 border-4 border-blue-500 rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Display error text in red, or success in green */}
      {isErrorMessage && (
        <p className="mt-4 font-bold text-red-500 text-2xl">{t(errorKey)}</p>
      )}
      {isSuccessMessage && (
        <p className="mt-4 font-bold text-green-500 text-2xl">{t(errorKey)}</p>
      )}

      {/* Instruction text in blue */}
      <p className="mt-4 font-bold text-blue-700 text-lg">{t(instructionKey)}</p>
    </div>
  );
};

export default FaceScanner;
