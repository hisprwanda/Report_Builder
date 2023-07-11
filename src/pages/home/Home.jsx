import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import  FormPreviewModal  from "./FormPreviewModal";
import { useState } from "react";
import GenerateReportModal from "../../components/modals/GenerateReportModal";
import { useConfig, useDataQuery, useAlert } from "@dhis2/app-runtime";
import { Button, CircularLoader,Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip } from "@dhis2/ui";


// TODO: replace this with the correct querry
const reportQuery = {
  me: {
    resource: "me",
    params: {
      fields: ["username, surname, name, organisationUnits[id,name]"],
    },
  },
  dataValueSets: {
    resource: "dataValueSets",
    params:({period}) => ({
      dataSet: "XesKc0UNEKj",
      period: period,
      orgUnit: "cTBc6Cl0jM8",
    }),
  },
};


const Home = () => {
  const [isHiden, setIsHiden] = useState(true);
  const [isHiddenPreview, setIsHiddenPreview] = useState(true);
  const { baseUrl, apiVersion } = useConfig();
  const [selectedPeriod, setSelectedPeriod] = useState('');

  /*
  const getCurrentPeriod = () => {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    if (month < 10) { month = '0' + month }
    return `${year}${month}`;
  }
  */
  
  // run the querry
  const { loading, error, data, refetch, called } = useDataQuery(reportQuery, {
    variables: {period: selectedPeriod},
    lazy: true,
  });

   // A dynamic alert to communicate success or failure
   const { show } = useAlert(
    ({ message }) => message,
    ({ status }) => {
      if (status === "success") return { success: true };
      else if (status === "error") return { critical: true };
      else return {};
    }
  );

  if (error) {
    return <span>ERROR: {error.message}</span>;
  }

  //TODO: center this loader and make it a % filling line if possible.
  if (loading) {
    return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30%'}}>
            <CircularLoader />

        </div>
    );
  }

  if (data) {
    const message = "SUCCESS: Successfully retrieved datasets values";
    show({ message, status: "success" });
    // console.log("*** valuesets: ", data);
  }

  {!called && (
    <p>{'No data yet - click "Refech" to query the list'}</p>
  )}

  const openUsersDetails = (userId) => {
    console.log("User data: ", data.me.id);
    window.open(
      `${baseUrl}/dhis-web-user/index.html#/users/edit/${data.me.id}`,
      "_blank"
    );
  };

  const onClose = () => setIsHiden(true);
  const onClosePreview = () =>  setIsHiddenPreview(true);

  const onGenerateReport = async (period) => {
    if (period.length > 0) {
      console.log('Generating report for ...', period[0].id);
      setIsHiddenPreview(false)
      setSelectedPeriod(period[0].id)

      //TODO: 
      // refetching data on generate 
      refetch({
        period: selectedPeriod
      })
    }else{
      alert("Please choose your prefered format and period for the report.")
    }
  }

  
  const onSavePeriods = (selectedPeriod) => {
    if (selectedPeriod.length > 1) {
        alert('Please select one period and continue')  // TODO: use better dhis2 ui alerts
    }else{
        setSelectedPeriod(selectedPeriod[0].id)
        // show the report
        console.log('Selected periods: ', selectedPeriod[0].id);

    }
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
          onSavePeriods={onSavePeriods}
        />
        {/* modal to preview the report and download */}
        {data? 
          <FormPreviewModal 
            isHiddenPreview={isHiddenPreview} 
            onClosePreview={onClosePreview}
            data={data}
          />
        :
        ""
      }
    </div>
  );
};

export default Home;
