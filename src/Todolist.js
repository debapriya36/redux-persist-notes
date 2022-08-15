import React from 'react'
import { useSelector } from 'react-redux'

export default function Todolist() {
    const taskobj=useSelector(store=>store.taskReducer);
    const tasklist=taskobj.tasklist.map(i=>{
        return <h2>{i}</h2>
    })
  return (
    <div>
       <h1>
        Added Songs :
       </h1>
       {tasklist}
    </div>
  )
}
