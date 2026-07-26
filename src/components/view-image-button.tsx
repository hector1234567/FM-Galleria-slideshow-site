import { useState } from "react";
import Modal from "../layout/modal";

type ViewImageButtonProps = {
  imageUrl: string;
  name: string;
};

export default function ViewImageButton({
  imageUrl,
  name,
}: ViewImageButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        className="absolute top-4 left-4 flex cursor-pointer items-center gap-2 bg-black p-2 text-white md:top-auto md:bottom-4 md:p-3.5"
        onClick={() => setModalOpen(true)}
      >
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fillRule="nonzero">
            <path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z" />
          </g>
        </svg>
        <span className="text-[10px] font-bold uppercase">View image</span>
      </button>
      {modalOpen ? (
        <Modal>
          <div className="flex max-h-[80vh] max-w-[95vw] flex-col items-end overflow-hidden">
            <button
              className="mb-4 cursor-pointer font-serif text-[14px] font-semibold text-white uppercase"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
            <img
              src={imageUrl}
              alt={name}
              className="min-h-0 w-full flex-1 object-contain"
            />
          </div>
        </Modal>
      ) : null}
    </>
  );
}
