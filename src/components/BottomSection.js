import { Card } from "@mui/material";
import React from "react";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

function BottomSection() {
  return (
    <div className='py-14 bg-secondary md:px-14 xl:px-44'>
      <div className='flex flex-col space-y-6 items-center text-slate-100 px-5 md:px-28 lg:px-36 text-center'>
        <h1 className=' font-semibold text-xl md:text-3xl lg:text-4xl'>
          Let’s create a Yetenex profile and start collecting reviews from your
          client
        </h1>
        <p className=''>It won't take more than a minute to start.</p>
        <div className='flex space-x-3'>
          <a href='#/'>
            <Card className='p-1 md:p-2 font-semibold'>
              <FaGoogle className='text-2xl inline-block mr-1' />
              <span className='hidden md:inline-block'>Google</span>
            </Card>
          </a>
          <a href='#/'>
            <Card className='p-1 md:p-2  font-semibold text-secondary'>
              <FaLinkedin className='text-2xl inline-block mr-1' />
              <span className='hidden md:inline-block'>Linkedin</span>
            </Card>
          </a>
          <a href='#/'>
            <Card className='p-1 md:p-2  font-semibold'>
              <FaGithub className='text-2xl inline-block mr-1' />
              <span className='hidden md:inline-block'>Github</span>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
