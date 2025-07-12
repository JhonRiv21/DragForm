'use client'

import { LeftSidebar } from "@/lib/components/LeftSidebar";
import { Canvas } from "@/lib/components/Canvas";

export default function Home() {

  return (
    <main className="flex min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <div className="w-64 border-r border-border">
        <LeftSidebar />
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <Canvas />
      </div>
    </main>
  );
}
