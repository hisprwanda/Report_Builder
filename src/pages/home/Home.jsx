import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import  FormPreviewModal  from "../../components/modals/FormPreviewModal";
import { useState } from "react";
import GenerateReportModal from "../../components/modals/GenerateReportModal";
import { useConfig, useDataQuery, useAlert } from "@dhis2/app-runtime";
import { Button, CircularLoader,Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip } from "@dhis2/ui";
import { isSelectedPeriodWithinRange } from "../../utils/utils";


// TODO: replace this with the correct querry
const reportQuery = {
  orgUnit: {
    resource:"organisationUnits",
    params:{
      fields: ["fields=id,level,code,shortName,displayName,parent,user,programs,name,path,ancestors[id,name]"]
    }
  },
  dataValueSets: {
    resource: "dataValueSets",
    params:({period}) => ({
      dataSet: "XesKc0UNEKj",
      period: period,
      orgUnit: "cTBc6Cl0jM8", // TODO: use the user's org unit by default
    }),
  },
};

// userInfo query
const userInfoQuery = {
  me: {
    resource: "me",
    params: {
      fields: ["username, surname, name, organisationUnits[id,name]"],
    },
  },
  
};


const Home = () => {
  const [isHiden, setIsHiden] = useState(true);
  const [isHiddenPreview, setIsHiddenPreview] = useState(true);
  const { baseUrl, apiVersion } = useConfig();
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [generateBtnDisabled, setGenerateBtnDisabled] = useState(true);
  
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

  // checking numberics
  const containsOnlyNumeric = (inputString) => {
    return /^[0-9]+$/.test(inputString);
  }

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
    if (period.length < 0) {
      alert("Please choose your prefered format and period for the report.")
    }else if (!isSelectedPeriodWithinRange(period[0].id)) {
      alert("The period you selected is above the current reporting period. Please try again.")
    }else{
      console.log('Generating report for ...', period[0].id);
      setIsHiddenPreview(false)
      setSelectedPeriod(period[0].id)
      // refetching data on generate 
      refetch({
        period: selectedPeriod
      })
    }
  }

  
  const onSavePeriods = (selectedPeriod) => {
    console.log('selected p', selectedPeriod[0].id)
    if (selectedPeriod.length > 1 ) {
      const message = "ERROR: Please select one period and continue";
      show({ message, status: "error" });
      setGenerateBtnDisabled(true)
    }else if (!containsOnlyNumeric(selectedPeriod[0].id)){
      // a workaround to know whether the user has selected only fixed perios
      const message = "ERROR: Please select from fixed periods only for now.";
      show({ message, status: "error" });
      setGenerateBtnDisabled(true)
    }else{
      // show the report
      setSelectedPeriod(selectedPeriod[0].id)
      setGenerateBtnDisabled(false)
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
            Creating and configuring new report formats.
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
            Generating overall reports based on pre-defined formats.
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
          generateBtnDisabled={generateBtnDisabled}
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
