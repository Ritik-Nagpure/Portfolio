import React from 'react'
import { LogoList } from './TechData'

function TechStack() {

    const techIcons = LogoList.map((val, index) => {
        return (
            <img key={val.title} src={val.logo} className='rounded-full w-36 h-8 m-auto' />
        )

    });

    return (
        <div className=''>
            {techIcons}
        </div>
    )
}

export default TechStack