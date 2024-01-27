import React from 'react'
import ExperienceItem from './experienceItem'

export default function Experience(prop) {
  const data = [
    {
        title: prop.lang.experience.aquila.title,
        content: prop.lang.experience.aquila.content,
        list: prop.lang.experience.aquila.list,
        image: '/images/aquilaImage.png',
        cover: true
    },
    {
        title: prop.lang.experience.saka.title,
        content: prop.lang.experience.saka.content,
        list: prop.lang.experience.saka.list,
        image: '/images/sakaImage.png',
        cover: true
    },
    {
        title: prop.lang.experience.bz.title,
        content: prop.lang.experience.bz.content,
        list: prop.lang.experience.bz.list,
        image: '/images/bzImage.jpg',
        cover: true
    }
  ]
  return (
    <>
        <div id='Experience' className='experienceSection w-full h-[fit-content] px-[135px] py-24 bg-[#2B2730]'>
        <span className='experienceTitle text-[4rem] font-bold'>{prop.lang.experience.title}</span>
        <div className='flex flex-col gap-4'>
            {data.map((prop, index)=>{
                return(
                    <ExperienceItem 
                    key={index}
                    title={prop.title}
                    content={prop.content}
                    list={prop.list}
                    image={prop.image}
                    cover={prop.cover}
                />
                )  
            })}
        </div>
    </div>
    <div className='bg-[#161419] py-24'>
        <div className='flex flex-col justify-center items-center text-center gap-2'>
            <span className='text-[2.5rem] font-bold text-neutral-300'>{prop.lang.services.more.title}</span>
            <span className='socialMediaContentText  text-neutral-400 mt-2 text-[1.2rem]'>{prop.lang.services.more.desc}</span>
            <div className='moreContentSection flex flex-row justify-between gap-60 mt-4'>
              <div className='flex flex-col text-center w-60'>
                <span className='text-[1.3rem]'>{prop.lang.services.more.events.title}</span>
                <span className='socialMediaContentText font-bold text-neutral-400 mt-4'>{prop.lang.services.more.events.content}</span>
              </div>
              <div className='flex flex-col text-center w-60'>
                <span className='text-[1.3rem]'>{prop.lang.services.more.marketing.title}</span>
                <span className='socialMediaContentText font-bold text-neutral-400 mt-4'>{prop.lang.services.more.marketing.content}</span>
              </div>
              <div className='flex flex-col text-center w-60'>
                <span className='text-[1.3rem]'>{prop.lang.services.more.stream.title}</span>
                <span className='socialMediaContentText font-bold text-neutral-400 mt-4'>{prop.lang.services.more.stream.content}</span>
              </div>
            </div>
                <a href="mailto:heyokaesports@gmail.com" target="_blank">
                    <button className='font-bold mt-12 flex px-12 py-4 bg-[#9575DE] hover:bg-white hover:text-black duration-300 rounded-md w-[40dvw] justify-center'>{prop.lang.home.buttonText}</button>
                </a>
        </div>
    </div>
    </>
    
  )
}
