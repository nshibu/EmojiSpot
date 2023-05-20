import Container from "../Container";
import { ReactSvg, TailwindCSSSvg } from "../Icon";

const Footer = () => {
  return (
    <Container>
      <div className="mt-20 border-t  border-gray-300 py-4 text-center">
        <div className="text-md mb-2 flex items-center justify-center gap-2 font-bold uppercase dark:text-slate-400">
          MADE WIDTH{" "}
          <span>
            <ReactSvg />
          </span>
          <span>
            <TailwindCSSSvg />
          </span>
        </div>

        <div className="text-sm text-slate-400">
          Made by{" "}
          <a href="shibu.dev" target="_blank">
            Shibu
          </a>{" "}
          | Some rights reserved.
        </div>
      </div>
    </Container>
  );
};

export default Footer;
