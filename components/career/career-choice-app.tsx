'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
      <AnimatePresence mode="wait">
        {intro ? (
          <motion.section
            key="intro"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.12, y: -24 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="intro-screen relative flex min-h-dvh flex-1 items-center justify-center overflow-hidden bg-[#0B0F19] px-6 text-center text-white lg:min-h-0"
          >
            <div className="absolute left-[8%] top-[18%] size-48 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="absolute bottom-[8%] right-[4%] size-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
            <motion.div
              className="intro-content relative max-w-md"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            >
              <motion.div animate={{ boxShadow: ['0 0 30px rgba(34,211,238,.25)', '0 0 90px rgba(34,211,238,.65)', '0 0 30px rgba(34,211,238,.25)'] }} transition={{ duration: 2, repeat: Infinity }} className="intro-logo mx-auto flex size-24 items-center justify-center rounded-[2rem] border border-cyan-200/30 bg-cyan-300 text-slate-950"><GraduationCap className="size-12" /></motion.div>
              <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }} className="intro-title mt-8 text-5xl font-black tracking-[-.06em] drop-shadow-[0_0_18px_rgba(250,204,21,.45)] sm:text-6xl">CAREER<br /><span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-cyan-200 bg-clip-text text-transparent">CHOICE</span></motion.h1>
              <p className="intro-support mx-auto mt-5 max-w-xs text-sm leading-6 text-slate-300">A clearer next step starts with one honest conversation.</p>
              <button onClick={finishIntro} className="intro-action mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-cyan-300 px-7 text-sm font-extrabold tracking-wide text-slate-950 shadow-lg shadow-cyan-900/30 transition hover:bg-cyan-200">BEGIN JOURNEY <Sparkles className="size-4" /></button>
            </motion.div>
          </motion.section>
        ) : profile ? (
          <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex min-h-0 flex-1"><Dashboard profile={profile} onReset={() => setProfile(null)} onProfileChange={setProfile} theme={theme} onThemeChange={setTheme} /></motion.div>
        ) : (
          <motion.div key="onboarding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex min-h-0 flex-1"><OnboardingScreen onSubmit={setProfile} /></motion.div>
        )}
      </AnimatePresence>
    </PhoneFrame>
  )
}
