'use client'
import Image from 'next/image'

import CloudSVG from '../public/assets/svg/cloud.svg'
import StarsSVG from '../public/assets/svg/stars.svg'
// import MoonSVG from '../public/assets/svg/moon.svg'
import Plane from '../public/assets/img/plane.png'

import SunSVG from '../components/SunSVG'
import MoonSVG from '../components/MoonSVG'

import { useTheme } from '@/hooks/useTheme'

const pillAnimatedClasses = {
  light: `bg-[#548EFE] duration-700`,
  dark: `bg-[#151535] duration-700`,
}

const sunAnimatedClasses = {
  light: `opacity-100 duration-700`,
  dark: `opacity-0 duration-700 dark:hidden`,
}

const moonAnimatedClasses = {
  light: `opacity-0 duration-700`,
  dark: `opacity-100 duration-700`,
}

const cloudAnimatedClasses = {
  light: `opacity-100 translate-y-0 duration-700`,
  dark: `opacity-0 translate-y-16 duration-700`,
}

const planeAnimatedClasses = {
  light: `opacity-100 translate-x-0 translate-y-0 duration-700`,
  dark: `opacity-0 -translate-x-36 -translate-y-8 duration-700`,
}

const starsAnimatedClasses = {
  light: `opacity-0 scale-[3] duration-700`,
  dark: `opacity-100 scale-100 duration-700`,
}

export default function Home() {
  const [theme, toggleTheme] = useTheme('dark')

  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold text-white mb-16">
        Day & Night Toggle 🎉
      </h1>
      <h2 className="text-2xl mb-20">
        Yes, it&apos;s the same one that made us all laugh on TikTok... 😅
      </h2>
      <div className="flex gap-4">
        <div className="flex flex-col justify-between h-48 w-48 p-6 border border-dashed border-[#9747FF] rounded-md">
          <div
            className={`w-full rounded-full h-16 relative ${pillAnimatedClasses[theme]} overflow-clip`}
            onClick={toggleTheme}
          >
            {/** Day Elements */}
            <SunSVG
              className={`absolute left-[-3rem] bottom-[-2.65rem] transition-opacity ease-out ${sunAnimatedClasses[theme]}`}
            />
            <Image
              src={CloudSVG}
              alt="Cloud svg"
              className={`absolute right-0 bottom-0 transition-all ease-out ${cloudAnimatedClasses[theme]}`}
            />
            <Image
              src={Plane}
              alt="Plane illustration"
              className={`absolute right-0 bottom-0 z-10 w-14 transition-all ease-out ${planeAnimatedClasses[theme]}`}
            />

            {/** Night Elements */}

            <Image
              src={StarsSVG}
              alt="Cloud svg"
              className={`absolute left-4 bottom-2 z-10 transition-all ease-out ${starsAnimatedClasses[theme]}`}
            />

            {/* <Image
              src={MoonSVG}
              alt="Cloud svg"
              className={`absolute right-[-2rem] bottom-[-2rem] transition-all ease-out ${moonAnimatedClasses[theme]}`}
            /> */}

            <MoonSVG
              className={`absolute left-[-0.3rem] top-[-2.7rem] transition-opacity ease-out ${moonAnimatedClasses[theme]}`}
            />
          </div>

          {/** Night Elements */}
          <div className="bg-[#151535] w-full rounded-full h-16"></div>
        </div>
      </div>
    </main>
  )
}
