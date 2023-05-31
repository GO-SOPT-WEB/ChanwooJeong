import reactDom from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }:ModalProps) => {
  const el = document.getElementById("modal");
  return reactDom.createPortal(children, el as HTMLElement);
};

export default ModalPortal;