import { Button } from "@mui/material";
import React from "react";
import InputSearch from "./InputSearch";

function DesktopNavBar() {
  return (
    <div className='flex justify-between space-x-5 dark:bg-darkbg  text-md font-medium items-center md:px-14 xl:px-44 py-5 '>
      <a href='/' className='text-2xl font-semibold'>
        YETENEX
      </a>

      <div className='flex space-x-4 xl:space-x-10 items-center'>
        <a href='/#' className=''>
          Hire Talents
        </a>
        <a href='/#'>Find Jobs</a>
        <a href='/#'>How it works</a>

        <a href='/#'>Recent Reviews</a>
        <a href='/#'>Login</a>
        <a href='/#'>
          <Button variant='outlined' color='primary'>
            create account
          </Button>
        </a>
      </div>
    </div>
  );
}

export default DesktopNavBar;
