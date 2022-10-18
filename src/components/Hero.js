import { Box, Button, Card } from "@mui/material";
import React from "react";

import { BsSearch } from "react-icons/bs";
import illustration from "../assets/images/desk-illustration.svg";

function Hero() {
  return (
    <Box
      sx={{
        height: "42vh",
      }}
      className='md:px-14 xl:px-44'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-12 md:py-14 lg:py-16'>
        <div className='flex flex-col space-y-6 px-5 md:px-0'>
          <div>
            <h1 className='text-3xl md:text-4xl mb-5 text-secondary font-semibold'>
              Find The Best Freelancers For Your Business
            </h1>
            <p>
              Millions of people use Yetenex to turn their ideas into reality.
            </p>
          </div>

          <div className='flex w-full space-x-2'>
            <input
              type='search'
              className='px-3 text-secondary w-full py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent'
              name=''
              placeholder={`Try "WordPress Developer or "Logo Designer"`}
              id=''
            />
            <Button variant='outlined'>
              <BsSearch />
            </Button>
          </div>

          <div className='flex space-x-3 items-start md:items-center'>
            <p className='pt-1 md:pt-0'>Popular</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
              <a href='#/'>
                <Card
                  className='p-1 flex flex-col items-center'
                  variant='outlined'>
                  Logo Designer
                </Card>
              </a>
              <a href='/#'>
                <Card
                  className=' p-1 flex flex-col items-center'
                  variant='outlined'>
                  Web Developer
                </Card>
              </a>
              <a href='#/'>
                <Card
                  className=' p-1 flex flex-col items-center'
                  variant='outlined'>
                  UX Designer
                </Card>
              </a>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <img src={illustration} alt='' />
        </div>
      </div>
    </Box>
  );
}

export default Hero;
