import React from 'react'
import Button from './Button.jsx'
import './index.css'

export default function App(){
  return(
    <div className='flex gap-4 justify-center my-[25%] '>
    <Button  name='Button 1'/>
    <Button  name='Button 2'/>
    <Button  name='Button 3'/>
    </div>
  )
}


