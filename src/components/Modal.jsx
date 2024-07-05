import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, title, times, showFooter, children }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowOverlay(true);
      setTimeout(() => setShowContent(true), 50); // Delay to allow overlay animation
    } else {
      setShowContent(false);
      setTimeout(() => setShowOverlay(false), 300); // Durasi animasi sesuai dengan kelas Tailwind CSS
    }
  }, [isOpen]);

  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div
        className={`absolute inset-0 bg-gray-600 transition-opacity duration-300 ${
          showContent ? "opacity-75" : "opacity-0"
        }`}
      ></div>
      <div
        className={`bg-white rounded-lg shadow-lg overflow-hidden z-50 max-w-lg w-full transform transition-all duration-300 ${
          showContent ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          {times && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          )}
        </div>
        <div className="p-4">{children}</div>
        {showFooter && (
          <div className="flex justify-end p-4 border-t">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
