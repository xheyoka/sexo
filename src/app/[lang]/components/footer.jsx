import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='w-full h-[15dvh] bg-neutral-950'>
        <div className='opacity-40 flex flex-row gap-4 px-8 py-2 justify-end items-end h-full'>
            <div className='flex flex-row items-center gap-2 ml-8'>
                    <span className='text-[0.9rem]'>© Copyright {new Date().getFullYear()}, All rights reserved</span>
                    <div className='flex flex-row gap-2'>
                        <a>
                            <Image className='cursor-pointer' 
                                src='/images/twitter.png'
                                width={20}
                                height={20}
                                alt='side image'
                                priority={true}
                                quality={100}           
                                />
                        </a>
                        <a>
                            <Image className='cursor-pointer' 
                                src='/images/instagram.png'
                                width={20}
                                height={20}
                                alt='side image'
                                priority={true}
                                quality={100}           
                                />
                        </a>
                        <a>
                            <Image className='cursor-pointer' 
                                src='/images/linkedin.png'
                                width={20}
                                height={20}
                                alt='side image'
                                priority={true}
                                quality={100}           
                                />
                        </a>
                    </div>
                </div>
        </div>
    </footer>
  )
}
