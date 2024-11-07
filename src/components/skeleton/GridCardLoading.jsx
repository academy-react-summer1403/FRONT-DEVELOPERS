import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const GridCardLoading = () => {


 
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#000">
      <div 
          className="relative p-4 rounded-[15px] w-[265px] dark:bg-gray-700 overflow-visible 
          hover:bg-slate-50 mt-[80px] h-[305px] bg-slate-100 mb-5
              max-xl:w-[230px] max-xl:flex flex-wrap justify-center
              max-md:w-[255px] max-md:h-[320px]    
              max-sm:w-[250px] max-sm:p-2 max-sm:h-[310px]             
              max-2xl:-ml-6  
          "
      >
        {/* image skeleton  */}
        <div className="
          relative grid justify-items-center top-[-35px]
                border-2        rounded-xl h-[170px]   w-[100%]
        ">
          <Skeleton baseColor="#ebebeb" customHighlightBackground="linear-gradient(90deg, var(#ebebeb) 40%, var(#000000) 50%,
           var(#ffffff) 60%)"/>
        </div>

        {/* body skeleton  */}
        <div >
          <h3 className="grid grid-col-2">
            <Skeleton className="w-full h-3 grid justify-self-end top-[-10px] rounded-lg border mb-2"/>
          </h3>
          <p className="grid grid-cols-2">
            <Skeleton count={2} className="w-full h-2.5 grid grid-col-1 rounded-lg bg-slate-300 "/>
          </p>
          
          <div>
            <Skeleton className="w-full rounded-lg bg-slate-300"/>  
          </div>
           
        </div>
      
      </div>
    </SkeletonTheme>
             
  );
}

export default GridCardLoading


