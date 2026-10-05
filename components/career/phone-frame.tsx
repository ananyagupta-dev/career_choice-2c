import { BatteryFull, Signal, Wifi } from 'lucide-react'

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[820px] w-full max-w-[410px] shrink-0 rounded-[3.25rem] bg-sea-deep p-3 shadow-[0_40px_80px_-20px_rgba(20,64,43,0.45),0_0_0_2px_rgba(46,139,87,0.35)]">
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.6rem] bg-offwhite">
        <div className="relative z-20 flex h-12 shrink-0 items-center justify-between px-8 pt-1 text-sea-deep">
          <span className="text-sm font-semibold">9:41</span>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-2 h-7 w-28 -translate-x-1/2 rounded-full bg-sea-deep"
          />
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <Signal className="size-4" />
            <Wifi className="size-4" />
            <BatteryFull className="size-5" />
          </div>
        </div>
        <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      </div>
    </div>
  )
}
