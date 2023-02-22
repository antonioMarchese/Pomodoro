import { useContext, useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PauseButton } from "./PauseButton";
import { PlayButton } from "./PlayButton";
import { SettingsButton } from "./SettingsButton";
import SettingsContext from "./SettingsContext";

export function Timer() {
  const context = useContext(SettingsContext);

  const [mode, setMode] = useState("work"); // 'work' || 'break'
  const [isPaused, setIsPaused] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    secondsLeftRef.current = context.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work" ? context.workMinutes : context.breakMinutes) * 60;

      if (nextMode === "work") context.setRounds(context.rounds - 1); // Each round must be counted after a Work-Break cicle

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    const interval = setInterval(() => {
      if (isPausedRef.current || context.rounds === 0) {
        if (context.rounds === 0) {
          setIsPaused(true);
          isPausedRef.current = true;
        }
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [context]);

  const totalSeconds =
    mode === "work" ? context.workMinutes * 60 : context.breakMinutes * 60;

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = `${secondsLeft % 60}`;
  if (Number(seconds) < 10) seconds = "0" + seconds;

  return (
    <div className="flex flex-col items-center mt-5">
      <CircularProgressbar
        value={100 - percentage}
        text={`${minutes}:${seconds}`}
        styles={buildStyles({
          textColor: "#FFF",
          pathColor: mode === "work" ? `#b42e2e` : `#2eb447`,
          trailColor: "rgba(255, 255, 255, .2)",
        })}
      />
      {isPaused ? (
        <PlayButton setIsPaused={setIsPaused} isPausedRef={isPausedRef} />
      ) : (
        <PauseButton setIsPaused={setIsPaused} isPausedRef={isPausedRef} />
      )}
      <SettingsButton />
    </div>
  );
}
