import React from 'react'

export default function File() {
  const menu = [
    'Desktop',
    'Music',
    'Video',
    'Download',
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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-300" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    ),
    'folder': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-500" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      </svg>
    )
  }
  return (
    <div className="w-full h-auto flex folder">
      <div className="w-32 h-full border-r flex flex-col">
        {
          menu.map(item => (
            <div 
              key={item}
              className="w-full h-10 leading-10 box-border px-3 border-b text-sm text-gray-600 select-none cursor-pointer hover:bg-gray-100 truncate"
            >{item}</div>
          ))
        }
      </div>
      <div className="flex-1 h-auto flex box-border p-3">
        {
          files.map(file => (
            <div 
              key={file.name}
              className="h-24 w-24 rounded-lg flex flex-col justify-center items-center hover:bg-gray-800 hover:bg-opacity-5 cursor-pointer mr-2 mb-2"
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