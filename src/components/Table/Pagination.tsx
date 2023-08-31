import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ReactPaginate from "react-paginate";

type Props = {
  pageCount: number;
  length: number;
  offset: number;
  setOffset: (e: number) => void;
};

const Pagination = ({ pageCount, setOffset, length, offset }: Props) => {
  console.log(pageCount, length, offset);
  const [page, setPage] = useState(0);
  const onPageChange = (e: any) => {
    setOffset(e?.selected * length);
    setPage(e?.selected);
  };

  useEffect(() => {
    if (!offset) {
      setPage(0);
    }
  }, [offset]);

  return (
    <ReactPaginate
      onPageChange={onPageChange}
      pageCount={pageCount}
      forcePage={page}
      nextLabel={
        <span className="inline-flex items-center justify-center text-2xl p-2">
          <MdKeyboardArrowRight />
        </span>
      }
      previousLabel={
        <span className="inline-flex items-center justify-center text-2xl p-2">
          <MdKeyboardArrowLeft />
        </span>
      }
      breakLabel="..."
      renderOnZeroPageCount={null}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      containerClassName={
        "inline-flex items-center rounded border border-gray-400"
      }
      pageLinkClassName={"p-2"}
      activeLinkClassName="font-bold bg-kong rounded"
      disabledClassName="text-gray-400"
      disabledLinkClassName="cursor-not-allowed"
    />
  );
};

export default Pagination;
