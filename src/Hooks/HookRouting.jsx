import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HooksNav from './HooksNav'
import HookUsememo from './HookUsememo'
import HookuseRef from './HookuseRef'
import HookUsereducer from './HookUsereducer'
import HookUsecallback from './HookUsecallback'


export default function HookRouting() {

  return (
    <div>
      <BrowserRouter>
        <HooksNav/>
      <Routes>
        <Route path='/' element={<HookuseRef/>}/>
        <Route path='/hookmemo' element={<HookUsememo/>}/>
        <Route path='/hookreducer' element={<HookUsereducer/>}/>
        <Route path='/hookcallback' element={<HookUsecallback/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
