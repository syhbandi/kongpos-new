import { useState } from "react";
import DateRange from "../../../../components/Dashboard/DateRange";
import inventoriColumns from "../../../../constants/ColumnsHelper/inventori";
import Detail from "./Detail";
const index = () => {
  const [periode, setPeriode] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [jenis, setJenis] = useState("1");
  return (
    <div className="bg-white rounded p-5 shadow">
      <div className="inline-flex items-center gap-3 mr-3">
        <label htmlFor="periode">Periode</label>
        <DateRange
          id="periode"
          name="periode"
          value={periode}
          onChange={(e) => setPeriode(e.target.value)}
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
          {inventoriColumns.map((col) => (
            <option key={col.jenis} value={col.jenis}>
              {col.nama}
            </option>
          ))}
        </select>
      </div>
      <Detail periode={periode} jenis={jenis} />
    </div>
  );
};

export default index;
