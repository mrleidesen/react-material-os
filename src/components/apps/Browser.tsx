import React, { useState } from 'react'
import { checkURLIsValid } from '@/utils'
import {
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/solid'

type HistoryChangeType = 'left' | 'right'

export default function Browser() {
  const [site, setSite] = useState("https://bing.com")
  const [address, setAddress] = useState("https://bing.com")
  const [history, setHistory] = useState(["https://bing.com"])
  const [historyIndex, setHistoryIndex] = useState(0)

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

    changeSiteAndAddress(url)
    setHistory(prev => [url, ...prev])
    setHistoryIndex(0)
  }

  const changeSiteAndAddress = (url: string) => {
    setSite(url)
    setAddress(url)
  }

  const changeHistory = (type: HistoryChangeType) => {
    if (type === 'left') {
      if (historyIndex !== (history.length - 1)) {
        setHistoryIndex(historyIndex + 1)
        changeSiteAndAddress(history[historyIndex + 1])
      }
    } else {
      if (historyIndex !== 0) {
        setHistoryIndex(historyIndex - 1)
        changeSiteAndAddress(history[historyIndex - 1])
      }
    }
  }

  const isDisabled = (type: HistoryChangeType = "left"): boolean => {
    if (history.length === 1) return true
    if (type === 'left') {
      return history.length > 1 && historyIndex === (history.length - 1)
    } else {
      return history.length > 1 && historyIndex === 0
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-7 flex items-center border-b border-gray-200 bg-gray-100">
        <button 
          onClick={() => changeHistory('left')}
          disabled={isDisabled()}
          className={
            `w-9 h-7 flex justify-center items-center cursor-pointer bg-gray-100 border-r border-gray-100 ${isDisabled() ? "" : "hover:bg-gray-200"}`
          }
        >
          <ArrowLeftIcon className={
            `w-4 h-4 ${isDisabled() ? "text-gray-300" : "text-gray-600"}`
          } />
        </button>
        <button 
          onClick={() => changeHistory('right')}
          disabled={isDisabled('right')}
          className={
            `w-9 h-7 flex justify-center items-center cursor-pointer bg-gray-100 border-r border-gray-100 ${isDisabled('right') ? "" : "hover:bg-gray-200"}`
          }
        >
          <ArrowRightIcon className={
            `w-4 h-4 ${isDisabled('right') ? "text-gray-300" : "text-gray-600"}`
          } />
        </button>
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