import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Addtask() {
    const dispatch=useDispatch();
    const[name,setName]=useState('');
    function addt()
    {
        dispatch({type : 'ADD_TASK' , payload : name});
    }
  return (
    <div>
        <input style={{fontSize : '22px'}}  type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    
        <button  style={{fontSize : '20px'}} onClick={addt}> add song</button>
    </div>
  )
}
