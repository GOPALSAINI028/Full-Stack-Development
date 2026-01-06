import{useState, useOptimistic,startTransition} from"react";

function UseOptimistic(){
    const [Likes,setLikes]= useState(0);

    const[optimisticLikes,addOptimisticLike]=useOptimistic(
        likes,
        (current) => current +1
    );

    async function handleLike(){

        startTransition(()=>{
            addOptimisticclick();

        });
        console.log("UI updated immediately!");
        await new Promise((r)=>setTimeout(r,2000));
        setLikes((prev)=>prev+1);
        console.log("server confirmed like");   
 }
 return(      
    <div>
        <h2>useOptimistic Example</h2>
        <p>Likes :{optimisticLikes}</p>
        <button onclick={handleLike}>Like</button>
    </div>
 );
}
export default UseOptimistic;