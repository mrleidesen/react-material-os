import React, { useEffect, useRef } from 'react'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

export default function TerminalApp() {
  const el = useRef<HTMLDivElement>(null)
  let cwd = ""

  useEffect(() => {
    const term = new Terminal()
    if (el.current) {
      term.open(el.current)
      term.writeln('Welcome to \x1B[1;3;31mReact Material OS\x1B[0m')
      term.write('$root: ')
      term.onKey((key) => {
        if (key.key === '\r') {
          term.write(`\n\rCan not found command '\x1B[1;3;31m${cwd}\x1B[0m'\n\r$root: `)
          cwd = ""
        } else {
          term.write(key.key)
          cwd += key.key
        }
      })
    }

    return () => {
      if (el.current) {
        term.dispose()
      }
    }
  }, [])

  return (
    <div className="w-full h-full bg-black box-border p-1" ref={el}>
    </div>
  )
}