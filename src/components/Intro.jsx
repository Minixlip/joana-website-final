import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CiYoutube } from 'react-icons/ci';
import BgVideo from '../assets/bgvideo.mp4';

const Intro = () => {
  return (
    <section
      className="section"
      id="intro"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute h-[130%] w-[100%] object-cover top-[-200px] lg:right-0 lg:bottom-0 -z-10"
      >
        <source src={BgVideo} />
      </video>
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:gap-y-2 gap-y-20 gap-x-10">
          <div className="flex-1 flex gap-10 flex-col justify-center items-center">
            <h1 className="text-[42px] font-bold lg:text-nowrap">
              Ancient Egypt International Relations
            </h1>
            <button className="text-[24px] border-[2px] px-2 py-1 rounded-full">
              Publications
            </button>
          </div>
          <div className="w-[100%] mb-4 flex items-center lg:items-center justify-center flex-col gap-5">
            <div className="font-bold text-[30px]">
              <TypeAnimation
                sequence={[
                  'Nine Bows',
                  2000,
                  'Maat & Enemies',
                  2000,
                  'Foreigners in Literature',
                  2000,
                  'Diplomacy and External Policies',
                  2000,
                  'Women in Diplomacy',
                  2000,
                ]}
                speed={50}
                className="text-[white]"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="flex-1 flex lg:flex-col justify-center lg:justify-end items-center ">
            <hr className="lg:h-[200px] lg:w-[1px] w-[100px] bg-white border-[3px]  lg:mb-3" />
            <div className="flex lg:flex-col gap-4 mx-3">
              <FaInstagram size={'2rem'} />
              <FaXTwitter size={'2rem'} />
              <CiYoutube size={'2rem'} />
            </div>
            <hr className="lg:h-[200px] lg:w-[1px] w-[100px] border-[3px]  lg:mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
