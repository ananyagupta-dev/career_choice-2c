'use client'

import { useEffect, useState } from 'react'
import { GraduationCap, Sparkles } from 'lucide-react'
import { PhoneFrame } from './phone-frame'
import { OnboardingScreen, type StudentProfile } from './onboarding-screen'
import { Dashboard } from './dashboard'

export function CareerChoiceApp() {
  const [profile, setProfile] = useState<StudentProfile | null>(null)
  const [intro, setIntro] = useState(true)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('career-choice-theme') as 'dark' | 'light' | null
    if (savedTheme) setTheme(savedTheme)
    if (window.sessionStorage.getItem('career-choice-intro-seen')) setIntro(false)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
    window.localStorage.setItem('career-choice-theme', theme)
  }, [theme])

  const finishIntro = () => {
    window.sessionStorage.setItem('career-choice-intro-seen', '1')
    setIntro(false)
  }

  return (
    <PhoneFrame>
      {intro ? (
        <section className="intro-screen relative flex min-h-dvh flex-1 items-center justify-center overflow-hidden bg-[#080d1d] px-6 text-center text-white lg:min-h-0">
          <div className="absolute left-[8%] top-[18%] size-48 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute bottom-[8%] right-[4%] size-64 rounded-full bg-purple-500/15 blur-3xl" />
          <div className="intro-content relative max-w-md">
            <div className="intro-logo mx-auto flex size-24 items-center justify-center rounded-[2rem] border border-cyan-200/30 bg-cyan-300 text-slate-950 shadow-[0_0_70px_rgba(125,231,240,.35)]"><GraduationCap className="size-12" /></div>
            <p className="intro-tagline mt-8 text-xs font-bold uppercase tracking-[.35em] text-cyan-200">Your path, illuminated</p>
            <h1 className="intro-title mt-3 text-5xl font-black tracking-[-.06em] sm:text-6xl">CAREER<br /><span className="bg-gradient-to-r from-cyan-200 to-purple-300 bg-clip-text text-transparent">CHOICE</span></h1>
            <p className="intro-support mx-auto mt-5 max-w-xs text-sm leading-6 text-slate-300">A clearer next step starts with one honest conversation.</p>
            <button onClick={finishIntro} className="intro-action mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-cyan-300 px-7 text-sm font-extrabold tracking-wide text-slate-950 shadow-lg shadow-cyan-900/30 transition hover:bg-cyan-200">BEGIN JOURNEY <Sparkles className="size-4" /></button>
          </div>
        </section>
      ) : profile ? (
        <Dashboard profile={profile} onReset={() => setProfile(null)} onProfileChange={setProfile} theme={theme} onThemeChange={setTheme} />
      ) : <OnboardingScreen onSubmit={setProfile} />}
    </PhoneFrame>
  )
}
