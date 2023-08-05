export const Button = ({label, opr})=>{
    return (<button onClick={()=>{
        opr(label);
    }}>{label}</button>)
}