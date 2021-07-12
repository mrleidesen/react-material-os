import { useState, useEffect } from 'react'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import ClickShow from './ClickShow'
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton'

import {
  SunIcon,
  MoonIcon,
  WifiIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  CheckIcon,
  AnnotationIcon,
  XCircleIcon,
} from '@heroicons/react/solid'
import {
  SunIcon as OutlineSunIcon
} from '@heroicons/react/outline'

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
      icon: <SunIcon className="w-4 h-4" />,
      showComponent: showBrightness()
    },
    {
      icon: <WifiIcon className="w-4 h-4" />,
      showComponent: showWifiMenu()
    },
    {
      icon: <AnnotationIcon className="w-4 h-4" />,
      showComponent: showNotice()
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
    <div className="bg-gray-100 bg-opacity-90 text-gray-700 h-6 shadow flex items-center justify-center box-border px-3 relative z-50">
      <ClickShow showComponent={showCalendar()}>
        {
          isNight ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />
        }
        <span className="ml-1">{time}</span>
      </ClickShow>
      <div className="h-full flex absolute right-0 top-0">
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

/**
 * 日历
 */
const showCalendar = () => (
  <div className="toolbar-popover top-9 w-96">
    <Calendar value={new Date()} className="reset-calendar" />
  </div>
)

/**
 * 音量设置
 */
const showVolume = () => {
  const [volume, setVolume] = useState(50)

  const onChangeVolume = (_e: any, value: number | number[]) => {
    setVolume(value as number)
  }

  return (
    <div className="w-64 flex items-center justify-between toolbar-fixover">
      <VolumeOffIcon className="w-4 h-4 mr-2" />
      <div className="flex-1">
        <Slider value={volume} onChange={onChangeVolume} aria-labelledby="continuous-slider" />
      </div>
      <VolumeUpIcon className="w-4 h-4 ml-2" />
    </div>
  )
}

/**
 * Wifi设置
 */
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

/**
 * 通知中心
 */
const showNotice = () => {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: '版本更新',
      content: '为了您的安全，请及时更新您的系统'
    },
    {
      id: 2,
      title: 'QQ消息通知',
      content: '您收到99条未读消息，请及时查收'
    },
    {
      id: 3,
      title: '安全威胁',
      content: '系统发现威胁，点击查看详情'
    },
  ])

  const onCloseNotice = (id: number) => {
    setNotices(prev => prev.filter(notice => notice.id !== id))
  }

  return (
    <div className="toolbar-fixover w-80 h-96 flex flex-col overflow-y-auto select-none">
      {
        notices.length > 0 ? notices.map(notice => (
          <div key={notice.id} className="w-full h-16 box-border p-2 rounded flex flex-col bg-gray-700 bg-opacity-5 mb-2 hover:bg-opacity-10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-base font-semibold">{ notice.title }</span>
              <IconButton size="small" onClick={() => onCloseNotice(notice.id)}>
                <XCircleIcon className="w-4 h-4" />
              </IconButton>
            </div>
            <span className="text-sm text-gray-600">{ notice.content }</span>
          </div>
        )) : (
          <div className="w-full h-full flex justify-center items-center">当前无通知</div>
        )
      }
    </div>
  )
}

/**
 * 亮度调节
 */
const showBrightness = () => {
  const [brightness, setBrightness] = useState(100)

  const onChangeBrightness = (_e: any, value: number | number[]) => {
    document.body.setAttribute('style', `filter: brightness(${value as number / 100})`)
    setBrightness(value as number)
  }

  return (
    <div className="w-64 flex items-center justify-between toolbar-fixover">
      <OutlineSunIcon className="w-4 h-4 mr-2" />
      <div className="flex-1">
        <Slider 
          value={brightness} 
          onChange={onChangeBrightness} 
          aria-labelledby="continuous-slider" 
          min={10}
          max={100}
        />
      </div>
      <SunIcon className="w-4 h-4 ml-2" />
    </div>
  )
}