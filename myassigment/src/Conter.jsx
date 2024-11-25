import React, { useState } from 'react'

const Conter = () => {

    const [conterr,setConterr]=useState(0)
  return (
    <div>
      <h1>{conterr}</h1>
      <button onClick={()=>setConterr(conterr+1)}>increse</button>
      <button onClick={ ()=>setConterr(conterr-1)}>decrese</button>
    </div>
  )
}

export default Conter
