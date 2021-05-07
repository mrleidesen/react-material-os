import React, { useState, useEffect } from 'react'

import Chip from '@material-ui/core/Chip'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import dayjs from 'dayjs'

export default function Toolbar() {
  const [show, setShow] = useState(false)
  const [time, setTime] = useState(dayjs().format('HH:mm'))
  const [timer, setTimer] = useState<number | null>(null)

  useEffect(() => {
    initTimer()

    return () => destoryTimer()
  }, [])

  const initTimer = () => {
    timer && destoryTimer()
    setTimer(setInterval(() => {
      setTime(dayjs().format('HH:mm'))
    }, 1000))
  }
  const destoryTimer = () => {
    if (timer) {
      clearInterval(timer)
      setTimer(null)
    }
  }

  const onTogglePopover = () => {
    setShow((prev) => !prev)
  }
  const onClosePopover = () => {
    setShow(false)
  }


  return (
    <div className="bg-white bg-opacity-90 text-gray-700 h-9 shadow flex items-center justify-center relative">
      <ClickAwayListener onClickAway={onClosePopover}>
        <div className="relative h-full flex justify-center items-center">
          <Chip 
            variant="outlined"
            color="default"
            size="small"
            label={time}
            onClick={onTogglePopover}
          />
          {show ? (
            <div className="bg-white bg-opacity-90 shadow p-3 absolute top-9 rounded rounded-t-none w-96">
              <Calendar value={new Date()} className="reset-calendar" />
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  )
}
