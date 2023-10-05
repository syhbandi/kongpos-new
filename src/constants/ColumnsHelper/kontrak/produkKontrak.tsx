import { createColumnHelper } from "@tanstack/react-table";
import { ProdukKontrakType } from "../../Types/kontrakTypes";
import SatuanDetail from "../../../components/ProdukKontrak/SatuanDetail";

const helper = createColumnHelper<ProdukKontrakType>();
const produkKontrakColumns = [
  helper.accessor("item", { cell: (data) => data.getValue() }),
  helper.accessor("merk", { cell: (data) => data.getValue() }),
  helper.accessor("kategori", { cell: (data) => data.getValue() }),
  helper.accessor("satuan", { cell: (data) => data.getValue() }),
  helper.display({
    header: "Aksi",
    cell: ({ row: { original } }) => {
      const satuan = original.satuan.split(",");
      const satuanStatus = original.mbs_status.split(",");
      const kdSatuan = original.kd_satuan.split(",");

      return (
        <div>
          {satuan.map((s, index) => (
            <SatuanDetail
              key={original.kd_barang + kdSatuan[index]}
              satuan={s}
              kdSatuan={kdSatuan[index]}
              status={satuanStatus[index]}
              produk={original.kd_barang}
            />
          ))}
        </div>
      );
    },
  }),
];

export default produkKontrakColumns;
