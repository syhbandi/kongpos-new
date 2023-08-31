import { useQueries } from "@tanstack/react-query";
import { getPenjualan } from "../../../../api/laporan";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { useState, useEffect } from "react";
import Table from "../../../../components/Table";
import notaColumns from "../../../../constants/ColumnsHelper/penjualan/notaColumns";
import {
  PenjualanDataCount,
  PenjualanParams,
  PenjualanPerNota,
} from "../../../../constants/Types/penjualanTypes";
import { userFormatRupiah } from "../../../../hooks/userFormat";

const Nota = () => {
  const { access_token } = useRecoilValue(userState);
  const companyId = useRecoilValue(companyIdState);
  const [data, setData] = useState<PenjualanPerNota[]>([]);
  const [dataCount, setDataCount] = useState<PenjualanDataCount>();
  const [params, setParams] = useState<PenjualanParams>({
    company_id: companyId,
    awal: new Date().toISOString().split("T")[0],
    akhir: new Date().toISOString().split("T")[0],
    jenis: "1",
    search: "",
    order_col: "",
    order_type: "",
    limit: 0,
    length: 10,
    count_stats: 0,
  });

  const onParamsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setParams((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      limit: 0,
    }));
  };

  const onCari = (cari: string) => {
    setParams((prev) => ({ ...prev, search: cari, limit: 0 }));
  };

  const onPageChange = (offset: number) => {
    setParams((prev) => ({ ...prev, limit: offset }));
  };

  const queries = useQueries({
    queries: [
      {
        queryKey: ["penjualan", params],
        queryFn: () => getPenjualan(params, access_token),
      },
      {
        queryKey: ["penjualan", { ...params, count_stats: 1 }],
        queryFn: () =>
          getPenjualan({ ...params, count_stats: 1 }, access_token),
      },
    ],
  });

  useEffect(() => {
    setParams((prev) => ({ ...prev, company_id: companyId }));
  }, [companyId]);

  useEffect(() => {
    if (queries[0].data && queries[1].data) {
      setData(queries[0].data);
      setDataCount(queries[1].data);
    }
  }, [queries]);

  return (
    <div className="p-5 bg-white shadow rounded overflow-auto">
      <Table
        data={data}
        columns={notaColumns}
        isLoading={queries[0].isLoading || queries[1].isLoading}
        setSearch={onCari}
        length={params.length}
        setParams={onParamsChange}
        offset={params.limit}
        setOffset={onPageChange}
        additional={
          <Filter
            awal={params.awal}
            akhir={params.akhir}
            setParams={onParamsChange}
          />
        }
        totalData={dataCount}
        additionalFooter={
          <Footer
            subTotal={data.reduce(
              (total, current) => total + parseFloat(current.Total),
              0
            )}
            records={dataCount?.["Jumlah Record"]}
            grandTotal={parseFloat(dataCount?.["Grand Total"] || "0")}
            items={data.reduce(
              (total, current) => total + parseFloat(current["Jumlah Item"]),
              0
            )}
          />
        }
      />
    </div>
  );
};

type filterProps = {
  awal: string;
  akhir: string;
  setParams: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filter = ({ awal, akhir, setParams }: filterProps) => {
  return (
    <>
      <input
        type="date"
        name="awal"
        value={awal}
        onChange={setParams}
        className="p-2 rounded border border-gray-400"
      />
      <span>S/D</span>
      <input
        type="date"
        name="akhir"
        value={akhir}
        onChange={setParams}
        className="p-2 rounded border border-gray-400"
      />
    </>
  );
};

type FooterProps = {
  subTotal: number;
  records: number | string | undefined;
  items: number | string;
  grandTotal: number;
};

const Footer = ({ subTotal, records, items, grandTotal }: FooterProps) => {
  return (
    <div className="inline-flex items-center gap-3">
      <div>
        <span>Jumlah item: </span>
        <span>{items}</span>
      </div>
      <div>
        <span>Jumlah data: </span>
        <span>{records}</span>
      </div>
      <div>
        <span>Sub Total: </span>
        <span>{userFormatRupiah(subTotal)}</span>
      </div>
      <div>
        <span>Grand Total: </span>
        <span>{userFormatRupiah(grandTotal)}</span>
      </div>
    </div>
  );
};

export default Nota;
