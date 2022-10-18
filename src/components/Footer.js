import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  // getting the current year
  const year = new Date().getFullYear();

  return (
    <div className='flex flex-col space-y-6 py-8 bg-primary px-5  md:px-14 xl:px-44'>
      <div className='py-8 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-14 border-b border-slate-300'>
        <div>
          <h1 className='text-slate-100 mb-4 font-semibold'>YETENEX</h1>
          <p className='text-slate-400'>
            Yetenex is a platform that connects freelancers and employers. We
            are a community of freelancers and employers who are passionate
            about what they do.
          </p>
        </div>
        <div>
          <h1 className='text-slate-100 font-semibold mb-4'>About</h1>
          <div className='text-slate-400 flex flex-col space-y-2'>
            <a href='#/'>Our Story</a>
            <a href='#/'>FAQ</a>
            <a href='#/'>Privacy</a>
            <a href='#/'>Terms of Service</a>
          </div>
        </div>
        <div>
          <h1 className='text-slate-100 font-semibold mb-4'>Support</h1>
          <div className='text-slate-400 flex flex-col space-y-2'>
            <a href='#/'>Contact Us</a>
            <a href='#/'>Help Center</a>
          </div>
        </div>
        <div>
          <h1 className='text-slate-100 mb-4 font-semibold'>Follow Us</h1>
          <div className='text-slate-400 grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4'>
            <a
              href='#/'
              className='bg-slate-500 p-2 rounded-full text-2xl text-white w-10'>
              <FaFacebookF />
            </a>
            <a
              href='#/'
              className='bg-slate-500 p-2 rounded-full text-2xl text-white w-10'>
              <FaTwitter />
            </a>
            <a
              href='#/'
              className='bg-slate-500 p-2 rounded-full text-2xl text-white w-10'>
              <FaInstagram />
            </a>
            <a
              href='#/'
              className='bg-slate-500 p-2 rounded-full text-2xl text-white w-10'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className='text-center text-slate-400'>
        <h1>&copy; {year} Yetenex. All rights reserved.</h1>
      </div>
    </div>
  );
}

export default Footer;
