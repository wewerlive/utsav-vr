import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-[#003f88] md:py-3">
      <nav className="flex flex-col md:flex-row items-center justify-between mx-5">
        <div className="flex flex-row items-center gap-x-4 md:mb-0 mb-2">
          {/* <img src="logo/logo-black.webp" alt="foot_logo" className="md:h-1/12 h-9" /> */}
          <div className='text-left'>
            <p className="font-mono text-xs md:text-base">Copyright © 2025 Twinverse Technology Pvt. Ltd.</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <a href="https://www.facebook.com/profile.php?id=61561217742330" target="_blank" rel="noopener noreferrer">
            <img src="fb.svg" alt="Facebook" className="h-6 md:h-10" />
          </a>
          <a href="https://x.com/utsav_vr" target="_blank" rel="noopener noreferrer">
            <img src="x.jpg" alt="Twitter" className="h-4 md:h-7 rounded-lg" />
          </a>
          <a href="https://www.instagram.com/utsav.vr" target="_blank" rel="noopener noreferrer">
            <img src="insta.svg" alt="Instagram" className="h-4 md:h-7" />
          </a>
          <a href="https://www.linkedin.com/showcase/utsavvr/" target="_blank" rel="noopener noreferrer">
            <img src="in.svg" alt="LinkedIn" className="h-6 md:h-10" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
