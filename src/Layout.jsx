import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import DocumentationOverlay from './DocumentationOverlay';

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gray-300 flex flex-col">
      {/* Place the LanguageSwitcher in a fixed header */}
      <header className="p-4 flex justify-end">
        <LanguageSwitcher />
      </header>
      
      {/* Main content area fills the rest of the screen */}
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>

      {/* Documentation Overlay with "Call for Assistance" button */}
      <DocumentationOverlay />
    </div>
  );
};

export default Layout;
