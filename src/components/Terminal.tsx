import React, { useEffect, useRef } from 'react'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

export default function TerminalApp() {
  const el = useRef<HTMLDivElement>(null)
  const term = new Terminal()
  const cmds: {[key: string]: string[]} = {
    "ls": ['"Code"  "Download"  "Music"  "Video"'],
    "help": [
      "ls --- Check folder list",
      "help --- Show command help"
    ]
  }
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
      term.write('\n\r')
      if (Object.keys(cmds).includes(cwd.toLowerCase())) {
        runCommand(cwd.toLowerCase())
      } else {
        term.write(`Can not found command '\x1B[1;3;31m${cwd}\x1B[0m', please type 'help'\n\r$root: `)
      }
      cwd = ""
    } else if (key === 'Backspace') {
      if (cwd.length > 0) {
        term.write('\b \b')
        cwd = cwd.slice(0, cwd.length - 1)
      }
    } else {
      term.write(char)
      cwd += char
    }
  }

  const runCommand = (key: string) => {
    const needWriteLines = cmds[key]
    for (const line of needWriteLines) {
      term.writeln(line)
    }
    term.write('$root: ')
  }

  const disposeTerminal = () => {
    term.dispose()
  }

  return (
    <div className="w-full h-auto bg-black box-border p-1" ref={el}>
    </div>
  )
}