'use client'

import { Droppable } from './drag-and-drop/Droppable'
import { Preview } from './fields/Preview'
import { Placeholder } from './drag-and-drop/Placeholder'

type ComponentItem = {
  id: string | number
  type: string
}

type Props = {
  components: ComponentItem[]
  isOver: boolean
}

export function Canvas({ components, isOver }: Props) {
  const isEmpty = components.length === 0
  
  return (
    <div className="p-4 flex gap-8 items-start flex-1">
      <Droppable id="canvas-dropzone">
        <div className="space-y-4 w-full">
          {components.map((component, index) => (
            <div key={`${component.id}-${index}`}>
              <Preview type={component.type} />
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
