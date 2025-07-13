'use client'

type Props = {
  icon: React.ReactNode
  title: string
  className?: string
}

export const CardComponent = ({ icon, title, className = '' }: Props) => {
  return (
    <div className={`flex flex-col items-center gap-2 border border-foreground rounded-sm p-2 hover:bg-muted cursor-pointer transition ${className}`}>
      <span className="text-foreground select-none">{icon}</span>
      <p className="text-foreground text-[11px] text-center select-none">{title}</p>
    </div>
  )
}