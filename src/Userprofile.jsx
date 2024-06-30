import 'react'
import { useState } from 'react'

const Userprofile=({name,age,bio,location, profileimg})=>{
    let [follow,setfollow]=useState(false)
    // let [bio,setbios]=useState("")
    // let[biodata, setbio]=useState("bio")

    const handlefollow=()=>{
        setfollow(!follow)
    };
    return(

        <div>
            <h2>Name:{name}</h2>
            <h3>Age:{age}<br/>Location:{location}</h3>
            <img src={profileimg} alt="" className='img1'/>
            <p>Bio:{bio}</p>
            <p>{bio}</p>

                <button>readmore</button>

                <button onClink={handlefollow}>{follow? "unfollow" : "follow"}</button>

        </div>
    )
}
export default Userprofile