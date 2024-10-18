import { Fragment } from 'react'
import DashPanel from '../../components/dashboard/DashPanel'
import DarkMode from '../../components/DarkMode'


const Dashboard = () => {
  return (
    <Fragment >
        <div className='bg-red-500 dark:bg-gray-900 py-4 pb-10 px-10 min-w-[400px]
        max-md:px-8
        max-sm:px-2
        '>
           
            <DashPanel/>
            <DarkMode/>
        </div>
    </Fragment>
  )
}

export default Dashboard