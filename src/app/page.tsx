'use client'

import { DndContext, DragOverlay, DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core'
import { useState } from 'react'
import { LeftSidebar } from '@/lib/components/LeftSidebar'
import { Canvas } from '@/lib/components/Canvas'
import { CardComponent } from '@/lib/components/CardComponent'
import { useClientOnly } from '@/hooks/use-client-only'

export default function App() {
  const [components, setComponents] = useState<Array<{ id: string; type: string }>>([])
  const [activeType, setActiveType] = useState<string | null>(null)
  const [isOverCanvas, setIsOverCanvas] = useState(false)
  const [activeIcon, setActiveIcon] = useState<React.ReactNode | null>(null)
  const [activeTitle, setActiveTitle] = useState<string | null>(null)
  const mounted = useClientOnly()

  if (!mounted)  return null

  const handleDragStart = (event: DragStartEvent) => {
    const data = event.active.data?.current as {
      type?: string
      title?: string
      icon?: React.ReactNode
    }

    setActiveType(data?.type ?? null)
    setActiveTitle(data?.title ?? null)
    setActiveIcon(data?.icon ?? null)
  }
  
  const handleDragOver = (event: DragOverEvent) => {
    const { over } = event
    setIsOverCanvas(over?.id === 'canvas-dropzone')
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

    setActiveType(null)
    setIsOverCanvas(false)
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
      <div className="flex h-screen w-full">
        <div className="border-r border-border">
          <LeftSidebar />
        </div>
        <div className="flex-1 p-2 overflow-auto w-full min-h-full">
          <Canvas components={components} isOver={isOverCanvas} />
          <DragOverlay dropAnimation={null}>
            {activeType && activeIcon && activeTitle ? (
              <CardComponent icon={activeIcon} title={activeTitle} />
            ) : null}
          </DragOverlay>
        </div>
      </div>
    </DndContext>
  )
}