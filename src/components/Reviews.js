import { Button } from "@mui/material";
import React from "react";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const [numbersofReviews, setNumbersofReviews] = React.useState(4);
  return (
    <div className='flex flex-col space-y-10 items-center bg-white dark:bg-darkbg  py-14 px-5 md:px-14 xl:px-44'>
      <div className='text-center flex flex-col space-y-4 px-6'>
        <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold'>
          Recent Review of Freelancers
        </h1>
        <p className='text-secondary'>
          Hire freelancers based on verified reviews
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
        <ReviewCard reviewNo={numbersofReviews} />
      </div>

      <Button
        variant='contained'
        onClick={() => setNumbersofReviews(numbersofReviews + 4)}>
        read more
      </Button>
    </div>
  );
}

export default Reviews;
