import React from "react"
import Book from "./component/Book"
import "./App.css"

const App=()=>{
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
    </div>
  )
}
export default App