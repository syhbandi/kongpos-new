import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  BarangTypes,
  GetBarangParams,
  SupplierItemType,
  ValidasiBarangParams,
} from "../../constants/Types/kontrakTypes";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../atom/User";
import { getBarang, validasiProduk } from "../../api/kontrak";
import Spinner from "../Dashboard/Spinner";
import Search from "../Table/Search";
import DataBarang from "./DataBarang";
import { toast } from "react-toastify";

type Props = {
  barang: SupplierItemType;
};

type selected = {
  kd_barang: string;
  kd_satuan: string;
  jumlah: string;
};

const CariBarang = ({ barang }: Props) => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token, user_id } = useRecoilValue(userState);
  const [params, setParams] = useState<GetBarangParams>({
    company_id: companyId,
    length: 10,
    limit: 0,
    nama: barang.nama,
  });
  const [dataBarang, setDataBarang] = useState<BarangTypes[] | undefined>([]);
  const [selected, setSelected] = useState<selected>({
    kd_barang: "",
    kd_satuan: "",
    jumlah: "",
  });

  const { data, isLoading, isError } = useQuery<BarangTypes[]>({
    queryKey: ["barang", params],
    queryFn: () => getBarang(params, access_token),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: validasiProduk,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["supplierItem"] });
      toast.success("Berhasil menyesuaikan produk");
    },
    onError: () => {
      mutation.reset();
      toast.error("Galat saat menyimpan!");
    },
  });

  const onSimpan = () => {
    const data: ValidasiBarangParams = {
      params: {
        comp_id: companyId,
        kd_barang_supplier: barang.kd_barang,
        kd_satuan_supplier: barang.kd_satuan,
        user_id: user_id,
        kd_supplier: barang.kd_supplier.split("_")[0],
        kd_barang_validasi: selected.kd_barang,
        kd_satuan_validasi: selected.kd_satuan,
        jumlah: selected.jumlah,
      },
      access_token,
    };
    mutation.mutate(data);
  };

  useEffect(() => {
    if (data) {
      setDataBarang((prev) => {
        if (params.limit) return prev?.concat(data);
        return data;
      });
    }
  }, [data]);

  const showMore = () => {
    setParams((prev) => ({ ...prev, limit: prev.limit + 10 }));
  };

  const onCari = (cari: string) => {
    setParams((prev) => ({ ...prev, nama: cari || barang.nama, limit: 0 }));
  };

  return (
    <>
      <Search onChange={onCari} value={params.nama} autoFocus={true} />

      <div className="max-h-80 flex flex-col overflow-auto mt-2 scrollbar-custom">
        {dataBarang?.length ? (
          <>
            {dataBarang?.map((item) => (
              <DataBarang
                data={item}
                key={item.kd_barang}
                selectedBarang={selected}
                setSelectedBarang={setSelected}
              />
            ))}
            <div className={`${isLoading ? "hidden" : "flex"} justify-center`}>
              <button
                className="text-sm bg-white border-2 border-black font-semibold py-2 px-3 font-roboto rounded hover:text-white hover:bg-black"
                onClick={showMore}
              >
                Lebih banyak
              </button>
            </div>
          </>
        ) : (
          <div
            className={`text-center font-roboto ${
              isLoading ? "hidden" : "block"
            }`}
          >
            Tidak menemukan data dengan kata kunci {params.nama}
          </div>
        )}
      </div>
      {isLoading && (
        <div className="py-3 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {isError && (
        <div className="text-2xl font-semibold text-red-600">
          Terjadi galat saat memuat data
        </div>
      )}
      <div
        className={`mt-3 pt-3 border-t border-gray-400 justify-end ${
          isLoading || !dataBarang?.length ? "hidden" : "flex"
        }`}
      >
        <button
          className="bg-black text-white font-roboto font-medium rounded py-2 px-4 hover:bg-gray-800 disabled:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selected.kd_barang || mutation.isLoading}
          onClick={onSimpan}
        >
          {mutation.isLoading ? <Spinner color="text-white" /> : "Simpan"}
        </button>
      </div>
    </>
  );
};

export default CariBarang;
