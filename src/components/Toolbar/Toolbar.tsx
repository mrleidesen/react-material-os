import React, { useState, useEffect } from 'react'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ToolbarItem from './ToolbarItem'
import ClickShow from './ClickShow'
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

import {
  SunIcon,
  MoonIcon,
  ClockIcon,
  WifiIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  UserIcon,
  SearchIcon,
  CheckIcon
} from '@heroicons/react/solid'

import dayjs from 'dayjs'

export default function Toolbar() {
  const [time, setTime] = useState(dayjs().format('HH:mm'))
  const [timer, setTimer] = useState<number | null>(null)
  const [isNight, setIsNight] = useState(false)

  const icons = [
    {
      icon: <VolumeUpIcon className="w-4 h-4" />,
      showComponent: showVolume()
    },
    {
      icon: <WifiIcon className="w-4 h-4" />,
      showComponent: showWifiMenu()
    }
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

  return (
    <div className="bg-gray-100 bg-opacity-90 text-gray-700 h-6 shadow flex items-center justify-between box-border px-3 relative z-50">
      <div className="h-full flex">
        <ToolbarItem className="h-full" title={isNight ? '现在是夜晚' : '现在是白天'}>
          {
            isNight ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />
          }
        </ToolbarItem>
      </div>
      <ClickShow showComponent={showCalendar()}>
        <ClockIcon className="w-3 h-3 mr-1" />
        <span>{time}</span>
      </ClickShow>
      <div className="h-full flex">
        {
          icons.map((icon, i) => (
            <ClickShow key={i} showComponent={icon.showComponent}>
              {icon.icon}
            </ClickShow>
          ))
        }
        
      </div>
    </div>
  )
}

const showCalendar = () => (
  <div className="toolbar-popover top-9 w-96">
    <Calendar value={new Date()} className="reset-calendar" />
  </div>
)

const showVolume = () => (
  <div className="w-64 flex items-center justify-between toolbar-fixover">
    <VolumeOffIcon className="w-4 h-4 mr-2" />
    <div className="flex-1">
      <Slider value={20} aria-labelledby="continuous-slider" />
    </div>
    <VolumeUpIcon className="w-4 h-4 ml-2" />
  </div>
)

const showWifiMenu = () => {
  const [nowWifi, setNowWifi] = useState(0)
  const wifies = [
    "MrLeiDeSen's Wifi",
    "Show Me Your Code",
    "Wifi-UWNFIAU",
    "Wifi-ANSKFJBA",
    "Wifi-ADGIWQOQ",
  ]
  
  return (
    <div className="toolbar-fixover w-72 flex flex-col">
      {
        wifies.map((wifi, index) => (
          <div 
            key={index}
            className="h-9 w-full flex justify-between items-center text-sm text-gray-700 border-b hover:bg-gray-700 hover:bg-opacity-10 box-border px-2 select-none"
            onClick={() => setNowWifi(index)}
          >
            <span>{wifi}</span>
            { nowWifi === index ? <CheckIcon className="w-4 h-4" /> : null }
          </div>
        ))
      }
    </div>
  )
}