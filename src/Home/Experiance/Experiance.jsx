import React from 'react'
import './Experiance.css'

import daimler from '/pastlogos/Daimler.png'
import bmw from '/pastlogos/BMW.png'
import capgemini from '/pastlogos/Capgemini.png'
import opel from '/pastlogos/Opel.png'

function Experiance() {
    return (
        <div>
            <div className="div flex justify-center">
                <div className="justify-center border-t border-gray-400 my-4 w-4/5 text-center"></div>
            </div>
            <p className='text-lg text-center font-cursive'>
                Embracing the enriching journey of collaboration within past endeavors.
            </p>

            <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-4 justify-around align-middle">
                <img src={daimler} alt="Company Logo 1" className='w-36 h-8 m-auto' />
                <img src={capgemini} alt="Company Logo 2" className='w-36 h-12 m-auto' />
                <img src={bmw} alt="Company Logo 3" className='w-24 h-24 m-auto' />
                <img src={opel} alt="Company Logo 4" className='w-24 h-24 m-auto' />
            </div>

            <div className="div flex justify-center">
                <div className="justify-center border-t border-gray-400 my-4 w-4/5 text-center"></div>
            </div>
        </div>
    )
}

export default Experiance