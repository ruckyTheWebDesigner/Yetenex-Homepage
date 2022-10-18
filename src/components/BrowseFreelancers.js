import { Button } from "@mui/material";
import React from "react";
import freelancesvg from "../assets/images/browse_talent.png";

function BrowseFreelancers() {
  return (
    <div className='md:px-14 xl:px-44'>
      <div className='flex flex-col-reverse md:flex-row items-center px-6 sm:px-10 md:px-0 space-x-10 md:space-x-24 space-y-5 space-y-reverse'>
        <div className='flex flex-col items-center space-y-6 md:items-start'>
          <h1 className='text-xl lg:text-4xl font-semibold'>
            Browse And Hire Top Freelancers
          </h1>
          <p>Hire freelancers based on verified reviews</p>
          <Button variant='outlined'>Browse talents</Button>
        </div>

        <div className='md:px-10 lg:px-40'>
          <img className=' mb-10 ' src={freelancesvg} alt='freelancesvg' />
        </div>
      </div>
    </div>
  );
}

export default BrowseFreelancers;
