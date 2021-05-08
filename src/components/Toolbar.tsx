import React, { useState, useEffect } from 'react'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ToolbarItem from './ToolbarItem'

import {
  SunIcon,
  MoonIcon,
  ClockIcon,
  WifiIcon,
  VolumeUpIcon,
  UserIcon,
  SearchIcon
} from '@heroicons/react/solid'

import dayjs from 'dayjs'

export default function Toolbar() {
  const [show, setShow] = useState(false)
  const [time, setTime] = useState(dayjs().format('HH:mm'))
  const [timer, setTimer] = useState<number | null>(null)
  const [isNight, setIsNight] = useState(false)

  const icons = [
    <WifiIcon className="w-4 h-4" />,
    <VolumeUpIcon className="w-4 h-4" />,
    <UserIcon className="w-4 h-4" />,
    <SearchIcon className="w-4 h-4" />
  ]

  useEffect(() => {
    setDateTime()
    initTimer()

    return () => destoryTimer()
  }, [])

  const initTimer = () => {
    timer && destoryTimer()
    setTimer(setInterval(() => {
      setDateTime()
    }, 1000))
  }
  const destoryTimer = () => {
    if (timer) {
      clearInterval(timer)
      setTimer(null)
    }
  }

  const setDateTime = () => {
    const nowYear = dayjs().format('YYYY/MM/DD')
    const nowDate = dayjs().format('HH:mm')
    const nowTime = new Date().getTime()
    const start = new Date(`${nowYear} 07:00`).getTime()
    const end = new Date(`${nowYear} 17:30`).getTime()
    const nowIsSum = (nowTime >= start && nowTime <= end)
    
    setTime(nowDate)
    if (nowIsSum === isNight) {
      setIsNight(!nowIsSum)
    }
  }

  const onTogglePopover = () => {
    setShow((prev) => !prev)
  }
  const onClosePopover = () => {
    setShow(false)
  }


  return (
    <div className="bg-white bg-opacity-90 text-gray-700 h-6 shadow flex items-center justify-between box-border px-3 relative z-50">
      <div className="h-full flex">
        <ToolbarItem className="h-full" title={isNight ? '现在是夜晚' : '现在是白天'}>
          {
            isNight ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />
          }
        </ToolbarItem>
      </div>
      <ClickAwayListener onClickAway={onClosePopover}>
        <div className="relative h-full flex justify-center items-center">
          <ToolbarItem
            className="text-xs"
            onClick={onTogglePopover}
          >
            <ClockIcon className="w-3 h-3 mr-1" />
            <span>{time}</span>
          </ToolbarItem>
          {show ? (
            <div className="bg-white bg-opacity-90 shadow p-3 absolute top-9 rounded w-96">
              <Calendar value={new Date()} className="reset-calendar" />
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
      <div className="h-full flex">
        {
          icons.map((icon, index) => (
            <ToolbarItem className="h-full" key={index}>
              {icon}
            </ToolbarItem>
          ))
        }
      </div>
    </div>
  )
}

