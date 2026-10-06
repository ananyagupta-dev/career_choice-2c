import { ArrowUpRight, Sparkles } from 'lucide-react'
import type { TopMatch } from '@/lib/career-data'

export function TopMatches({
  matches,
  stream,
  onOpen,
}: {
  matches: TopMatch[]
  stream: string
  onOpen: (match: TopMatch) => void
}) {
  return (
    <section
      aria-labelledby="top-matches-title"
      className="flex flex-col gap-3 rounded-3xl bg-sea p-4 text-offwhite shadow-[0_12px_30px_-12px_rgba(46,139,87,0.6)]"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <h3 id="top-matches-title" className="flex items-center gap-1.5 text-lg font-extrabold">
            <Sparkles className="size-4 text-mint" aria-hidden="true" />
            Your Top 3 Matches
          </h3>
          <p className="text-xs text-offwhite/75">Picked for your {stream} profile and interests</p>
        </div>
      </div>

      <ol className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 scrollbar-none">
        {matches.map((m, i) => (
          <li key={m.career.id} className="w-[78%] shrink-0 snap-start">
            <button
              type="button"
              onClick={() => onOpen(m)}
              className="group flex h-full w-full flex-col gap-2.5 rounded-2xl bg-offwhite p-3.5 text-left text-sea-deep transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-mint"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="flex size-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea-deep">
                  #{i + 1}
                </span>
                <span className="rounded-full bg-mint-soft px-2.5 py-1 text-xs font-bold text-sea">
                  {m.match}% Match
                </span>
              </div>
              <span className="text-base font-bold leading-snug">{m.career.title}</span>
              <span className="line-clamp-2 text-pretty text-sm leading-relaxed text-sea-deep/70">{m.hook}</span>
              <div aria-hidden="true" className="h-1.5 w-full overflow-hidden rounded-full bg-mint-soft">
                <div className="h-full rounded-full bg-sea" style={{ width: `${m.match}%` }} />
              </div>
              <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-sea">
                View roadmap
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  )
}
