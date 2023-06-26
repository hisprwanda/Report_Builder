import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import  FormPreviewModal  from "./FormPreviewModal";
import { useState } from "react";
import GenerateReportModal from "../../components/modals/GenerateReportModal";
import { useConfig } from "@dhis2/app-runtime";


const Home = () => {
  const [isHiden, setIsHiden] = useState(true);
  const [isHiddenPreview, setIsHiddenPreview] = useState(true);
  const { baseUrl, apiVersion } = useConfig();


  const openUsersDetails = (userId) => {
    console.log("User data: ", data.me.id);
    window.open(
      `${baseUrl}/dhis-web-user/index.html#/users/edit/${data.me.id}`,
      "_blank"
    );
  };

  const onClose = () => setIsHiden(true);
  const onClosePreview = () =>  setIsHiddenPreview(true);

  const onGenerateReport = () => {
    console.log('Generating report...');
    setIsHiddenPreview(false)
  }

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
          onClick={() => setIsHiden(false)}
        >
          <span className="title"> Overall Report</span>
          <span className="content">
            {" "}
            Something about generating overall reports.
          </span>
          <span className="link"> Create New Report</span>
        </Link>
      </div>


        {/* A modal to generate reports */}
        <GenerateReportModal 
          hide={isHiden} 
          onClose={onClose}
          onGenerateReport={onGenerateReport}
        />
        {/* modal to preview the report and download */}
        <FormPreviewModal 
          isHiddenPreview={isHiddenPreview} 
          onClosePreview={onClosePreview}
        />
    </div>
  );
};

export default Home;
