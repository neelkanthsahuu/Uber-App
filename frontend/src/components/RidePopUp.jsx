import React from 'react'

const RidePopUp = (props) =>{
    return(
        <div>
            <h5 className='p-1 text-center w-[90%] absolute top-0 ' onClick={()=>{
      props.setRidePopupPanel(false)
        }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
          <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3 '>
                <img className='h-12 rounded-full object-cover w-12' src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947" alt="" />
               <h2 className='text-lg font-medium'>John Patel</h2>
         </div>
         <h5 className='text-lg font-semibold'>2.2 KM</h5>
          </div>

          <div className='flex  gap-2 justify-between flex-col items-center'>
         <div className='w-full mt-5'>
              <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className="ri-map-pin-user-fill"></i>
            <div>
                 <h3 className='text-lg font-medium'>562/11-A</h3>
                 <p className='text-sm -mt-1 text-gra-600'>Kankariya talab, Bhopal</p>
            </div>
        </div>
            <div  className='flex items-center gap-5 p-3 border-b-2'>
            <i class=" text-lg ri-map-pin-2-fill"></i>
            <div>
                 <h3 className='text-lg font-medium'>562/11-A</h3>
                 <p className='text-sm -mt-1 text-gra-600'>Kankariya talab, Bhopal</p>
            </div>
            </div>
            <div  className='flex items-center gap-5 p-3 '>
            <i className="ri-currency-line"></i>
            <div>
                 <h3 className='text-lg font-medium'>₹193.20</h3>
                 <p className='text-sm -mt-1 text-gra-600'>Cash Cash</p>
                   </div>
                 </div>
              </div>
           <div className='flex mt-5 w-full items-center justify-between'>
           <button  onClick={()=>{
             props.setRidePopupPanel(false)  
                
            }} 
            className=' mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
          
           <button  onClick={()=>{
              props.setConfirmRidePopupPanel(true)
            }} 
            className='  bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
          
              </div>
            </div>
        </div>
    )
}

export default RidePopUp