import { useState } from 'react'

import Geeting from './Geeting'
import Userprofile from './Userprofile'
import Dynamic from './Dynamic'

const App=()=> {
  let data={
    name:"hasti",
    age:24,
    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location:"surat",
    profileimg:"https://www.cyprus-hospitality-jobs.com/wp-content/uploads/job-manager-uploads/company_logo/2021/04/Hospitality-Professional-At-Work-web.jpg"
  }

  return (
    <>
      <div>
     
        <Geeting name="hasti paladiya"/>
        <Userprofile {...data}/>
        <Dynamic/>
      
        
        </div>
    </>
  )
}

export default App
