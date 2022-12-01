import React, { Fragment } from 'react'
import Hero from '../../ui/Hero'
import FormJob from './FormJob'

function AddJobs() {
  return (
    <Fragment>

    <Hero>
      <h1 className="caption text-center mx-2">You can here add your jobs</h1>
    </Hero>
    <FormJob/>
    </Fragment>
  )
}

export default AddJobs