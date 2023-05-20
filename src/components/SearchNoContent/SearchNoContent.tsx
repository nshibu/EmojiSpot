import { FC } from "react";
import { NoContent } from "../Icon";

interface NoContentProps {
  searchTerm: string;
}
const SearchNoContent: FC<NoContentProps> = ({ searchTerm }) => {
  return (
    <div className="my-20  flex flex-col items-center gap-3 text-center">
      <NoContent />
      <h2 className="dark:text-slate-400">
        We're sorry we don't have emoji's for <b>{searchTerm}</b>
      </h2>
    </div>
  );
};

export default SearchNoContent;
