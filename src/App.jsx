import React from 'react'
import List from './List'

export default function App() {
  let arr =['🐄 cow ','🐈 cat','🐔  chicken','🐑 sheep','🐎 horse']
  let animalList  = arr.map(animal=><List name={animal}></List>)
  return (
    <>
    {animalList}
    </>
  )
}


