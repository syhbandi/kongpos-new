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
import {
  useFormatNumber,
  userFormatRupiah,
} from "../../../../hooks/userFormat";
import PageSelect from "../../../../components/Table/PageSelect";
import DateRange from "../../../../components/Dashboard/DateRange";
import Search from "../../../../components/Table/Search";
import Pagination from "../../../../components/Table/Pagination";

const Nota = () => {
  const { access_token } = useRecoilValue(userState);
  const companyId = useRecoilValue(companyIdState);
  const [data, setData] = useState<PenjualanPerNota[]>([]);
  const [dataCount, setDataCount] = useState<PenjualanDataCount>({
    "Jumlah Record": "0",
    "Grand Total": "0",
  });
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

  // update params.company_id sesuai dengan state companyId
  useEffect(() => {
    setParams((prev) => ({ ...prev, company_id: companyId }));
  }, [companyId]);

  // update data dan count dari hasil queries
  useEffect(() => {
    if (queries[0].data && queries[1].data) {
      setData(queries[0].data);
      setDataCount(queries[1].data);
    }
  }, [queries]);

  return (
    <div className="p-5 bg-white shadow rounded overflow-auto">
      <div className="flex items-center mb-2 justify-between">
        <PageSelect
          id="length"
          name="length"
          value={params.length}
          onChange={onParamsChange}
        />
        <div className="flex items-center gap-2">
          {/* input awal */}
          <DateRange
            id="awal"
            name="awal"
            value={params.awal}
            onChange={onParamsChange}
          />
          <span>S/D</span>
          <DateRange
            id="akhir"
            name="akhir"
            value={params.akhir}
            onChange={onParamsChange}
          />
          <Search onChange={onCari} />
        </div>
      </div>
      <Table
        data={data}
        columns={notaColumns}
        isLoading={queries[0].isLoading || queries[1].isLoading}
      />
      <div className="mt-2 flex items-center justify-between">
        <Footer data={data} dataCount={dataCount} />
        <Pagination
          dataCount={dataCount["Jumlah Record"]}
          dataPerPage={params.length}
          offset={params.limit}
          setOffset={onPageChange}
        />
      </div>
    </div>
  );
};

type FooterProps = {
  data: PenjualanPerNota[];
  dataCount: PenjualanDataCount;
};

const Footer = ({ data, dataCount }: FooterProps) => {
  const jumlahItem = data.reduce(
    (total, current) => total + parseFloat(current["Jumlah Item"]),
    0
  );
  const jumlahData = parseFloat(dataCount["Jumlah Record"]);
  const subTotal = data.reduce(
    (total, current) => total + parseFloat(current.Total),
    0
  );
  const grandTotal = parseFloat(dataCount["Grand Total"]);
  return (
    <div className="inline-flex items-center gap-3">
      <div>
        <span>Item: </span>
        <strong>{useFormatNumber(jumlahItem)}</strong>
      </div>
      <div>
        <span>Data: </span>
        <strong>{useFormatNumber(jumlahData)}</strong>
      </div>
      <div>
        <span>Sub Total: </span>
        <strong>{userFormatRupiah(subTotal)}</strong>
      </div>
      <div>
        <span>Grand Total: </span>
        <strong>{userFormatRupiah(grandTotal)}</strong>
      </div>
    </div>
  );
};

export default Nota;
