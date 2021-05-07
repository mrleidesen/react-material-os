import React from "react";

export interface DefaultProps {
  children?: React.ReactNode;
  className?: string;
  key?: string | number;
  onClick?: React.MouseEventHandler
}

export type RoundIconProps = DefaultProps
