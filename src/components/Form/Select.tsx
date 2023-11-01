import { useFormContext } from "react-hook-form";
import { MdInfo } from "react-icons/md";
import Spinner from "../Dashboard/Spinner";

type Props = {
  label: string;
  name: string;
  options: {
    value: string | number;
    label: string | number;
  }[];
  noMargin?: boolean;
  isLoading?: boolean;
};

const Select = ({ label, name, options, noMargin, isLoading }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={`flex flex-col gap-2 flex-grow ${!noMargin ? "mb-5" : null}`}
    >
      <label htmlFor={name} className="font-medium capitalize">
        {label}
      </label>
      {isLoading && <Spinner />}
      {options.length ? (
        <div className="relative">
          <select
            id={name}
            {...register(name)}
            className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
            defaultValue={options[0].value || ""}
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
      ) : null}
    </div>
  );
};

export default Select;
