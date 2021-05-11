import React from 'react'
import {
  DesktopComputerIcon,
  MusicNoteIcon,
  VideoCameraIcon,
  DownloadIcon,
  CogIcon
} from '@heroicons/react/outline'
import {
  DocumentTextIcon,
  FolderOpenIcon
} from '@heroicons/react/solid'

export default function File() {
  const menu = [
    {
      name: 'Desktop',
      icon: (
        <DesktopComputerIcon className="h-full w-full text-blue-400" />
      )
    },
    {
      name: 'Music',
      icon: (
        <MusicNoteIcon className="h-full w-full text-red-500" />
      )
    },
    {
      name: 'Video',
      icon: (
        <VideoCameraIcon className="h-full w-full text-green-500" />
      )
    },
    {
      name: 'Download',
      icon: (
        <DownloadIcon className="h-full w-full" />
      )
    },
    {
      name: 'Settings',
      icon: (
        <CogIcon className="h-full w-full text-yellow-700" />
      )
    }
  ]
  const files = [
    {
      name: 'Readme.md',
      type: 'file'
    },
    {
      name: 'Hello Folder',
      type: 'folder'
    },
  ]
  const fileHash: {[key: string]: React.ReactNode} = {
    'file': (
      <DocumentTextIcon className="h-full w-full text-gray-300" />
    ),
    'folder': (
      <FolderOpenIcon className="h-full w-full text-blue-500" />
    )
  }
  return (
    <div className="w-full h-full flex">
      <div className="w-36 h-full border-r flex flex-col">
        {
          menu.map(item => (
            <div 
              key={item.name}
              className="w-full h-10 flex items-center box-border px-3 border-b text-sm text-gray-600 select-none cursor-pointer hover:bg-gray-100 truncate"
            >
              <div className="w-5 h-5">{item.icon}</div>
              <span className="ml-2">{item.name}</span>
            </div>
          ))
        }
      </div>
      <div className="flex-1 h-auto flex box-border p-3">
        {
          files.map(file => (
            <div 
              key={file.name}
              className="h-24 w-24 rounded-lg flex flex-col justify-center items-center select-none hover:bg-gray-800 hover:bg-opacity-5 cursor-pointer mr-2 mb-2"
            >
              <div className="h-16 w-16">
                {fileHash[file.type]}
              </div>
              <span className="text-gray-600 font-semibold text-xs">{file.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}