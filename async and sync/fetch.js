
const url=`https://dummyjson.com/users?limit=10`
const pr=fetch(url)
pr.then((resp)=>{
   return resp.json()
}).then((data)=>{
    console.log("data:",data)
}).catch((error)=>{
    console.log("error:",error.message)
})
// we need two .then bcoz in first .then we are converting the info in json and when we are doing resp.json() then it also returns a promise so again we need to do .then