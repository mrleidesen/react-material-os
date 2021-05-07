import { MainContentProps } from '@/types/components'
import React from 'react'
import WindowApp from './Window'

export default function MainContent(props: MainContentProps) {

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
                <p>{icon.name}</p>
              </WindowApp>
            )
          }
        })
      }
      {/* <WindowApp onClick={() => handleClick(1)} className={activeId === 1 ? 'window-draggable--active' : ''}></WindowApp> */}
    </div>
  )
}