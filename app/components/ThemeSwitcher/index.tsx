"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && theme !== savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="cursor-pointer" onClick={toggleTheme}>
      {theme == "dark" ? (
        <SunIcon className="w-7 h-7 text-white" />
      ) : (
        <MoonIcon className="w-7 h-7 text-black " />
      )}
    </div>
  );
}
