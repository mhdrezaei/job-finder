import React from 'react';
import imgSpinner from '../assets/preloader.gif'

function Spinner() {
  return (
    <img src={imgSpinner} alt='Loading...' style={{width:100,display:'block',margin:'auto'}} />
  )
}

export default Spinner