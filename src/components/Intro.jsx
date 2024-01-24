import React from 'react';
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
      <div className="container mx-auto">
        <video
          autoPlay
          loop
          muted
          className="absolute h-[130%] w-dvw object-cover top-[-200px] lg:right-0 lg:bottom-0 -z-50"
        >
          <source src={BgVideo} />
        </video>
        <div className="flex flex-col lg:flex-row gap-x-60">
          <div className="flex-1 flex gap-10 flex-col justify-center items-center">
            <h1 className="text-[40px] font-bold lg:text-nowrap">
              Ancient Egypt International Relations
            </h1>
            <button className="text-[24px] border-[2px] border-white px-2 py-1 rounded-full">
              Publications
            </button>
          </div>
          <div className="flex-1">Boxes</div>
          <div className="flex-1 flex lg:flex-col justify-center lg:justify-end items-center ">
            <hr className="lg:h-[200px] lg:w-[1px] w-[100px] bg-white border-[3px] dark:bg-gray-700 lg:mb-3" />
            <div className="flex lg:flex-col gap-4 mx-3">
              <FaInstagram size={'2rem'} />
              <FaXTwitter size={'2rem'} />
              <CiYoutube size={'2rem'} />
            </div>
            <hr className="lg:h-[200px] lg:w-[1px] w-[100px] bg-white border-[3px] dark:bg-gray-700 lg:mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
