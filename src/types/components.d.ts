import React from "react";

export interface DefaultProps {
  children?: React.ReactNode;
  className?: string;
  key?: React.Key;
  onClick?: React.MouseEventHandler;
  title?: string;
}

export interface ClickShowProps extends DefaultProps {
  showComponent: React.ReactNode
}

export type RoundIconProps = DefaultProps

export type ItemActive = (id: number) => void

export interface BottomToolsProps extends DefaultProps {
  activeItem?: ItemActive;
  deactiveItem?: ItemActive;
  hideItem?: ItemActive;
  icons: IconsProps[];
  activeIds: number[];
}

export interface MainContentProps extends BottomToolsProps {
  activeId: number | null;
  activeItem: ItemActive;
  deactiveItem: ItemActive;
  hideItem: ItemActive;
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
  label?: string;
  icon: React.ReactNode;
}