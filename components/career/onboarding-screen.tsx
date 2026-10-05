'use client'

import { useState } from 'react'
import { ArrowRight, Check, Compass } from 'lucide-react'
import { STREAMS, type Stream } from '@/lib/career-data'
import { cn } from '@/lib/utils'
import { MargdarshakAvatar } from './margdarshak-avatar'

export type StudentProfile = {
  name: string
  stream: Stream
  interests: string
  problem: string
}

export function OnboardingScreen({ onSubmit }: { onSubmit: (profile: StudentProfile) => void }) {
  const [name, setName] = useState('')
  const [stream, setStream] = useState<Stream | null>(null)
  const [interests, setInterests] = useState('')
  const [problem, setProblem] = useState('')
  const [showErrors, setShowErrors] = useState(false)

  const isValid = name.trim().length > 0 && stream !== null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid || !stream) {
      setShowErrors(true)
      return
    }
    onSubmit({
      name: name.trim(),
      stream,
      interests: interests.trim() || 'Exploring new things',
      problem: problem.trim() || 'Not sure which path fits me',
    })
  }

  const inputClass =
    'w-full rounded-2xl border-2 border-mint bg-white px-4 py-3.5 text-base text-sea-deep placeholder:text-sea-deep/40 outline-none transition focus:border-sea focus:ring-4 focus:ring-mint/60'

  return (
    <div className="min-h-0 flex-1 overflow-y-auto scrollbar-none">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-6 pb-14 pt-4" noValidate>
        <header className="flex flex-col items-center gap-3 rounded-3xl bg-gradient-to-b from-mint to-mint-soft px-5 pb-6 pt-7 text-center">
          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-sea text-offwhite shadow-lg shadow-sea/30">
            <Compass className="size-7" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-3xl font-extrabold tracking-tight text-sea-deep">CAREER CHOICE</h2>
            <p className="text-pretty text-base font-medium text-sea">Ditch the confusion. Find your path.</p>
          </div>
        </header>

        <div className="flex items-start gap-3 rounded-2xl border border-mint bg-white p-4">
          <MargdarshakAvatar size={44} />
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-bold text-sea-deep">Margdarshak AI</p>
            <p className="text-pretty text-sm leading-relaxed text-sea-deep/75">
              {'Namaste! Tell me a little about yourself and I\u2019ll light up the paths that fit you best.'}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-sea-deep">
            Your name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Aanya Sharma"
            autoComplete="given-name"
            className={inputClass}
            aria-invalid={showErrors && !name.trim()}
          />
          {showErrors && !name.trim() && (
            <p className="text-sm text-red-700">Please enter your name.</p>
          )}
        </div>

        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-sm font-semibold text-sea-deep">Academic stream</legend>
          <div className="grid grid-cols-2 gap-3" role="radiogroup">
            {STREAMS.map((s) => {
              const active = stream === s.id
              return (
                <button
                  key={s.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setStream(s.id)}
                  className={cn(
                    'relative flex min-h-20 flex-col items-start justify-center gap-1 rounded-2xl border-2 px-4 py-3 text-left transition',
                    active
                      ? 'border-sea bg-sea text-offwhite shadow-md shadow-sea/30'
                      : 'border-mint bg-white text-sea-deep hover:border-sea/60',
                  )}
                >
                  <span className="text-base font-bold tracking-wide">{s.label}</span>
                  <span className={cn('text-xs', active ? 'text-offwhite/85' : 'text-sea-deep/60')}>
                    {s.hint}
                  </span>
                  {active && (
                    <Check className="absolute right-3 top-3 size-4" aria-hidden="true" />
                  )}
                </button>
              )
            })}
          </div>
          {showErrors && !stream && <p className="text-sm text-red-700">Pick your stream.</p>}
        </fieldset>

        <div className="flex flex-col gap-2">
          <label htmlFor="interests" className="text-sm font-semibold text-sea-deep">
            Your interests
          </label>
          <input
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Drawing, coding, sports, music..."
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="problem" className="text-sm font-semibold text-sea-deep">
            What makes choosing a career hard for you?
          </label>
          <textarea
            id="problem"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            rows={4}
            placeholder="e.g. Everyone says engineering or medicine, but I don't feel excited about either."
            className={cn(inputClass, 'resize-none leading-relaxed')}
          />
        </div>

        <button
          type="submit"
          className="mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-sea text-lg font-bold tracking-widest text-offwhite shadow-lg shadow-sea/30 transition hover:bg-sea-deep active:scale-[0.98]"
        >
          NEXT
          <ArrowRight className="size-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}
