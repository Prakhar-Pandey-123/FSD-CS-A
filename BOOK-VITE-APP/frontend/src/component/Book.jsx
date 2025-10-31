import React from "react"
import './Book.css'
const Book=({b})=>{
    console.log(b);
    console.log(b.title)
    console.log(b.price)
    return(
        <div className="card">
            <img src="https://imgs.search.brave.com/gR3hgOglVGEO1PeNUvtPVlCWMmYIIxcmQkQEKPoHATw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/NTk1ODc4Ni9waG90/by9mbGF0LWxheS1m/cm9tLW1hbnktYm9v/a3Mta25vd2xlZGdl/LWVkdWNhdGlvbi1z/dHVkZW50LXNjaG9v/bGJveS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cUxVV1Fn/bzlkNmdOOUpObTdJ/Y2pyaVJRWjR4bUx6/YmRxRTRWbmFnWlBD/Zz0" alt="" width={200} height={200}></img>
            <h3>
                Title: {`${b.title}`}
            </h3>
            <h4>Price: {b.price}</h4>
            <button>ADD TO CART</button>
        </div>
    )
}
export default Book