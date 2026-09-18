// //Fetch API

// "use client";
// import { useState, useEffect } from "react";

// const [product, setProduct] = useState(null)
// export default function Client(){
// useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => setProduct(json));
// },[])

// if(!product){
//     return(
//         <h1>Loading Products........</h1>
//     )
// }
//     return(
//         <>
//         <h1>The Data recieved from API</h1>
//         <P>{product.title}</P>
//         <P>{product.body}</P>
//         </>
//     )
// }


"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>
    </div>
  );
}