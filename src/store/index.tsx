import { useContext, useState, createContext, ReactNode } from "react";
import { IconsProps } from "@/types/components";

import {
  CollectionIcon,
  GlobeIcon,
  TerminalIcon,
} from "@heroicons/react/solid";

import VSCodeIcon from "@/assets/vscode.png";

type TFunc<T> = (val: T) => void;
type Optional<T> = T | null;

type StoreProps = {
  icons: IconsProps[];
  activeId: Optional<number>;
  setActiveId: TFunc<number>;
  activeIds: number[];
  setActiveIds: TFunc<number[]>;
  hideIds: number[];
  setHideIds: TFunc<number[]>;
  activeItem: TFunc<Optional<number>>;
  toggleActiveItem: TFunc<number>;
  deactiveItem: TFunc<number>;
  hideItem: TFunc<number>;
  removeHideItem: TFunc<number>;
};

const StoreContext = createContext<StoreProps>({} as StoreProps);

export const useStore = () => useContext(StoreContext);

export function StoreElement({ children }: { children: ReactNode }) {
  const icons: IconsProps[] = [
    {
      id: 1,
      icon: <CollectionIcon className="h-full w-full text-blue-500" />,
      name: "文件夹",
    },
    {
      id: 2,
      icon: <GlobeIcon className="h-full w-full text-blue-500" />,
      name: "浏览器",
    },
    {
      id: 3,
      icon: <TerminalIcon className="h-full w-full text-gray-600" />,
      name: "终端",
    },
    {
      id: 4,
      icon: (
        <img
          className="w-11/12 h-11/12 object-contain object-center"
          src={VSCodeIcon}
        />
      ),
      name: "VSCode",
    },
  ];
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeIds, setActiveIds] = useState<number[]>([]);
  const [hideIds, setHideIds] = useState<number[]>([]);

  const activeItem = (id: number | null) => {
    if (!id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setActiveIds((prev) => {
        const filterPrev = prev.filter((v) => v !== id);
        return [...filterPrev, id];
      });
      removeHideItem(id);
    }
  };
  const toggleActiveItem = (id: number) => {
    if (!activeIds.includes(id)) {
      activeItem(id);
    } else {
      if (activeId === id) {
        hideItem(id);
        activeItem(null);
      } else {
        activeItem(id);
        removeHideItem(id);
      }
    }
  };
  const deactiveItem = (id: number) => {
    activeItem(null);
    setActiveIds((prev) => prev.filter((v) => v !== id));
    removeHideItem(id);
  };

  const hideItem = (id: number) => {
    if (!hideIds.includes(id)) {
      activeItem(null);
      setHideIds((prev) => [...prev, id]);
    }
  };
  const removeHideItem = (id: number) => {
    if (hideIds.includes(id)) {
      setHideIds((prev) => prev.filter((v) => v !== id));
    }
  };

  return (
    <StoreContext.Provider
      value={{
        icons,
        activeId,
        setActiveId,
        activeIds,
        setActiveIds,
        hideIds,
        setHideIds,
        activeItem,
        toggleActiveItem,
        deactiveItem,
        hideItem,
        removeHideItem,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
