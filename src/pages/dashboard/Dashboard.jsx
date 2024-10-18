import { Fragment } from 'react'
import DashPanel from '../../components/dashboard/DashPanel'


const Dashboard = () => {
  return (
    <Fragment >
        <div className='bg-gray-50 dark:bg-gray-900 py-4 pb-10 px-10 min-w-[400px]
        max-md:px-8
        max-sm:px-2
        '>
           
            <DashPanel/>
            
        </div>
    </Fragment>
  )
}

export default Dashboard