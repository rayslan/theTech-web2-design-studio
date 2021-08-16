import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <div className='logo'>[theTech.academy]</div>
        <nav className='nav'>
          <li>
            <a href='/design'>About</a>
          </li>
          <li>
            <a href='/strategy'>Program</a>
          </li>
          <li>
            <a href='/cases'>Success_Stories</a>
          </li>
          <li>
            <a href='/about'>Contact_Us</a>
          </li>
          <li>
            {/* <a href='/why'>Why work with us?</a> */}
          </li>
        </nav>
        <div className='contact'>
          <a href='/contact'>...open enrollment for | December 2021</a>
        </div>
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
