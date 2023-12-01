import { useState } from "react";
import { GetKartuStokType } from "../../../../constants/Types/persediaanTypes";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getKartuStok } from "../../../../api/laporan";
import Table from "../../../../components/Table";
import kartuStokColumns from "../../../../constants/ColumnsHelper/persediaan/KartuStok";
import PageSelect from "../../../../components/Table/PageSelect";
import { useFormatNumber } from "../../../../hooks/userFormat";
import Pagination from "../../../../components/Table/Pagination";

type Props = {
  kdBarang: string;
};

const KartuStok = ({ kdBarang }: Props) => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState<GetKartuStokType>({
    company_id: companyId,
    akhir: searchParams.get("akhir") || "",
    awal: searchParams.get("awal") || "",
    kd_barang: kdBarang,
    length: 10,
    limit: 0,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["kartuStok", params],
    queryFn: () => getKartuStok(params, access_token),
  });

  if (isError)
    return (
      <div className="font-medium text-red-600">
        Ada galat sistem, silakan coba lagi
      </div>
    );

  return (
    <div className="font-roboto">
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
    </div>
  );
};

export default KartuStok;
