import React from 'react';

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode; // Allow ReactNode to handle both string URLs and imported images
  position: 'left' | 'right';
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none" 
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-lg text-yellow-400 font-semibold backdrop-blur-3xl ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;

