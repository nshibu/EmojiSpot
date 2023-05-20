import copy from "copy-to-clipboard";
import { FC, useState } from "react";

interface EmojiCardProps {
  emoji: string;
}
const EmojiCard: FC<EmojiCardProps> = ({ emoji }) => {
  const [showStatus, setShowStatus] = useState(false);

  const copyEmoji = () => {
    copy(emoji);

    setShowStatus(true);
    setTimeout(() => {
      setShowStatus(false);
    }, 200);
  };
  return (
    <div
      onClick={copyEmoji}
      className="group relative cursor-pointer  rounded border border-gray-200 p-4 py-[50px] text-center text-2xl dark:border-gray-500"
    >
      {emoji}

      <div
        className={`absolute left-0 right-0 top-0  p-1 text-center text-sm font-medium transition-opacity dark:text-slate-400 ${
          showStatus ? "opacity-100" : "opacity-0"
        }`}
      >
        Copied!
      </div>
    </div>
  );
};

export default EmojiCard;
