'use client'

import { useState } from 'react'
import { BarChart3, Compass, Home, MessageCircle, UserRound, Bookmark } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StudentProfile } from './onboarding-screen'
import { ExploreFeed } from './explore-feed'
import { AssistantPanel } from './assistant-panel'
import { MarketPanel } from './market-panel'
import { ProfilePage } from './profile-page'

type Tab = 'home' | 'explore' | 'saved' | 'profile' | 'assistant' | 'market'
const NAV = [{ id: 'home', label: 'Home', icon: Home }, { id: 'explore', label: 'Explore Paths', short: 'Explore', icon: Compass }, { id: 'saved', label: 'Saved Paths', short: 'Saved', icon: Bookmark }, { id: 'profile', label: 'Profile', icon: UserRound }] as const

export function Dashboard({ profile, onReset }: { profile: StudentProfile; onReset: () => void }) {
  const [tab, setTab] = useState<Tab>('explore'); const [saved, setSaved] = useState<Set<string>>(new Set())
  const toggleSave = (id: string) => setSaved(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next })
  const activeTab = tab === 'home' ? 'explore' : tab
  return <div className="flex min-h-0 flex-1 flex-col bg-offwhite"><header className="hidden shrink-0 items-center justify-between border-b border-mint bg-white/95 px-8 py-4 backdrop-blur md:flex"><button type="button" onClick={() => setTab('explore')} className="flex items-center gap-2 text-left"><span className="flex size-9 items-center justify-center rounded-xl bg-sea text-offwhite"><Compass className="size-5" /></span><span className="text-lg font-extrabold tracking-tight text-sea-deep">CAREER CHOICE</span></button><nav aria-label="Main navigation" className="flex items-center gap-1">{NAV.map(({ id, label }) => <button key={id} type="button" onClick={() => setTab(id)} className={cn('rounded-full px-4 py-2 text-sm font-semibold transition', activeTab === id ? 'bg-mint text-sea-deep' : 'text-sea-deep/60 hover:bg-mint-soft')}>{label}</button>)}</nav><button type="button" onClick={() => setTab('profile')} className="flex size-10 items-center justify-center rounded-full bg-mint text-sea-deep" aria-label="Open profile"><UserRound className="size-5" /></button></header><main className="flex min-h-0 flex-1 flex-col">{(tab === 'explore' || tab === 'home') && <ExploreFeed profile={profile} onReset={onReset} saved={saved} onToggleSave={toggleSave} />}{tab === 'assistant' && <AssistantPanel profile={profile} />}{tab === 'market' && <MarketPanel />}{(tab === 'profile' || tab === 'saved') && <ProfilePage profile={profile} saved={saved} onToggleSave={toggleSave} />}</main><div className="hidden border-t border-mint bg-white px-8 py-3 lg:flex lg:justify-center lg:gap-8"><button type="button" onClick={() => setTab('assistant')} className="flex items-center gap-2 text-sm font-semibold text-sea"><MessageCircle className="size-4" /> Ask Margdarshak AI</button><button type="button" onClick={() => setTab('market')} className="flex items-center gap-2 text-sm font-semibold text-sea"><BarChart3 className="size-4" /> Market insights</button></div><nav aria-label="Mobile navigation" className="flex shrink-0 border-t border-mint bg-white/95 px-2 pb-5 pt-2 backdrop-blur md:hidden"><ul className="flex w-full items-center justify-around">{NAV.map(({ id, label, short, icon: Icon }) => <li key={id}><button type="button" onClick={() => setTab(id)} aria-current={activeTab === id ? 'page' : undefined} className={cn('flex min-w-16 flex-col items-center gap-1 rounded-2xl px-2 py-1.5 text-[11px] font-semibold', activeTab === id ? 'text-sea' : 'text-sea-deep/50')}><span className={cn('flex size-8 items-center justify-center rounded-full', activeTab === id && 'bg-mint')}><Icon className="size-4" /></span>{short ?? label}</button></li>)}</ul></nav></div>
}
