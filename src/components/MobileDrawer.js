import React from "react";
import { Button, Drawer } from "@mui/material";

function MobileDrawer({ open, setOpen }) {
  return (
    <div>
      <Drawer anchor='top' open={open} onClose={() => setOpen(false)}>
        <div className='flex flex-col items-center space-y-6'>
          <a href='#/' className=''>
            Hire Talents
          </a>

          <a href='#/' className=''>
            Find Jobs
          </a>
          <a href='#/' className=''>
            Recent Reviews
          </a>
          <a href='#/' className=''>
            Login
          </a>

          <a href='/#'>
            <Button variant='outlined' color='primary'>
              create account
            </Button>
          </a>
        </div>
      </Drawer>
    </div>
  );
}

export default MobileDrawer;
