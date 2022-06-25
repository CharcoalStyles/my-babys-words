import { useState } from "react";

export const NewWordModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-primary mx-4 normal-case text-xl"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add a word
      </button>
      <div className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Yay!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
