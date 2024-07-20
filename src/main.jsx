import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Solar1 from './components/Solar/Solar1.jsx'
import Solar2Business from './components/Solar/Solar2Business.jsx'
import Solar from './Solar.jsx'
import Solar2Small from './components/Solar/Solar2Small.jsx'
import Solar2Morn from './components/Solar/Solar2Morn.jsx'
import ThreeHundred from './components/Solar/ThreeHundred.jsx'
import Homepart from './components/Solar/Homepart.jsx'
import Semidetached from './components/Solar/Semidetached.jsx'
import Farm from './components/Solar/Farm.jsx'
import Mount from './components/Solar/Mount.jsx'
import Phase from './components/Solar/Phase.jsx'
import Year from './components/Boiler/Year.jsx'
import Radiator from './components/Boiler/Radiator.jsx'
import Fuel from './components/Boiler/Fuel.jsx'
import Boiler from './Boiler.jsx'
import Boiler2 from './components/Boiler/Boiler.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='' element = {<Home/>}/>

    <Route path='/solar1' element = {<Solar/>}>
      <Route path='' element = {<Solar1/>}/>
      <Route path='/solar1/business' element = {<Solar2Business/>}/>
      <Route path='/solar1/business/small' element = {<Solar2Small/>}/>
      
      <Route path='/solar1/farm' element = {<Farm/>}/>
      <Route path='/solar1/farm/mount' element = {<Mount/>}/>
      <Route path='/solar1/farm/mount/phase' element = {<Phase/>}/>
      
      <Route path='/solar1/business/medium/morn' element = {<Solar2Morn/>}/>
      <Route path='/solar1/business/medium/morn/threehund' element = {<ThreeHundred/>}/>
      <Route path='/solar1/homepart' element = {<Homepart/>}/>
      <Route path='/solar1/homepart/semidetached' element = {<Semidetached/>}/>
    </Route>


    <Route path='/boiler' element = {<Boiler/>}>
      <Route path='' element = {<Boiler2/>}/>
      <Route path='/boiler/year' element = {<Year/>}/>
      <Route path='/boiler/year/radiator' element = {<Radiator/>}/>
      <Route path='/boiler/year/radiator/fuel' element = {<Fuel/>}/>
    </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
