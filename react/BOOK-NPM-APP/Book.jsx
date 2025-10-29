import "./App.css"
function Book(){
    return(
        <div className="book">
            <img src="https://imgs.search.brave.com/oS2WcCTL-y7In1sviOCrBhG6DqRGS61FkSgB4EHCAgU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAw/NDY0NDQwLTAwMS9w/aG90by95b3VuZy13/b21hbi1ob2xkaW5n/LWJvb2stdXAtaW4t/YWlyLWxvdy1hbmds/ZS12aWV3LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0zTkhL/cFoyT1hVZGxfR0Ut/TmFOSkNId2tUNzJI/a0ZKWVVaSjd1cV9X/c2xFPQ" width="200" height="200" alt="alternate img "></img>
            <h3>Ttile: Physics</h3>
            <h4>Price: Rs 385/=</h4>
            <button>ADD TO CART</button>
        </div>
    );
}
export default Book