import React, { useState } from "react";
import Toolbar from '@/components/Toolbar'
import MainContent from '@/components/MainContent'
import BottomTools from '@/components/BottomTools'
import { IconsProps } from "./types/components";

import {
  CollectionIcon,
  GlobeIcon,
  TerminalIcon,
  DocumentIcon
} from '@heroicons/react/solid'

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
        <DocumentIcon className="h-full w-full text-green-500" />
      ),
      name: '编辑器'
    },
  ]
  const [activeId, setActiveId] = useState<number | null>(null)
  const [activeIds, setActiveIds] = useState<number[]>([])
  const [hideIds, setHideIds] = useState<number[]>([])

  const activeItem = (id: number) => {
    setActiveId(id)
  }
  const toggleActiveItem = (id: number) => {
    activeItem(id)
    if (!activeIds.includes(id)) {
      setActiveIds(prev => [...prev, id])
    } else {
      if (hideIds.includes(id)) {
        setHideIds(prev => prev.filter(v => v !== id))
      } else {
        setHideIds(prev => [...prev, id])
      }
    }
  }
  const deactiveItem = (id: number) => {
    setActiveIds(prev => prev.filter(v => v !== id))
    removeHideItem(id)
  }

  const hideItem = (id: number) => {
    if (!hideIds.includes(id)) {
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
