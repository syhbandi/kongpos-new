type DateProps = {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const DateRange = ({ id, name, value, onChange }: DateProps) => {
  return (
    <input
      id={id}
      name={name}
      type="date"
      value={value}
      onChange={onChange}
      className="p-2 rounded border border-gray-400 focus:border-black outline-none"
    />
  );
};

export default DateRange;
