import { MutableRefObject } from "react";

export interface WorkButtonProps {
  setIsPaused: (value: boolean) => void;
  isPausedRef: MutableRefObject<boolean>;
}

export function PlayButton({ setIsPaused, isPausedRef }: WorkButtonProps) {
  return (
    <button
      onClick={() => {
        setIsPaused(false);
        isPausedRef.current = false;
      }}
      className="bg-transparent rounded-full text-white inline-block mt-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
