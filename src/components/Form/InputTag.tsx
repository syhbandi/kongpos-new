import { useState } from "react";
import { MdClose } from "react-icons/md";

type Props = {
  id: string;
  label: string;
  tags: string[];
  setTags: (tags: any) => void;
};

const InputTag = ({ id, label, tags, setTags }: Props) => {
  const [tag, setTag] = useState("");

  const onDelete = (tag: string) => {
    setTags((prev: string[]) => prev.filter((item) => !item.includes(tag)));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTags((prev: string[]) => (prev.includes(tag) ? prev : [...prev, tag]));
      setTag("");
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={id} className="font-medium capitalize">
        {label}
      </label>
      <div className="p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full flex items-center flex-wrap gap-2">
        {tags &&
          tags.map((tag, index) => (
            <div
              className="inline-flex items-center rounded bg-gray-200 p-1 gap-2"
              key={index}
            >
              <span>{tag}</span>
              <MdClose
                className="cursor-pointer"
                onClick={() => onDelete(tag)}
              />
            </div>
          ))}
        <input
          id={id}
          type="text"
          className="outline-none flex-grow"
          placeholder="Masukkan tag baru"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};

export default InputTag;
