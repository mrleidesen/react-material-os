import React, { useState } from 'react'
import Draggable, { DraggableEvent, DraggableData } from 'react-draggable'

import IconButton from '@material-ui/core/IconButton'
import {
  MinusIcon,
  XIcon,
  ArrowsExpandIcon
} from '@heroicons/react/solid'
import { WindowProps } from '@/types/components'

export default function WindowApp(props: WindowProps) {
  const [isZoom, setIsZoom] = useState(false)
  const [position, setPosition] = useState({ x: 100, y: 100 })

  const onDragUpdatePosition = (_e: DraggableEvent, data: DraggableData) => {
    setPosition({
      x: data.x,
      y: data.y
    })
  }
  const onStopPosition = (_e: DraggableEvent, data: DraggableData) => {
    if (data.y === 0) {
      setIsZoom(true)
      setPosition(prev => ({
        ...prev,
        y: 10
      }))
    }
  }

  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      defaultPosition={{x: 100, y: 100}}
      position={{
        x: isZoom ? 0 : position.x,
        y: isZoom ? 0 : position.y
      }}
      defaultClassName={`window-draggable ${props.className ?? ""}`}
      onDrag={onDragUpdatePosition}
      onStop={onStopPosition}
      disabled={isZoom}
    >
      <div className={`shadow rounded flex flex-col bg-gray-100 ${isZoom ? 'w-full h-full' : ''} window-draggable__tool`} onClick={() => props.activeItem(props.id)}>
        <div className="flex p-1 items-center justify-between box-border px-2 border-b border-gray-300 handle">
          <div className="flex-1 flex items-center text-gray-700 text-sm select-none" onDoubleClick={() => setIsZoom((prev) => !prev)}>
            <div className="h-5 w-5">{props.icon}</div>
            <span className="ml-2">{props.label || '无标题'}</span>
          </div>
          <div className="flex items-center h-full justify-end">
            <IconButton size="small" onClick={() => props.hideItem(props.id)}>
              <MinusIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="small" onClick={() => setIsZoom((prev) => !prev)}>
              <ArrowsExpandIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="small" onClick={() => props.deactiveItem(props.id)}>
              <XIcon className="w-4 h-4 text-red-500" />
            </IconButton>
          </div>
        </div>
        <div className="flex-1 flex overflow-auto">
          {props.children}
        </div>
      </div>
    </Draggable>
  )
}
