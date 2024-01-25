import React from 'react'
import Image from 'next/image'

export default function ExperienceItem(prop) {
  return (
    <div className='flex flex-row mt-20'>
            <div className='relative normalExperienceImageContainer'>
                <div className='experienceImage h-[22rem] w-[29rem] rounded-lg border border-gray-400'></div>
                <div className='experienceImage flex h-[22rem] w-[29rem] absolute top-4 right-[-35px] bg-black rounded-lg'>
                    <Image className={prop.cover ?  'mb-2 h-full w-full rounded-lg border border-gray-400 object-cover' : 'mb-2 h-full w-full rounded-lg border border-gray-400 object-contain'} 
                            src={prop.image}
                            width={400}
                            height={400}
                            alt='side image'
                            priority={true}
                            quality={100}           
                        />         
                </div>
            </div>
            <div className='experienceContainerText flex flex-col w-full ml-32 '>
                <span className='experienceTitleText text-[2.5rem] font-semibold'>{prop.title}</span>
                <div className='relative hidden mobileExperienceImageContainer'>
                  <div className='experienceImage flex h-[22rem] w-[29rem] top-4  bg-black rounded-lg'>
                      <Image className={prop.cover ?  'mb-2 h-full w-full rounded-lg border border-gray-400 object-cover' : 'mb-2 h-full w-full rounded-lg border border-gray-400 object-contain'} 
                              src={prop.image}
                              width={400}
                              height={400}
                              alt='side image'
                              priority={true}
                              quality={100}           
                          />         
                  </div>
              </div>
                <span className='experienceContentText font-bold mt-4'>{prop.content}</span>
                <div className=' mt-4 ml-4'>
                  <ul>
                    {prop.list.map((item)=>{
                      return <li className='list-disc font-bold text-neutral-400'>{item}</li>
                    })}
                  </ul>
                </div>
            </div>
    </div>
  )
}
