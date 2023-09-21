import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ReactPaginate from "react-paginate";

type Props = {
  dataCount: number | any;
  dataPerPage: number;
  offset: number;
  setOffset: (e: number) => void;
};

const Pagination = ({ dataCount, setOffset, dataPerPage, offset }: Props) => {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const onPageChange = (e: any) => {
    setOffset((e?.selected * dataPerPage) % dataCount);
    setPage(e?.selected);
  };

  useEffect(() => {
    if (!offset) {
      setPage(0);
    }
  }, [offset]);

  useEffect(() => {
    if (dataCount) {
      setPageCount(Math.ceil(dataCount / dataPerPage));
    }

    return () => setPageCount(1);
  }, [dataCount, dataPerPage]);

  return (
    <ReactPaginate
      onPageChange={onPageChange}
      pageCount={pageCount}
      forcePage={page}
      nextLabel={
        <div className="flex items-center justify-center  rounded-e p-2">
          <MdKeyboardArrowRight className="text-2xl" />
        </div>
      }
      previousLabel={
        <div className="flex items-center justify-center  rounded-s p-2">
          <MdKeyboardArrowLeft className="text-2xl" />
        </div>
      }
      breakLabel="..."
      breakLinkClassName=" flex items-center justify-center p-2"
      renderOnZeroPageCount={null}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      containerClassName={"flex items-center border border-gray-400 rounded"}
      pageLinkClassName={
        "flex items-center justify-center  py-2 px-3 divide-x-0"
      }
      activeLinkClassName="font-bold bg-blue-600 text-white"
      disabledClassName="text-gray-400"
      disabledLinkClassName="cursor-not-allowed"
    />
  );
};

export default Pagination;
