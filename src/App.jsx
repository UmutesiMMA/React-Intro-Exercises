import React from 'react'
import './index.css'

export default function App() {
  function alertMe(){
    return alert('Clicked!')
  }
  return (
    <>
    <button className='border-[1px] p-4 transition ease-in-out delay-200 hover:scale-x-105 hover:bg-blue-200 mx-[40%] mt-64' onClick={alertMe}>Click Me</button>
    </>
  )
}


