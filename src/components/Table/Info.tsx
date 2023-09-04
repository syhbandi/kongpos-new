import { PenjualanDataCount } from "../../constants/Types/penjualanTypes";
import { useFormatNumber, userFormatRupiah } from "../../hooks/userFormat";

type Props = {
  data: any;
  dataCount: PenjualanDataCount;
  sumColumn?: string;
};
const Info = ({ data, dataCount, sumColumn }: Props) => {
  const sum = sumColumn
    ? data.reduce(
        (total: number, current: any) => total + parseFloat(current[sumColumn]),
        0
      )
    : "";
  const jumlahData = parseFloat(dataCount["Jumlah Record"]);
  const subTotal = data.reduce(
    (total: number, current: any) => total + parseFloat(current.Total),
    0
  );
  const grandTotal = parseFloat(dataCount["Grand Total"]);
  return (
    <>
      {data.length ? (
        <div className="inline-flex items-center gap-3">
          {sumColumn && (
            <div>
              <span>Item: </span>
              <strong>{useFormatNumber(sum)}</strong>
            </div>
          )}
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
      ) : (
        ""
      )}
    </>
  );
};

export default Info;
