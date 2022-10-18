import { Avatar, Card } from "@mui/material";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { reviews } from "../utils/data";

import { motion } from "framer-motion";

function ReviewCard({ reviewNo }) {
  // get the reviews from the data.js file
  const [reviewsData] = React.useState(reviews);

  return (
    <>
      {reviewsData.slice(0, reviewNo).map((review) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          //   animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          key={review.id}
          whileHover={{
            y: -10,
          }}>
          <Card
            variant='outlined'
            className='flex flex-col space-y-4 py-4 px-2 sm:px-4 cursor-pointer'>
            <div className='flex items-center space-x-2'>
              <div>
                <Avatar src={review.image} />
              </div>
              <div>
                <h1 className='font-medium'>{review.name}</h1>
                <p className='text-xs'>{review.position}</p>
              </div>
            </div>

            <div className='flex'>
              <AiFillStar className='text-gold' />
              <AiFillStar className='text-gold' />
              <AiFillStar className='text-gold' />
              <AiFillStar className='text-gold' />
            </div>

            <div>
              <h1>{review.review}</h1>
            </div>
          </Card>
        </motion.div>
      ))}
    </>
  );
}

export default ReviewCard;
