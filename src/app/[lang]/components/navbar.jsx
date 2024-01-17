'use client'

import React from 'react'
import { useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

export default function Navbar(prop) {

  const [defaultLang, setDefaultLang] = useState('English')
  const [activeDropDown, setActiveDropDown] = useState(false)
  const [rotation, setRotation] = useState(270);
  const [mobileDropDown, setMobileDropDown] = useState(false)

  const mobileLangSelector = useRef(null)


  useEffect(()=>{
    if(prop.lang === 'en'){
      setDefaultLang('English')
    } else {
      setDefaultLang('Português')
    }
  },[])
  
  function scrollToSection(event) {
    const navbarHeight = 100
    const targetElement = document.getElementById(event);
  
    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
  
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }

  function scrollToSectionMobile(event){
    scrollToSection(event)
  }


  return (
    <div className='navbar fixed flex flex-row gap-12 w-full items-center bg-[#2B2730] border-b-[0.1px] border-gray-600 px-[140px] py-6 z-10'>
        <span className='text-[1.4rem] font-bold'>Logo</span>
        <nav className='navItems flex flex-1'>
            <ul className='flex flex-row gap-4 select-none'>
                <li onClick={()=>scrollToSection('Home')}  className={'cursor-pointer border-b-[1px] border-transparent text-gray-300 hover:text-white hover:border-purple-500 duration-200'} >{prop.langData.nav.home}</li>
                <li onClick={()=>scrollToSection('About Me')} className={'cursor-pointer border-b-[1px] border-transparent text-gray-300 hover:text-white hover:border-purple-500 duration-200'}>{prop.langData.nav.aboutMe}</li>
                <li onClick={()=>scrollToSection('Services')} className={'cursor-pointer border-b-[1px] border-transparent text-gray-300 hover:text-white hover:border-purple-500 duration-200'}>{prop.langData.nav.services}</li>
                <li onClick={()=>scrollToSection('Experience')} className={'cursor-pointer border-b-[1px] border-transparent text-gray-300 hover:text-white hover:border-purple-500 duration-200'}>{prop.langData.nav.experience}</li>
            </ul>
        </nav>
        <div className='languageDropdown'>
          <div onClick={()=>setActiveDropDown(!activeDropDown)} className='flex flex-row items-center gap-1 cursor-pointer text-gray-300 hover:text-white'>
              <span className='select-none'>{defaultLang}</span>
              <svg className='flex h-full' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
          <div className={activeDropDown ? 'select-none flex flex-col gap-2 absolute bg-black mt-2 py-2 px-2 rounded-md' : 'hidden'}>
          <Link className='px-1 hover:bg-gray-600 duration-200 rounded-sm cursor-pointer' href='/en'><span>{prop.langData.nav.lang.english}</span></Link>
          <Link className='px-1 hover:bg-gray-600 duration-200 rounded-sm cursor-pointer' href='/pt'><span >{prop.langData.nav.lang.portuguese}</span></Link>
          </div>
        </div>
        <div className='navMobileButton hidden'>
          <Menu  isOpen={false} left width={'60%'} className='left-0 top-0 font-bold'>
          <span className='text-[1.4rem] font-bold mb-4'>Logo</span>
            <ul className='flex flex-row select-none mt-10'>
                <li onClick={()=>scrollToSectionMobile('Home')}  className='flex flex-row gap-2  mt-4 cursor-pointer border-b-[1px] border-transparent text-gray-300 hover:text-white' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>{prop.langData.nav.home}</li>
                <li onClick={()=>scrollToSectionMobile('About Me')} className='flex flex-row gap-2  mt-3 cursor-pointer border-b-[1px] border-transparent text-gray-300 hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>{prop.langData.nav.aboutMe}</li>
                <li onClick={()=>scrollToSectionMobile('Services')} className='flex flex-row gap-2  mt-3 cursor-pointer border-b-[1px] border-transparent text-gray-300 hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>{prop.langData.nav.services}</li>
                <li onClick={()=>scrollToSectionMobile('Experience')} className='flex flex-row gap-2  mt-3 cursor-pointer border-b-[1px] border-transparent text-gray-300 hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mt-[2px] lucide lucide-gantt-chart-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/></svg>{prop.langData.nav.experience}</li>
            </ul>
            <div></div>
            <div className='relative h-32'>
              <div className='cursor-pointer flex flex-row pr-10'>
                <span className='flex flex-row gap-2  mt-3 cursor-pointer text-gray-300 w-full'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>{prop.langData.nav.lang.title}</span>
              </div>
              <div  className='flex flex-col'>
                <ul className='ml-12 list-disc'>
                  <li className=' cursor-pointer text-gray-300 text-[1rem] mt-2 hover:text-white'><Link href='/en'>{prop.langData.nav.lang.english}</Link></li>
                  <li className='mt-2 cursor-pointer text-gray-300 text-[1rem] hover:text-white'><Link href='/pt'>{prop.langData.nav.lang.portuguese}</Link></li>
                </ul>
              </div>
            </div>
          </Menu>
        </div>
    </div>
  )
}
