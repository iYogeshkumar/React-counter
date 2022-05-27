import React, { useState } from "react";



const Counter=()=>{

    
    const [count,setCount]=useState(0);

    const handleInc=()=>{
        setCount(count+1)
    }

    const handleDec=()=>{
        setCount(count-1)
    }

    const handleDouble=()=>{
        setCount(count*2)
    }
    if((count)%2==1){

    return(
        <>
        <div className="mid">
        <h1 className="red">{count}</h1>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
        <button onClick={handleDouble}>Double</button>


        </div>
       
        
        
        
        </>
    )
}
else{
    return(
        <>
        <div className="mid">
        <h1 className="green">{count}</h1>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
        <button onClick={handleDouble}>Double</button>


        </div>
  
        
        
        
        </>
    )
}
}
export default Counter