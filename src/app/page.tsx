'use client'

import { DndContext, DragOverlay, DragEndEvent } from '@dnd-kit/core'
import { useState } from 'react'
import { LeftSidebar } from '@/lib/components/LeftSidebar'
import { Canvas } from '@/lib/components/Canvas'
import { Preview } from '@/lib/components/fields/Preview'

export default function App() {
  const [components, setComponents] = useState<Array<{ id: string; type: string }>>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [activeType, setActiveType] = useState<string | null>(null)

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id)
    setActiveType(event.active.data?.current?.type)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over?.id === 'canvas-dropzone' && active.data?.current?.type) {
      setComponents((prev) => [
        ...prev,
        {
          id: `${active.id}-${Date.now()}`,
          type: active.data.current?.type,
        },
      ])
    }

    setActiveId(null)
    setActiveType(null)
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex h-screen w-full">
        <div className="w-64 border-r border-border">
          <LeftSidebar />
        </div>
        <div className="flex-1 p-2 overflow-auto w-full min-h-full">
          <Canvas components={components} />
          <DragOverlay dropAnimation={null}>
            
            {activeType ? <Preview type={activeType} /> : null}
          </DragOverlay>
        </div>
      </div>
    </DndContext>
  )
}