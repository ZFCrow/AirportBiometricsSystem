import React, { useState } from 'react';
import tutorialVideo from './assets/tutorialVideo.mp4';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useTranslation } from 'react-i18next';
import assistanceIcon from './assets/help-desk.png'; // Import assistance icon

const DocumentationOverlay = () => {
  const { t, i18n } = useTranslation();
  const [overlayVisible, setOverlayVisible] = useState(false);
  const synth = window.speechSynthesis; 
  // Function to open the overlay
  const openOverlay = () => {
    setOverlayVisible(true);

    // Use speech synthesis to announce all tutorial lines
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const messages = [
        t('tutorialContentLine1'),
        t('tutorialContentLine2'),
        t('tutorialContentLine3')
      ];
      
      // Speak each message one after another
      messages.forEach((message) => {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = i18n.language;
        utterance.pitch = 1;
        utterance.rate = 1;
        synth.speak(utterance);
      });
    }
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setOverlayVisible(false);
    if (synth) synth.cancel(); // Cancel speech synthesis when overlay is closed
  };

  return (
    <div>
      {/* "Call for Assistance" Button - Always Visible */}
      <button
        onClick={openOverlay}
        className="fixed bottom-8 right-8 bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg shadow-lg flex items-center justify-center"
        aria-label="Call for Assistance"
      >
        <img src={assistanceIcon} alt="Assistance Icon" className="w-8 h-8" />
        <span className="ml-2">{t('callForAssistance')}</span>
      </button>

      {/* Overlay for Assistance */}
      {overlayVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          role="dialog"
          aria-labelledby="overlayTitle"
          aria-describedby="overlayDescription"
        >
          <div className="bg-white p-6 rounded-md shadow-md max-w-[800px] w-full mx-4 relative">
            {/* Close Icon */}
            <button
              onClick={closeOverlay}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 id="overlayTitle" className="text-xl font-semibold text-blue-600 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              {t('tutorialTitle')}
            </h2>

            <div className="flex justify-center mt-4">
              <video
                controls
                className="max-w-full max-h-[500px] rounded-md"
                src={tutorialVideo}
                type="video/mp4"
                aria-describedby="overlayDescription"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Tutorial Content */}
            <ul className="mt-4 text-lg text-left list-disc list-inside space-y-2">
              <li>{t('tutorialContentLine1')}</li>
              <li>{t('tutorialContentLine2')}</li>
              <li>{t('tutorialContentLine3')}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentationOverlay;
