import React from 'react'
import Hero from '../../ui/Hero'
import AllJobs from '../home/AllJobs'

function ShowAllJobs() {
  return (
    <div>
    <Hero>
      <h1 className="caption text-center mx-2">You can here see all jobs</h1>
    </Hero>
      <AllJobs/>
    </div>
  )
}

export default ShowAllJobs