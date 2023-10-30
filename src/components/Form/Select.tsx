import { useFormContext } from "react-hook-form";
import { MdInfo } from "react-icons/md";

type Props = {
  label: string;
  name: string;
  options: {
    value: string | number;
    label: string | number;
  }[];
};

const Select = ({ label, name, options }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={name} className="font-medium capitalize">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          {...register(name)}
          className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {errors[name] && (
          <span className="px-2 py-1 bg-red-100 text-xs font-medium text-red-600 absolute right-0 -top-7 rounded flex items-center gap-1">
            <MdInfo />
            <>{errors[name]?.message}</>
          </span>
        )}
      </div>
    </div>
  );
};

export default Select;
