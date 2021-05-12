import { MainContentProps } from '@/types/components'
import React from 'react'
import WindowApp from './Window'

import VSCode from './apps/VSCode'
import Terminal from './apps/Terminal'
import Browser from './apps/Browser'
import File from './apps/File'

export default function MainContent(props: MainContentProps) {
  const componentHash: {[key: number]: React.ReactNode} = {
    1: <File />,
    2: <Browser />,
    3: <Terminal />,
    4: <VSCode />
  }

  const computedZIndex = (id: number) => {
    const findIndex = props.activeIds.findIndex(activeId => activeId === id) + 1
    const defaultZIndex = props.activeId === id ? 20 : 10

    return defaultZIndex + findIndex
  }

  return (
    <div className="relative flex-1">
      {
        props.icons.map(icon => (
          props.activeIds.includes(icon.id) ? (
            <WindowApp 
              key={icon.id}
              id={icon.id}
              label={icon.name}
              className={`${props.activeId === icon.id ? 'window-draggable--active' : ''} ${props.hideIds.includes(icon.id) ? 'hidden-important' : ''}`}
              activeItem={props.activeItem}
              deactiveItem={props.deactiveItem}
              hideItem={props.hideItem}
              icon={icon.icon}
              style={{
                zIndex: computedZIndex(icon.id)
              }}
            >
              {componentHash[icon.id] || (
                <p>{icon.name}</p>
              ) }
            </WindowApp>
          ) : null
        ))
      }
    </div>
  )
}