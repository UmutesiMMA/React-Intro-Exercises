import React from 'react'
import Joke from './Joke.jsx'
import data from './jokesData.js'

export default function App() {
  let jokesElement  = data.map(elt=><Joke key={elt.id} setup={elt.setup} punchline={elt.punchline}/>  )

  return (
    <div className='flex gap-8 items-center justify-center px-9 text-center mt-48'>
      {jokesElement}
    </div> 
  )
}


