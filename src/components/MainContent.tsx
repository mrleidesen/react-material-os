import { MainContentProps } from '@/types/components'
import React from 'react'
import WindowApp from './Window'

import Notepad from './Notepad'
import Terminal from './Terminal'
import Browser from './Browser'
import File from './File'

export default function MainContent(props: MainContentProps) {
  const componentHash: {[key: number]: React.ReactNode} = {
    1: <File />,
    2: <Browser />,
    3: <Terminal />,
    4: <Notepad />
  }

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
                {componentHash[icon.id] || (
                  <p>{icon.name}</p>
                ) }
              </WindowApp>
            )
          }
        })
      }
    </div>
  )
}