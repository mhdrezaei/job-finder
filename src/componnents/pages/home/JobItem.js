import React from 'react'

function JobItem({title , src , salary , category , address}) {
  return (
    <div className='col-4' >
        <div className='job' >
            <div className='job__image-holder' >
                <img src={src} alt={title} className='job__image'/>
                <span className='job__category' > {category} </span>
            </div>
            <div className='job__info' >
                <h3 className='job__title' >{title}</h3>
                <p className='job__adress' >{address}</p>
            </div>
        </div>
    </div>
  )
}

export default JobItem