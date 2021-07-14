import { ReactNode } from 'react'
import { useStore } from '@/store'

import WindowApp from './Window'

import VSCode from './apps/VSCode'
import Terminal from './apps/Terminal'
import Browser from './apps/Browser'
import File from './apps/File'

export default function MainContent() {
  const state = useStore()
  const componentHash: {[key: number]: ReactNode} = {
    1: <File />,
    2: <Browser />,
    3: <Terminal />,
    4: <VSCode />
  }

  const computedZIndex = (id: number) => {
    const findIndex = state.activeIds.findIndex(activeId => activeId === id) + 1
    const defaultZIndex = state.activeId === id ? 20 : 10

    return defaultZIndex + findIndex
  }

  return (
    <div className="relative flex-1">
      {
        state.icons.map(icon => (
          state.activeIds.includes(icon.id) ? (
            <WindowApp 
              key={icon.id}
              id={icon.id}
              label={icon.name}
              variant={`${state.activeId === icon.id ? 'window-draggable--active' : ''} ${state.hideIds.includes(icon.id) ? 'hidden-important' : ''}`}
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