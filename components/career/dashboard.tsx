'use client'

import { useState } from 'react'
import { BarChart3, Compass, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StudentProfile } from './onboarding-screen'
import { ExploreFeed } from './explore-feed'
import { AssistantPanel } from './assistant-panel'
import { MarketPanel } from './market-panel'

type Tab = 'explore' | 'assistant' | 'market'

const TABS: { id: Tab; label: string; icon: typeof Compass }[] = [
  { id: 'explore', label: 'Explore', icon: Compass },
  { id: 'assistant', label: 'Margdarshak', icon: MessageCircle },
  { id: 'market', label: 'Market', icon: BarChart3 },
]

export function Dashboard({ profile, onReset }: { profile: StudentProfile; onReset: () => void }) {
  const [tab, setTab] = useState<Tab>('explore')

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex min-h-0 flex-1 flex-col">
        {tab === 'explore' && <ExploreFeed profile={profile} onReset={onReset} />}
        {tab === 'assistant' && <AssistantPanel profile={profile} />}
        {tab === 'market' && <MarketPanel />}
      </div>

      <nav
        aria-label="CAREER CHOICE navigation"
        className="shrink-0 border-t border-mint bg-white/95 px-4 pb-7 pt-2.5 backdrop-blur"
      >
        <ul className="flex items-center justify-around">
          {TABS.map(({ id, label, icon: Icon }) => {
            const active = tab === id
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => setTab(id)}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'flex min-w-20 flex-col items-center gap-1 rounded-2xl px-3 py-1.5 text-xs font-semibold transition',
                    active ? 'text-sea' : 'text-sea-deep/50 hover:text-sea-deep',
                  )}
                >
                  <span
                    className={cn(
                      'flex h-8 w-14 items-center justify-center rounded-full transition',
                      active && 'bg-mint',
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {label}
                </button>
              </li>
            )
          })}
        </ul>
        <div aria-hidden="true" className="mx-auto mt-2 h-1 w-32 rounded-full bg-sea-deep/80" />
      </nav>
    </div>
  )
}
