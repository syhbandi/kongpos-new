import { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos, MdClose } from "react-icons/md";
import { motion } from "framer-motion";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  images: string[];
};

const ImageViewer = ({ open, setOpen, images }: Props) => {
  const [current, setCurrent] = useState(0);

  const onForward = () => {
    setCurrent((prev) => ++prev);
  };

  const onBackward = () => {
    setCurrent((prev) => --prev);
  };

  useEffect(() => {
    setCurrent(0);
  }, [open]);

  if (!open) return null;
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 overflow-hidden z-30 flex items-center justify-center p-10`}
    >
      <motion.img
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        src={images[current]}
        className="max-w-full max-h-full"
        alt={"gambar produk"}
        loading="lazy"
      />

      {/* button close */}
      <div className="absolute right-0 top-0 p-5 z-10">
        <button
          className="w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center text-2xl"
          onClick={() => setOpen(false)}
        >
          <MdClose />
        </button>
      </div>

      {/* control */}
      {images.length > 1 && current < images.length - 1 ? (
        <div className="absolute right-0 top-0 h-full flex items-center justify-center p-5">
          <button
            className="text-3xl text-white rounded-full p-3 hover:bg-white hover:bg-opacity-10"
            onClick={onForward}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      ) : null}
      {images.length > 1 && current > 0 ? (
        <div className="absolute left-0 top-0 h-full flex items-center justify-center p-5">
          <button
            className="text-3xl text-white rounded-full p-3 hover:bg-white hover:bg-opacity-10"
            onClick={onBackward}
          >
            <MdArrowBackIosNew />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ImageViewer;
