import { MainContentProps } from '@/types/components'
import React from 'react'
import WindowApp from './Window'

import Notepad from './Notepad'

export default function MainContent(props: MainContentProps) {
  // const componentHash = {
  //   4: <Notepad />
  // }

  return (
    <div className="relative flex-1">
      {
        props.icons.map(icon => {
          if (props.activeIds.includes(icon.id)) {
            return (
              <WindowApp 
                key={icon.id}
                id={icon.id}
                label={icon.name}
                className={`${props.activeId === icon.id ? 'window-draggable--active' : ''} ${props.hideIds.includes(icon.id) ? 'hidden' : ''}`}
                activeItem={props.activeItem}
                deactiveItem={props.deactiveItem}
                hideItem={props.hideItem}
              >
                <Notepad />
              </WindowApp>
            )
          }
        })
      }
      {/* <WindowApp onClick={() => handleClick(1)} className={activeId === 1 ? 'window-draggable--active' : ''}></WindowApp> */}
    </div>
  )
}