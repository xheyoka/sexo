import Navbar from './components/navbar'
import Home from './components/home'
import AboutMe from './components/aboutMe'
import Experience from './components/experience'
import Footer from './components/footer'
import { getDictionary } from '../../lib/dictionary'
import MoreSection from './components/more'

export default async function Page({params: {lang}}) {
  const data = await getDictionary(lang)
  
  return (
    <main id='mainPage' className='bg-[#2B2730] text-white h-[100dvh]'>
      <Navbar lang={lang} langData={data} />
      <div className=''>
        <Home lang={data} />
        <AboutMe lang={data} />
        <Experience lang={data} />
        <MoreSection lang={data} />
        <Footer lang={data} />
      </div>
    </main>
  )
}
