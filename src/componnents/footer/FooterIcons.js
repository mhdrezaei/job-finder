import React from 'react'
import {BsFacebook , BsInstagram , BsTwitter , BsTelegram , BsYoutube , BsWhatsapp} from 'react-icons/bs'
import './FooterIcons.css'
function FooterIcons() {
  return (
    <div className='col-6'>
        <ul className='d-flex justify-content-center list-icons' >
            <li><BsFacebook/></li>
            <li><BsInstagram/></li>
            <li><BsTwitter/></li>
            <li><BsTelegram/></li>
            <li><BsYoutube/></li>
            <li><BsWhatsapp/></li>
        </ul>
    </div>
  )
}

export default FooterIcons