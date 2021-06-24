import React, { useState } from 'react'
import { Rnd } from 'react-rnd'

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
  const [size, setSize] = useState({ width: 500, height: 400 })

  const onDragUpdatePosition = (_e: any, data: any) => {
    setPosition({
      x: data.x,
      y: data.y
    })
  }
  const onStopPosition = (_e: any, data: any) => {
    if (data.y === 0) {
      setIsZoom(true)
      setPosition(prev => ({
        ...prev,
        y: 10
      }))
    }
  }
  const onResizeChange = (
    _e: MouseEvent | TouchEvent,
    _direction: any,
    ref: HTMLElement,
    _delta: any,
    r_position: any
  ) => {
    setSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight
    })
    setPosition(r_position)
  }

  return (
    <Rnd
      dragHandleClassName="handle"
      bounds="parent"
      position={{
        x: isZoom ? 0 : position.x,
        y: isZoom ? 0 : position.y
      }}
      size={{
        width: isZoom ? '100%' : size.width,
        height: isZoom ? '100%' : size.height,
      }}
      className={`window-draggable ${props.className ?? ""}`}
      minHeight="300px"
      minWidth="300px"
      onDrag={onDragUpdatePosition}
      onDragStop={onStopPosition}
      onResize={onResizeChange}
      disableDragging={isZoom}
      style={props.style}
    >
      <div 
        className={`rounded flex flex-col bg-gray-100 w-full h-full window-draggable__tool`} 
        onClick={() => props.activeItem(props.id)}
      >
        <div className="flex p-1 items-center justify-between box-border px-2 border-b border-gray-300">
          <div 
            className="flex-1 flex items-center text-gray-700 text-sm select-none handle" 
            onDoubleClick={() => setIsZoom((prev) => !prev)}
          >
            <div className="h-5 w-5">{props.icon}</div>
            <span className="ml-2 font-semibold">{props.label || '无标题'}</span>
          </div>
          <div className="flex items-center h-full justify-end">
            <IconButton 
              size="small" 
              onClick={(e) => {
                e.stopPropagation()
                props.hideItem(props.id)
              }}
            >
              <MinusIcon className="w-4 h-4" />
            </IconButton>
            <IconButton 
              size="small" 
              onClick={() => setIsZoom((prev) => !prev)}
            >
              <ArrowsExpandIcon className="w-4 h-4" />
            </IconButton>
            <IconButton 
              size="small" 
              onClick={(e) => {
                e.stopPropagation()
                props.deactiveItem(props.id)
              }}
            >
              <XIcon className="w-4 h-4 text-red-500" />
            </IconButton>
          </div>
        </div>
        <div className="flex-1 flex overflow-auto">
          {props.children}
        </div>
      </div>
    </Rnd>
  )
}
