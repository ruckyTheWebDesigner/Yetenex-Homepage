import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileDrawer from "./MobileDrawer";

function MobileNavbar() {
  // state for the drawer
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className='flex justify-between py-4 px-5'>
        <div>
          <a href='/' className='text-3xl font-semibold'>
            YETENEX
          </a>
        </div>
        <div>
          <div className='flex items-center'>
            <AiOutlineMenu
              onClick={() => setOpen(!open)}
              className='text-3xl text-secondary'
            />
          </div>
        </div>
      </div>

      <MobileDrawer open={open} setOpen={setOpen} />
    </>
  );
}

export default MobileNavbar;
