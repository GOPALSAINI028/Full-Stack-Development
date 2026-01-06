import React, { useEffect, useState } from "react";

export default function LifecycleDemo() {
    const [count, setCount] = useState(0);

    console.log("component Rendered");
    //mounting

    useEffect(() => {
        console.log("compnent mounted (first time)");

        const timer = setInterval(() => {
            console.group("timer runnig....");
        }, 2000);

        // cleanup mounting 
        return () =>{}
            clearInterval(timer);
        console.log("component unmounted (cleanup timer)");
    }, []);
// updating -every render
useEffect(() => {
    console.log("componet updated");
});

//updating -specific state change
useEffect(() => {
    console.log("count updated:", count);
}, [count]);

return (
    <div style={{ marginTop: "20px" }}>
        <h2>lifecycle components</h2>
        <p>count:{count}</p>

        <button onclick={()  => setCount(count+1)}>
        increase count
    </button>
</div >
);
}