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
        <span className="inline-flex items-center justify-center text-2xl p-1">
          <MdKeyboardArrowRight />
        </span>
      }
      previousLabel={
        <span className="inline-flex items-center justify-center text-2xl p-1">
          <MdKeyboardArrowLeft />
        </span>
      }
      breakLabel="..."
      renderOnZeroPageCount={null}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      containerClassName={
        "inline-flex items-center rounded border border-gray-400 bg-gray-100"
      }
      pageLinkClassName={"px-2"}
      activeLinkClassName="font-extrabold text-blue-500"
      disabledClassName="text-gray-400"
      disabledLinkClassName="cursor-not-allowed"
    />
  );
};

export default Pagination;
