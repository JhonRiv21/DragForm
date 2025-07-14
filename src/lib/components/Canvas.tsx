'use client'

import { Droppable } from './drag-and-drop/Droppable'
import { Preview } from './fields/Preview'
import { Placeholder } from './drag-and-drop/Placeholder'
import { Trash } from 'lucide-react'

type ComponentItem = {
  id: string | number
  type: string
}

type Props = {
  components: ComponentItem[]
  isOver: boolean
  onDelete: (id: string | number) => void
}

export function Canvas({ components, isOver, onDelete }: Props) {
  const isEmpty = components.length === 0
  
  return (
    <div className="p-4 flex gap-8 items-start flex-1">
      <Droppable id="canvas-dropzone">
        <div className="space-y-4 w-full">
          {components.map((component, index) => (
            <div key={`${component.id}-${index}`}>
              <div className="relative group">
                <button
                  onClick={() => onDelete(component.id)}
                  className="absolute top-1 right-1 cursor-pointer opacity-0 group-hover:opacity-100 transition text-destructive"
                >
                  <Trash className='w-4 h-4' />
                </button>
                <Preview type={component.type} />
              </div>
            </div>
          ))}

          {isOver && <Placeholder />}

          {isEmpty && !isOver && (
            <div className="text-muted-foreground text-center mt-[25%] text-lg select-none">
              Drag a component here
            </div>
          )}
        </div>
      </Droppable>
    </div>
  )
}
