import React from "react";

export interface DefaultProps {
  children?: React.ReactNode;
  className?: string;
  key?: string | number;
  onClick?: React.MouseEventHandler;
  title?: string;
}

export type RoundIconProps = DefaultProps

export type ItemActive = (id: number) => void

export interface BottomToolsProps extends DefaultProps {
  activeItem?: ItemActive;
  deactiveItem?: ItemActive;
  hideItem?: ItemActive;
  removeHideItem?: ItemActive;
  icons: IconsProps[];
  activeIds: number[];
}

export interface MainContentProps extends BottomToolsProps {
  activeId: number | null;
  activeItem: ItemActive;
  deactiveItem: ItemActive;
  hideItem: ItemActive;
  removeHideItem: ItemActive;
  hideIds: number[];
}

export interface IconsProps {
  id: number;
  icon: React.ReactNode;
  name?: string;
}

export interface WindowProps extends DefaultProps {
  activeItem: ItemActive;
  deactiveItem: ItemActive;
  hideItem: ItemActive;
  id: number;
}