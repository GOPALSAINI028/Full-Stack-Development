/*import { useEffect} from "react";

function useEffectEvent(){
    const [count,setCount]=useState(0);

    console.log("component render");

    useEffect(()=>{
        console.log("starting timer");

        const id =setInterval(() =>{
            console.log("timer log(stale):",count);
        }
    }, 2000);

    return()=> clearInterval(id);
}, []);
return(
    <div>
     <h2>Broken Useeffect example</h2>
     <p>count:{count}</p>

     <button onclick ={()=> setCount(count+1)}>increase count</button>
    </div>
);
}
export default UseEffectEvent;

import { useState,useEffect,useEffectEvent } from "react";

function UseEffectEvent(){
const [count,setCount]=useState(0);

console.log ("component render");

const.logLatestCount=useEffectEvent(()=>{
    console.log("Timer log(Fresh):",count);
});

useEffect(()=>{
    console.log("starting Timer..");
    const id=setInterval(()=>{
        logLatestCount();
    },1000);
    return()=>clearInterval(id);
},[]);

return(
    <div>
        <h2> Fixed useEffectEvent Example</h2>
        <p>Count:{count}</p>

        <button onClick={()=> setCount(count+1)}></button>
    </div>
);
}

export default UseEffectEvent;*/