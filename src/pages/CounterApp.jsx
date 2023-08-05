import { useState } from "react"
import { Button } from "../components/Button"
import { Text } from "../components/Text"

export const CounterApp = ()=>{
    const [count , setCount ] = useState(0);
    //const [message, setMessage] = useState("Counter is ");
    const takeInput = (operationName)=>{
       
        if(operationName === '+'){
           
            setCount(count+1); // Re-Rendering
            
        }
        else if(operationName === '-'){
            
            setCount(count-1);
            
        }
    }
    return (<div>
        <Text msg="Welcome to Counter App" val = ""/>
        <Text msg = "Counter is " val  = {count}/>
        <Button label="+" opr = {takeInput}/>
        &nbsp;
        <Button label="-" opr = {takeInput}/>
    </div>)
}