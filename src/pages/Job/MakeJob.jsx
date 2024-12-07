import React, { useState } from 'react'
import { postCreateJobQuery } from '../../core/services/mutation/JobMutation'

const MakeJob = () => {

   


    const [jobTitle , setJobTitle] = useState()
    const [aboutJob , setAboutJob] = useState()
    const [companyWebSite , setCompanyWebSite] = useState()
    const [companyLinkdin , setCompanyLinkdin] = useState()
    const [workStartDate , setWorkStartDate] = useState()
    const [workEndDate , setWorkEndDate] = useState()
    const [inWork , setInWork] = useState()
    const [companyName , setCompanyName] = useState()
  

   const CreateJobMutation = postCreateJobQuery()

    const onSubmit = async (e) => {
      e.preventDefault();
  
      const create = {
     
        jobTitle : jobTitle,
        aboutJob : aboutJob,
        companyWebSite : companyWebSite,
        companyLinkdin : companyLinkdin,
        workStartDate : workStartDate,
        workEndDate : workEndDate,
        inWork : inWork,
        companyName : companyName,
  
      }
  
      CreateJobMutation.mutate(create)
  
    }


  return (<>
    <form className='bg-red-300 w-[300px] h-[500px] mx-auto ' onSubmit={onSubmit}>
      <input className='bg-neutral-300 border' onChange={(e)=>setJobTitle(e.target.value)}></input>
      <input className='bg-neutral-300 border' onChange={()=>setAboutJob()}></input>
      <input className='bg-neutral-300 border' onChange={()=>setCompanyWebSite()}></input>     
      <input className='bg-neutral-300 border' onChange={()=>setCompanyLinkdin()}></input>
      <input className='bg-neutral-300 border' onChange={()=>setWorkStartDate()}></input>
      <input className='bg-neutral-300 border' onChange={()=>setWorkEndDate()}></input>
     <button className='bg-red-400' onChange={()=>setInWork(true)}>true/false</button>
      <input className='bg-neutral-300 border' onChange={()=>setCompanyName()}></input>       

      <br/>
        
      <button className='bg-green' type='submit'>Submit</button>
    </form>
  </>
  
  )
}

export default MakeJob

