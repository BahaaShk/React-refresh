import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div className=" absolute bottom-12 border bg-red-500 p-2">
          Copied to clipboard
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default PopupContent;
