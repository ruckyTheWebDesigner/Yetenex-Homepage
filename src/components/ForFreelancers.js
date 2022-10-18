import { Box, Button } from "@mui/material";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import reviewssvg from "../assets/images/reviews.svg";

function ForFreelancers() {
  return (
    <div className='md:px-14 xl:px-44'>
      <div className='flex flex-col md:flex-row items-center space-y-10 md:space-x-10 xl:space-x-28 px-6 sm:px-10 md:px-0 '>
        <div className='sm:max-w-md lg:max-w-lg'>
          <img src={reviewssvg} alt='reviews' />
        </div>
        <div className='flex flex-col items-center md:items-start space-y-6 text-center md:text-left'>
          <Box className='bg-winter text-secondary rounded-md p-1 flex flex-col items-center w-36'>
            For freelancers
          </Box>
          <h1 className='text-xl lg:text-4xl font-semibold'>
            Collect Reviews From Your Existing Clients and Get More Clients.
          </h1>
          <p>
            Get more clients by showing your past clients' reviews on your
            profile, it will take you less than 5 minutes to get started.
          </p>
          <Button
            variant='contained'
            className='flex items-center justify-center space-x-2 bg-secondary rounded-md text-white font-medium '>
            <a href='#/'>Create your profile</a>
            <IoIosArrowForward />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ForFreelancers;
