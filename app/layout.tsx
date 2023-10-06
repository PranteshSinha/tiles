import './globals.css'
import Navbar from '@/components/Navbar'
import SearchAndUpload from '@/components/Search'
import type { Metadata } from 'next'
import { Inter,Space_Grotesk } from 'next/font/google'
import UploadBox from '@/components/upload'
import Search from "@/components/search"

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk=Space_Grotesk({subsets:['latin'],width:['300','400','500','600','700']})
export const metadata: Metadata = {
  title: 'CompanyName',
  description: 'Track product prices effortlessly and save money on your online shopping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className='max-w-10xl mx-auto'>
        <Navbar/>
        <div className='bg-green-400 h-80'>
        <h2 className="flex justify-center text-5xl p-5">Reverse Image Search</h2>
        <div className='justify-between flex justify-center w-60 h-10'>
          <UploadBox/>
          <Search/>
        </div>
        </div>
      {children}
      </main>
    </body>
    </html>
  )
}
