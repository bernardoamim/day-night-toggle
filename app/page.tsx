'use client'
import Image from 'next/image'
import CloudSVG from '../public/assets/svg/cloud.svg'
import SunSVG from '../components/SunSVG'
import Plane from '../public/assets/img/plane.png'
import { MouseEventHandler, useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const handleToggle: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log('clicked on Toggle', e)
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold text-white mb-20">
        Day & Night Toggle 🎉
      </h1>
      <div className="flex gap-4">
        <div className="flex flex-col justify-between h-48 w-48 p-6 border border-dashed border-[#9747FF] rounded-md">
          <div
            className="bg-[#548EFE] w-full rounded-full h-16 relative overflow-clip"
            onClick={handleToggle}
          >
            <SunSVG className="absolute left-[-3rem] bottom-[-2.65rem]" />
            <Image
              priority
              src={CloudSVG}
              alt="Cloud svg"
              className="absolute right-0 bottom-0"
            />
            <Image
              src={Plane}
              alt="Plane illustration"
              className="absolute right-0 bottom-0 z-10 w-14"
            />
          </div>
          <div className="bg-[#151535] w-full rounded-full h-16"></div>
        </div>
        <div className="flex flex-col justify-between h-48 w-44 p-5">
          <div className="bg-[#548EFE] w-full rounded-full h-16"></div>
          <div className="bg-[#151535] w-full rounded-full h-16"></div>
        </div>
      </div>
    </main>
  )
}
