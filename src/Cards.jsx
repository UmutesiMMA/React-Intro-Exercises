import { useEffect,useState } from 'react'

export default function Cards(){
    const [cards,setCards] =  useState([]);
    useEffect(()=>{
        async function getCards(){ 
            let res =    await fetch('https://random-data-api.com/api/users/random_user?size=10')
            let data = await res.json()
            setCards(data)
        }
        getCards()
    },[])
    console.log(cards)
    const elements =  cards.map((object)=>(
        <div key={object.id} className='bg-white group-hover:[transform:rotateY(90deg)]'>
            <img src ={object.avatar} alt='avatar' />
            <p>{object.username}</p>
        </div>
    ))

    return(
        <>
        <button>Fetch Random</button>
        <div className='grid grid-cols-2 gap-6'>
            {elements}
        </div>
        </>
    )
}