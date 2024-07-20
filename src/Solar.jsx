import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

export default function Solar() {
  return (
    <div>
      <Nav/>
      <Outlet/>
    </div>
  )
}
