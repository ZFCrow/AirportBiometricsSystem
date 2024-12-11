import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import { useTranslation } from 'react-i18next'; // Import i18next for translations
import fingerImage from './assets/Fingerprint scan.png'; // Assuming you have a finger image in your assets folder

const FingerScanner = () => {
  const { t } = useTranslation(); // Initialize translation
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Handle key presses for switching pages
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === '1') {
        navigate('/fingerScanning'); // Redirect to another page when '1' is pressed
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Cleanup on unmount
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300 text-center font-sans">
      {/* Image of finger to scan */}
      <img src={fingerImage} alt={t('fingerToScan')} className="w-64 h-auto mb-4" />
    </div>
  );
};

export default FingerScanner;
