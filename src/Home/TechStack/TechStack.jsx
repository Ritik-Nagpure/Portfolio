import React from 'react'
import { LogoList } from './TechData'

function TechStack() {

    const techIcons = LogoList.map((val, index) => {
        return (
            <div className='flex flex-col items-center' key={index}>>
            <img key={val.title} src={val.logo} className='rounded-full w-36 h-8 m-auto' />
            </div>
        )

    });

    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-lg'>
            {techIcons}
        </div>
    )
}

export default TechStack