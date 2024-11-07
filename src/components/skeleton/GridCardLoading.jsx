import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GridCardLoading = ({cards}) => {

 
  return (
    Array(cards).fill(0).map((_, i)=>(
      <SkeletonTheme  baseColor="#cbd5e1" highlightColor="#f5f5f5" key={i}>
      <div 
           style={{boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)"}
          }
          className="relative p-4 rounded-[15px] w-[265px] dark:bg-gray-700 overflow-visible 
          hover:bg-slate-50 mt-[80px] h-[305px] bg-white mb-5
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
        <div >
          <h3>
            <Skeleton className="w-full h-3 grid justify-self-end top-[-10px] rounded-lg"/>
          </h3>

          <div className="grid grid-cols-2 gap-8 mb-2">
            <p className="grid grid-col-2">
              <Skeleton count={2} className="w-full h-2.5 grid grid-col-1 rounded-lg "/>
            </p>
            <p className="grid grid-col-2">
              <Skeleton count={2} className="w-full h-2.5 grid grid-col-1 rounded-lg "/>
            </p>
          </div>
          
          <div>
            <Skeleton className="w-full rounded-lg"/>  
          </div>
           
        </div>
      
      </div>
    </SkeletonTheme>
    ))
    
             
  );
}

export default GridCardLoading


