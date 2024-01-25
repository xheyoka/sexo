import React from 'react'
import Image from 'next/image'

export default function AboutMe(prop) {
  return (
    <div className='aboutMeSection flex flex-col h-[fit-content] px-[135px] pt-24 pb-20 bg-[#161419]'>
      <div id='About Me' className='AboutMeContainer flex flex-row'>
        <div className='aboutMeImageContainer relative mt-8'>
              <div className='aboutMeImage h-[22rem] w-[29rem] rounded-lg border border-gray-400'></div>
              <div className='aboutMeImage h-[22rem] w-[29rem] absolute top-4 right-[-35px]'>
                  <Image className='mb-2 h-full w-full rounded-lg border border-gray-400 object-cover' 
                          src='/images/aboutMeImage.png'
                          width={400}
                          height={400}
                          alt='side image'
                          priority={true}
                          quality={100}           
                      />         
              </div>
          </div>
          <div className='aboutMeContainerText flex flex-col ml-32 w-full mt-8'>
              <span className='aboutMeTitleText text-[4rem] font-bold'>{prop.lang.aboutMe.title}</span>
              <div className='aboutMeImageContainerMobile relative mt-8 hidden'>
                <div className='aboutMeImage aboutMeImageBorder h-[22rem] w-[29rem] rounded-lg border border-gray-400'></div>
                <div className='aboutMeImage aboutMeImageMobile h-[22rem] w-[29rem] absolute top-4'>
                    <Image className='mb-2 h-full w-full rounded-lg border border-gray-400 object-cover' 
                            src='/images/aboutMeImage.png'
                            width={400}
                            height={400}
                            alt='side image'
                            priority={true}
                            quality={100}           
                        />         
                </div>
              </div>
              <span className='aboutMeContentText font-bold text-neutral-400 mt-2'>{prop.lang.aboutMe.content}</span>
              <button className='bg-white text-black font-bold rounded-md py-3 mt-8 hover:bg-purple-400 hover:text-white duration-100 '>Download CV</button>
          </div>
      </div>
      
      <div id='Services' className='servicesSection mt-24 '>
        <span className='servicesTitle text-[4rem] font-bold'>{prop.lang.services.title}</span>
        <div className='flex flex-row mt-8'>
          <div className='socialMediaContainer flex flex-col w-full pl-10 pr-40'>
            <span className='text-[2.5rem] font-light text-neutral-300'>{prop.lang.services.admMain.title}</span>
              <div className='responsiveSocialMediaImage relative hidden'>
                <div className='socialMediaImage h-[22rem] w-[29rem] top-4 '>
                    <Image className='mb-2 h-full w-full rounded-lg border border-gray-400 object-cover' 
                            src='/images/adminImage.jpg'
                            width={400}
                            height={400}
                            alt='side image'
                            priority={true}
                            quality={100}           
                        />         
                </div>
            </div>
            <span className='socialMediaContentText font-bold text-neutral-400 mt-4'>{prop.lang.services.admMain.content}</span>
          </div>
          <div className='normalSocialMediaImage relative'>
              <div className='socialMediaImage h-[22rem] w-[29rem] rounded-lg border border-gray-400'></div>
              <div className='socialMediaImage h-[22rem] w-[29rem] absolute top-4 left-[-35px]'>
                  <Image className='mb-2 h-full w-full rounded-lg border border-gray-400 object-cover' 
                          src='/images/adminImage.jpg'
                          width={400}
                          height={400}
                          alt='side image'
                          priority={true}
                          quality={100}           
                      />         
              </div>
          </div>
        </div>
        
        <div className='admSkillsSection flex flex-row mt-28'>
          <div className='admSkillsImageContainer relative '>
              <div className='admImage h-[22rem] w-[29rem] rounded-lg border border-gray-400'></div>
              <div className='admImage h-[22rem] w-[29rem] absolute top-4 right-[-35px]'>
                  <Image className='mb-2 h-full w-full rounded-lg border border-gray-400 object-cover' 
                          src='/images/skillsImage.png'
                          width={400}
                          height={400}
                          alt='side image'
                          priority={true}
                          quality={100}           
                      />         
              </div>
          </div>
          <div className='admSkillsContainerText flex flex-col w-full ml-32 '>
            <span className='text-[2.5rem] font-light text-neutral-300'>{prop.lang.services.admSkills.title}</span>
            <div className='admSkillsImageContainerMobile relative hidden'>
              
              <div className='admImage admSkillsMobileImage h-[22rem] w-[29rem] top-4 '>
                  <Image className='mb-2 h-full w-full rounded-lg border border-gray-400 object-cover' 
                          src='/images/skillsImage.png'
                          width={400}
                          height={400}
                          alt='side image'
                          priority={true}
                          quality={100}           
                      />         
              </div>
          </div>
            <div className='admSkillsList font-bold text-neutral-400 mt-4 ml-4'>
              <ul className='list-disc'>
                {prop.lang.services.admSkills.list.map((item, index)=>{
                  return <li key={index}>{item}</li>
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center mt-28 '>
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
        </div>
      </div>
    </div>
  )
}
