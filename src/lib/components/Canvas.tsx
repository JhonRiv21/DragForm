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
}

export function Canvas({ components }: Props) {
  return (
    <div className="p-4 flex gap-8 items-start flex-1">
      <Droppable id="canvas-dropzone">
        {components.length > 0 ? (
          components.map((component, index) => (
            <div key={`${component.id}-${index}`} className="mb-4">
              <Preview type={component.type} />
            </div>
          ))
        ) : (
          <p className="select-none text-center text-xl mt-[25%]">Drag a component here</p>
        )}
      </Droppable>
    </div>
  )
}
