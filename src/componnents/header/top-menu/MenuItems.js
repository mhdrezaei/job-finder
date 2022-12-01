import React from 'react'
import './MenuItems.css'

function MenuItems({caption}) {
  return (
    <li className='menu-item' >{caption}</li>
    )
}

export default MenuItems