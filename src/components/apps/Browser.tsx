import React, { useState } from 'react'
import { checkURLIsValid } from '@/utils'

export default function Browser() {
  const [site, setSite] = useState("https://bing.com")
  const [address, setAddress] = useState("https://bing.com")

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }
  const onKeyChange = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return
    let url = ''
    const isValid = checkURLIsValid(address)
    if (isValid) {
      const host = address.split('://')
      url = `https://${host[1] ?? host[0]}`
    } else {
      url = `https://bing.com/search?q=${address}`
    }
    setSite(url)
    setAddress(url)
  }

  return (
    <div className="w-full h-auto flex flex-col browser">
      <div className="w-full h-7 flex items-center justify-center border-b border-gray-200 bg-gray-100">
        <input 
          type="text" 
          className="text-xs text-gray-500 px-2 h-full w-1/2"
          value={address}
          onChange={onChangeAddress}
          onKeyPress={onKeyChange}
          autoComplete="off"
          placeholder="请输入网址"
        />
      </div>
      <iframe src={site} className="w-full flex-1"></iframe>
    </div>
  )
}