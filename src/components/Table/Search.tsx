import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";

type SearchProps = {
  id: string;
  name: string;
  value: string;
  onChange: (e: string) => void;
};

const Search = ({ onChange }: SearchProps) => {
  const [text, setText] = useState("");

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
        className="outline-none"
        placeholder="Cari"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Search;
