import { useState } from "react";
import DateRange from "../../../../components/Dashboard/DateRange";
import Detail from "./Detail";
import pendapatanColumns from "../../../../constants/ColumnsHelper/pendapatan";
const index = () => {
  const [awal, setAwal] = useState(new Date().toISOString().split("T")[0]);
  const [akhir, setAkhir] = useState(new Date().toISOString().split("T")[0]);
  const [jenis, setJenis] = useState("1");
  return (
    <div className="bg-white p-5 rounded shadow">
      <div className="inline-flex items-center gap-3 mr-3">
        <label htmlFor="periode">Awal</label>
        <DateRange
          id="awal"
          name="awal"
          value={awal}
          onChange={(e) => setAwal(e.target.value)}
        />
      </div>
      <div className="inline-flex items-center gap-3 mr-3">
        <label htmlFor="periode">Akhir</label>
        <DateRange
          id="akhir"
          name="akhir"
          value={akhir}
          onChange={(e) => setAkhir(e.target.value)}
        />
      </div>
      <div className="inline-flex items-center gap-3 mr-3">
        <label htmlFor="periode">Grup</label>
        <select
          name="jenis"
          id="jenis"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
          className="rounded border border-gray-400 p-2 focus:border-black outline-none"
        >
          {pendapatanColumns.map((col) => (
            <option key={col.jenis} value={col.jenis}>
              {col.nama}
            </option>
          ))}
        </select>
      </div>
      <Detail jenis={jenis} awal={awal} akhir={akhir} />
    </div>
  );
};

export default index;
