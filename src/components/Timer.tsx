import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PauseButton } from "./PauseButton";
import { PlayButton } from "./PlayButton";
import { SettingsButton } from "./SettingsButton";
import SettingsContext from "./SettingsContext";

export function Timer() {
  return (
    <div className="flex flex-col items-center mt-5">
      <CircularProgressbar
        value={60}
        text={`${60}%`}
        styles={buildStyles({
          textColor: "#FFF",
          pathColor: `#b42e2e`,
          trailColor: "rgba(255, 255, 255, .2)",
        })}
      />
      <div className="flex flex-row">
        <PlayButton />
        <PauseButton />
      </div>
      <SettingsButton />
    </div>
  );
}
