'use client'
import Image from 'next/image'

import CloudSVG from '../public/assets/svg/cloud.svg'
import StarsSVG from '../public/assets/svg/stars.svg'
import MoonHolesSVG from '../public/assets/svg/moon-holes.svg'
import Plane from '../public/assets/img/plane.png'

import SunSVG from '../components/SunSVG'
import MoonSVG from '../components/MoonSVG'

import { useTheme } from '@/hooks/useTheme'

const pillAnimatedClasses = {
  light: `bg-[#548EFE] duration-700`,
  dark: `bg-[#151535] duration-700`,
}

const sunAnimatedClasses = {
  light: `opacity-100 translate-x-0 duration-700 `,
  dark: `opacity-0 translate-x-20 duration-700`,
}

const moonAnimatedClasses = {
  light: `opacity-0 -translate-x-20 duration-700`,
  dark: `opacity-100 translate-x-0 duration-700`,
}

const moonHolesAnimatedClasses = {
  light: `opacity-0 -translate-x-20 duration-700`,
  dark: `opacity-100 translate-x-0 duration-700`,
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
  const [theme, toggleTheme] = useTheme('light')

  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold text-white mb-16">
        Day & Night Toggle 🎉
      </h1>
      <h2 className="text-2xl mb-20">
        Yes, it&apos;s the same one that made us all laugh on TikTok... 😅
      </h2>

      <div className="flex flex-col justify-center h-48 w-48 p-6 border border-dashed border-[#9747FF] rounded-md">
        <div
          className={`w-full rounded-full h-16 relative ${pillAnimatedClasses[theme]} overflow-clip`}
          onClick={toggleTheme}
        >
          {/** Day Elements */}
          <SunSVG
            className={`absolute left-[-3rem] bottom-[-2.65rem] transition-all ease-in-out ${sunAnimatedClasses[theme]}`}
          />
          <Image
            src={CloudSVG}
            alt="Cloud svg"
            className={`absolute right-0 bottom-0 transition-all ease-in-out ${cloudAnimatedClasses[theme]}`}
          />
          <Image
            src={Plane}
            alt="Plane illustration"
            className={`absolute right-0 bottom-0 z-10 w-14 transition-all ease-in-out ${planeAnimatedClasses[theme]}`}
          />

          {/** Night Elements */}

          <Image
            src={StarsSVG}
            alt="Cloud svg"
            className={`absolute left-4 bottom-2 z-10 transition-all ease-in-out ${starsAnimatedClasses[theme]}`}
          />

          <MoonSVG
            className={`absolute left-[-0.3rem] top-[-2.7rem] transition-all ease-in-out ${moonAnimatedClasses[theme]}`}
          />
          <Image
            src={MoonHolesSVG}
            alt="Moon Holes svg"
            className={`absolute right-[1.3rem] bottom-[1rem] transition-all ease-in-out ${moonHolesAnimatedClasses[theme]}`}
          />
        </div>
      </div>
    </main>
  )
}
