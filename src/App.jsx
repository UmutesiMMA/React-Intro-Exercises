import { useState } from 'react'
import './index.css'

export default function App() {
  const [count, setCount] = useState(0)
function handleClick(){
  setCount(count=>count+1)
}
  return (
    <div className='flex flex-col gap-12 m-24 items-center'>
    <p className='text-center'>Button has been clicked {count}   time{count>1?`s`:``} </p>
    <button className='border-2 border-purple-300 rounded-full p-3 w-44' onClick={handleClick}>Click me</button>
    </div>
  )
}


