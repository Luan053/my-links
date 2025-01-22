"use client";

import { useTheme } from "../hooks/useTheme";
import { SunIcon, MoonIcon } from "./icons/themeIcons";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-card-bg border border-muted/20 hover:bg-hover-bg transition-colors"
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6 text-accent" />
      ) : (
        <MoonIcon className="w-6 h-6 text-accent" />
      )}
    </button>
  );
};
