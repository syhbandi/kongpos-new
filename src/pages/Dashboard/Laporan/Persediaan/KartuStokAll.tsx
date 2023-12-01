import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { GetKartuStokType } from "../../../../constants/Types/persediaanTypes";
import DateRange from "../../../../components/Dashboard/DateRange";
import { MdSearch } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { getKartuStok } from "../../../../api/laporan";
import PageSelect from "../../../../components/Table/PageSelect";
import Table from "../../../../components/Table";
import kartuStokColumns from "../../../../constants/ColumnsHelper/persediaan/KartuStok";
import { useFormatNumber } from "../../../../hooks/userFormat";
import Pagination from "../../../../components/Table/Pagination";
import Modal from "../../../../components/Dashboard/Modal";
import CariBarang from "./CariBarang";

const KartuStokAll = () => {
  const company_id = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [params, setParams] = useState<GetKartuStokType>({
    company_id,
    awal: new Date().toISOString().split("T")[0],
    akhir: new Date().toISOString().split("T")[0],
    length: 10,
    limit: 0,
    kd_barang: "",
  });
  const [selectedBarang, setselectedBarang] = useState({
    kd_barang: "",
    barang: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["kartuStok", params],
    queryFn: () => getKartuStok(params, access_token),
  });

  useEffect(() => {
    setParams((prev) => ({ ...prev, kd_barang: selectedBarang.kd_barang }));
  }, [selectedBarang]);

  if (isError)
    return (
      <div className="font-medium text-red-600">
        Ada galat sistem, silakan coba lagi
      </div>
    );

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-3 mb-5">
        <div className="flex items-center gap-3">
          <label htmlFor="awal">Awal </label>
          <DateRange
            id="awal"
            name="awal"
            onChange={(e) =>
              setParams((prev) => ({
                ...prev,
                awal: e.target.value,
                limit: 0,
              }))
            }
            value={params.awal}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="akhir">Akhir </label>
          <DateRange
            id="akhir"
            name="akhir"
            onChange={(e) =>
              setParams((prev) => ({
                ...prev,
                akhir: e.target.value,
                limit: 0,
              }))
            }
            value={params.akhir}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="barang">Barang</label>
          <input
            type="text"
            readOnly
            id="barang"
            value={selectedBarang.barang}
            className="rounded border border-gray-400 p-2 outline-none w-max"
            placeholder="Cari barang"
          />
          <button
            className="py-2 px-3 rounded bg-blue-600 text-white font-medium flex items-center gap-1 justify-center hover:bg-opacity-80"
            onClick={() => setModalOpen(true)}
          >
            <MdSearch className="text-xl" /> Cari
          </button>
        </div>
      </div>
      <div className="mb-2">
        <PageSelect
          id="length"
          name="length"
          onChange={(e) =>
            setParams((prev) => ({
              ...prev,
              [e.target.id]: e.target.value,
              limit: 0,
            }))
          }
          value={params.length}
        />
      </div>
      <Table
        data={data?.data}
        columns={kartuStokColumns}
        isLoading={isLoading}
      />
      <div className="mt-2 flex flex-col md:flex-row items-center justify-between">
        <div>
          <span>
            Menampilkan {useFormatNumber(params.limit + 1)} ke{" "}
            {useFormatNumber(
              params.length + params.limit > data?.jumlah_record
                ? data?.jumlah_record
                : params.length + params.limit
            )}{" "}
            dari {useFormatNumber(parseFloat(data?.jumlah_record) | 0)} data
          </span>
        </div>
        <Pagination
          dataCount={parseFloat(data?.jumlah_record || 0)}
          dataPerPage={params.length}
          offset={params.limit}
          setOffset={(offset) =>
            setParams((prev) => ({ ...prev, limit: offset }))
          }
        />
      </div>
      <Modal
        title="Cari Barang"
        open={modalOpen}
        setOpen={setModalOpen}
        variant="max-w-2xl"
      >
        <CariBarang setBarang={setselectedBarang} setModal={setModalOpen} />
      </Modal>
    </>
  );
};

export default KartuStokAll;
