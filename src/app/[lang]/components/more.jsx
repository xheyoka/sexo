import React from 'react'
import Image from 'next/image'

export default function MoreSection(prop) {
  return (
    <div className='bg-[#161419] relative'>
      <div className='absolute w-full h-full opacity-25 z-[1]'>
            <Image
            className=''
            src='/images/moreImage.jpeg'
            layout='fill'
            objectFit='cover'
            objectPosition='top'                  
            alt='side image'                    
            priority={true}                    
            quality={100} 
             />
        </div>
        <div className='relative flex flex-col justify-center z-[2] items-center text-center gap-2 py-24 px-4'>
            <span className='text-[2.5rem] font-bold text-neutral-300'>{prop.lang.services.more.title}</span>
            <span className='socialMediaContentText  text-neutral-400 mt-2 text-[1.2rem]'>{prop.lang.services.more.desc}</span>
            <div className='moreContentSection flex flex-row justify-between gap-60 mt-4'>
              <div className='flex flex-col text-center w-60'>
                <span className='text-[1.3rem]'>{prop.lang.services.more.events.title}</span>
                <span className='socialMediaContentText font-bold text-neutral-300 mt-4'>{prop.lang.services.more.events.content}</span>
              </div>
              <div className='flex flex-col text-center w-60'>
                <span className='text-[1.3rem]'>{prop.lang.services.more.marketing.title}</span>
                <span className='socialMediaContentText font-bold text-neutral-300 mt-4'>{prop.lang.services.more.marketing.content}</span>
              </div>
              <div className='flex flex-col text-center w-60'>
                <span className='text-[1.3rem]'>{prop.lang.services.more.stream.title}</span>
                <span className='socialMediaContentText font-bold text-neutral-300 mt-4'>{prop.lang.services.more.stream.content}</span>
              </div>
            </div>
                <a href="mailto:heyokaesports@gmail.com" target="_blank">
                    <button className='moreButton font-bold mt-12 flex px-12 py-4 bg-[#9575DE] hover:bg-white hover:text-black duration-300 rounded-md w-[40dvw] justify-center'>{prop.lang.home.buttonText}</button>
                </a>
        </div>
    </div>
  )
}
