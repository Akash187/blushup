import React from 'react';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src='/images/blushup.png' alt='website-logo'/>
      </div>
      <div className="options">
        <div className="option">
          <span>For Retailers</span>
        </div>
        <div className="option">
          <span>Log in</span>
        </div>
        <div>
          <button className='btn'>
            <span >Sign up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
