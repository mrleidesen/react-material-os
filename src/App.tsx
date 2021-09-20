import Toolbar from "@/components/Toolbar/Toolbar";
import MainContent from "@/components/MainContent";
import BottomTools from "@/components/Dock/BottomTools";
import { StoreElement } from "@/store";

export default function App() {
  return (
    <StoreElement>
      <div className="w-full h-screen overflow-hidden bg-wallpaper bg-center bg-cover flex flex-col">
        <Toolbar />
        <MainContent />
        <BottomTools />
      </div>
    </StoreElement>
  );
}
