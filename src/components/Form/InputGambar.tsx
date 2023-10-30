import { MdOutlineCloudUpload } from "react-icons/md";

type Props = {
  name: string;
  label: string;
  multiple?: boolean;
  state: any;
  setState: (data: any) => void;
};
const InputGambar = ({ name, label, multiple, state, setState }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.files);
  };

  return (
    <div className="mb-5 flex flex-col gap-2">
      <span className="font-medium capitalize">{label}</span>
      <label htmlFor={name} className="cursor-pointer">
        <div className="w-full h-40 rounded-md border border-dashed border-gray-300 flex flex-col items-center justify-center">
          <MdOutlineCloudUpload className="text-3xl text-blue-500" />
          <div className="text-sm text-gray-400">Telurusi file</div>
        </div>
      </label>
      <input
        type="file"
        name={name}
        id={name}
        hidden
        accept="image/*"
        multiple={multiple}
        onChange={onChange}
      />

      <div className="flex gap-2 flex-wrap">
        {state &&
          Object.keys(state).map((data, index) => (
            <GambarDetail gambar={state[data]} key={index} />
          ))}
      </div>
      {state && (
        <button
          className="font-medium text-red-600"
          onClick={() => setState(null)}
        >
          Hapus gambar
        </button>
      )}
    </div>
  );
};

const GambarDetail = ({ gambar }: { gambar: any }) => {
  return (
    <div className="flex items-center p-2 bg-blue-100 rounded-md gap-3 h-full">
      <img src={URL.createObjectURL(gambar)} className="max-w-10 max-h-10" />
      <div>
        <h1 className="text-sm ">{gambar.name}</h1>
        <p className="text-xs font-light text-gray-400">
          {Math.round(gambar.size / 1024)}Kb
        </p>
      </div>
    </div>
  );
};

export default InputGambar;
