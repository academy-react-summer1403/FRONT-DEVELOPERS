import { motion } from "framer-motion";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardLoading = () => {
  return (
    <SkeletonTheme baseColor="#cbd5e1" highlightColor="#f5f5f5">
      <motion.div
        initial={{ x: 500, opacity: 0, y: -200 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
        style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
        className="max-xl:w-[500px] max-sm:mx-auto max-xl:h-[320px] max-lg:h-[340px]  w-[598px] p-[36px] dark:dark:bg-slate-700
            bg-[#FFFFFF]  rounded-[15px]  h-[395px]"
      >
        <h1>
          <Skeleton className="mb-8" />
        </h1>

        <p className="mb-12">
          <Skeleton count={3} />
        </p>

        <div className="grid grid-cols-2 gap-40">
          <p>
            <Skeleton />
          </p>
          <p>
            <Skeleton />
          </p>
        </div>

        <p className="w-1/2 mx-auto mt-4">
          <Skeleton className="h-14 " />
        </p>
      </motion.div>
    </SkeletonTheme>
  );
};

export default CardLoading;
