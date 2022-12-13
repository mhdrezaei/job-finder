import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../../context/context'
import './MenuItems.css'

function MenuItems({caption , link}) {
  const {dark} = useContext(Context);

  return (
    <li className='menu-item d-flex align-items-center' >
    <Link to={link} className={!dark ? 'menu-item-link light' : 'menu-item-link' } >{caption}</Link>
    </li>
    )
}

export default MenuItems