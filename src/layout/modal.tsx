import { useEffect, useState, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: PropsWithChildren) => {
  const [el] = useState(() => document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) {
      console.error('Modal root element with id "modal" not found');
      return;
    }
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return createPortal(
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-[#000000bc]">
      {children}
    </div>,
    el,
  );
};

export default Modal;
