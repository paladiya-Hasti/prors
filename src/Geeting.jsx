 import 'react'
const Geeting=({name})=>{
    let  greetngMassage=name?   `${name}`:"welcome guest"
    return(
        <div>
           <h1>{greetngMassage}</h1>
        </div>

    )
}

export default Geeting