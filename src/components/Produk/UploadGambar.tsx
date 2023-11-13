import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { MdCloudUpload, MdDelete, MdImage } from "react-icons/md";
import { uploadGambar } from "../../api/produk";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../atom/User";
import { AxiosProgressEvent } from "axios";

type Files = {
  fileName: string;
  progress: number;
};

type UploadedFiles = {
  fileName: string;
  size: string;
};

const UploadGambar = () => {
  const company_id = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [files, setFiles] = useState<Files[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles[]>([]);

  const mutation = useMutation({
    mutationFn: uploadGambar,
    onError: () => {
      setFiles([]);
      mutation.reset();
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const fileName = e.target.files[0].name;
    setFiles((prev) => [...prev, { fileName, progress: 0 }]);
    mutation.mutate({
      data: {
        company_id,
        file: e.target.files,
      },
      access_token,
      progressFunc,
    });
  };

  const progressFunc = ({ loaded, total }: AxiosProgressEvent, file: any) => {
    setFiles((prev) => {
      const newData = [...prev];
      newData[newData.length - 1].progress = Math.floor(
        (loaded / (total || 0)) * 100
      );
      return newData;
    });
    if (loaded === total) {
      const fileSize =
        total < 1024
          ? `${total} KB`
          : `${(total / (1024 * 1024)).toFixed(2)} MB`;
      setUploadedFiles((prev) => [
        ...prev,
        { fileName: file[0].name, size: fileSize },
      ]);
      setFiles([]);
    }
  };

  return (
    <div className="bg-white shadow rounded p-5">
      <h1 className="font-medium mb-5">Gambar</h1>
      <label htmlFor="upload-gambar" className="cursor-pointer mb-5">
        <div className="rounded border-2 border-dashed border-gray-300 py-10 flex flex-col items-center gap-1 justify-center">
          <MdCloudUpload className="text-blue-500 text-4xl" />
          Telusuri file
        </div>
      </label>
      <input
        hidden
        type="file"
        id="upload-gambar"
        accept="image/*"
        onChange={onChange}
      />
      <div className="flex flex-col gap-2 mt-4">
        {mutation.isLoading &&
          files.map((file, index) => (
            <div
              className="px-5 py-3 rounded flex items-center gap-3"
              key={index}
            >
              <span className="text-5xl text-blue-600">
                <MdImage />
              </span>
              <div className="w-full">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold">{file.fileName}</span>
                  <span className="text-sm font-semibold">
                    {file.progress}%
                  </span>
                </div>
                <div className="rounded-full bg-blue-200 w-full">
                  <div
                    className="rounded-full p-1 bg-blue-600 transition-all ease-in-out"
                    style={{ width: `${file.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        {mutation.isError && (
          <div className="text-red-500 text-center">
            Terjadi kesalahan, coba lagi!
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-4 max-h-56 overflow-auto scrollbar-custom">
        {uploadedFiles.map((file, index) => (
          <div
            className="px-5 py-3 rounded flex items-center gap-3"
            key={index}
          >
            <img
              src={`https://misterkong.com/back_end_mp/${company_id}_config/images/${file.fileName}`}
              alt={file.fileName}
              width={50}
              height={50}
              className="object-cover"
              loading="lazy"
            />
            <div className="flex-grow">
              <h5 className="font-semibold text-sm">
                {file.fileName.length > 15
                  ? file.fileName.slice(0, 15) +
                    "...." +
                    file.fileName.split(".")[1]
                  : file.fileName}
              </h5>
              <h6 className=" text-sm">{file.size}</h6>
            </div>
            <button className="outline-none text-red-600 text-lg">
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadGambar;
