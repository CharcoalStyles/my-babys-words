import { useState } from "react";
import { CogIcon } from "./icons/cog";

export const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-circle btn-secondary normal-case text-xl"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <CogIcon />
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
