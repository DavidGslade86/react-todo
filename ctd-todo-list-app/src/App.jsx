import { useState } from 'react'
import './App.css'

function App() {

  const todoList = [
    {id:1,
    title:"Complete Assignment"},
    {id:2,
    title:"Complete Reading"},
    {id:3,
    title:"Annotate notes"},
    {id:4,
    title:"Watch Videos and update notes"}
  ]

  return (
    <>
      <h1 className="title">Todo List</h1>
      <ul className="list--items">
        {todoList.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </>
  )
}

export default App
