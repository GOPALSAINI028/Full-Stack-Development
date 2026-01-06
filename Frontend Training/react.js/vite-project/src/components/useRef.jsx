import{ useState,ueRef} from "react";

function useRef(){
    console.log ("component Renderd")


    //usestate (causes re-render)
 const [statecout ,setcount]=usestate(0);


 //useref
 const [refCount]=useRef(0);
  console.log("current statecount:",statecount);
   console.log("current statecount:",refCount,count);

   function increaseState(){
   console.log("Button (Usestate)clicked")
   setStateCount(statecount+1);
   console.log("StateCount update scheduled..");
   }

   function increaseState(){
    console.log("Button (usestate) clicked");
    setStateCount(stateCount+1);
    console.log("sateCount update scheduled");
  }
  function inceraseRef(){
    console.log("Button(useRef) clicked");
    refCount.current=refCurrent.current+1;
    console.log("refCount updated to:",refCount.current);
    console.log("No-render triggerd");
  }
  
  return (
    <div>
      <h2>useState vs useRef Difference</h2>

      <p>State Count (useState): {stateCount}</p>
      <p>Ref Count (useRef): {refCount.current}</p>

      <button onClick={increaseState}>Increase State</button>
      <button onClick={increaseRef}>Increase Ref</button>
    </div>
  );
}

export default UseRef;