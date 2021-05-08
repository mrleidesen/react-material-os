import React, { useEffect, useRef } from 'react'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

export default function TerminalApp() {
  const el = useRef<HTMLDivElement>(null)
  const term = new Terminal()
  let cwd = ""

  useEffect(() => {
    initTerminal()

    return () => {
      disposeTerminal()
    }
  }, [])

  const initTerminal = () => {
    if (el.current) {
      term.open(el.current)
      term.write('Welcome to \x1B[1;3;31mReact Material OS\x1B[0m\n\r$root: ')
      term.onKey((key) => {
        const keyName = key.domEvent.key
        writeInTerminal(key.key, keyName)
      })
    }
  }

  const writeInTerminal = (char: string, key: string) => {
    if (key === 'Enter') {
      term.write(`\n\rCan not found command '\x1B[1;3;31m${cwd}\x1B[0m'\n\r$root: `)
      cwd = ""
    } else if (key === 'Backspace') {
      term.write('\b \b')
      cwd = cwd.slice(0, cwd.length - 1)
    } else {
      term.write(char)
      cwd += char
    }
  }

  const disposeTerminal = () => {
    term.dispose()
  }

  return (
    <div className="w-full h-auto bg-black box-border p-1" ref={el}>
    </div>
  )
}