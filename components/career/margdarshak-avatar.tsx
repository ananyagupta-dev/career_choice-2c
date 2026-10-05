import Image from 'next/image'
import { cn } from '@/lib/utils'

export function MargdarshakAvatar({
  size = 40,
  glow = false,
  className,
}: {
  size?: number
  glow?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-offwhite ring-2 ring-mint',
        glow && 'shadow-[0_0_0_6px_rgba(191,238,219,0.6),0_8px_24px_-6px_rgba(46,139,87,0.5)]',
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/margdarshak-avatar.png"
        alt="Margdarshak AI, a glowing diya lighting the path"
        width={size * 2}
        height={size * 2}
        className="size-full scale-[1.45] object-cover"
      />
    </span>
  )
}
