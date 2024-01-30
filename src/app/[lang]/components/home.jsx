import React from 'react'
import Image from 'next/image'

export default function Home(prop) {
  return (
    <div id='Home' className='relative  flex flex-row bg-[#2B2730] h-[95dvh] w-full items-center'>
        <div className='absolute w-full h-full opacity-40 z-[1]'>
            <Image
            className=''
            src='/images/homeBGImage.jpeg'
            layout='fill'
            objectFit='cover'
            objectPosition='top'                  
            alt='side image'                    
            priority={true}                    
            quality={100} 
             />
        </div>
        <div className='homeSection homeContainerText flex flex-col flex-1 gap-8 z-[2] px-[140px] w-full'>
            <div className=' flex flex-col'>
                <span className='homeHelloText font-bold text-[8rem] ml-[-8px] select-none'>{prop.lang.home.text1}</span>
                <span className='homeNameText font-bold text-[1.5rem] mt-[-20px]'>{prop.lang.home.text2} Marcus <span className='text-[#9575DE]'>"Heyoka"</span> de Mello</span>
                <span className='homeRoleText font-bold text-[2.5rem] text-[#9575DE]'>{prop.lang.home.text3}</span>
            </div>
            <div className='buttonContainer flex flex-row gap-2 items-center'>
                <a href="mailto:heyokaesports@gmail.com" target="_blank">
                    <button className='flex px-12 py-4 bg-[#9575DE] hover:bg-white hover:text-black duration-300 rounded-md'>{prop.lang.home.buttonText}</button>
                </a>
                <div className='socialsContainer flex flex-row items-center gap-2 ml-8'>
                    <span className='text-[0.9rem]'>{prop.lang.home.followMe}:</span>
                    <div className='socialsLine h-[1px] w-16 mt-[2px] bg-gray-400'></div>
                    <div className='flex flex-row gap-2'>
                        <a href='https://twitter.com/xheyoka' target='_blank' className='hover:opacity-80'>
                            <Image className='cursor-pointer' 
                                src='/images/twitter.png'
                                width={20}
                                height={20}
                                alt='side image'
                                priority={true}
                                quality={100}           
                                />
                        </a>
                        <a href='https://www.instagram.com/hxyoka/' target='_blank' className='hover:opacity-80'>
                            <Image className='cursor-pointer' 
                                src='/images/instagram.png'
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
        </div>
        <div className='relative mt-10 z-[2] mr-[140px] homeImageContainer'>
            <div className='homeImageBorder h-[25rem] w-[32rem] rounded-lg border border-gray-400'></div>
            <div className='homeImage h-[25rem] w-[32rem] absolute top-4 left-[-35px]'>
                <Image className='mb-2 h-full w-full rounded-lg border border-gray-400' 
                        src='/images/homeImage.png'
                        layout='fill'
                        objectFit='cover'
                        alt='side image'
                        priority={true}
                        quality={100}           
                    />         
            </div>
        </div>
    </div>
  )
}
