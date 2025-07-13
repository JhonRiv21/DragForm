'use client'

import { useDraggable } from '@dnd-kit/core'
import React from 'react'

type Props = {
  id: string
  data?: Record<string, any>
  children: React.ReactNode
}

export const Draggable = ({ id, data, children }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data,
  })

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="inline-block cursor-grab active:cursor-grabbing"
    >
      {children}
    </div>
  )
}