"use client"
import React, { useState } from 'react'

const page = () => {
    const [title, settitle]= useState("")
    const [desc, setdesc]= useState("")
    const [mainTask, setMainTask]= useState("")
    const submitHandler= (e)=>{
        e.preventDefault()
        setMainTask([...mainTask,{title, desc}])
        settitle("")
        setdesc("")
        console.log(mainTask)       
    }   
    
const deleteHandler = (i)=>{
    let copytask=[...mainTask]
    copytask.splice(i , 1)  
    setMainTask(copytask)
}

    let renderTask=<h2>No Task Available</h2>
if(mainTask.length > 0){    

    renderTask = mainTask.map((t, i) =>{

        return(
        <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex justify-between w-2/3'>
            <h3 className='text-2xl  font-bold'>{t.title}</h3>
            <h4 className='text-xl font-medium'>{t.desc}</h4>                    
        </div>
                
        
        <button 
        onClick ={()=>{
            deleteHandler(i)
        }}
        className='bg-red-400 text-white rounded py-2 px-2 font-bold'>
            Delete
        </button>
        </li>
        );
    });

}

    return (        

        <>
            <h1 className='bg-black text-white p-3 text-3xl text-center font-bold' >
                My TodoList 
                </h1>

            <form onSubmit={submitHandler} className='flex align-middle'>
                <input type="text" className=" text-3xl border-zinc-800 border-4 m-2 px-4 py-2  "
                placeholder='Enter Title Here' value={title} onChange={(e)=>{
                    settitle(e.target.value)
                }}
        
                />

        
            <form>
                <input type="text" className=" text-3xl border-zinc-800 border-4 m-2 px-4 py-4 "
                placeholder='Enter Description Here'
                value={desc} onChange={(e)=>{
                    setdesc(e.target.value)
        
                } }
                />

            </form>

            <button 
            className='bg-black font-bold rounded m-5 
            text-white 
            px-2 py-2 text-2xl'> Add Task</button>  

        </form>

        <hr/>

        <div className='p-8 bg-slate-200 '>

            <ul>
                {renderTask}
            </ul>
        </div>
        </>
    );  
};

    export default page 