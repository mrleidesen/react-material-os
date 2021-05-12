import React, { useState } from "react";
import Toolbar from '@/components/Toolbar/Toolbar'
import MainContent from '@/components/MainContent'
import BottomTools from '@/components/Dock/BottomTools'
import { IconsProps } from "./types/components";

import {
  CollectionIcon,
  GlobeIcon,
  TerminalIcon,
} from '@heroicons/react/solid'

import VSCodeIcon from '@/assets/vscode.png'

export default function App() {
  const icons: IconsProps[] = [
    {
      id: 1,
      icon: (
        <CollectionIcon className="h-full w-full text-blue-500" />
      ),
      name: '文件夹'
    },
    {
      id: 2,
      icon: (
        <GlobeIcon className="h-full w-full text-blue-500" />
      ),
      name: '浏览器'
    },
    {
      id: 3,
      icon: (
        <TerminalIcon className="h-full w-full text-gray-600" />
      ),
      name: '终端'
    },
    {
      id: 4,
      icon: (
        <img className="w-11/12 h-11/12 object-contain object-center" src={VSCodeIcon} />
      ),
      name: 'VSCode'
    },
  ]
  const [activeId, setActiveId] = useState<number | null>(null)
  const [activeIds, setActiveIds] = useState<number[]>([])
  const [hideIds, setHideIds] = useState<number[]>([])

  const activeItem = (id: number | null) => {
    if (!id) {
      setActiveId(null)
    } else {
      setActiveId(id)
      setActiveIds(prev => {
        const filterPrev = prev.filter(v => v !== id)
        return [...filterPrev, id]
      })
    }
  }
  const toggleActiveItem = (id: number) => {
    if (!activeIds.includes(id)) {
      activeItem(id)
    } else {
      if (activeId === id) {
        hideItem(id)
        activeItem(null)
      } else {
        activeItem(id)
        removeHideItem(id)
      }
    }
  }
  const deactiveItem = (id: number) => {
    activeItem(null)
    setActiveIds(prev => prev.filter(v => v !== id))
    removeHideItem(id)
  }

  const hideItem = (id: number) => {
    if (!hideIds.includes(id)) {
      activeItem(null)
      setHideIds(prev => [...prev, id])
    }
  }
  const removeHideItem = (id: number) => {
    if (hideIds.includes(id)) {
      setHideIds(prev => prev.filter(v => v !== id))
    }
  }

  return (
    <div className="w-full h-screen overflow-hidden bg-wallpaper bg-center bg-cover flex flex-col">
      <Toolbar />
      <MainContent 
        activeIds={activeIds}
        activeId={activeId}
        activeItem={activeItem}
        deactiveItem={deactiveItem}
        hideItem={hideItem}
        icons={icons}
        hideIds={hideIds}
      />
      <BottomTools 
        activeItem={toggleActiveItem}
        icons={icons}
        activeIds={activeIds}
      />
    </div>
  );
}
