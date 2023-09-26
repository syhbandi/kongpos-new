import { useRecoilValue } from "recoil";
import { BarangTypes } from "../../constants/Types/kontrakTypes";
import { companyIdState, userState } from "../../atom/User";
import { useQuery } from "@tanstack/react-query";
import { getSatuan } from "../../api/kontrak";
import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

type Props = {
  data: BarangTypes;
  selectedBarang: selected;
  setSelectedBarang: (data: selected) => void;
};

type selected = {
  kd_barang: string;
  kd_satuan: string;
  jumlah: string;
};

const DataBarang = ({ data, selectedBarang, setSelectedBarang }: Props) => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [open, setOpen] = useState(false);

  const query = useQuery({
    queryKey: ["satuan", data.kd_barang],
    queryFn: () =>
      getSatuan(
        { comp_id: companyId, kd_barang: data.kd_barang },
        access_token
      ),
    enabled: open,
  });

  const onChange = (kd_satuan: string, jumlah: string) => {
    setSelectedBarang({ kd_barang: data.kd_barang, kd_satuan, jumlah });
  };

  return (
    <div className="py-2">
      <div
        className="flex items-center cursor-pointer mb-1"
        onClick={() => setOpen(!open)}
      >
        <span>{data.nama}</span>
        <span className="ml-auto inline-flex items-center gap-2">
          {query.isFetching && "Memuat..."}
          {open ? <MdArrowDropUp /> : <MdArrowDropDown />}
        </span>
      </div>
      {query.data && open
        ? query.data.map((item: any) => (
            <div
              className="inline-flex items-center mr-2"
              key={data.kd_barang + item.kd_satuan}
            >
              <input
                type="radio"
                name={item.kd_barang + item.kd_satuan}
                id={item.kd_barang + item.kd_satuan}
                hidden
                className="peer"
                checked={
                  selectedBarang.kd_barang === item.kd_barang &&
                  selectedBarang.kd_satuan === item.kd_satuan
                }
                value={item.kd_satuan}
                onChange={(e) => onChange(e.target.value, item.jumlah)}
              />
              <label
                htmlFor={item.kd_barang + item.kd_satuan}
                className="cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white  text-sm rounded py-1 px-2"
              >
                {item?.nama}[{item?.jumlah}]
              </label>
            </div>
          ))
        : null}
    </div>
  );
};

export default DataBarang;
