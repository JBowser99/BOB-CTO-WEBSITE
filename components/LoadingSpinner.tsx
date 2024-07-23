import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="spinner-container">
        <div className="spinner-layer"></div>
        <div className="spinner-layer"></div>
        <div className="spinner-layer"></div>
        <div className="spinner-layer"></div>
      </div>
      <style jsx>{`
        .spinner-container {
          position: relative;
          width: 80px;
          height: 80px;
        }
        .spinner-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 8px solid transparent;
          border-radius: 50%;
          animation: spin 1.2s linear infinite;
        }
        .spinner-layer:nth-child(1) {
          border-top-color: #ff3e96;
          animation-delay: -0.3s;
        }
        .spinner-layer:nth-child(2) {
          border-top-color: #36d1dc;
          animation-delay: -0.6s;
        }
        .spinner-layer:nth-child(3) {
          border-top-color: #ffafbd;
          animation-delay: -0.9s;
        }
        .spinner-layer:nth-child(4) {
          border-top-color: #c94b4b;
          animation-delay: -1.2s;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
