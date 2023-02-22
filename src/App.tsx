import { Settings } from "./components/Settings";
import { Timer } from "./components/Timer";
import "./styles/global.css";
import SettingsContext from "./components/SettingsContext";

import { useState } from "react";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [rounds, setRounds] = useState(1);

  return (
    <div className="w-scren h-screen flex flex-col justify-center items-center bg-background font-Gloock">
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          showSettings,
          setWorkMinutes,
          setBreakMinutes,
          setShowSettings,
          rounds,
          setRounds,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
