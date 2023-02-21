import { useContext } from "react";
import ReactSlider from "react-slider";
import { BackButton } from "./BackButton";
import SettingsContext from "./SettingsContext";

export function Settings() {
  const context = useContext(SettingsContext);
  return (
    <div className="text-white w-3/4 text-left flex flex-col">
      <label>Work Minutes: {context.workMinutes}:00</label>
      <ReactSlider
        className="h-10 w-full border-2 border-red-600 rounded-3xl my-4"
        thumbClassName="w-9 h-full bg-red-600 rounded-full cursor-pointer focus:outline-none "
        trackClassName={"track"}
        value={context.workMinutes}
        onChange={(newValue) => context.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>Break Minutes: {context.breakMinutes}:00</label>
      <ReactSlider
        className="h-10 w-full border-2 border-green-600 rounded-3xl my-4"
        thumbClassName="w-9 h-full bg-green-600 rounded-full cursor-pointer focus:outline-none "
        trackClassName={"track"}
        value={context.breakMinutes}
        onChange={(newValue) => context.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />

      <BackButton />
    </div>
  );
}
