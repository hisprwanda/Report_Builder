import{useState, useEffect} from 'react';
import './preview.scss'
import "./form.scss";
import Logo from "../../assets/images/moh_logo.jpeg";
import { useDataQuery, useAlert } from "@dhis2/app-runtime";
import { Button, CircularLoader,Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip } from "@dhis2/ui";
import OutPatient from "../../components/report_sections/OutPatient";
import Malaria from "../../components/report_sections/Malaria";
import MentalHealth from "../../components/report_sections/MentalHealth";
import Chronic from "../../components/report_sections/Chronic";
import PalliativeCare from "../../components/report_sections/PalliativeCare";
import CancerScreening from "../../components/report_sections/CancerScreening";
import Hospitalization from "../../components/report_sections/Hospitalization";
import GenderBasedViolence from "../../components/report_sections/GenderBasedViolence";
import Surgery from "../../components/report_sections/Surgery";
import Anesthesia from "../../components/report_sections/Anesthesia";
import Rehabilitation from "../../components/report_sections/Rehabilitation";
import Obstetrical from "../../components/report_sections/Obstetrical";
import Postnatal from "../../components/report_sections/Postnatal";
import Kangroo from "../../components/report_sections/Kangaroo";
import Neonatal from "../../components/report_sections/Neonatal";
import Nutrition from "../../components/report_sections/Nutrition";
import Laboratory from "../../components/report_sections/Laboratory";
import TracerDrug from "../../components/report_sections/TracerDrug";
import MedicalImagery from "../../components/report_sections/MedicalImagery";
import Ambulance from "../../components/report_sections/Ambulance";
import Staffing from "../../components/report_sections/Staffing";
import html2pdf from "html2pdf.js";


// TODO: move this up in the modals' folder
const FormPreviewModal = ({isHiddenPreview, onClosePreview, data}) => {
    const [showForm, setShowForm] = useState(true);
    
    // FIXME: this download fails when the report is full of alot of data. find a more efficient one
    
    const handleReportDownload = () => {
      let element = document.getElementById("monthly_report_form");
      let clonedElement = element.cloneNode(true);

      let opt = {
        margin: [2,2,2,2], 
        filename: "monthly_report.pdf",
        image: { type: "jpeg", quality: 0.8 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        autoPrint: true,
        printResolution: 'high'
    };

      html2pdf().from(clonedElement).set(opt).save();
    };

  return (
    <Modal className="report_form_modal" hide={isHiddenPreview} onClose={onClosePreview} position="middle" fluid>  
      {/* TODO: add this tittle, center it and give it a log just like the one in WHO report */}
      {/* <ModalTitle>District Hospital Monthly HMIS Report</ModalTitle> */}
      <ModalContent >
        <div className="monthly_report_form" id="monthly_report_form">
          <div className="header_section">
            <header className="section">
              <img src={Logo}></img>
              <p>
                <h1>District Hospital Monthly HMIS Report</h1>
                <h2>
                  <i>Rapport Mensuel SIS de l’Hôpital de district</i>
                </h2>
              </p>
            </header>
          </div>
          <div className="identification_section">
            <table align="center">
              <thead>
                <tr>
                  <th colSpan="4" class="specialth">
                    I.Identification / Identification
                  </th>
                </tr>
                <tr>
                  <th colSpan="4">
                    A)Report identification/ <i>identification</i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  <tr>
                    <td style={{ maxWidth: "100px" }}>
                      1.Facility Name / <i> Nom de la formation sanitaire</i>
                    </td>
                    <td class="special1">data.me.name</td>
                    <td>
                      3.Year/<i>Annee</i>
                    </td>
                    <td class="special5"></td>
                  </tr>
                  <tr>
                    <td style={{ maxWidth: "140px" }}>
                      2. Catchment Area Population /{" "}
                      <i>Population totale de la zone de rayonnement</i>
                    </td>
                    <td class="special1"></td>
                    <td>
                      4.Month/<i>Mois</i>
                    </td>
                    <td class="special5"></td>
                  </tr>
                </>
              </tbody>
            </table>
            <table align="center" className="reportApprovals">
              <thead>
                <tr>
                  <th colSpan={4}>
                    B) Report Approvals and Processing/{" "}
                    <i>Processus de validation et du transmission de rapport </i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  <tr>
                    <td class="special11">
                      1.Name of Director General /{" "}
                      <i> Nom du Directeur General</i>
                    </td>
                    <td class="special1"></td>
                    <td class="special11">
                      3.Date of Data Entry in HMIS/
                      <i>Date d'encodage dans HMIS</i>{" "}
                    </td>
                    <td class="special1"></td>
                  </tr>
                  <tr>
                    <td class="special11">2. Signature</td>
                    <td class="special1"></td>
                    <td class="special11">
                      4.Signature/<i>Signature</i>
                    </td>
                    <td class="special1"></td>
                  </tr>
                </>
              </tbody>
            </table>
          </div>
          {/* TODO: add missing data for some data sets to mach the currrent production server */}
          <OutPatient data={data} />
          <Malaria data={data} /> 
           {/*<MentalHealth data={data} />
          <Chronic data={data} />
          <PalliativeCare data={data} />
          <CancerScreening data={data} />
          <Hospitalization data={data} />
         <GenderBasedViolence data={data} />
          <Surgery data={data} />
          <Anesthesia data={data} />
          <Rehabilitation data={data} />
          <Obstetrical data={data} />
          <Postnatal data={data} />
          <Kangroo data={data} />
          <Neonatal data={data} />
          <Nutrition data={data} />
          <Laboratory data={data} />
          <TracerDrug data={data} />
          <MedicalImagery data={data} />
          <Ambulance data={data} />
          <Staffing data={data} />*/}
  {/*        <div className="footer_section">
            <header className="section">
              <p>=========================================================================================</p>
            </header>
          </div>*/}
        </div>
      </ModalContent>
      <ModalActions>
        <ButtonStrip middle>
          <Button  secondary onClick={onClosePreview}>
              Cancel
          </Button>
          <Button  primary onClick={handleReportDownload}> 
              Download Report
          </Button>
        </ButtonStrip>
      </ModalActions>
    </Modal>
  );
};

export default FormPreviewModal;