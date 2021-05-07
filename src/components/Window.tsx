import React, { useState } from 'react'
import Draggable from 'react-draggable'

import IconButton from '@material-ui/core/IconButton'
import { WindowProps } from '@/types/components'

export default function WindowApp(props: WindowProps) {
  const [isZoom, setIsZoom] = useState(false)
  const [position, setPosition] = useState({ x: 100, y: 100 })

  const eventLogger = (e: MouseEvent, data: any) => {
    setPosition({
      x: data.x,
      y: data.y
    })
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
      onDrag={(e: any, data: any) => eventLogger(e, data)}
      key={props.key}
      disabled={isZoom}
    >
      <div className={`shadow rounded flex flex-col bg-white ${isZoom ? 'w-full h-full' : ''} transition-all window-draggable__tool`} onClick={() => props.activeItem(props.id)}>
        <div className="flex p-1 items-center justify-end border-b border-gray-300 handle">
          <IconButton size="small" onClick={() => props.hideItem(props.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </IconButton>
          <IconButton size="small" onClick={() => setIsZoom((prev) => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </IconButton>
          <IconButton size="small" onClick={() => props.deactiveItem(props.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </IconButton>
        </div>
        <div className="flex-1 overflow-auto">
          {props.children}
        </div>
      </div>
    </Draggable>
  )
}