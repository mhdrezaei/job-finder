import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItems.css'

function MenuItems({caption , link}) {
  return (
    <li className='menu-item' >
    <Link to={link} className='menu-item-link' >{caption}</Link>
    </li>
    )
}

export default MenuItems