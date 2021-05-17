import React, { useState } from 'react'
import {
  DesktopComputerIcon,
  MusicNoteIcon,
  VideoCameraIcon,
  DownloadIcon,
} from '@heroicons/react/outline'
import {
  DocumentTextIcon,
  FolderOpenIcon
} from '@heroicons/react/solid'

export default function File() {
  const [activeId, setActiveId] = useState(1)
  const menu = [
    {
      id: 1,
      name: 'Desktop',
      icon: (
        <DesktopComputerIcon className="h-full w-full text-blue-400" />
      ),
      children: [
        {
          name: 'README.md',
          type: 'file'
        },
        {
          name: 'THIS_FOLDER',
          type: 'folder'
        },
        {
          name: 'SECOND_FOLDER',
          type: 'folder'
        },
      ]
    },
    {
      id: 2,
      name: 'Music',
      icon: (
        <MusicNoteIcon className="h-full w-full text-red-500" />
      ),
      children: [
        {
          name: 'Rick Rock',
          type: 'folder'
        },
        {
          name: 'Halo OST',
          type: 'folder'
        },
        {
          name: 'Half Life OST',
          type: 'folder'
        },
        {
          name: 'test.mp3',
          type: 'music'
        },
      ]
    },
    {
      id: 3,
      name: 'Video',
      icon: (
        <VideoCameraIcon className="h-full w-full text-green-500" />
      ),
      children: [
        {
          name: 'Game.mp4',
          type: 'video'
        },
      ]
    },
    {
      id: 4,
      name: 'Download',
      icon: (
        <DownloadIcon className="h-full w-full" />
      ),
      children: [
      ]
    },
  ]

  const fileHash: {[key: string]: React.ReactNode} = {
    'file': (
      <DocumentTextIcon className="h-full w-full text-gray-300" />
    ),
    'folder': (
      <FolderOpenIcon className="h-full w-full text-blue-500" />
    ),
    'music': (
      <MusicNoteIcon className="h-full w-full text-red-500" />
    ),
    'video': (
      <VideoCameraIcon className="h-full w-full text-green-500" />
    )
  }
  return (
    <div className="w-full h-full flex">
      <div className="w-36 h-full border-r flex flex-col">
        {
          menu.map(item => (
            <div 
              key={item.id}
              className={`w-full h-10 flex items-center box-border px-3 border-b text-sm text-gray-600 select-none cursor-pointer hover:bg-gray-100 truncate ${activeId === item.id ? 'font-semibold' : ''}`}
              onClick={() => setActiveId(item.id)}
            >
              <div className="w-5 h-5">{item.icon}</div>
              <span className="ml-2">{item.name}</span>
            </div>
          ))
        }
      </div>
      <div className="flex flex-1 flex-wrap content-start box-border p-3 menus-item">
        {
          menu.filter(v => v.id === activeId)[0].children.map(file => (
            <div 
              key={file.name}
              className="h-24 w-24 box-border px-1 overflow-hidden rounded-lg flex flex-col justify-center items-center select-none hover:bg-gray-800 hover:bg-opacity-5 cursor-pointer mr-2"
            >
              <div className="h-16 w-16">
                {fileHash[file.type]}
              </div>
              <span className="w-full text-center text-gray-600 font-semibold text-xs truncate">{file.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}