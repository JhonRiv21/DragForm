'use client'

type Props = {
  icon: React.ReactNode
  title: string
}

export const CardComponent = ({ icon, title }: Props) => {
  return (
    <div
      className={`
        w-18 h-18
        flex flex-col items-center justify-center
        gap-2 text-foreground
        border border-gray-500
        bg-card
        rounded-sm shadow-sm
        hover:shadow-md hover:bg-muted transition
        cursor-pointer select-none
      `}
    >
      <div className="text-xl">{icon}</div>
      <p className="text-xs text-center">{title}</p>
    </div>
  )
}