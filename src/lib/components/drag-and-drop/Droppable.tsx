'use client'

import { useDroppable } from '@dnd-kit/core'
import React from 'react'

type Props = {
  id: string
  children: React.ReactNode
  accepts?: string[]
}

export const Droppable = ({ id, children }: Props) => {
  const { isOver, setNodeRef } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={`
        w-full
        min-h-[92dvh]
        border-2
        border-dashed
        rounded-lg
        p-6
        text-muted-foreground
        transition-colors
        duration-200
        ease-in-out
        ${isOver ? 'bg-muted/40 border-primary' : 'bg-background border-muted-foreground'}
      `}
    >
      {children}
    </div>
  )
}