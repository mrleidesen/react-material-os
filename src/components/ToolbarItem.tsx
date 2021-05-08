import { DefaultProps } from '@/types/components';
import React from 'react'

export default function ToolbarItem(props: DefaultProps) {
  return (
    <div 
      className={`relative h-full px-2 flex justify-center items-center hover:bg-gray-800 hover:bg-opacity-5 select-none cursor-pointer ${props.className || ''}`}
      onClick={props.onClick}
      title={props.title}
    >
      {props.children}
    </div>
  )
}