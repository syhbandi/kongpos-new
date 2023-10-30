import { useFormContext } from "react-hook-form";
import { MdInfo } from "react-icons/md";

type Props = {
  label: string;
  name: string;
  type?: string | "text";
  autoFocus?: boolean;
  multiline?: boolean;
  placeholder?: string;
};

const Input = ({
  label,
  name,
  type,
  autoFocus,
  multiline,
  placeholder,
}: Props) => {
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
        {multiline ? (
          <textarea
            id={name}
            {...register(name)}
            cols={30}
            rows={5}
            className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
            autoFocus={autoFocus}
            placeholder={placeholder}
          ></textarea>
        ) : (
          <input
            type={type}
            id={name}
            {...register(name)}
            className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
            autoFocus={autoFocus}
            placeholder={placeholder}
          />
        )}
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

export default Input;
