import React from 'react'
import './index.css'
export default function Joke(props){
  return(
    <div  className='bg-white   h-64 md:h-52  rounded-xl p-8 hover:scale-[1.05]  shadow-md '>
        <h3 className='text-2xl md:text-3xl font-bold mb-5 pt-8'>{props.setup}</h3>
        <p className='text-base md:text-xl'>{props.punchline}</p>
    </div>
  )

}