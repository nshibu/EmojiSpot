import { Github, Message, MoonIcon, RightArrow, SunIcon } from "./Icon";
import { EMOJI_LIST } from "../res/emoji";
import Container from "./Container";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState<string>("light");
  useEffect(() => {
    // On page load or when changing themes, check the localStorage and update the theme
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDarkMode = () => {
    if (localStorage.theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  return (
    <Container>
      <header>
        <nav className="sticky top-0 flex items-center justify-between  bg-slate-50 py-4 dark:bg-slate-900">
          <div className="relative">
            <a
              href="/"
              className="font-inter cursor-pointer text-2xl font-bold focus:outline-pink-400"
            >
              {"EmojiSpot".split("").map((letter: string, idx: number) => {
                return (
                  <span
                    key={idx}
                    className={`
                  inline-block text-pink-500 transition-transform duration-500 hover:translate-y-[-50%] hover:text-pink-700`}
                  >
                    {letter}
                  </span>
                );
              })}
            </a>
          </div>

          <div className="flex items-center gap-5">
            <button className="focus:outline-pink-400" onClick={handleDarkMode}>
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </nav>

        <div className="my-20">
          <p className="mb-8 w-max rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-slate-600 dark:text-slate-300 sm:text-sm">
            {EMOJI_LIST.length} Emoji's
          </p>

          <h1 className="mb-2 text-2xl font-bold dark:text-slate-300 sm:text-3xl">
            Discover and Explore Emojis with Ease
          </h1>
          <h1 className="mb-8 flex items-center gap-4 text-xl font-bold text-gray-600 sm:text-2xl">
            Search
            <RightArrow />
            Copy
            <RightArrow />
            Paste
          </h1>
          <div className="flex items-center gap-5">
            <div className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-300  bg-gray-50 px-2  py-1 transition-colors duration-200 hover:bg-gray-100 dark:bg-slate-500 dark:hover:bg-slate-600">
              <Github />
              <span className="text-sm font-medium sm:text-base">
                Visit Github
              </span>
            </div>
            <div className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-300  bg-gray-50 px-2  py-1 transition-colors duration-200 hover:bg-gray-100 dark:bg-slate-500 dark:hover:bg-slate-600">
              <Message />
              <span className="text-sm font-medium sm:text-base">
                Get In Touch
              </span>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
