import React from "react";

export type DefaultProps = {
  children?: React.ReactNode;
  variant?: string;
  key?: React.Key;
  onClick?: React.MouseEventHandler;
  title?: string;
  style?: React.CSSProperties;
}

export type ClickShowProps = DefaultProps & {
  showComponent: React.ReactNode
}

export type RoundIconProps = DefaultProps

export type ItemActive = (id: number) => void

export type BottomToolsProps = DefaultProps & {
  activeItem?: ItemActive;
  deactiveItem?: ItemActive;
  hideItem?: ItemActive;
  icons: IconsProps[];
  activeIds: number[];
}

export type MainContentProps = BottomToolsProps & {
  activeId: number | null;
  activeItem: ItemActive;
  deactiveItem: ItemActive;
  hideItem: ItemActive;
  hideIds: number[];
}

export type IconsProps = {
  id: number;
  icon: React.ReactNode;
  name?: string;
}

export type WindowProps = DefaultProps & {
  id: number;
  label?: string;
  icon: React.ReactNode;
}