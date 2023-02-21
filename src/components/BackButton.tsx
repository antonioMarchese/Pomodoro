import { ArrowCircleLeft } from "phosphor-react";
import { useContext } from "react";
import SettingsContext from "./SettingsContext";

export function BackButton() {
  const context = useContext(SettingsContext);
  return (
    <button
      onClick={() => context.setShowSettings(!context.showSettings)}
      className="w-fit py-1 px-2 flex items-center justify-center gap-x-1 bg-white bg-opacity-20 rounded-lg cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
          clipRule="evenodd"
        />
      </svg>
      <p>Back</p>
    </button>
  );
}
