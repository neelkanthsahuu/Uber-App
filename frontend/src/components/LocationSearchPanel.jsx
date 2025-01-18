import React from 'react'

const LocationSearchPanel = (props) => {

    console.log(props);

    //sample array for location
    const locations = [
        "24B ,Near Kapoor's cafe ,Sheryians coding School,Bhopal",
        "24C ,Near Malholtra's cafe ,Sheryians coding School,Bhopal",
        "24B ,Near Singhai's cafe ,Sheryians coding School,Bhopal",
        "24A ,Near Sahu's cafe ,Sheryians coding School,Bhopal",

    ]
    return (
        <div>
            {/* this is just a simple data */}
            {
                locations.map(function(elem,idx){
                    return   <div  key={idx} onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }}
                     
                    className='flex gap-4 border-2 p-3 broder-gray-50 active:border-black rounded-xl item-center my-4 justify-start'>
                    <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                 <h4 className='font-medium'>{elem}</h4>
                </div>
                     

                })
            }
            
            
           
            
            
            
        </div>
    )
}

export default LocationSearchPanel