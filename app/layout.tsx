import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
const jakarta = Plus_Jakarta_Sans({ subsets:['latin'], variable:'--font-jakarta' })
export const metadata: Metadata = { title:'CAREER CHOICE — Find your path', description:'A futuristic career guidance companion powered by Margdarshak AI.', generator:'v0.app' }
export const viewport: Viewport = { colorScheme:'dark light', themeColor:'#080d1d', userScalable:true }
export default function RootLayout({ children }:{ children:React.ReactNode }) { return <html lang="en" className={`${jakarta.variable} dark`}><body className="font-sans antialiased">{children}{process.env.NODE_ENV==='production'&&<Analytics/>}</body></html> }
