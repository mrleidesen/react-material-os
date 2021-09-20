import { ClickShowProps } from "@/types/components";
import { useState } from "react";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ToolbarItem from "./ToolbarItem";

export default function ClickShow(props: ClickShowProps) {
  const [popover, setPopover] = useState(false);

  const onClosePopover = () => {
    setPopover(false);
  };
  const onOpenPopover = () => {
    setPopover(true);
  };
  const onTogglePopover = () => {
    if (popover) {
      onClosePopover();
    } else {
      onOpenPopover();
    }
  };

  return (
    <ClickAwayListener onClickAway={onClosePopover}>
      <div className="relative h-full flex justify-center items-center">
        <ToolbarItem variant="text-xs" onClick={onTogglePopover}>
          {props.children}
        </ToolbarItem>
        {popover ? props.showComponent : null}
      </div>
    </ClickAwayListener>
  );
}
