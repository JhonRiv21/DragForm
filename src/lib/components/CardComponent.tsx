'use client'

type Props = {
  icon: React.ReactNode
  title: string
}

export const CardComponent = ({ icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 border border-foreground rounded-sm p-2 hover:bg-muted cursor-pointer transition">
      <span className="text-foreground">{icon}</span>
      <p className="text-foreground text-[11px] text-center">{title}</p>
    </div>
  )
}
