import React from 'react'
import './App.css'

export default function Button(props) {

  function handleClick() {
    return    alert(`You clicked on ${props.name}`)
  }
  return (
    <>
    <button className ='bg-green-300 p-2 border-[1px] rounded hover:scale-[1.2]' onClick={handleClick}>{props.name}</button>
    </>
  )
}


