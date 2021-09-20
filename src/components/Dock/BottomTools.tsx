import RoundIcon from "./RoundIcon";

import GithubIcon from "@/assets/github.svg";
import { useStore } from "@/store";

export default function BottomTools() {
  const state = useStore();

  const onActiveItem = (id: number) => {
    state.activeItem && state.activeItem(id);
  };

  return (
    <div className="h-20 w-full box-border px-8 py-2 flex items-center justify-center relative z-50">
      <div className="bg-white bg-opacity-60 rounded-3xl min-w-min h-16 box-border p-4 shadow flex items-center justify-center">
        {state.icons &&
          state.icons.map((icon) => (
            <RoundIcon
              title={icon.name}
              key={icon.id}
              onClick={() => onActiveItem(icon.id)}
              variant={
                state.activeIds.includes(icon.id) ? "round-icon--active" : ""
              }
            >
              {icon.icon}
            </RoundIcon>
          ))}
        <a
          target="_blank"
          href="https://github.com/mrleidesen/react-material-os"
        >
          <RoundIcon>
            <img
              src={GithubIcon}
              className="w-11/12 h-11/12 object-contain object-center"
            />
          </RoundIcon>
        </a>
      </div>
    </div>
  );
}
