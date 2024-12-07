

import {
  useCourseDash,
  useCourseDash2,
  useMyCourses,
  useReserv,
} from "../../../core/services/query/DashboardQuery";

import FirstPart from "../../../components/dashboard/stdDsh/FirstPart";
import SecondPart from "../../../components/dashboard/stdDsh/SecondPart";
import ThirdPart from "../../../components/dashboard/stdDsh/ThirdPart";

const StdDashboard = () => {
  const getReservInfo = useReserv();

  const getMyCourses = useMyCourses();

  const params = {
    RowsOfPage: 2,
    PageNumber: 1,
  };

  const getCourseDash = useCourseDash(params);

  const params2 = {
    RowsOfPage: 2,
    PageNumber: 3,
  };

  const getCourseDash2 = useCourseDash2(params2);

  return (
    <div
      className="px-8 py-2 
      max-lg:px-1
      max-sm:px-1
    "
    >
    
      <FirstPart getReservInfo={getReservInfo} getMyCourses={getMyCourses}/>
      <SecondPart />
      <ThirdPart getCourseDash={getCourseDash} getCourseDash2={getCourseDash2}/>
     
    </div>
  );
};

export default StdDashboard;
