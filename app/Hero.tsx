'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowUp, FaArrowDown, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import MagicButton from '../components/magicButton';
import DexscreenerIcon from '@/assets/dexscreener.svg';
import DextoolsIcon from '@/assets/dextools.svg';
import Banner from '@/components/Banner';
import LoadingSpinner from '@/components/LoadingSpinner';
import ImageCarousel from '@/components/ImageCarousel';
import ThumbsUp from '@/components/ThumbsUp';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const images = document.querySelectorAll('img');
    let imagesLoaded = 0;

    images.forEach((img) => {
      if (img.complete) {
        imagesLoaded += 1;
      } else {
        img.addEventListener('load', () => {
          imagesLoaded += 1;
          if (imagesLoaded === images.length) {
            handleLoad();
          }
        });
        img.addEventListener('error', () => {
          imagesLoaded += 1;
          if (imagesLoaded === images.length) {
            handleLoad();
          }
        });
      }
    });

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative overflow-hidden">
      <Banner />
      <div className="h-screen flex items-center justify-center grid-background-1 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-pattern-1 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />
        <div className="pb-10 text-center flex flex-col items-center relative space-y-2">
          <div className="relative responsive-clamp">
            <Image
              src="/images/bobIcon3.png"
              alt="bobicon"
              width={800}
              height={100}
              className="responsive-clamp"
            />
          </div>
          <div className="relative responsive-clamp">
            <Image
              src="/images/bobLogoFaceOnly.png"
              alt="boblogofaceonly"
              width={400}
              height={100}
            />
          </div>
          <div className="relative mx-2 bg-blue-950/10 w-full max-w-xs rounded-3xl shadow-glow-effect animate-glow p-container">
            <p className="text-yellow-400 uppercase font-semibold">
              CA:
            </p>
            <p className="p-2 text-yellow-400 uppercase font-semibold break-words text-center">
              7qpKH1bkvoZPDGbtmjHa9opCGnzfeycD34iuDrJBpump
            </p>
          </div>
        </div>
      </div>
      <Banner />
      <section className="h-screen flex justify-center relative grid-background-2">
        <div className="flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="mt-32 text-center uppercase text-[40px] text-blue-300"
            words="Community Owned"
          />
          <TextGenerateEffect
            className="-mt-8 text-center uppercase md:tracking-wider text-sm lg:text-md text-blue-300"
            words="Community Operated $BOB"
          />
          <div className="flex flex-wrap justify-center gap-2">
            <a href="https://www.google.com/search?q=dex+tools" className="button-wrapper">
              <MagicButton
                title="$BOB ON"
                icon={<DextoolsIcon className="ml-2 w-6 h-6" />}
                position="right"
              />
            </a>
            <a href="https://x.com/bobctoofficial" className="button-wrapper">
              <MagicButton
                title="$BOB ON"
                icon={<FaXTwitter className="ml-2 w-6 h-6" />}
                position="right"
              />
            </a>
            <a href="https://t.me/bobentrysol" className="button-wrapper">
              <MagicButton
                title="$BOB ON"
                icon={<FaTelegram className="ml-2 w-6 h-6" />}
                position="right"
              />
            </a>
            <a href="https://dexscreener.com/solana/4tyyynpenkdo6qmcipopkdh1jsgwumbx9hbpk97zdijw" className="button-wrapper">
              <MagicButton
                title="$BOB ON"
                icon={<DexscreenerIcon className="ml-2 w-6 h-6" />}
                position="right"
              />
            </a>
          </div>
          <div className="static -mt-16 ">
            <Image
              src="/images/BOBILLIONAIRES.png"
              alt="bobillionaireslogo"
              width={400}
              height={0}
            />
          </div>
          <div className="static -mt-24">
            <Image
              src="/images/bobLogoFaceOnly.png"
              alt="boblogofaceonly"
              width={100}
              height={100}
            />
          </div>
          <div className="mb-32">
            <a href="#community-section" className="inline-block uppercase px-8 py-3 bg-blue-950/40 rounded-full text-white font-semibold hover:bg-blue-600">
              COME JOIN THE <span className="text-yellow-400">$BOB</span> COMMUNITY!
            </a>
            <div className="py-5">
              <FaArrowDown className="animate-bounce text-yellow-400 w-10 h-10 mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <Banner />
        <section id="community-section" className="min-h-screen flex flex-col items-center justify-center relative grid-background-3 p-4">
          <div className="flex flex-col items-center justify-center text-center">
            <TextGenerateEffect
              className="mt-0 text-center uppercase text-2xl md:text-4xl lg:text-[40px] text-blue-300"
              words="SHOW $BOB SOME LOVE!"
            />
            <TextGenerateEffect
              className="-mt-8 text-center uppercase stracking-wider text-sm md:text-lg lg:text-md text-blue-300"
              words="OFFICIAL COMMUNITY TAKEOVER"
            />
          <div className="my-4">
            <ThumbsUp />
          </div>
          <div className="relative w-full">        
            <div className="flex flex-wrap justify-center gap-6 md:gap-24 mt-4">
              <a href="https://x.com/bobctoofficial">
                <MagicButton
                  title="$BOB ON"
                  icon={<FaXTwitter className="ml-2 w-6 h-6" />}
                  position="right"
                />
              </a>
              <a href="https://t.me/bobentrysol" className="mb-2">
                <MagicButton
                  title="$BOB ON"
                  icon={<FaTelegram className="ml-2 w-6 h-6" />}
                  position="right"
                />
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-20">
            <a href="#meme-slide" className="inline-block uppercase px-8 py-3 bg-blue-950/40 rounded-full text-white font-semibold hover:bg-blue-600">
              MEME SLIDE SHOW <span className="text-yellow-400">BELOW</span>
            </a>  
            <div className="py-5">
              <FaArrowDown className="animate-bounce text-yellow-400 w-10 h-10 mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <div id="meme-slide" className="px-10 py-10 mx-auto my-auto grid-background-4">
        <div className="-mt-20">
          <Image
            src="/images/BOBILLIONAIRES.png"
            alt="bobillionaireslogo"
            width={400}
            height={0}
            className="mx-auto"
          />
        </div>
        <div className="-mt-16">
          <ImageCarousel />
        </div>
        <div>
          <TextGenerateEffect
            className="text-center uppercase md:tracking-wider text-sm lg:text-md text-blue-300"
            words="Community Operated $BOB"
          />
        </div>
        <footer className="bg-zinc-950/10 rounded-full p-2 mx-auto w-fit text-center text-sm text-yellow-500 font-semibold">
          <p>
            This website was created by the community for the community.
          </p>
        </footer>
      </div>
      <Banner />
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-950/40 rounded-full p-3 text-white hover:bg-blue-600"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}

      <style jsx>{`
        .responsive-text {
          font-size: clamp(1rem, 2.5vw, 2.5rem);
        }
        .responsive-button-text {
          font-size: clamp(0.75rem, 1.5vw, 1rem);
        }
        .responsive-clamp {
          width: clamp(150px, 50%, 300px);
          height: auto;
        }
        .grid-background-1 {
          background: radial-gradient(circle at center, rgba(135,210,250, 1), rgb(255,165,32, 0.6), rgba(255, 255, 255, 0));
          background-size: cover;
        }
        .grid-background-2 {
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0), rgba(11, 127, 171, 1), rgba(0, 31, 63, 0.8));
          background-size: cover;
        }
        .grid-background-3 {
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0), rgba(11, 127, 171, 1), rgba(0, 31, 63, 0.8));
          background-size: cover;
        }
        .grid-background-4 {
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0), rgba(11, 127, 171, 1), rgba(0, 31, 63, 0.8));
          background-size: cover;
        }
        .bg-pattern-1 {
          background-image: url('/images/skyPattern.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.5;
        }
        .space-y-2 > * + * {
          margin-top: -60px;
        }
      `}
      </style>
    </div>
  );
};

export default Hero;
