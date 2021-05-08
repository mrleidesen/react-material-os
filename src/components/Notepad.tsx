import React, { useState } from 'react'

export default function Notepad() {
  const [text, setText] = useState(`
    # Hello 

    ## This is Note pad  
    this is Notepad

    ### HEllo Hello
    * Yes
  `)

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="w-full min-h-full box-border p-2 bg-white text-gray-500 text-sm leading-normal whitespace-pre-line">
      <textarea value={text} className="w-full h-64" onChange={onChangeText}>
      </textarea>
    </div>
  )
}