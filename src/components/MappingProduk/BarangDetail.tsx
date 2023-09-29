import { FC } from "react";
import { SupplierItemType } from "../../constants/Types/kontrakTypes";

type Props = {
  data: SupplierItemType;
};
const BarangDetail: FC<Props> = ({ data }: Props) => {
  return (
    <table className="w-full font-roboto">
      <thead>
        <tr>
          <th className="p-2 border border-gray-400 text-center">Supplier</th>
          <th className="p-2 border border-gray-400 text-center">Customer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2} className="p-2 border border-gray-400 text-center">
            Nama barang
          </td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-400 text-center">
            {data.nama}
          </td>
          <td className="p-2 border border-gray-400 text-center">
            {data.barang_customer}
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="p-2 border border-gray-400 text-center">
            Satuan
          </td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-400 text-center">
            {data.satuan}
          </td>
          <td className="p-2 border border-gray-400 text-center">
            {data.satuan_customer}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BarangDetail;
