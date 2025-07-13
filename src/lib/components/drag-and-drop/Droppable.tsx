'use client'

import { useDroppable } from '@dnd-kit/core'
import React from 'react'

type Props = {
  id: string
  accepts?: string[]
  children: React.ReactNode
  className?: string
}

export const Droppable = ({ id, accepts, children, className = '' }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data: {
      accepts,
    },
  })

  return (
    <div
      ref={setNodeRef}
      className={`transition-colors duration-200 rounded border-2 border-dashed w-full h-full
        ${isOver ? 'bg-muted' : 'bg-background'} ${className}`}
    >
      {children}
    </div>
  )
}
