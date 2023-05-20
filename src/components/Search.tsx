import { useEffect, useState } from "react";
import { EMOJI_LIST } from "../res/emoji";
import Container from "./Container";
import { SearchIcon } from "./Icon";
import EmojiCard from "./EmojiCard";
import SearchNoContent from "./SearchNoContent";

interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredEmojis, setFilteredEmojis] = useState<Emoji[]>(EMOJI_LIST);

  useEffect(() => {
    const searchKeywords = searchTerm.toLowerCase().split(" ");
    const filtered = EMOJI_LIST.filter((emoji: Emoji) => {
      const emojiTitle = emoji.title.toLowerCase();
      const emojiKeywords = emoji.keywords.toLowerCase().split(" ");
      return (
        searchKeywords.some((keyword) => emojiTitle.includes(keyword.trim())) ||
        searchKeywords.some((keyword) =>
          emojiKeywords.some((emojiKeyword) =>
            emojiKeyword.includes(keyword.trim())
          )
        )
      );
    });

    setFilteredEmojis(filtered);
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container id="EmojiSearch">
      <div className=" sticky top-2 z-50 mb-8 ">
        <div className=" flex items-center gap-4 rounded-full border-2 bg-white px-2  focus-within:border-2 focus-within:border-pink-400 dark:bg-slate-500">
          <span>
            <SearchIcon />
          </span>
          <input
            value={searchTerm}
            onChange={handleSearchChange}
            className=" w-full rounded-full  bg-transparent p-2 focus:outline-none dark:text-gray-300 sm:p-4 "
            type="search"
            placeholder="Search for a keyword ..."
          />
        </div>
        <p className="mt-2 text-center text-xs text-slate-300 sm:text-sm">
          Click the card to copy the emoji
        </p>
      </div>

      <div className="grid grid-cols-8 gap-5">
        {filteredEmojis.map((emoji, idx) => (
          <div
            key={idx}
            className="col-span-8 sm:col-span-4 md:col-span-2 lg:col-span-1"
            title="Click to copy"
          >
            <EmojiCard emoji={emoji.symbol} key={idx} />
            <div className="mt-2 truncate text-center text-sm text-slate-400">
              {emoji.title}
            </div>
          </div>
        ))}
      </div>

      <div>
        {filteredEmojis.length === 0 && (
          <SearchNoContent searchTerm={searchTerm} />
        )}
      </div>
    </Container>
  );
}

export default Search;
