'use client'

import { useEffect, useRef } from 'react'
import { Bookmark, BookmarkCheck, Sparkles, TrendingUp, X } from 'lucide-react'
import { getRoadmap, type Career } from '@/lib/career-data'
import { cn } from '@/lib/utils'

export function RoadmapModal({
  career,
  match,
  saved,
  onToggleSave,
  onClose,
}: {
  career: Career
  match?: number
  saved: boolean
  onToggleSave: () => void
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const steps = getRoadmap(career)

  useEffect(() => {
    closeRef.current?.focus()
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-end">
      <button
        type="button"
        aria-label="Close roadmap"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 bg-sea-deep/40 backdrop-blur-[2px] animate-in fade-in"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="roadmap-title"
        className="relative flex max-h-[88%] flex-col rounded-t-[2rem] bg-offwhite shadow-2xl animate-in slide-in-from-bottom duration-300"
      >
        <div aria-hidden="true" className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-sea-deep/20" />
        <div className="min-h-0 flex-1 overflow-y-auto scrollbar-none px-5 pb-8 pt-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-full bg-mint-soft px-2.5 py-0.5 text-xs font-semibold text-sea">
                  {career.category}
                </span>
                {match !== undefined && (
                  <span className="flex items-center gap-1 rounded-full bg-sea px-2.5 py-0.5 text-xs font-bold text-offwhite">
                    <Sparkles className="size-3" aria-hidden="true" />
                    {match}% Match
                  </span>
                )}
              </div>
              <h2 id="roadmap-title" className="text-balance text-2xl font-extrabold text-sea-deep">
                {career.title}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close roadmap"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-sea-deep ring-2 ring-mint transition hover:ring-sea"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-2 text-pretty text-sm leading-relaxed text-sea-deep/75">{career.tagline}</p>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <div className="rounded-2xl bg-white p-3 ring-1 ring-mint">
              <p className="text-xs font-medium text-sea-deep/60">Salary range</p>
              <p className="text-base font-bold text-sea-deep">{career.salary}</p>
            </div>
            <div className="rounded-2xl bg-white p-3 ring-1 ring-mint">
              <p className="text-xs font-medium text-sea-deep/60">Job growth</p>
              <p className="flex items-center gap-1 text-base font-bold text-sea">
                <TrendingUp className="size-4" aria-hidden="true" />
                {career.growth}
              </p>
            </div>
          </div>

          <h3 className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-sea">Your roadmap</h3>
          <ol className="mt-3 flex flex-col">
            {steps.map((step, i) => (
              <li key={step.stage} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sea text-sm font-bold text-offwhite">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && <span aria-hidden="true" className="w-0.5 flex-1 bg-mint" />}
                </div>
                <div className={cn('flex flex-col gap-0.5', i < steps.length - 1 && 'pb-5')}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sea-deep/55">{step.stage}</span>
                  <span className="font-bold text-sea-deep">{step.title}</span>
                  <span className="text-pretty text-sm leading-relaxed text-sea-deep/70">{step.detail}</span>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-sea">Key skills</h3>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {career.skills.map((s) => (
              <span key={s} className="rounded-lg bg-mint-soft px-2.5 py-1 text-xs font-semibold text-sea-deep">
                {s}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleSave}
            aria-pressed={saved}
            className={cn(
              'mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-2xl text-base font-bold transition',
              saved ? 'bg-mint text-sea-deep' : 'bg-sea text-offwhite hover:bg-sea-deep',
            )}
          >
            {saved ? <BookmarkCheck className="size-5" aria-hidden="true" /> : <Bookmark className="size-5" aria-hidden="true" />}
            {saved ? 'Saved to my paths' : 'Save this path'}
          </button>
        </div>
      </div>
    </div>
  )
}
