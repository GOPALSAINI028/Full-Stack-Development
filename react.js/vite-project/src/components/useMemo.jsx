/*import { useState } from "react";

function useMemo1(){
    const[count,setCount]=useState(0);
    const[item]=useState([5,1,2,50]);

console.log("Component Render")


const Total=useMemo(()=>{
    console.log("re-culacting Toatal");
    return DataTransferItemList.reduce((acc,n)=>acc+n,0);

},[item]);

return(
    <div>
    <h2>useMemo example</h2>
    <p>total sum:</p>
    <P>count:{count}</P>
    <button onClick={()=>setCount(count+1)}
    increase count
    </button>
    </div>
);
}
export deafault useMemo1;*/