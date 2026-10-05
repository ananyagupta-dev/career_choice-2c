'use client'

import { useMemo, useState } from 'react'
import { Bookmark, BookmarkCheck, Compass, LogOut, Search, TrendingUp, X } from 'lucide-react'
import { CAREERS, STREAMS, type Career, type Stream } from '@/lib/career-data'
import { cn } from '@/lib/utils'
import type { StudentProfile } from './onboarding-screen'

type StreamFilter = Stream | 'ALL'
const CATEGORIES = ['All', 'Tech', 'Creative', 'Science', 'Business', 'Social'] as const

export function ExploreFeed({ profile, onReset }: { profile: StudentProfile; onReset: () => void }) {
  const [query, setQuery] = useState('')
  const [streamFilter, setStreamFilter] = useState<StreamFilter>(profile.stream)
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('All')
  const [saved, setSaved] = useState<Set<string>>(new Set())

  const careers = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CAREERS.filter((c) => {
      if (streamFilter !== 'ALL' && !c.streams.includes(streamFilter)) return false
      if (category !== 'All' && c.category !== category) return false
      if (!q) return true
      return (
        c.title.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.skills.some((s) => s.toLowerCase().includes(q))
      )
    })
  }, [query, streamFilter, category])

  function toggleSave(id: string) {
    setSaved((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto scrollbar-none">
      <div className="flex flex-col gap-5 px-5 pb-6 pt-3">
        <header className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] text-sea">
              <Compass className="size-3.5" aria-hidden="true" />
              CAREER CHOICE
            </span>
            <h2 className="text-2xl font-extrabold text-sea-deep">Hi, {profile.name.split(' ')[0]}</h2>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="flex size-11 items-center justify-center rounded-full border-2 border-mint bg-white text-sea-deep transition hover:border-sea"
            aria-label="Edit profile"
          >
            <LogOut className="size-4" aria-hidden="true" />
          </button>
        </header>

        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-sea-deep/50"
            aria-hidden="true"
          />
          <label htmlFor="career-search" className="sr-only">
            Search careers
          </label>
          <input
            id="career-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search careers or skills"
            className="h-12 w-full rounded-2xl border-2 border-mint bg-white pl-12 pr-11 text-base text-sea-deep placeholder:text-sea-deep/40 outline-none focus:border-sea focus:ring-4 focus:ring-mint/60"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-mint text-sea-deep"
              aria-label="Clear search"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-sea-deep/60">Stream</p>
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 scrollbar-none">
            {(['ALL', ...STREAMS.map((s) => s.id)] as StreamFilter[]).map((s) => (
              <Chip key={s} active={streamFilter === s} onClick={() => setStreamFilter(s)}>
                {s === 'ALL' ? 'All streams' : s}
                {s === profile.stream && ' (You)'}
              </Chip>
            ))}
          </div>
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 scrollbar-none">
            {CATEGORIES.map((c) => (
              <Chip key={c} variant="soft" active={category === c} onClick={() => setCategory(c)}>
                {c}
              </Chip>
            ))}
          </div>
        </div>

        <p className="text-sm text-sea-deep/70" aria-live="polite">
          {careers.length} {careers.length === 1 ? 'path' : 'paths'}
          {streamFilter !== 'ALL' ? ` for ${streamFilter}` : ' across all streams'}
        </p>

        {careers.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-3xl border-2 border-dashed border-mint bg-white px-6 py-10 text-center">
            <p className="font-semibold text-sea-deep">No careers match that search.</p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setCategory('All')
                setStreamFilter('ALL')
              }}
              className="rounded-full bg-sea px-5 py-2.5 text-sm font-semibold text-offwhite"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <ul className="flex flex-col gap-3.5">
            {careers.map((career) => (
              <CareerCard
                key={career.id}
                career={career}
                saved={saved.has(career.id)}
                onToggleSave={() => toggleSave(career.id)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function Chip({
  active,
  onClick,
  children,
  variant = 'solid',
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  variant?: 'solid' | 'soft'
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'h-10 shrink-0 whitespace-nowrap rounded-full border-2 px-4 text-sm font-semibold transition',
        active
          ? variant === 'solid'
            ? 'border-sea bg-sea text-offwhite'
            : 'border-sea bg-mint text-sea-deep'
          : 'border-mint bg-white text-sea-deep/75 hover:border-sea/50',
      )}
    >
      {children}
    </button>
  )
}

function CareerCard({
  career,
  saved,
  onToggleSave,
}: {
  career: Career
  saved: boolean
  onToggleSave: () => void
}) {
  return (
    <li className="flex flex-col gap-3 rounded-3xl border border-mint bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="w-fit rounded-full bg-mint-soft px-2.5 py-0.5 text-xs font-semibold text-sea">
            {career.category}
          </span>
          <h3 className="text-lg font-bold text-sea-deep">{career.title}</h3>
        </div>
        <button
          type="button"
          onClick={onToggleSave}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${career.title} from saved` : `Save ${career.title}`}
          className={cn(
            'flex size-10 shrink-0 items-center justify-center rounded-full transition',
            saved ? 'bg-sea text-offwhite' : 'bg-mint-soft text-sea hover:bg-mint',
          )}
        >
          {saved ? <BookmarkCheck className="size-5" /> : <Bookmark className="size-5" />}
        </button>
      </div>
      <p className="text-pretty text-sm leading-relaxed text-sea-deep/75">{career.tagline}</p>
      <div className="flex flex-wrap gap-1.5">
        {career.skills.map((s) => (
          <span key={s} className="rounded-lg bg-offwhite px-2.5 py-1 text-xs font-medium text-sea-deep">
            {s}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-mint-soft pt-3 text-sm">
        <span className="font-semibold text-sea-deep">{career.salary}</span>
        <span className="flex items-center gap-1 font-semibold text-sea">
          <TrendingUp className="size-4" aria-hidden="true" />
          {career.growth} demand
        </span>
      </div>
    </li>
  )
}
