import React from 'react';

const TestPage = () => {
  console.log('TestPage rendering...');
  
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          🎉 Test Page Working!
        </h1>
        <p className="text-gray-700 mb-4">
          If you can see this, React is working correctly.
        </p>
        <div className="bg-green-100 p-4 rounded border border-green-300">
          <p className="text-green-800 font-medium">
            ✅ React is rendering successfully
          </p>
          <p className="text-green-700 text-sm">
            The issue might be with the main dashboard components
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;

