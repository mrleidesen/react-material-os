import React, { useState } from 'react'
import WindowApp from './Window'

export default function MainContent() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const handleClick = (id: number) => {
    setActiveId(id)
  }

  return (
    <div className="relative flex-1">
      <WindowApp onClick={() => handleClick(1)} className={activeId === 1 ? 'window-draggable--active' : ''}></WindowApp>
      <WindowApp onClick={() => handleClick(2)} className={activeId === 2 ? 'window-draggable--active' : ''}></WindowApp>
    </div>
  )
}