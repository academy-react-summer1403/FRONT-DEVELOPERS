import React from 'react'
import pen from '../../../assets/dashboard/pen.svg'
import ProfileInformation from '../../../components/dashboard/editeprofile/ProfileInformation'
import { NavLink } from 'react-router-dom'
import { useUserProfile } from '../../../core/services/query/DashboardQuery'
import { deleteUserImg } from '../../../core/services/DashApi'
// import { deleteUserMainImg } from '../../../core/services/DashApi'


const StdInformation = () => {



  const userProfile = useUserProfile()
  console.log(userProfile.data?.currentPictureAddress)


  // const ImageId = userProfile.data
  // console.log(ImageId)

  // const deleteData = new FormData();
  // deleteData.append("DeleteEntityId", ImageId);

  // const deleteImg = deleteUserImg(token , deleteData)
  // console.log(deleteImg)


  return (
    <div style={{boxShadow:"0px 1px 1px 1px rgba(0,0,0,0.1)"}}
     className='relative rounded-xl mx-10 my-16 p-8 max-lg:px-4 min-w-[400px] bg-cyan-50/40 
      max-lg:px-1
      max-sm:px-1
    '>
       <img src={userProfile.data?.currentPictureAddress} className='absolute right-8 top-[-70px] w-[100px] h-[100px] rounded-full'/>
      <button name='DeleteEntityId' id='DeleteEntityId' className='bg-red-500 w-[70px] h-[30px] rounded-xl absolute top-[-30px] right-[150px]'>delete</button>

      {/* contenet:  */}
      <div className='grid gap-6'> 
        <ProfileInformation/>       

        {/* edite:  */}
        <button className='flex flex-row-reverse px-4 py-0.5 mx-auto border border-primary dark:bg-primary rounded-full  text-teal-800'>
          <NavLink to={"/Edit"}  className='flex flex-row-reverse gap-2'>
            <p>ویرایش</p>
            <img src={pen}/>
          </NavLink>
        </button>

      </div>

    </div>
  )
}

export default StdInformation