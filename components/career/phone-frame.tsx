import { BatteryFull, Signal, Wifi } from 'lucide-react'

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-dvh min-h-[680px] w-full max-w-none flex-col bg-offwhite md:h-dvh md:min-h-0 md:rounded-none md:shadow-none lg:mx-auto lg:max-w-[1440px]">
      <div className="relative flex h-full w-full flex-col overflow-hidden bg-offwhite md:rounded-none">
        <div className="relative z-20 flex h-12 shrink-0 items-center justify-between px-8 pt-1 text-sea-deep md:hidden">
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
