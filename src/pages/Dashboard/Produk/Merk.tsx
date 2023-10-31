import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { CreateMerkType, MerkType } from "../../../constants/Types/merkTypes";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMerks } from "../../../api/merk";
import Select from "../../../components/Form/Select";
import Modal from "../../../components/Dashboard/Modal";
import Input from "../../../components/Form/Input";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { MdInfo } from "react-icons/md";

const Merk = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [merks, setMerks] = useState<MerkType[]>([]);
  const [modal, setModal] = useState(false);

  const query = useQuery({
    queryKey: ["merk"],
    queryFn: () =>
      getMerks(
        {
          company_id: companyId,
          length: "",
          limit: "",
          order_col: "",
          order_type: "",
          search: "",
        },
        access_token
      ),
  });

  useEffect(() => {
    if (query.data) {
      setMerks(query.data.data);
    }
  }, [query.data]);

  return (
    <div className="flex items-end gap-2 mb-5">
      <Select
        label="Merk"
        name="kd_merk"
        options={
          merks
            ? merks
                .filter((merk) => merk.status !== "0")
                .map((merk) => ({
                  value: merk.kd_merk,
                  label: merk.nama,
                }))
            : []
        }
        noMargin={true}
      />
      <button
        className="py-2 px-3 rounded text-white bg-blue-600 font-medium"
        type="button"
        onClick={() => setModal(true)}
      >
        Tambah Merk
      </button>

      <Modal open={modal} setOpen={setModal} title="Tambah Merk">
        <TambahMerk />
      </Modal>
    </div>
  );
};

const schema = object().shape({
  nama: string().required("harus diisi"),
  keterangan: string().required("harus diisi"),
});

const TambahMerk = () => {
  const [merkData, setMerkData] = useState<CreateMerkType>({
    company_id: useRecoilValue(companyIdState),
    kd_merk: "",
    keterangan: "-",
    nama: "",
    status: "",
  });
  const [isError, setIsError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMerkData((prev) => ({ ...prev, nama: e.target.value }));
    setIsError(false);
  };

  const onSubmit = () => {
    if (!merkData.nama) return setIsError(true);
    console.log(merkData);
  };

  return (
    <>
      <div className="flex flex-col gap-2 mb-5 font-roboto">
        <label htmlFor="nama" className="font-medium capitalize">
          Merk
        </label>
        <div className="relative">
          <input
            id="nama"
            className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
            value={merkData?.nama}
            onChange={onChange}
            placeholder="Masukkan nama merk"
          />
          {isError && (
            <span className="px-2 py-1 bg-red-100 text-xs font-medium text-red-600 absolute right-0 -top-7 rounded flex items-center gap-1">
              <MdInfo />
              harus diisi
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="py-2 px-3 rounded bg-black text-white font-medium font-roboto"
          type="button"
          onClick={onSubmit}
        >
          Simpan
        </button>
      </div>
    </>
  );
};

export default Merk;
