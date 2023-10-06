import React from 'react'
import './index.css'

export default  function App() {
  let animals =  ['dog','cat','chicke','cow','sheep','horse']
  let animalElts = animals.map(animal=><li>{animal}</li>)
  return (
    <>
    <ul className='leading-9 list-disc p-12 marker:text-blue-400'>
      {animalElts}
    </ul>
    </>
  )
}


