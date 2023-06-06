import React from 'react';
import './form.scss'
import Logo  from '../../assets/images/moh_logo.jpeg';
import { useDataQuery, useAlert } from "@dhis2/app-runtime";
import { CircularLoader } from "@dhis2/ui";
import { Close } from '@mui/icons-material';
import OutPatient from '../../components/report_sections/OutPatient';
import Malaria from '../../components/report_sections/Malaria';
import MentalHealth from '../../components/report_sections/MentalHealth';
import Chronic from '../../components/report_sections/Chronic';
import PalliativeCare from '../../components/report_sections/PalliativeCare';
import CancerScreening from '../../components/report_sections/CancerScreening';
import Hospitalization from '../../components/report_sections/Hospitalization';
import GenderBasedViolence from '../../components/report_sections/GenderBasedViolence';
import Surgery from '../../components/report_sections/Surgery';
import Anesthesia from '../../components/report_sections/Anesthesia';
import Rehabilitation from '../../components/report_sections/Rehabilitation';
import Obstetrical from '../../components/report_sections/Obstetrical';
import Postnatal from '../../components/report_sections/Postnatal';
import Kangroo from '../../components/report_sections/Kangaroo';
import Neonatal from '../../components/report_sections/Neonatal';
import Nutrition from '../../components/report_sections/Nutrition';
import Laboratory from '../../components/report_sections/Laboratory';
import TracerDrug from '../../components/report_sections/TracerDrug';
import MedicalImagery from '../../components/report_sections/MedicalImagery';
import Ambulance from '../../components/report_sections/Ambulance';
import Staffing from '../../components/report_sections/Staffing';
import Buttons from '../../components/report_sections/Buttons';



// TODO: replace this with the correct querry
const reportQuery = {
    me: {
      resource: "me",
      params: {
        fields: ['username, surname, name, organisationUnits[id,name]'],
      }
    },
    dataValueSets: {
        resource: 'dataValueSets',
        params: {
          dataSet: 'XesKc0UNEKj',
          period: '202304',
          orgUnit: 'cTBc6Cl0jM8',
        },
    },
  }


  
const Form = ({visible }) =>{

    // A dynamic alert to communicate success or failure 
  const { show } = useAlert(
    ({ message }) => message,
    ({ status }) => {
        if (status === 'success') return { success: true }
        else if (status === 'error') return { critical: true }
        else return {}
    } )

  // run the querry
  const { loading, error, data, refetch } = useDataQuery(reportQuery, {
      variables: { page: 0, startDate: '2023-02-01', endDate: '2023-06-01', orgUnitID: 'OujzhM1lgN5', pageSize: 5, ouMode: 'SELECTED' },
  })

  if (error) { return <span>ERROR: {error.message}</span> }


  //TODO: center this loader and make it a % filling line if possible.
  if (loading) {
      return (
          <>
              <CircularLoader />
          </>
      )
  }

  if (data) {  
      const message = 'SUCCESS: Successfully retrieved datasets values'
      // TODO: do your logic here
      show({ message, status: 'success' })
      console.log("*** valuesets: ", data.dataValueSets.dataValues);
  }

    return (
        <div>
            <div className='monthly_report_form' id="monthly_report_form">

                <div className='header_section'>
                    <header className='section'>
                        <img src={Logo}></img>
                        <p>
                        <h1>District Hospital Monthly HMIS Report</h1>
                        <h2><i>Rapport Mensuel SIS de l’Hôpital de district</i></h2>
                        </p>
                    </header>
                </div>
                
{/*                <div className='identification_section'>
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
                            <><tr>
                                <td style={{ maxWidth: "100px" }}>1.Facility Name / <i> Nom de la formation sanitaire</i></td>
                                <td class="special1">{data.me.name}</td>
                                <td>3.Year/<i>Annee</i></td>
                                <td class="special5"></td>
                            </tr><tr>
                                    <td style={{ maxWidth: "140px" }}>2. Catchment Area Population / <i>Population totale de la zone de rayonnement</i></td>
                                    <td class="special1"></td>
                                    <td>4.Month/<i>Mois</i></td>
                                    <td class="special5"></td>
                                </tr></>
                        </tbody>
                    </table>
                    <table align="center" className='reportApprovals'>
                        <thead>
                            <tr>
                                <th colSpan={4}>
                                    B) Report Approvals and Processing/ <i>Processus de validation et du transmission de rapport </i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                <tr>

                                    <td class="special11">1.Name of Director General / <i> Nom du Directeur General</i></td>
                                    <td class="special1"></td>
                                    <td class="special11">3.Date of Data Entry in HMIS/<i>Date d'encodage dans HMIS</i> </td>
                                    <td class="special1"></td>
                                </tr>
                                <tr>
                                    <td class="special11">2. Signature</td>
                                    <td class="special1"></td>
                                    <td class="special11">4.Signature/<i>Signature</i></td>
                                    <td class="special1"></td>
                                </tr>
                            </>
                        </tbody>
                    </table>
                </div>*/}

                <OutPatient data={data} />
{/*                <Malaria data={data} />
                <MentalHealth data={data} />
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

            </div>
            <Buttons />
        </div>

    )}

    
 export default Form;