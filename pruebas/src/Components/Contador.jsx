import React, { useState } from "react";


export default function Contador() {
    //declarar variable de estado y su función
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>contador: {count}</h1>
            <button type="button" onClick={() => setCount(count + 1)}>Sumar</button>

        </>
    )

}