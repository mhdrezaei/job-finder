import React, { useContext } from 'react'
import Context from '../../context/context'
import TopHeader from './top-header/TopHeader'
import Menu from './top-menu/Menu'

export default function Header() {
  const {dark} = useContext(Context)
  return (
<header className= {!dark ? 'header light' : 'header'} >
      <TopHeader/>
      <Menu/>
    </header>  )
}
