import "./App.css"; 
import Book from "./Book";
function App(){
    return(
        <div >
            <h1><center>book store</center> </h1>
            <div className="parent">
            <Book></Book>
            <Book></Book>
            <Book></Book>
            </div>
        </div>
    )
}
export default App