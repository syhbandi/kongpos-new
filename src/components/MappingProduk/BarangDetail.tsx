import { FC } from "react";
import { SupplierItemType } from "../../constants/Types/kontrakTypes";

type Props = {
  data: SupplierItemType;
};
const BarangDetail: FC<Props> = ({ data }: Props) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default BarangDetail;
