export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return <div className="min-h-dvh w-full bg-[radial-gradient(circle_at_15%_10%,#15315b_0,transparent_34%),radial-gradient(circle_at_90%_0%,#32185a_0,transparent_30%),#080d1d] p-0 text-foreground sm:p-4 lg:p-8"><div className="mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-[1440px] flex-col overflow-hidden rounded-none border border-white/10 bg-background shadow-2xl shadow-cyan-950/30 sm:rounded-[2rem] lg:min-h-[calc(100dvh-4rem)]">{children}</div></div>
}
