'use client'

import { useDraggable } from '@dnd-kit/core'
import { type DraggableData } from '../../types/Draggable' 

type Props = {
  id: string
  data?: DraggableData
  children: React.ReactNode
}

export const Draggable = ({ id, data, children }: Props) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id, data })

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isDragging ? 0.5 : 1,
    transition: 'opacity 0.2s ease',
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-grab active:cursor-grabbing"
    >
      {children}
    </div>
  )
}