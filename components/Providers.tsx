'use client'
import { ThemeProvider } from 'next-themes'
import { FC, ReactNode } from 'react'

interface IProvidersProps {
  children?: ReactNode
}

const Providers: FC<IProvidersProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  )
}

export default Providers
