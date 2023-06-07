import React from "react";
import { Modal, ModalTitle, ModalContent, ModalActions } from "@dhis2-ui/modal";
import html2pdf from "html2pdf.js";
import { useState } from "react";

const Buttons = () => {
  const [chosenFormat, setChosenFormat] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [onChoosingFormats, setOnChoosingFormats] = useState(true);
  
  const handleModalCancel = () => {
    setChosenFormat(null);
    setHide(false);
  };

    const handleSave = () => {
    let element = document.getElementById("monthly_report_form");
    let clonedElement = element.cloneNode(true);

    let opt = {
      margin: 1,
      filename: "monthly_report_form.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(clonedElement).set(opt).save();
  };

  return (
    <div>
      <button className="input" onClick={handleModalCancel}>
        Cancel
      </button>
      <button className="primary" onClick={handleSave}>
        Download
      </button>
    </div>
  );
};

export default Buttons;
