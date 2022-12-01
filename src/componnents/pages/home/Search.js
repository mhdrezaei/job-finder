import React from 'react'
import Hero from '../../ui/Hero'

function Search() {
  return (
    <Hero>

    <div>
        <p className='caption' >You can here search jobs</p>
        <form>
            <input type='text'/>
            <button>search</button>
        </form>
    </div>
    </Hero>
  )
}

export default Search