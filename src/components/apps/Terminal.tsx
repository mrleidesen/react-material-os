import { useState, KeyboardEvent, ChangeEvent } from 'react'
import dayjs from 'dayjs'

interface TerminalLine {
  type: 'input' | 'show';
  input?: string;
  show?: string[]
}

export default function TerminalApp() {
  const [inputValue, setInputValue] = useState("")
  const [inputIndex, setInputIndex] = useState(0)
  const [lines, setLines] = useState<TerminalLine[]>([{
    type: 'input',
    input: ""
  }])

  const onKeyEnter = (e: KeyboardEvent, index: number) => {
    if (e.code === 'Enter') {
      executeCommand(inputValue, index)
      setInputIndex(prev => prev + 1)
      setInputValue("")
    }
  }
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const executeCommand = (cmd: string, index: number) => {
    setLines(prev => {
      prev[index].input = inputValue
      return [...prev, {
        type: 'show',
        show: runCommond(cmd)
      }]
    })
    addNewLine()
  }

  const runCommond = (text: string) => {
    const cmd = text.trim().split(' ')[0].toLowerCase()

    switch(cmd) {
      case 'ls':
        return ['Download', 'Folder', 'Music', 'Video']
      case 'help':
        return [
          'help --- Show this list', 
          'ls --- Show folder',
          'date --- Show time'
        ]
      case 'date':
        return [`${dayjs().format()}`]
      default:
        return [`Can not found command '${cmd}', please check help`]
    }
  }

  const addNewLine = () => {
    setInputIndex(lines.length)
    setLines(prev => [...prev, {
      type: 'input',
      input: ""
    }])
  }
  
  return (
    <div className="w-full h-full bg-gray-700 overflow-auto box-border p-2 flex flex-col">
      {
        lines.map((line, i) => {
          if (line.type === 'input') {
            return (
              <div key={i} className="w-full flex items-center font-mono mb-2">
                <span className="text-xs font-semibold select-none text-green-500">MrLeiDeSen@root ~ </span>
                <input 
                  type="text" 
                  className="ring-0 border-none bg-transparent px-2 flex-1 py-0 text-xs text-white" 
                  value={i !== inputIndex ? line.input : inputValue}
                  readOnly={i !== inputIndex}
                  onChange={onInputChange}
                  onKeyUp={(e) => onKeyEnter(e, i)}
                  autoFocus={true}
                />
              </div>
            )
          } else if (line.type === 'show') {
            return (
              <div key={i} className="w-full flex flex-col font-mono mb-1">
                {
                  line.show && line.show.map((text, idx) => (
                    <p key={idx} className="text-xs text-white mb-1">{text}</p>
                  ))
                }
              </div>
            )
          }
        })
      }
    </div>
  )
}