'use client'

import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { useState } from 'react'
import { Draggable } from './drag-and-drop/Draggable'
import { Droppable } from './drag-and-drop/Droppable'

export function Canvas() {
  const [hasDropped, setHasDropped] = useState(false)

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over?.id === 'droppable') {
      setHasDropped(true)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-4 flex gap-8 items-start">
        {!hasDropped && (
          <Draggable>
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded shadow">
              Arrastrar
            </div>
          </Draggable>
        )}

        <Droppable>
          <div className="border-2 border-dashed border-muted-foreground rounded p-8 min-w-[200px] min-h-[100px] text-muted-foreground">
            {hasDropped ? (
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded shadow">
                Soltado
              </div>
            ) : (
              "Soltar"
            )}
          </div>
        </Droppable>
      </div>
    </DndContext>
  )
}
