import React from 'react'
import { useState } from 'react'

const Assisment = () => {
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Grapes' },
    { id: 6, name: 'Orange' }
  ];
  const[data,setData]=useState([])
    const handleChange=(e)=>{
       setData(e.target.value)
    }
    let item=items.filter((i)=>{
      return i.name.includes(data)
    })
  return (
    <div>
      <input type="text" name="text" id="text" value={data} onChange={handleChange} />
      {/* <h1>{arr}</h1> */}
    
      <ul>
          {item.length > 0 ? (
            item.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
     {/* {console.log('Filtered Items:', item)} */}
    </div>
  )
}

export default Assisment
