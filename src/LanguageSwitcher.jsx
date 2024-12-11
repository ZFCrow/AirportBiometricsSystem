import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageIcon } from '@heroicons/react/16/solid';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [showOverlay, setShowOverlay] = useState(false);

  // Function to change language and close overlay
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setShowOverlay(false); // Close overlay after selection
  };

  return (
    <div className="relative">
      {/* Trigger Button - Positioned in the top-right corner */}
      <button
        onClick={() => setShowOverlay(true)}
        className="fixed top-8 right-8 bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg shadow-lg flex items-center justify-center"
        aria-label={t('selectLanguage')} // Translated aria-label
      >
        <LanguageIcon className="w-6 h-6 mr-2" /> {/* Adjust icon size and spacing */}
        <span className="text-base font-medium">{t('language')}</span> {/* Translated button text */}
      </button>

      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center space-y-4">
            <h2 className="text-2xl font-bold mb-4">{t('chooseYourLanguage')}</h2>
            
            {/* Language Buttons in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => changeLanguage('en')}
                className="px-6 py-3 text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-700 shadow-md"
              >
                {t('english')}
              </button>
              <button
                onClick={() => changeLanguage('zh')}
                className="px-6 py-3 text-xl bg-red-500 text-white rounded-lg hover:bg-red-700 shadow-md"
              >
                {t('chinese')}
              </button>
              <button
                onClick={() => changeLanguage('ms')}
                className="px-6 py-3 text-xl bg-green-500 text-white rounded-lg hover:bg-green-700 shadow-md"
              >
                {t('malay')}
              </button>
              <button
                onClick={() => changeLanguage('hi')}
                className="px-6 py-3 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-700 shadow-md"
              >
                {t('hindi')}
              </button>
            </div> 

            {/* Close Overlay */}
            <button
              onClick={() => setShowOverlay(false)}
              className="mt-4 px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
            >
              {t('cancel')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
