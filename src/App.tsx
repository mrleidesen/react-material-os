import React from "react";
import Toolbar from '@/components/Toolbar'
import MainContent from '@/components/MainContent'
import BottomTools from '@/components/BottomTools'

export default function App() {
  return (
    <div className="w-full h-screen overflow-hidden bg-wallpaper bg-center bg-cover flex flex-col">
      <Toolbar />
      <MainContent />
      <BottomTools />
    </div>
  );
}
