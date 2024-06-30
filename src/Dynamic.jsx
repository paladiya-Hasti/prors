import React, { useState } from 'react'

const Dynamic = () => {

    let[item,setitme]=useState([])
    const additem=()=>{
       
        const newitem=`item${item.length+1}`

        setitme([...item,newitem])
    }

  return (
    <div>
            <h2>Dynamic</h2>
            <button onClick={additem}>add item</button>
            <ul>
                {item.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
      </ul>


    </div>
  )
}

export default Dynamic