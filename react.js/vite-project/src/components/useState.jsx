import { useState} from "react";

function useState(){
    const [count, setCount]= useState(0);

    console.log("Componet Rendered.count is:",count);

    return(
        <div>
            <h2>use state example </h2>
            <p>count :{count}</p>
            <button onClick={()=> setCount(count +1)}></button>
            increase count
        </div>
    )
}
export default useState