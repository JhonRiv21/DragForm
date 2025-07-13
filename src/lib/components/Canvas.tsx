'use client'

import { DndContext, DragEndEvent, DragOverlay } from '@dnd-kit/core'
import { useState } from 'react'
import { Droppable } from './drag-and-drop/Droppable'
import { useClientOnly } from '@/hooks/use-client-only'
import { Preview } from './fields/Preview'

const DROPPABLE_ID = 'zone-1'

export function Canvas() {
  const mounted = useClientOnly()
  const [components, setComponents] = useState<Array<{ id: string | number; type: string }>>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [draggingItem, setDraggingItem] = useState<React.ReactNode | null>(null)

  if (!mounted) return null;

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id)
    setDraggingItem(event.active.data.current?.node)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over?.id === DROPPABLE_ID && active.data.current) {
      setComponents((prev) => [
        ...prev,
        {
          id: String(active.id),
          type: String(active.data.current?.type ?? ''),
        },
      ]);
    }

    setActiveId(null);
    setDraggingItem(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="p-4 flex gap-8 items-start h-full">
        <Droppable id={DROPPABLE_ID} accepts={['basic']}>
          <div className="w-full h-full border-2 border-dashed border-muted-foreground rounded p-8 text-muted-foreground">
            {components.length > 0 ? (
              components.map((component, index) => (
                <div key={`${component.id}-${index}`} className="mb-4">
                  {renderComponent(component)}
                </div>
              ))
            ) : (
              <p className='select-none'>Drag a component here</p>
            )}
          </div>
        </Droppable>
      </div>

      <DragOverlay dropAnimation={null}>
        {activeId ? draggingItem : null}
      </DragOverlay>
    </DndContext>
  )
}

function renderComponent(component: { id: string | number; type: string }) {
  return <Preview title={component.type} />
}