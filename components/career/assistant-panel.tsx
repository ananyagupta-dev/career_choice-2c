'use client'

import { useEffect, useRef, useState } from 'react'
import { CalendarCheck, Send, Sparkles, UserRound } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StudentProfile } from './onboarding-screen'
import { MargdarshakAvatar } from './margdarshak-avatar'

type Message = { id: number; from: 'ai' | 'student' | 'counselor'; text: string }

const QUICK_PROMPTS = [
  'Careers beyond engineering?',
  'Talk to a counselor',
  'Which skills should I learn?',
]

function replyFor(text: string, profile: StudentProfile): string {
  const t = text.toLowerCase()
  if (t.includes('counsel'))
    return 'I\u2019ve found 3 verified counselors who specialise in your stream. Tap "Book a session" below and pick a slot that suits you.'
  if (t.includes('skill'))
    return `For ${profile.stream} students right now, Python, UI/UX design and data storytelling are lighting up the market. Check the Market tab for live trends.`
  if (t.includes('engineer') || t.includes('beyond'))
    return `Great question! With ${profile.stream}, you could explore paths like Product Manager, UI/UX Designer or Sports Data Analyst. Each one blends your interests in new ways.`
  return `Thank you for sharing, ${profile.name.split(' ')[0]}. Every path begins with one honest step. Shall I shortlist 3 careers that match "${profile.interests}"?`
}

export function AssistantPanel({ profile }: { profile: StudentProfile }) {
  const firstName = profile.name.split(' ')[0]
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: 'ai',
      text: `Namaste ${firstName}! I\u2019m Margdarshak, your career guide. I see you\u2019re in ${profile.stream} and enjoy ${profile.interests.toLowerCase()}.`,
    },
    { id: 2, from: 'student', text: profile.problem },
    {
      id: 3,
      from: 'ai',
      text: 'You\u2019re not alone, many students feel this way. Let\u2019s look beyond the usual options together. I can also connect you with a real career counselor.',
    },
    {
      id: 4,
      from: 'counselor',
      text: 'Hi! I\u2019m Dr. Meera Iyer, career counselor. Happy to do a free 15-min call to map your strengths.',
    },
  ])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const [booked, setBooked] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = endRef.current?.closest('[data-chat-scroll]')
    scroller?.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  function send(text: string) {
    const clean = text.trim()
    if (!clean || typing) return
    setMessages((m) => [...m, { id: Date.now(), from: 'student', text: clean }])
    setDraft('')
    setTyping(true)
    setTimeout(() => {
      setMessages((m) => [...m, { id: Date.now() + 1, from: 'ai', text: replyFor(clean, profile) }])
      setTyping(false)
    }, 900)
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="flex shrink-0 items-center gap-3 border-b border-mint bg-gradient-to-r from-mint to-mint-soft px-4 py-2.5">
        <MargdarshakAvatar size={52} glow />
        <div className="flex flex-col">
          <h2 className="text-lg font-extrabold text-sea-deep">Margdarshak AI</h2>
          <p className="flex items-center gap-1.5 text-xs font-medium text-sea">
            <span className="size-2 rounded-full bg-sea" aria-hidden="true" />
            Your guide to the right path
          </p>
        </div>
      </header>

      <div data-chat-scroll className="min-h-0 flex-1 overflow-y-auto scrollbar-none">
        <div className="flex flex-col gap-3.5 px-4 py-5" aria-live="polite">
          <div className="flex flex-row items-center gap-3 rounded-2xl border border-mint bg-white px-4 py-3 text-left">
            <MargdarshakAvatar size={64} glow />
            <p className="text-base font-bold text-sea-deep">Welcome to Margdarshak AI</p>
            <p className="text-pretty text-sm leading-relaxed text-sea-deep/70">
              Like a trusted guru, I illuminate options and connect you with real counselors.
            </p>
          </div>

          {messages.map((m) => (
            <Bubble key={m.id} message={m} />
          ))}

          {typing && (
            <div className="flex items-end gap-2">
              <MargdarshakAvatar size={30} />
              <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm" aria-label="Margdarshak is typing">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="size-2 animate-bounce rounded-full bg-sea"
                    style={{ animationDelay: `${i * 120}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 rounded-2xl bg-sea p-4 text-offwhite">
            <CalendarCheck className="size-6 shrink-0" aria-hidden="true" />
            <div className="flex flex-1 flex-col">
              <p className="text-sm font-bold">{booked ? 'Session booked!' : 'Free counselor session'}</p>
              <p className="text-xs text-offwhite/80">
                {booked ? 'Sat, 11:00 AM with Dr. Meera Iyer' : '15 min · Stream specialist'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setBooked((b) => !b)}
              className="h-10 rounded-full bg-offwhite px-4 text-sm font-bold text-sea transition hover:bg-mint"
            >
              {booked ? 'Cancel' : 'Book a session'}
            </button>
          </div>
          <div ref={endRef} />
        </div>
      </div>

      <div className="shrink-0 border-t border-mint bg-offwhite px-4 pb-3 pt-3">
        <div className="-mx-4 mb-3 flex gap-2 overflow-x-auto px-4 scrollbar-none">
          {QUICK_PROMPTS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => send(p)}
              className="flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-mint bg-white px-3.5 text-xs font-semibold text-sea-deep transition hover:border-sea"
            >
              <Sparkles className="size-3.5 text-sea" aria-hidden="true" />
              {p}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            send(draft)
          }}
          className="flex items-center gap-2"
        >
          <label htmlFor="chat-input" className="sr-only">
            Message Margdarshak AI
          </label>
          <input
            id="chat-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.nativeEvent.isComposing || e.keyCode === 229)) e.preventDefault()
            }}
            placeholder="Ask Margdarshak AI..."
            className="h-12 flex-1 rounded-full border-2 border-mint bg-white px-5 text-base text-sea-deep placeholder:text-sea-deep/40 outline-none focus:border-sea"
          />
          <button
            type="submit"
            disabled={!draft.trim() || typing}
            aria-label="Send message"
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sea text-offwhite transition hover:bg-sea-deep disabled:opacity-40"
          >
            <Send className="size-5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  )
}

function Bubble({ message }: { message: Message }) {
  if (message.from === 'student') {
    return (
      <div className="flex justify-end">
        <p className="max-w-[80%] rounded-2xl rounded-br-md bg-sea px-4 py-3 text-sm leading-relaxed text-offwhite">
          {message.text}
        </p>
      </div>
    )
  }
  const isCounselor = message.from === 'counselor'
  return (
    <div className="flex items-end gap-2">
      {isCounselor ? (
        <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-sea-deep text-offwhite">
          <UserRound className="size-4" aria-hidden="true" />
        </span>
      ) : (
        <MargdarshakAvatar size={30} />
      )}
      <div
        className={cn(
          'flex max-w-[80%] flex-col gap-1 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm',
          isCounselor ? 'border-2 border-mint bg-mint-soft' : 'bg-white',
        )}
      >
        <span className="text-xs font-bold text-sea">
          {isCounselor ? 'Dr. Meera Iyer · Counselor' : 'Margdarshak AI'}
        </span>
        <p className="text-sm leading-relaxed text-sea-deep">{message.text}</p>
      </div>
    </div>
  )
}
