import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const home = () => {
  return (
<div className='lg:flex px-5 lg:px-20 pt-[2.9vh]'>
        <div className='hidden lg:block w-[25vw] relative'>
          <Sidebar/>
        </div>
        <div className='right-side-part'>
         
        </div>
        <div >
             <h2 className="bg-gray-300 text-blue-500">ayus
             </h2>
        </div>
    </div>
  )
}

export default home