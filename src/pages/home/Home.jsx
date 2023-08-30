import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import  FormPreviewModal  from "../../components/modals/FormPreviewModal";
import { useState, useEffect } from "react";
import GenerateReportModal from "../../components/modals/GenerateReportModal";
import { useConfig, useDataQuery, useAlert } from "@dhis2/app-runtime";
import { Button, CircularLoader,Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip } from "@dhis2/ui";
import { isSelectedPeriodWithinRange } from "../../utils/utils";


const orgUnitsListQuery = {
  orgUnits: {
    resource:"organisationUnits",
    id: ({ouID}) => ouID,
    params:{
      includeDescendants:true,
      level:6,
      paging:false,
      fields:"id,name,shortname,code,level"
    }
  }
}

  const dataValueSetsQuery = {
  dataValueSets: {
    resource: "dataValueSets",
    params:({period, ouID}) => ({
      dataSet: "XesKc0UNEKj",
      period: period,
      orgUnit: ouID
    }),
  },
};

// userInfo query
const userInfoQuery = {
  me: {
    resource: "me",
    params: {
      fields: "id,displayName,email,name,phoneNumber,organisationUnits[id,name]",
    },
  },
};


const Home = () => {
  const [isHiden, setIsHiden] = useState(true);
  const [isHiddenPreview, setIsHiddenPreview] = useState(true);
  const { baseUrl, apiVersion } = useConfig();
  // const [selectedPeriod, setSelectedPeriod] = useState('');
  const [generateBtnDisabled, setGenerateBtnDisabled] = useState(true);
  const [userOrgUnitsList, setUserOrgUnitsList] = useState(null);

  // run the datasets querry
  const { loading:loadingDataValueSets, error:errorDataValueSets, data:dataDataValueSets, refetch:refetchDataValueSets } = useDataQuery(dataValueSetsQuery, {
    lazy: true,
  });
  
  // run the ou lists querry
  const { loading:loadingOrgUnits, error:errorOrgUnits, data:dataOrgUnits, refetch:refetchOrgUnits } = useDataQuery(orgUnitsListQuery, {
    lazy: true,
  });

  // run the ou lists querry
  const { loading:loadingUserInfo, error:errorUserInfo, data:dataUserInfo, refetch:refetchUserInfo } = useDataQuery(userInfoQuery, {
    lazy: false,
  });


  useEffect(() => {
    if(dataUserInfo){
      const userOuId = dataUserInfo.me.organisationUnits[0].id
      refetchOrgUnits({
        ouID: userOuId
      })
    }
  }, [dataUserInfo]);

  useEffect(() => {
    if(dataOrgUnits){
      setUserOrgUnitsList(dataOrgUnits.orgUnits.organisationUnits)
    }
  }, [dataOrgUnits]);
  

   // A dynamic alert to communicate success or failure
   const { show } = useAlert(
    ({ message }) => message,
    ({ status }) => {
      if (status === "success") return { success: true };
      else if (status === "error") return { critical: true };
      else return {};
    }
  );

  if (errorDataValueSets) {
    return <span>ERROR: {errorDataValueSets.message}</span>;
  }

  if (loadingDataValueSets) {
    return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30%'}}>
            <CircularLoader />

        </div>
    );
  }

  if (dataDataValueSets) {
    const message = "SUCCESS: Successfully retrieved datasets values";
    show({ message, status: "success" });
    // console.log("*** valuesets: ", data);
  }


  // TODO: move this to utils
  // checking numberics 
  const containsOnlyNumeric = (inputString) => {
    return /^[0-9]+$/.test(inputString);
  }

  const openUsersDetails = (userId) => {
    window.open(
      `${baseUrl}/dhis-web-user/index.html#/users/edit/${dataUserInfo.me.id}`,
      "_blank"
    );
  };

  const onClose = () => setIsHiden(true);
  const onClosePreview = () =>  setIsHiddenPreview(true);

  const onGenerateReport = async (selectedPeriod, selectedOuID) => {
    if (selectedPeriod.length < 0) {
      alert("Please choose your prefered format and period for the report.")
    }else if (!isSelectedPeriodWithinRange(selectedPeriod[0].id)) {
      alert("The period you selected is above the current reporting period. Please try again.")
    }else{
      // refetching data on generate 
      refetchDataValueSets({
        period: selectedPeriod[0].id,
        ouID: selectedOuID
      })
      setIsHiddenPreview(false)
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
      // setSelectedPeriod(selectedPeriod[0].id)
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
          orgUnitsData={userOrgUnitsList}
        />
        {/* modal to preview the report and download */}
        {dataDataValueSets? 
          <FormPreviewModal 
            isHiddenPreview={isHiddenPreview} 
            onClosePreview={onClosePreview}
            data={dataDataValueSets}
          />
        :
        ""
      }
    </div>
  );
};

export default Home;
