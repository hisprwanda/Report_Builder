import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@dhis2-ui/button";
import "./home.scss";
import  Preview  from "./Preview";

import format1_preview from "../../assets/images/format1_preview.png";
import format0_preview from "../../assets/images/format0_preview.png";
import custom from "../../assets/images/periods/custom.png";
import yearly from "../../assets/images/periods/yearly.png";
import quarterly from "../../assets/images/periods/quarterly.png";
import monthly from "../../assets/images/periods/monthly.png";

import { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GenerateReportModal from "../../components/modal/GenerateReportModal";
import { Modal, ModalTitle, ModalContent, ModalActions } from "@dhis2-ui/modal";
import { useConfig, useDataQuery, useAlert } from "@dhis2/app-runtime";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [hide, setHide] = useState(true);
  const { baseUrl, apiVersion } = useConfig();
  const navigate = useNavigate();
  const [chosenFormat, setChosenFormat] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [onChoosingFormats, setOnChoosingFormats] = useState(true);


  const openUsersDetails = (userId) => {
    console.log("User data: ", data.me.id);
    window.open(
      `${baseUrl}/dhis-web-user/index.html#/users/edit/${data.me.id}`,
      "_blank"
    );
  };

  const openFormatsList = () => {
    navigate("/report");
  };

  const [formats, setFormats] = useState([
    { id: 1, formatTitle: "Format 1" },
    { id: 2, formatTitle: "Format 2" },
    { id: 3, formatTitle: "Format 3" },
  ]);

  const [periods, setPeriods] = useState([
    { id: 1, periodTitle: "Custom", periodImage: custom },
    { id: 2, periodTitle: "Yearly", periodImage: yearly },
    { id: 3, periodTitle: "Quarterly", periodImage: quarterly },
    { id: 4, periodTitle: "Monthly", periodImage: monthly },
  ]);

  const handleFormatSelection = (format) => {
    setOnChoosingFormats(false);
    setChosenFormat(format);
  };

  const handleModalCancel = () => {
    setChosenFormat(null);
    setHide(true);
  };
 



  const handleImageClick = (period) => {

    if (period.periodTitle === "Monthly") {
      setShowModal(true);
    }
  };

  return (
    <div className="home">
      <div className="home_widgets">
        <Link
          className="homeCard"
          style={{ textDecoration: "none" }}
          onClick={openUsersDetails}
        >
          <span className="title"> User App</span>
          <span className="content">
            {" "}
            Navigate to Users app to change permissions. Roles define
            persmissions of User.
          </span>
          <span className="link"> Manager Users</span>
        </Link>
        <Link
          to="report"
          className="homeCard"
          style={{ textDecoration: "none" }}
        >
          <span className="title"> Report Format</span>
          <span className="content">
            Something about changing report formats.
          </span>
          <span className="link"> Edit Report Formats</span>
        </Link>
        <Link
          className="homeCard"
          style={{ textDecoration: "none" }}
          onClick={() => setHide(false)}
        >
          <span className="title"> Overall Report</span>
          <span className="content">
            {" "}
            Something about generating overall reports.
          </span>
          <span className="link"> Create New Report</span>
        </Link>
      </div>

      <div>
        <Modal className="generate_report_modal" hide={hide} large>
          {/* <ModalTitle>My Modal</ModalTitle> */}
          <ModalContent>
            <div>
              <div className="modal">
                <div className="modal_header">
                  <div className="title">
                    <span>Generate New Report </span>
                  </div>

                  {chosenFormat ? (
                    <div>
                      <p>What time format do you need?</p>
                    </div>
                  ) : (
                    <div className="formats_btns">
                      <span className="recents btn">
                        Recent Formats{" "}
                        <AccessTimeIcon className="icon" fontSize="small" />
                      </span>
                      <span className="new btn" onClick={openFormatsList}>
                        New Formats{" "}
                        <NoteAddIcon className="icon" fontSize="small" />
                      </span>
                    </div>
                  )}
                </div>

                <div className="formats">
                  <div
                    className="format_placeholder chosen_format"
                    onClick={() => console.log(chosenFormat ? "yes" : "no")}
                  >
                    <img
                      src={chosenFormat ? format1_preview : format0_preview}
                      alt=""
                      className="format_image new"
                    />
                    <span className="label">
                      {chosenFormat ? chosenFormat.formatTitle : "New"}
                    </span>
                  </div>

                  {/* vertical divider between available formats and chosen format */}
                  <div className="divider"></div>

                  {/* available formats for choose from */}
                  <div className="available_formats">
                    {chosenFormat
                      ? periods.map((period, index) => (
                          <div className="format_placeholder">
                            <img
                              src={period.periodImage}
                              alt="Format Image"
                              className="period_image"
                              onClick={() => handleImageClick(period)}
                            />

                            <span className="label">{period.periodTitle}</span>
                          </div>
                        ))
                      : formats.map((format, index) => (
                          <div
                            className="format_placeholder"
                            onClick={() => handleFormatSelection(format)}
                          >
                            <img
                              src={format1_preview}
                              alt="Format Image"
                              className="format_image"
                            />
                            <span className="label">{format.formatTitle}</span>
                          </div>
                        ))}
                  </div>

                  {/* next btn */}
                  <div className="next_btn">
                    <ArrowForwardIosIcon />
                  </div>
                </div>

                <div className="bottom_btns">
                  <Button className="btn" secondary onClick={handleModalCancel}>
                    {" "}
                    Cancel{" "}
                  </Button>
                  <Button
                    className="btn"
                    primary
                    onClick={() => alert("Report Format Created!")}
                  >
                    {" "}
                    Create{" "}
                  </Button>
                </div>
              </div>
            </div>
          </ModalContent>
        </Modal>
        
        {showModal && (
          <Modal className="report_form_modal" hide={hide} large closeButton>  
            <ModalContent >
              <div>
                <div className="modal">
                  <div className="modal_header">
                    
                      </div>
                      <div>
                      < Preview/>
                      </div>

                  </div>  
              </div>
            </ModalContent>
        </Modal>
        )}
      </div>
    </div>
  );
};

export default Home;
