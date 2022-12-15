import React, { useContext } from 'react'
import Context from '../../context/context'
function FooterCopyright() {
  const { dark } = useContext(Context)
  return (
    <div className='copyright' >
        <div className='container' >
            <div className='row' >
                <div className='col-1' ></div>
                <div className={!dark  ? 'col-10 text-center p-2 text-dark border-1 border-top border-dark' : 'col-10 text-center p-2 text-light border-1 border-top border-light' }>Allright reserved © 2023</div>
                <div className='col-1' ></div>
            </div>
        </div>
    </div>
  )
}

export default FooterCopyright