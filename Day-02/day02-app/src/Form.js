import { useState } from "react";

export default function Form(){
    const [name, setName] = useState("");
    return(

        <div>
            <input onChange={(e) => setName(e.target.value)} type="text" value={name}/>
        </div>
    );
}