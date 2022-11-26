import React, { useState } from 'react'

function NavBar() {
    const current = new Date();
    const time = current.toLocaleString();
    const [cTime, setCTime] = useState(time)
    setInterval((date) => {
        setCTime(new Date().toLocaleString())
    }, 1000)

    return (
        <div className='flex justify-between items-center md:flex md:justify-between bg-gray-400 w-full p-6 z-[999]'>
            <div className=' font-bold text-4xl'>NewsApp 📰</div>
            <div className=' flex flex-col text-center font-medium text-lg'><div >Date&Time</div>{cTime}</div>
        </div>
    )
}

export default NavBar
