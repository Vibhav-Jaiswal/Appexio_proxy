import React from 'react'
import {location} from '../data/Location'

const Locations = () => {
  return (
    <div className=' flex flex-col gap-[91px] h-[651px] w-auto'>
        <span className='text-[36px] text-center font-semibold tracking-[-3%] text-[#1300D2]'>Top Appexio Proxy locations</span>
        <div className='flex gap-[70px] flex-wrap mx-2'>
            {location.map((item) => (
                <div key={item.id} className='w-[200px] h-[136px] border-[1px] rounded-lg flex justify-center items-center gap-4 border-[#25BBC5]'>
                <img className='w-[60px] h-[60px] rounded-lg' src={item.url} alt="logo" />
                <span className='text-[24px] font-[IBM Plex Sans Hebrew] tracking-[-3%]'>
                    <p>{item.name}</p>
                    <p>{item.ips}IPs</p>
                </span>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Locations