import react from "react";

interface ContextProps {
  workMinutes: number;
  breakMinutes: number;
  showSettings: boolean;
  setWorkMinutes: (value: number) => void;
  setBreakMinutes: (value: number) => void;
  setShowSettings: (showSettings: boolean) => void;
}

const SettingsContext = react.createContext<ContextProps>({} as ContextProps);

export default SettingsContext;
