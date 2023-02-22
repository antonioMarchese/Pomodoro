import { useContext } from "react";
import ReactSlider from "react-slider";
import { BackButton } from "./BackButton";
import SettingsContext from "./SettingsContext";
import { Plus, Minus } from "phosphor-react";

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
      <label>Rounds:</label>
      <div className="flex flex-row items-center justify-start gap-x-2 w-full mt-2 text-6xl">
        <p className="w-14 flex items-center justify-center">
          {context.rounds}
        </p>
        <div className="flex flex-col gap-y-0.5 items-center justify-center">
          <button
            onClick={() => context.setRounds(context.rounds + 1)}
            className="w-7 h-7 bg-white bg-opacity-20 flex flex-row items-center justify-center rounded-md opacity-70
            duration-200 hover:opacity-100"
            disabled={context.rounds >= 10}
          >
            <Plus color="white" size={24} />
          </button>
          <button
            onClick={() => context.setRounds(context.rounds - 1)}
            className="w-7 h-7 bg-white bg-opacity-20 flex flex-row items-center justify-center rounded-md opacity-70
            duration-200 hover:opacity-100"
            disabled={context.rounds <= 1}
          >
            <Minus color="white" size={24} />
          </button>
        </div>
      </div>
      <BackButton />
    </div>
  );
}
