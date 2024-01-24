import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHandPointer, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  let [rightPosition, setRightPosition] = useState(-200);

  return (
    <header className="container m-auto">
      <div className="flex pt-4 items-center">
        <div className="flex-1">
          <span className=" text-[30px] lg:text-4xl font-bold">
            LEARN<span className="text-[--bcGold]">EGYPT</span>
          </span>
        </div>
        <div className=" flex-1 flex justify-end mr-4">
          <ul className="hidden lg:flex list-none gap-4 justify-end  lg:text-[22px] lg:justify-evenly font-semibold tracking-wide ">
            <li className="">
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
          <div className="lg:hidden sm:flex ">
            <GiHamburgerMenu
              color="white"
              size={'32px'}
              onClick={() =>
                setRightPosition((prevRightPosition) =>
                  prevRightPosition === 0 ? -200 : 0
                )
              }
              cursor={'pointer'}
            />
            <ul
              style={{ right: `${rightPosition}px`, transition: '.6s ease-in' }}
              className=" text-[20px] flex flex-col items-end gap-10 absolute top-[0px] bg-slate-400 bg-opacity-50 h-screen z-[100] px-9 py-6"
            >
              <FaTimes
                color="white"
                size={'32px'}
                className="mt-[10px]"
                onClick={() =>
                  setRightPosition((prevRightPosition) =>
                    prevRightPosition === 0 ? -200 : 0
                  )
                }
                cursor={'pointer'}
              />
              <li className="mt-[30px]">
                {' '}
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
