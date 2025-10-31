import React from "react"
import Book from "./component/Book"
import "./App.css"
import {useState} from "react"

const App=()=>{
  const [count,setCount]=useState(0);
  const data=[{
    title:"Physics",
    price:"450"
  },
  {
    title:"math",
    price:"450"
  },
  {
    title:"chem",
    price:"450"
  }]
  return(
    <div className="app">
      <div className="heading">BOOK STORE</div>
      <div className="all">
    {
      data.map((b,i)=>(
        <Book key={i} index={i} b={b}></Book>
      ))
    }
    </div>

    <div className="counter">
    <button onClick={()=>setCount(count+1)}>+</button>
    <div>{count}</div>
    <button onClick={()=>setCount(count-1)}>-</button>
    </div>

    </div>
  )
}
export default App