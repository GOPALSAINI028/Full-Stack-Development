/*import{ UseState} from "react";

function WithoutDefferedValue(){
    const [input ,SetInput]= UseState("");

    console.log ("Input:",input);

    //heavy rendering
    const List =Array(5000).fill(input);   

        <div>
            <h2> without useDEfferedValue</h2>
            <input placeholder="Type Here"
            onchange={(e)=>setInput(e.target.value)}/>
            {List.map(ClipboardItem,index )=>(
             <p key={index}>{item}</p>
    ))}
        </div>
    );
}
export default WithoutDefferedValue;

//code
function WithoutDeffered(){
    const[input,setInput]=useState("");
    const useDEfferedValue(input)
}*/