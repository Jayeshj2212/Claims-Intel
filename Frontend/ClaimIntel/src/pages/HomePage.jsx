import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileTerminal as FileAnalytics } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Claims Intelligence</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <FileAnalytics className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Claims Analysis</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Comprehensive analysis of claims data with detailed insights and trends.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 