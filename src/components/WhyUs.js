import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaRegHandPointer } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

function WhyUs() {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
      }}
      className='px-5 md:px-14 xl:px-44 py-10 md:py-14'>
      <div className='flex flex-col justify-center items-center space-y-6'>
        <div className='text-center px-10 md:px-28 lg:px-72'>
          <h1 className='text-2xl lg:text-4xl font-semibold text-secondary mb-5'>
            Why Choose Us
          </h1>
          <p>
            We are the one of the best freelancing platform in the world. Here
            are some of the reasons why
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
          <Card
            variant='outlined'
            className='p-5 flex flex-col space-y-4 items-center md:items-start text-center md:text-left'>
            <div className='border border-secondary rounded-full w-14 h-14 p-4 flex flex-col justify-center items-center'>
              <AiOutlineFileSearch className='text-4xl' />
            </div>
            <h1 className='font-semibold text-secondary'>
              Verified Freelancer
            </h1>
            <p>
              we verify all our freelancers to ensure that they are real and
              have the skills they claim to have
            </p>
          </Card>
          <Card
            variant='outlined'
            className='p-5 flex flex-col space-y-4 items-center md:items-start text-center md:text-left'>
            <div className='border border-secondary rounded-full w-14 h-14 p-4 flex flex-col justify-center items-center'>
              <FaRegHandPointer className='text-4xl' />
            </div>
            <h1 className='font-semibold text-secondary'>Competitive Rates</h1>
            <p>
              Due to our competitive rates, you can hire a freelancer for as low
              as your budget
            </p>
          </Card>
          <Card
            variant='outlined'
            className='p-5 flex flex-col space-y-4 items-center md:items-start text-center md:text-left'>
            <div className='border border-secondary rounded-full w-14 h-14 p-4 flex flex-col justify-center items-center'>
              <MdSecurity className='text-4xl' />
            </div>
            <h1 className='font-semibold text-secondary'>Payment Security</h1>
            <p>
              We ensure that your money is safe and secure in escrow until the
              job is completed and you are satisfied
            </p>
          </Card>
          <Card
            variant='outlined'
            className='p-5 flex flex-col space-y-4 items-center md:items-start text-center md:text-left'>
            <div className='border border-secondary rounded-full w-14 h-14 p-4 flex flex-col justify-center items-center'>
              <BiSupport className='text-4xl' />
            </div>
            <h1 className='font-semibold text-secondary'>
              Disputes Resolution
            </h1>
            <p>
              Our support team is always available to help you resolve any
              issues you may have
            </p>
          </Card>
        </div>
      </div>
    </Box>
  );
}

export default WhyUs;
