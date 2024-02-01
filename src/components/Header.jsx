import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHandPointer, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [rightPosition, setRightPosition] = useState(-200);
  const [menuVisibility, setMenuVisibility] = useState('none');

  const toggleMenu = () => {
    setRightPosition((prevRightPosition) =>
      prevRightPosition === 0 ? -200 : 0
    );

    setMenuVisibility((prevVisibility) =>
      prevVisibility === 'flex' ? 'none' : 'flex'
    );
  };

  return (
    <header className=" ">
      <div className=" container m-auto flex pt-4 items-center">
        <div className="flex-1">
          <span className="text-[30px] lg:text-4xl font-bold">
            LEARN<span className="text-[--bcGold]">EGYPT</span>
          </span>
        </div>
        <div className="flex-1 flex justify-end mr-4">
          <ul className="hidden lg:flex lg:flex-1 list-none gap-4 justify-end lg:mt-4 lg:text-[22px] lg:justify-evenly font-semibold tracking-wide ">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <div className="lg:hidden sm:flex mr-8">
            <GiHamburgerMenu
              color="white"
              size={'32px'}
              onClick={toggleMenu}
              cursor={'pointer'}
            />
            <ul
              style={{
                right: `${rightPosition}px`,
                transition: '.6s ease-in',
                display: `${menuVisibility}`,
              }}
              className="text-[20px] flex-col items-end gap-10 absolute top-[0px] bg-slate-400 bg-opacity-50 h-screen z-[100] px-9 py-6"
            >
              <FaTimes
                color="white"
                size={'32px'}
                className="mt-[10px]"
                onClick={toggleMenu}
                cursor={'pointer'}
              />
              <li className="mt-[30px]">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
