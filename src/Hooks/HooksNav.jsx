import { Link } from '@mui/material'
import React from 'react'
import "./Hooks.css"

export default function HooksNav() {
  return (
    <div className='NavDiv'>
      <Link to href="/" >UseRef</Link>
      <Link to href="/hookmemo">UseMemo</Link>
      <Link to href="/hookreducer">UseReducer</Link>
      <Link to href="/hookcallback">UseCallback</Link>
    </div>
  )
}
