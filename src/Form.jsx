import {useState} from  'react'
export default function Form(){
    const[data,setData] =  useState({
        firstName:'',
        lastName:''
    })
    function handleChange(event){
        let e = event.target
        setData((prevObj)=>{ return {
            ...prevObj,
            [e.name]:e.value
        }})
    }
    function handleClick(event){
        event.preventDefault()
        console.log(data)
        alert(`Hi ${data.firstName} ${data.lastName}`)
    }
    return(
        <form onSubmit={handleClick} className='flex flex-col items-center gap-12 mt-48'>  
            <input className='border-2 border-red-100 p-3 rounded-xl w-72' type="text" placeholder='First Name' name='firstName' onChange={handleChange} /> 
            <input className='border-2 border-red-100 p-3 rounded-xl w-72' type="text" placeholder='Last Name' name='lastName' onChange={handleChange}/> 
            <button className='border-2 border-red-300 p-4 w-44 rounded-full ' >Greet me</button>
        </form>
    )
}