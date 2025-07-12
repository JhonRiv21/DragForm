'use client'

import { Separator } from "@/components/ui/separator"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarProvider } from "@/components/ui/sidebar"
import { CardComponent } from "./CardComponent"
import { Activity, Archive, Atom, Box, Calendar, SendHorizontal } from "lucide-react"

const dummy = {
  input: [
    { icon: Activity, title: 'Text Input' },
    { icon: Archive, title: 'Email Input' },
    { icon: Atom, title: 'Password Input' }
  ],
  select: [
    { icon: Box, title: 'Single Select' },
    { icon: Calendar, title: 'Date Picker' }
  ],
  button: [
    { icon: SendHorizontal, title: 'Button' },
  ]
}

export function LeftSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="text-sm font-bold">Components</SidebarGroupLabel>
          <Separator className="mt-2 p-[1px]" />
        </SidebarGroup>
        <SidebarContent className="px-2">
          {Object.entries(dummy).map(([groupName, items]) => (
            <SidebarGroup key={groupName} className="px-0">
              <SidebarGroupLabel className="text-sm font-bold capitalize px-0">
                {groupName}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="grid grid-cols-3 gap-3">
                  {items.map((item) => (
                    <CardComponent
                      key={item.title}
                      title={item.title}
                      icon={<item.icon />}
                    />
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