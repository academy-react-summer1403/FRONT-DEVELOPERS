import React from 'react'
import ProfileInformation from '../../../components/dashboard/editeprofile/ProfileInformation'
import { NavLink } from 'react-router-dom'
import { useUserProfile } from '../../../core/services/query/DashboardQuery'




const StdInformation = () => {



  const userProfile = useUserProfile()
  console.log(userProfile.data?.currentPictureAddress)


  return (
    <div style={{boxShadow:"0px 1px 1px 1px rgba(0,0,0,0.1)"}}
     className='relative rounded-xl mx-10 my-16 p-8 max-lg:px-4 min-w-[400px] bg-primary/5 
      max-lg:px-1
      max-sm:px-1
    '>
       <img src={userProfile.data?.currentPictureAddress} className='absolute right-8 top-[-70px] w-[100px] h-[100px] rounded-full'/>
  

      {/* contenet:  */}
      <div className='grid gap-6'> 
        <ProfileInformation/>       

        {/* edite:  */}
        <button className='flex flex-row-reverse px-4 py-0.5 mx-auto border border-primary dark:bg-primary rounded-full  text-darkgreen'>
          <NavLink to={"/Edit"}  className='flex flex-row-reverse gap-2'>
            <p>ویرایش</p>
            <svg className='mt-1' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_102_8011)">
            <path d="M8.2095 2.26586C8.6442 1.7949 8.86155 1.55942 9.09249 1.42206C9.64975 1.09063 10.336 1.08032 10.9026 1.39487C11.1374 1.52523 11.3614 1.75409 11.8094 2.21179C12.2575 2.6695 12.4815 2.89835 12.6091 3.13822C12.9171 3.717 12.907 4.41798 12.5825 4.98726C12.4481 5.22319 12.2175 5.44522 11.7565 5.88927L6.27102 11.1727C5.39735 12.0142 4.9605 12.435 4.41454 12.6482C3.86857 12.8614 3.26837 12.8457 2.06796 12.8144L1.90464 12.8101C1.5392 12.8005 1.35648 12.7958 1.25027 12.6752C1.14405 12.5547 1.15855 12.3685 1.18755 11.9963L1.2033 11.7942C1.28493 10.7464 1.32574 10.2226 1.53034 9.75163C1.73493 9.28071 2.08784 8.89839 2.79367 8.13364L8.2095 2.26586Z"  className='stroke-darkgreen' stroke-linejoin="round"/>
            <path d="M7.5835 2.33398L11.6668 6.41732"  className='stroke-darkgreen' stroke-linejoin="round"/>
            <path d="M8.1665 12.834H12.8332" className='stroke-darkgreen'  stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_102_8011">
            <rect width="14" height="14" fill="white"/>
            </clipPath>
            </defs>
            </svg>

          </NavLink>
        </button>

      </div>

    </div>
  )
}

export default StdInformation