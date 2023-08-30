import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ReactPaginate from "react-paginate";

type Props = {
  pageCount: number;
  offset: number;
  length: number;
  setOffset: (e: number) => void;
};

const Pagination = ({ pageCount, setOffset, length }: Props) => {
  const onPageChange = (e: any) => {
    console.log(e);
    setOffset(e?.selected * length);
  };

  return (
    <ReactPaginate
      onPageChange={onPageChange}
      pageCount={pageCount}
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
    />
  );
};

export default Pagination;
