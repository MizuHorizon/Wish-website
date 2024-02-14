import React from 'react'
import Bg from '../../../public/BgHero.svg'
import heading from '../../../public/HeroHeading.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <Image
      src={Bg}
      alt='HeroBg'
      className='w-full'
      />
      <div>
        <Image
        src={heading}
        alt='HeroHeading'
        className='absolute inset-0 m-auto'
        />
      </div>
    </div>
  )
}

export default Hero
