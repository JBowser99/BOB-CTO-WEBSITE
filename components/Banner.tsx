'use client';

import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="overflow-hidden text-white font-extrabold uppercase py-1 flex items-center relative">
      <style jsx>{`
         @keyframes marquee {
          0% {
            transform: translateX(80%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-400 to-yellow-400 opacity-60"></div>
      <div className="w-full flex items-center relative z-10">
        <div className="marquee">
          <span className="mx-4">BUY $BOB</span>
          <span className="mx-4">BUY $BOB</span>
          <span className="mx-4">BUY $BOB</span>
          <span className="mx-4">BUY $BOB</span>
          <span className="mx-4">BUY $BOB</span>
          <span className="mx-4">BUY $BOB</span>
          <span className="mx-4">BUY $BOB</span>
          <span className="mx-4">BUY $BOB</span>
          <span className="mx-4">BUY $BOB</span>
          <span className="mx-4">BUY $BOB</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
