type SelectProps = {
  name: string;
  id: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
const PageSelect = ({ name, id, value, onChange }: SelectProps) => {
  return (
    <select
      id={id}
      name={name}
      className="p-2 rounded border border-gray-400 outline-none focus:border-black"
      value={value}
      onChange={onChange}
    >
      {[10, 25, 50, 100].map((offset) => (
        <option key={offset} value={offset}>
          {offset}
        </option>
      ))}
    </select>
  );
};

export default PageSelect;
