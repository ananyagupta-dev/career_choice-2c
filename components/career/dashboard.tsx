'use client'

import { useState } from 'react'
import { BarChart3, Compass, Home, MessageCircle, UserRound } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StudentProfile } from './onboarding-screen'
import { ExploreFeed } from './explore-feed'
import { AssistantPanel } from './assistant-panel'
import { MarketPanel } from './market-panel'
import { ProfilePage } from './profile-page'

type Tab = 'home' | 'explore' | 'profile' | 'assistant' | 'market'
const NAV = [
  { id: 'explore' as const, label: 'Explore Paths', mobile: 'Explore', icon: Compass },
  { id: 'assistant' as const, label: 'Margdarshak AI', mobile: 'Guide', icon: MessageCircle },
  { id: 'market' as const, label: 'Market Insights', mobile: 'Market', icon: BarChart3 },
]

export function Dashboard({ profile, onReset, onProfileChange, theme, onThemeChange }: { profile: StudentProfile; onReset: () => void; onProfileChange: (profile: StudentProfile) => void; theme: 'dark' | 'light'; onThemeChange: (theme: 'dark' | 'light') => void }) {
  const [tab, setTab] = useState<Tab>('explore')
  const [saved, setSaved] = useState<Set<string>>(new Set())
  const toggleSave = (id: string) => setSaved((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next })
  const active = tab === 'home' ? 'explore' : tab

  return <div className="flex min-h-0 flex-1 flex-col bg-background lg:flex-row">
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-[#0a1126] px-4 py-6 text-white lg:flex">
      <button type="button" onClick={() => setTab('explore')} className="flex items-center gap-3 px-3 text-left"><span className="flex size-10 items-center justify-center rounded-xl bg-cyan-300 text-slate-950"><Compass className="size-5" /></span><span><span className="block text-sm font-black tracking-[.12em]">CAREER</span><span className="block text-sm font-black tracking-[.12em] text-cyan-300">CHOICE</span></span></button>
      <button type="button" onClick={() => setTab('profile')} className="mt-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-left transition hover:border-cyan-300/50"><span className="flex size-10 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200"><UserRound className="size-5" /></span><span className="min-w-0"><span className="block truncate text-sm font-bold">{profile.name}</span><span className="block text-xs text-slate-400">View profile</span></span></button>
      <nav aria-label="Main navigation" className="mt-8 flex flex-1 flex-col gap-2">{NAV.map(({ id, label, icon: Icon }) => <button key={id} type="button" onClick={() => setTab(id)} className={cn('flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition', active === id ? 'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30' : 'text-slate-300 hover:bg-white/5 hover:text-white')}><Icon className="size-5" />{label}</button>)}<button type="button" onClick={() => setTab('profile')} className={cn('mt-1 flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition', active === 'profile' ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:bg-white/5 hover:text-white')}><UserRound className="size-5" />Profile</button></nav>
      <p className="px-3 text-xs leading-5 text-slate-500">A clearer next step starts with one honest conversation.</p>
    </aside>
    <header className="flex shrink-0 items-center justify-between border-b border-border bg-card/90 px-4 py-3 backdrop-blur lg:hidden"><button type="button" onClick={() => setTab('explore')} className="flex items-center gap-2"><span className="flex size-9 items-center justify-center rounded-xl bg-cyan-300 text-slate-950"><Compass className="size-5" /></span><span className="text-sm font-black tracking-[.12em]">CAREER CHOICE</span></button><button type="button" onClick={() => setTab('profile')} className="flex size-10 items-center justify-center rounded-full bg-cyan-300/20 text-cyan-200" aria-label="Open profile"><UserRound className="size-5" /></button></header>
    <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden pb-32 lg:pb-0">{(tab === 'explore' || tab === 'home') && <ExploreFeed profile={profile} onReset={onReset} saved={saved} onToggleSave={toggleSave} />}{tab === 'assistant' && <AssistantPanel profile={profile} />}{tab === 'market' && <MarketPanel />}{tab === 'profile' && <ProfilePage profile={profile} saved={saved} onToggleSave={toggleSave} onProfileChange={onProfileChange} theme={theme} onThemeChange={onThemeChange} />}</main>
    <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-border bg-card/95 px-1 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.18)] backdrop-blur lg:hidden">{[{ id: 'explore' as const, label: 'Explore', icon: Compass }, { id: 'assistant' as const, label: 'Guide', icon: MessageCircle }, { id: 'market' as const, label: 'Market', icon: BarChart3 }, { id: 'profile' as const, label: 'Profile', icon: UserRound }].map(({ id, label, icon: Icon }) => <button key={id} type="button" onClick={() => setTab(id)} className={cn('flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-bold', active === id ? 'bg-cyan-300 text-slate-950' : 'text-muted-foreground')}><Icon className="size-4" />{label}</button>)}</nav>
  </div>
}
