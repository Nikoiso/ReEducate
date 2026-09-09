import { useState } from "react";
import { type Input } from "../interfaces";

function firstInput({onAdd}: Input){
    const [inputValue, setInputValue] = useState("")

return (
    <div>
        <input
        type="text"
        placeholder="Note"
        value={inputValue}
        onChange={(el) => setInputValue(el.target.value)}
        />
        <button onClick={() =>{
            if(inputValue.trim()){
                onAdd(inputValue)
                setInputValue("")
            }
        }}>

        </button>
    </div>
)

}
export default firstInput