'use client'

import { Separator } from "@/components/ui/separator"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarProvider } from "@/components/ui/sidebar"
import { CardComponent } from "./CardComponent"
import { Activity, Archive, Atom, Box, Calendar, SendHorizontal } from "lucide-react"
import { Preview } from "./fields/Preview"
import { Draggable } from "./drag-and-drop/Draggable"

const dummy = {
  input: [
    { icon: Activity, title: 'Text Input', name: 'text' },
    { icon: Archive, title: 'Email Input', name: 'email' },
    { icon: Atom, title: 'Password Input', name: 'password' }
  ],
  select: [
    { icon: Box, title: 'Single Select', name: 'select' },
    // { icon: Calendar, title: 'Date Picker', name: 'date' }
  ],
  button: [
    { icon: SendHorizontal, title: 'Button', name: 'button' },
  ]
}

export function LeftSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="text-sm font-bold select-none">Components</SidebarGroupLabel>
          <Separator className="mt-2 p-[1px]" />
        </SidebarGroup>
        <SidebarContent className="px-2">
          {Object.entries(dummy).map(([groupName, items]) => (
            <SidebarGroup key={groupName} className="px-0">
              <SidebarGroupLabel className="text-sm font-bold capitalize px-0 select-none">
                {groupName}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {items.map((item) => (
                    <Draggable
                      key={item.title}
                      id={`component-${item.name}`}
                      data={{
                        type: item.name,
                        node: <Preview type={item.name} />
                      }}
                    >
                      <CardComponent
                        title={item.title}
                        icon={<item.icon />}
                      />
                    </Draggable>
                  ))}
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}