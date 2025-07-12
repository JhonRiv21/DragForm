'use client'

import { useDroppable } from '@dnd-kit/core'

export function Droppable({ children }) {
  const { isOver, setNodeRef } = useDroppable({ id: 'droppable' })

  return (
    <div
      ref={setNodeRef}
      style={{
        backgroundColor: isOver ? '#1e1e1e' : undefined,
        transition: 'background 0.2s ease',
      }}
    >
      {children}
    </div>
  )
}