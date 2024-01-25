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
  )
}
