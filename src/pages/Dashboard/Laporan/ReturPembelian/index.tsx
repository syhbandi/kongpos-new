import { useState } from "react";
import DateRange from "../../../../components/Dashboard/DateRange";
import Detail from "./Detail";
import pembelianColumns from "../../../../constants/ColumnsHelper/pembelian";

const index = () => {
  const [awal, setAwal] = useState(new Date().toISOString().split("T")[0]);
  const [akhir, setAkhir] = useState(new Date().toISOString().split("T")[0]);
  const [jenis, setJenis] = useState("1");
  return (
    <div className="bg-white p-5 rounded shadow">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-3">
          <label htmlFor="awal">Awal</label>
          <DateRange
            id="awal"
            name="awal"
            value={awal}
            onChange={(e) => setAwal(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="akhir">Akhir</label>
          <DateRange
            id="akhir"
            name="akhir"
            value={akhir}
            onChange={(e) => setAkhir(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="jenis">Grup</label>
          <select
            id="jenis"
            name="jenis"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
            className="rounded border border-gray-400 outline-none p-2"
          >
            {pembelianColumns.map((col) => (
              <option value={col.jenis} key={col.jenis}>
                {col.nama}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Detail awal={awal} akhir={akhir} jenis={jenis} />
    </div>
  );
};

export default index;
