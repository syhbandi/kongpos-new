import { Transition, Dialog } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { MdClose } from "react-icons/md";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  title: string;
};

const Modal = ({ open, setOpen, children, title }: Props) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-4 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h1 className="text-xl font-semibold font-poppins">
                    {title}
                  </h1>
                  <button onClick={() => setOpen(false)}>
                    <MdClose className="text-2xl" />
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
