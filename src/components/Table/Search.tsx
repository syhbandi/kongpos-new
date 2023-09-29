import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";

type SearchProps = {
  onChange: (e: string) => void;
  value?: string;
  autoFocus?: boolean;
};

const Search = ({ onChange, value, autoFocus }: SearchProps) => {
  const [text, setText] = useState(value || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(text);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className="flex items-center gap-2 ml-auto rounded border border-gray-400 overflow-clip p-2 focus-within:border-black">
      <MdSearch className="text-2xl text-gray-400" />
      <input
        type="search"
        id="cari-table"
        className="outline-none flex-grow"
        placeholder="Cari"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default Search;
