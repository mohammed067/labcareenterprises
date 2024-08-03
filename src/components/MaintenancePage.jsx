// src/MaintenancePage.js

import React from 'react';

const MaintenancePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          LabCare Enterprises
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Our website is currently under maintenance.
        </p>
        <p className="text-md text-gray-500">
          We are working hard to bring you a better experience. Please check back soon!
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
