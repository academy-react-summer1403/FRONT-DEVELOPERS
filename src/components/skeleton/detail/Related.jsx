import { motion } from "framer-motion";
import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Related = ({ cards, custumStyle, imageStyle }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme key={i} baseColor="#cbd5e1" highlightColor="#f5f5f5">
        <motion.div
          initial={{ x: -300, opacity: 0, y: -300 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
            stiffness: 100,
            delay: 0.2,
          }}
          style={{ boxShadow: " 0px 1px 1px 0 rgba(0, 0, 0, 0.25)" }}
          className={`${custumStyle} max-lg:h-[90px] cursor-pointer max-md:justify-center  max-md:ml-1 gap-6
                 dark:bg-slate-800  bg-[#F8F8F8] rounded-[10px] flex justify-end w-full`}
        >
          <div className="mt-2 w-full">
            <Skeleton count={2} className="mb-1" />
          </div>
          <div className={`${imageStyle}`}>
            <Skeleton className={`${imageStyle}`} />
          </div>
        </motion.div>
      </SkeletonTheme>
    ));
};

export default Related;
