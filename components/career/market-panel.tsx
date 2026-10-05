'use client'

import { useMemo, useState } from 'react'
import { BarChart3, Briefcase, Search, TrendingUp } from 'lucide-react'
import { MARKET_TRENDS, SKILLS } from '@/lib/career-data'
import { cn } from '@/lib/utils'

type SkillType = 'Technical' | 'Creative'

export function MarketPanel() {
  const [query, setQuery] = useState('')
  const [skillType, setSkillType] = useState<SkillType>('Technical')
  const [expanded, setExpanded] = useState<string | null>(MARKET_TRENDS[0].id)

  const q = query.trim().toLowerCase()
  const trends = useMemo(
    () =>
      MARKET_TRENDS.filter(
        (t) =>
          !q ||
          t.title.toLowerCase().includes(q) ||
          t.sector.toLowerCase().includes(q) ||
          t.summary.toLowerCase().includes(q),
      ),
    [q],
  )
  const skills = useMemo(
    () =>
      SKILLS.filter((s) => s.type === skillType && (!q || s.name.toLowerCase().includes(q))).sort(
        (a, b) => b.demand - a.demand,
      ),
    [q, skillType],
  )

  return (
    <div className="min-h-0 flex-1 overflow-y-auto scrollbar-none">
      <div className="flex flex-col gap-5 px-5 pb-6 pt-3">
        <header className="flex flex-col">
          <span className="flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] text-sea">
            <BarChart3 className="size-3.5" aria-hidden="true" />
            CAREER CHOICE
          </span>
          <h2 className="text-2xl font-extrabold text-sea-deep">Market Info</h2>
        </header>

        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-sea-deep/50"
            aria-hidden="true"
          />
          <label htmlFor="market-search" className="sr-only">
            Search job trends and skills
          </label>
          <input
            id="market-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search trends, sectors or skills"
            className="h-12 w-full rounded-2xl border-2 border-mint bg-white pl-12 pr-4 text-base text-sea-deep placeholder:text-sea-deep/40 outline-none focus:border-sea focus:ring-4 focus:ring-mint/60"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-sea p-4 text-offwhite">
            <p className="text-xs font-medium text-offwhite/80">New openings</p>
            <p className="text-2xl font-extrabold">3.8L+</p>
            <p className="text-xs text-offwhite/80">this quarter</p>
          </div>
          <div className="rounded-3xl bg-mint p-4 text-sea-deep">
            <p className="text-xs font-medium text-sea-deep/70">Fastest growing</p>
            <p className="text-2xl font-extrabold">Gen AI</p>
            <p className="text-xs text-sea-deep/70">+42% YoY</p>
          </div>
        </div>

        <section className="flex flex-col gap-3" aria-labelledby="trends-heading">
          <h3 id="trends-heading" className="text-base font-bold text-sea-deep">
            Latest job trends
          </h3>
          {trends.length === 0 ? (
            <p className="rounded-2xl bg-white p-4 text-sm text-sea-deep/70">No trends match your search.</p>
          ) : (
            <ul className="flex flex-col gap-2.5">
              {trends.map((t) => {
                const open = expanded === t.id
                return (
                  <li key={t.id} className="rounded-2xl border border-mint bg-white">
                    <button
                      type="button"
                      onClick={() => setExpanded(open ? null : t.id)}
                      aria-expanded={open}
                      className="flex w-full items-center gap-3 p-4 text-left"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-mint-soft text-sea">
                        <Briefcase className="size-5" aria-hidden="true" />
                      </span>
                      <span className="flex flex-1 flex-col">
                        <span className="text-sm font-bold text-sea-deep">{t.title}</span>
                        <span className="text-xs text-sea-deep/60">
                          {t.sector} · {t.openings} openings
                        </span>
                      </span>
                      <span className="flex items-center gap-1 text-sm font-bold text-sea">
                        <TrendingUp className="size-4" aria-hidden="true" />+{t.growth}%
                      </span>
                    </button>
                    {open && (
                      <div className="flex flex-col gap-2 px-4 pb-4">
                        <p className="text-pretty text-sm leading-relaxed text-sea-deep/75">{t.summary}</p>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-mint-soft">
                          <div className="h-full rounded-full bg-sea" style={{ width: `${t.growth * 2}%` }} />
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        <section className="flex flex-col gap-3" aria-labelledby="skills-heading">
          <div className="flex items-center justify-between">
            <h3 id="skills-heading" className="text-base font-bold text-sea-deep">
              Skills in demand
            </h3>
            <div className="flex rounded-full bg-mint-soft p-1" role="tablist">
              {(['Technical', 'Creative'] as SkillType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  role="tab"
                  aria-selected={skillType === type}
                  onClick={() => setSkillType(type)}
                  className={cn(
                    'h-8 rounded-full px-3 text-xs font-semibold transition',
                    skillType === type ? 'bg-sea text-offwhite' : 'text-sea-deep/70',
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          {skills.length === 0 ? (
            <p className="rounded-2xl bg-white p-4 text-sm text-sea-deep/70">No skills match your search.</p>
          ) : (
            <ul className="flex flex-col gap-3 rounded-3xl border border-mint bg-white p-4">
              {skills.map((s) => (
                <li key={s.name} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-sea-deep">{s.name}</span>
                    <span className="font-bold text-sea">{s.demand}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-mint-soft">
                    <div className="h-full rounded-full bg-sea" style={{ width: `${s.demand}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
