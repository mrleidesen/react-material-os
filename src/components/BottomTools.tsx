import { BottomToolsProps } from '@/types/components'
import React from 'react'
import RoundIcon from './RoundIcon'

export default function BottomTools(props: BottomToolsProps) {
  return (
    <div className="h-20 w-full box-border px-8 py-2 flex items-center justify-center relative z-50">
      <div className="bg-white bg-opacity-60 rounded-3xl min-w-min h-16 box-border p-4 shadow flex items-center justify-center">
        {
          props.icons && props.icons.map((icon) => (
            <RoundIcon title={icon.name} key={icon.id} onClick={() => props.activeItem && props.activeItem(icon.id)} className={props.activeIds.includes(icon.id) ? 'round-icon--active' : ''}>
              {icon.icon}
            </RoundIcon>
          ))
        }
      </div>
    </div>
  )
}


