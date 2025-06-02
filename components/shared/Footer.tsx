import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[var(--colorDark)] p-14 rounded-t-4xl mt-40 ' >
      <Image src={'/images/logo_white.png'} alt='positivus footer white logo' width={180} height={29}/>
    </div>
  )
}
