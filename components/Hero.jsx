import React from 'react'

import { CustomButton } from "./index"
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='hero'>

            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, book, or rent a car — quickly
                    and easily
                </h1>

                <p className='hero__subtitle'>Stream your car rental experience with our effoetless booking process</p>
                <CustomButton />


            </div>

            <div className="hero__image-container">
                <div className="hero__image">

                    <Image src="/hero.png" fill className="object-contain" alt="Car Image" />
                    <div className='hero__image-overlay'></div>

                </div>

            </div>
            
        </div>
    )
}

export default Hero