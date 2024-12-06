import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsCardLoading = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme baseColor="#cbd5e1" highlightColor="#f5f5f5" key={i}>
        <div
          style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" }}
          className="relative rounded-t-full rounded-[15px] px-6 dark:bg-gray-700 overflow-visible 
          hover:bg-slate-50 mt-[80px] h-[400px] bg-white mb-5
              max-xl:w-[230px] max-xl:flex flex-wrap justify-center
              max-md:w-[255px] max-md:h-[320px]    
              max-sm:w-[250px] max-sm:p-2 max-sm:h-[310px]             
              max-2xl:-ml-6  
          "
        >
          {/* image skeleton  */}
          <div>
            <Skeleton className="rounded-[15px] w-full h-[170px] relative grid justify-items-center top-[-35px]" />
          </div>

          {/* body skeleton  */}
          <div>
            <h3>
              <Skeleton className="w-full h-3 grid justify-self-end top-[-10px] rounded-lg mb-6" />
            </h3>

            <p className="grid mb-8">
              <Skeleton
                count={3}
                className="w-full h-2.5 grid grid-col-1 rounded-lg "
              />
            </p>

            <div className=" w-full grid grid-cols-2 gap-20 my-4">
              <div>
                <Skeleton />
              </div>
              <div>
                <Skeleton />
              </div>
            </div>

            <div
              className=" pt-2  w-full
                     border-t-[1px] "
            >
              <p>
                <Skeleton />
              </p>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    ));
};

export default NewsCardLoading;
