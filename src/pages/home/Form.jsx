import React from 'react';
import './form.scss'
import Logo  from '../../assets/images/moh_logo.jpeg';
import { useDataQuery, useAlert } from "@dhis2/app-runtime";
import { CircularLoader } from "@dhis2/ui";
import { Close } from '@mui/icons-material';
import OutPatient from '../../components/report_sections/OutPatient';
import Malaria from '../../components/report_sections/Malaria';




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
          period: '202305',
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
        <div className='monthly_report_form'>

            <div className='header_section'>
                <header className='section'>
                    <img src={Logo}></img>
                    <p>
                    <h1>District Hospital Monthly HMIS Report</h1>
                    <h2><i>Rapport Mensuel SIS de l’Hôpital de district</i></h2>
                    </p>
                </header>
            </div>
            
            <div className='identification_section'>
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
            </div>

            <OutPatient  data={data} />
            <Malaria data={data} />

           <div className='mental_health_section'>
                <table className='mentalHealth'>
                    <thead>
                        <tr>
                            <th colSpan="4" class="specialth">IV. Mental Health/<i class="isp"> Santé mentale</i></th>
                        </tr>
                        <tr>
                            <th class="special">A</th>
                            <th>Summary</th>
                            <th class="special2">CD-10</th>
                            <th class="special2">Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Mental patients under follow up</td>
                            <td class="special2"></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NAvYD9KUmqs'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Mental patients hospitalized/ <i>Patients hospitalisés pour des troubles mentaux</i></td>
                            <td class="special2"></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JqycbuAW6tO'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Mental patients referred to upper level / <i>Patients référés à un niveau medical plus élevé</i></td>
                            <td class="special2"></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HaBVW2PnvQQ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
                <table className='newCasesOldCases'>
                    <thead>
                        <tr>
                            <th colSpan="3"></th>
                            <th colSpan="4" style={{ width: "160px", alignItems: 'center' }}> New cases</th>
                            <th colSpan="4" style={{ width: "160px", alignItems: "center" }}> Old Cases Seen</th>
                        </tr>
                        <tr>
                            <th class="special"></th>
                            <th></th>
                            <th class="special2"></th>
                            <th colSpan="2" class="special1">0-19Yrs</th>
                            <th colSpan="2" class="special1">&gt;=20 Yrs</th>
                            <th colSpan="2" class="special1">0-19Yrs</th>
                            <th colSpan="2" class="special1">&gt;=20 Yrs</th>
                        </tr>
                        <tr>
                            <th class="special">B</th>
                            <th>Diagnosis/ <i>Diagnostique</i></th>
                            <th class="special2">ICD-11</th>
                            <th class="special5">M</th>
                            <th class="special5">F</th>
                            <th class="special5">M</th>
                            <th class="special5">F</th>
                            <th class="special5">M</th>
                            <th class="special5">F</th>
                            <th class="special5">M</th>
                            <th class="special5">F</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Anxiety disorders/<i>Les troubles anxieux</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bZkjRNkNITu'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bZkjRNkNITu'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bZkjRNkNITu'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bZkjRNkNITu'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aebjZSZx7dN'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aebjZSZx7dN'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aebjZSZx7dN'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aebjZSZx7dN'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Post-traumatic stress disorder/ <i>Syndrome de Stress Post-Traumatique</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fN0Pc3OX02R'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fN0Pc3OX02R'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fN0Pc3OX02R'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fN0Pc3OX02R'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PXs02WH7ULD'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PXs02WH7ULD'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PXs02WH7ULD'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PXs02WH7ULD'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Schizophrenia and other psychoses / <i>Schizophrénie et autres Psychoses</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='g3T5YqFHilH'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='g3T5YqFHilH'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='g3T5YqFHilH'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='g3T5YqFHilH'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TH6BAntXJ8a'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TH6BAntXJ8a'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TH6BAntXJ8a'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TH6BAntXJ8a'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>Somatoform disorders/<i>Troubles somatiques</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PHmPKPRyzPF'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PHmPKPRyzPF'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PHmPKPRyzPF'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PHmPKPRyzPF'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bwUrM2J3XyD'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bwUrM2J3XyD'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bwUrM2J3XyD'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bwUrM2J3XyD'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Mental disorders due to alcohol and substance abuse/ <i>Troubles mentaux dus à la toxicomanie</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='axLMHIM0fBT'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='axLMHIM0fBT'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='axLMHIM0fBT'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='axLMHIM0fBT'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dZdO3GRuaeX'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dZdO3GRuaeX'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dZdO3GRuaeX'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dZdO3GRuaeX'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Depression/ <i>Dépression</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VfFHOgOnWkv'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VfFHOgOnWkv'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VfFHOgOnWkv'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VfFHOgOnWkv'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='diX0yRW3dtk'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='diX0yRW3dtk'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='diX0yRW3dtk'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='diX0yRW3dtk'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">7</td>
                            <td>Suicide attempt / <i>Suicide tentative</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xJKGUnPT78f'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xJKGUnPT78f'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xJKGUnPT78f'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xJKGUnPT78f'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='meCAKq86jnO'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='meCAKq86jnO'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='meCAKq86jnO'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='meCAKq86jnO'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">8</td>
                            <td>Bipolar disorders/<i>Troubles bipolaires</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ljudCVNYhG9'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ljudCVNYhG9'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ljudCVNYhG9'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ljudCVNYhG9'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TBcGJgIY6HD'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TBcGJgIY6HD'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TBcGJgIY6HD'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TBcGJgIY6HD'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">9</td>
                            <td>Neuro-development disorders/ <i>Troubles neurodéveloppementaux</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IqdY85Jq0e3'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IqdY85Jq0e3'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IqdY85Jq0e3'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IqdY85Jq0e3'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ufQeIJBYa5q'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ufQeIJBYa5q'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ufQeIJBYa5q'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ufQeIJBYa5q'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">10</td>
                            <td>Epilepsy/<i>Epilepsie</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MracaYsy3nI'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MracaYsy3nI'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MracaYsy3nI'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MracaYsy3nI'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XMaYXY2mvWf'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XMaYXY2mvWf'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XMaYXY2mvWf'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XMaYXY2mvWf'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">11</td>
                            <td>Other mental problems/<i>Autre problèmes mentaux</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qp4G7wGaDYn'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qp4G7wGaDYn'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qp4G7wGaDYn'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qp4G7wGaDYn'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YSDDoJlC7ux'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YSDDoJlC7ux'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YSDDoJlC7ux'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YSDDoJlC7ux'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">12</td>
                            <td>Other neurological disorders</td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qB8MVLLOmVa'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qB8MVLLOmVa'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qB8MVLLOmVa'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qB8MVLLOmVa'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rgIWRG99lSC'&&dataValue.categoryOptionCombo=='UAobY6ks0Cw'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rgIWRG99lSC'&&dataValue.categoryOptionCombo=='N49aGqZKg53'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rgIWRG99lSC'&&dataValue.categoryOptionCombo=='q13tPjAiAXs'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rgIWRG99lSC'&&dataValue.categoryOptionCombo=='wcqnmvSFslD'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='chronic_section'>
                <table className='chronic'>
                    <thead>
                        <tr>
                            <th colSpan="11" class="specialth">V. Chronic</th>
                        </tr>
                        <tr>
                            <th rowSpan="3" class="special"></th>
                            <th rowSpan="3">Medical Condition</th>
                            <th class="special2"></th>
                            <th colSpan="4" style={{ width: "180px", alignItems: "center" }}>New Cases</th>
                            <th colSpan="4" style={{ width: "180px", alignItems: "center" }}>Old Cases</th>
                        </tr>
                        <tr>
                            <th class="special2">AGE</th>
                            <th colSpan="2" class="special6"> 0-39 Yrs</th>
                            <th colSpan="2" class="special6">&gt;=40 Yrs</th>
                            <th colSpan="2" class="special6"> 0-39 Yrs</th>
                            <th colSpan="2" class="special6">&gt;=40 Yrs</th>
                        </tr>
                        <tr>
                            <th class="special2">ICD-11</th>
                            <th class="special7">M</th>
                            <th class="special7">F</th>
                            <th class="special7">M</th>
                            <th class="special7">F</th>
                            <th class="special7">M</th>
                            <th class="special7">F</th>
                            <th class="special7">M</th>
                            <th class="special7">F</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Suspected Cancer</td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='eIfu3HpCjgm'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='eIfu3HpCjgm'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='eIfu3HpCjgm'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='eIfu3HpCjgm'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ae05rZ8dWYe'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ae05rZ8dWYe'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ae05rZ8dWYe'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ae05rZ8dWYe'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Confirmed Cancer</td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LfgHFrnDyfk'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LfgHFrnDyfk'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LfgHFrnDyfk'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LfgHFrnDyfk'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mywrJ4cPTpN'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mywrJ4cPTpN'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mywrJ4cPTpN'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mywrJ4cPTpN'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Asthma/<i>Asthme</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='p3tsgcuNGfT'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='p3tsgcuNGfT'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='p3tsgcuNGfT'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='p3tsgcuNGfT'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LB8nXnFiPaj'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LB8nXnFiPaj'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LB8nXnFiPaj'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LB8nXnFiPaj'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>Other Chronic respiratory diseases/<i>Autre maladies respiratoires chroniques</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kjGYehXWXSS'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kjGYehXWXSS'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kjGYehXWXSS'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kjGYehXWXSS'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lHptVrSVJWe'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lHptVrSVJWe'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lHptVrSVJWe'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lHptVrSVJWe'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Diabetes - Type 1</td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NONavmAspIj'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NONavmAspIj'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NONavmAspIj'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NONavmAspIj'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mVrEOfVIovD'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mVrEOfVIovD'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mVrEOfVIovD'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mVrEOfVIovD'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Diabetes - Type 2</td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KY3y607zc14'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KY3y607zc14'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KY3y607zc14'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KY3y607zc14'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XXdGmcZvF8m'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XXdGmcZvF8m'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XXdGmcZvF8m'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XXdGmcZvF8m'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">7</td>
                            <td>Diabetes gestational/<i>Diabetes sur grossesse</i></td>
                            <td class="special2"></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='R8RIc5kGVbk'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5"></td>
                            <td class="special5"></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JufEUndwWxg'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">8</td>
                            <td>Hypertension/<i>Hypertension</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kYzwGhwpNkW'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kYzwGhwpNkW'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kYzwGhwpNkW'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kYzwGhwpNkW'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='u52ghx3zIND'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='u52ghx3zIND'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='u52ghx3zIND'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='u52ghx3zIND'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">9</td>
                            <td>Cardiomyopathies</td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EAGQcagAw4y'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EAGQcagAw4y'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EAGQcagAw4y'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EAGQcagAw4y'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FWASTzBQdQp'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FWASTzBQdQp'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FWASTzBQdQp'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FWASTzBQdQp'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">10</td>
                            <td>Coronary artery disease</td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VDzk7YL0BwB'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VDzk7YL0BwB'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VDzk7YL0BwB'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VDzk7YL0BwB'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wDGMMnmrv0s'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wDGMMnmrv0s'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wDGMMnmrv0s'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wDGMMnmrv0s'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">11</td>
                            <td>Pericardial disease</td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qklxUsJuX6O'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qklxUsJuX6O'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qklxUsJuX6O'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qklxUsJuX6O'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Iu0OJc6oIdw'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Iu0OJc6oIdw'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Iu0OJc6oIdw'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Iu0OJc6oIdw'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">12</td>
                            <td>Post Cardiac Surgical patients</td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='e7apGdYxeqT'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='e7apGdYxeqT'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='e7apGdYxeqT'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='e7apGdYxeqT'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Xz24CjsTOp3'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Xz24CjsTOp3'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Xz24CjsTOp3'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Xz24CjsTOp3'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">13</td>
                            <td>Heart failure</td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PlBLZ1naaza'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PlBLZ1naaza'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PlBLZ1naaza'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PlBLZ1naaza'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CoKEpgJqypj'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CoKEpgJqypj'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CoKEpgJqypj'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CoKEpgJqypj'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">14</td>
                            <td>Stroke/TIA/<i>Accident vasculo cerebrale</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='l9xnjIK1az0'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='l9xnjIK1az0'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='l9xnjIK1az0'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='l9xnjIK1az0'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vskurP0QN0S'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vskurP0QN0S'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vskurP0QN0S'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vskurP0QN0S'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">15</td>
                            <td>Rheumatic heart disease/<i>Maladie cardiaque rhumatismale</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='e5u0kZVY08f'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='e5u0kZVY08f'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='e5u0kZVY08f'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='e5u0kZVY08f'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='l7ohC6oqdDs'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='l7ohC6oqdDs'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='l7ohC6oqdDs'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='l7ohC6oqdDs'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">16</td>
                            <td>Congenital heart disease/<i>Maladie cardiaque congénitale</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kYDeDOwJwxX'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kYDeDOwJwxX'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kYDeDOwJwxX'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kYDeDOwJwxX'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CXFfuTokwSZ'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CXFfuTokwSZ'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CXFfuTokwSZ'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CXFfuTokwSZ'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">17</td>
                            <td>Other Cardiovascular diseases/<i>Autre maladie cardio vasculaire</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CYMjZ5b62zf'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CYMjZ5b62zf'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CYMjZ5b62zf'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CYMjZ5b62zf'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VTiEXiC92YX'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VTiEXiC92YX'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VTiEXiC92YX'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VTiEXiC92YX'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">18</td>
                            <td>Deep veinus thrombosis/ <i>Thrombose veineuse profonde</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WEobTUMcv0v'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WEobTUMcv0v'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WEobTUMcv0v'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WEobTUMcv0v'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B2cOy4wBIAn'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B2cOy4wBIAn'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B2cOy4wBIAn'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B2cOy4wBIAn'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">19</td>
                            <td> Renal failure/<i>Insufisance rénale</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qNqAwFufshp'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qNqAwFufshp'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qNqAwFufshp'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qNqAwFufshp'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pKwVr7Kkb80'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pKwVr7Kkb80'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pKwVr7Kkb80'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pKwVr7Kkb80'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">20</td>
                            <td>Other chronic kidney diseases/<i>Autre maladies rénaale chronique</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='w1vvzcr4994'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='w1vvzcr4994'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='w1vvzcr4994'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='w1vvzcr4994'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O07bMKZdDYi'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O07bMKZdDYi'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O07bMKZdDYi'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O07bMKZdDYi'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">21</td>
                            <td>Other endocrine and metabolic diseases/<i>Autre maladies hormonales et métabolique</i></td>
                            <td class="special2"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DXuKUSqlEg3'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DXuKUSqlEg3'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DXuKUSqlEg3'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DXuKUSqlEg3'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='UA0ooBobOSb'&&dataValue.categoryOptionCombo=='oUvq89X0Dpr'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='UA0ooBobOSb'&&dataValue.categoryOptionCombo=='zYk6UXI5pTI'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='UA0ooBobOSb'&&dataValue.categoryOptionCombo=='o1mELPbbbPW'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='UA0ooBobOSb'&&dataValue.categoryOptionCombo=='VDmDtwTkgll'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='palliative_care_section'>
                <table className='palliativeCare'>
                    <thead>
                        <tr>
                            <th colSpan="4" class="specialth">VI. Palliative care/<i  class="isp">Soins palliatifs</i></th>
                        </tr>
                        <tr>
                            <th class="special"></th>
                            <th></th>
                            <th style={{ width: "80px" }}>Under 39</th>
                            <th>40 and older</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Total Patients in palliative care (New and Old cases)/<i>Total des clients en soins paliative</i></td>
                            <td style={{ width: "80px" }}>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yVQO7Xvv0jI'&&dataValue.categoryOptionCombo=='LWmTX6VeyZb'?dataValue.value:''}</span>))}</td>
                            <td style={{ width: "80px" }}>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yVQO7Xvv0jI'&&dataValue.categoryOptionCombo=='CnItfA04q5f'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Severe pain patients that receive morphine/ <i>Clients ayant de douleur sévère qui reçoivent de la morphine</i></td>
                            <td style={{ width: "80px" }}>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EbtwFNcXWVN'&&dataValue.categoryOptionCombo=='LWmTX6VeyZb'?dataValue.value:''}</span>))}</td>
                            <td style={{ width: "80px" }}>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EbtwFNcXWVN'&&dataValue.categoryOptionCombo=='CnItfA04q5f'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
           <div className='cancer_screening_section'>
                <table className='cancerScreening'>
                    <thead>
                        <th colSpan="3" class="specialth">VII. Cancer screening</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special5">1</td>
                            <td>Women screened for cervical cancer/<i>Femmes dépistées pour le cancer du col</i></td>
                            <td style={{ width: "100px" }}>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DXh9JsIYGob'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special5">2</td>
                            <td>Women screened for breast cancer/ <i>Femmes dépistées pour le cancer de sein</i></td>
                            <td style={{ width: "100px" }}>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gcPa7C6m5FI'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special5">3</td>
                            <td>Biopsies collected for all types of cancer/<i>Toute forme de Biopsies prélevée</i></td>
                            <td style={{ width: "100px" }}>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='biBmIro5aKL'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
            
            <div className='hospitalization_section'>
                <table className='hospitalizations'>
                    <thead>
                        <tr>
                            <th colSpan="9" class="specialth">VIII. Hospitalizations / Hospitalisations</th>
                        </tr>
                        <tr>
                            <th colSpan="3">A) Summary statistics by service/ <i>Résumé des statistiques par service</i> </th>
                            <th class="special1">Internal Medicine</th>
                            <th class="special1">Pediatrics</th>
                            <th class="special1">Surgery</th>
                            <th class="special1">Gyn. Obst</th>
                            <th class="special1">Intensive care</th>
                            <th class="special1">Neonatology</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "20px" }}>1</td>
                            <td colSpan="2">Number of beds (a)/ <i>Nombre de lits(a)</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LkHMszPYzQs'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LkHMszPYzQs'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LkHMszPYzQs'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LkHMszPYzQs'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LkHMszPYzQs'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LkHMszPYzQs'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}>2</td>
                            <td colSpan="2">Present at the beginning of the month/ <i>Présent au début du mois</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jo9G2Nblp7H'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jo9G2Nblp7H'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jo9G2Nblp7H'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jo9G2Nblp7H'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jo9G2Nblp7H'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jo9G2Nblp7H'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}>3</td>
                            <td colSpan="2">Admissions during the month of which:/ <i>Entrants du mois dont :</i></td>
                            <td class="special1"></td>
                            <td class="special1"></td>
                            <td class="special1"></td>
                            <td class="special1"></td>
                            <td class="special1"></td>
                            <td class="special1"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}></td>
                            <td class="special">3.1</td>
                            <td>Referred from the Health Centre/ <i>Référés des Centres de sante</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HddFRurHgkk'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HddFRurHgkk'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HddFRurHgkk'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HddFRurHgkk'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HddFRurHgkk'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HddFRurHgkk'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}></td>
                            <td class="special">3.2</td>
                            <td> Non-referred patients/<i> Non Référés</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MAsdrUPyS4M'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MAsdrUPyS4M'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MAsdrUPyS4M'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MAsdrUPyS4M'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MAsdrUPyS4M'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MAsdrUPyS4M'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}>4</td>
                            <td colSpan="2">Discharges during the month (b) of which/<i> Sortant du mois (b)dont :</i></td>
                            <td class="special1"></td>
                            <td class="special1"></td>
                            <td class="special1"></td>
                            <td class="special1"></td>
                            <td class="special1"></td>
                            <td class="special1"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}></td>
                            <td class="special">4.1</td>
                            <td>Authorized/Cured/ Sortants autorisés /<i>Guéris</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AvmzcO8Nqc2'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AvmzcO8Nqc2'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AvmzcO8Nqc2'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AvmzcO8Nqc2'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AvmzcO8Nqc2'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AvmzcO8Nqc2'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}></td>
                            <td class="special">4.2</td>
                            <td>Unauthorized discharge/<i>Sortie non autorisé</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hVsGPgnXqmJ'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hVsGPgnXqmJ'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hVsGPgnXqmJ'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hVsGPgnXqmJ'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hVsGPgnXqmJ'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hVsGPgnXqmJ'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}></td>
                            <td class="special">4.3</td>
                            <td>Deaths/<i> Décès</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='j3Kli4Q58xb'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='j3Kli4Q58xb'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='j3Kli4Q58xb'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='j3Kli4Q58xb'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='j3Kli4Q58xb'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='j3Kli4Q58xb'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}></td>
                            <td class="special">4.4</td>
                            <td> Referred/ <i>Référés</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='coS3nfO52h8'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='coS3nfO52h8'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='coS3nfO52h8'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='coS3nfO52h8'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='coS3nfO52h8'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='coS3nfO52h8'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}></td>
                            <td class="special">4.5</td>
                            <td>Counter-referred/ <i>Contre Référés</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZGuaZccsryg'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZGuaZccsryg'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZGuaZccsryg'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZGuaZccsryg'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZGuaZccsryg'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZGuaZccsryg'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}>5</td>
                            <td colSpan="2">Present at the end of the month/ <i>Présenta la fin du mois</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OGIDhsTU03X'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OGIDhsTU03X'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OGIDhsTU03X'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OGIDhsTU03X'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OGIDhsTU03X'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OGIDhsTU03X'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}>6</td>
                            <td colSpan="2">otal hospitalization days for discharged patients (c)/ <i>Somme total séjour des sortants (c)</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HACvCGiiZF4'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HACvCGiiZF4'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HACvCGiiZF4'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HACvCGiiZF4'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HACvCGiiZF4'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HACvCGiiZF4'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "20px" }}>7</td>
                            <td colSpan="2">Actual hospitalization days (This month only) (d)/<i> Nb journées. hosp. Effectives (d)</i></td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sqXdzAJFLmC'&&dataValue.categoryOptionCombo=='YIdZvrzV6Eo'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sqXdzAJFLmC'&&dataValue.categoryOptionCombo=='qwFlY6Npcm0'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sqXdzAJFLmC'&&dataValue.categoryOptionCombo=='AxdPeXeAC6r'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sqXdzAJFLmC'&&dataValue.categoryOptionCombo=='rS83N7X8kQj'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sqXdzAJFLmC'&&dataValue.categoryOptionCombo=='jqn3wZvyZh2'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sqXdzAJFLmC'&&dataValue.categoryOptionCombo=='MBSULZCOAjK'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="emergenceServices">
                    <thead>
                        <th> B) Emergence services/Service des urgences </th>
                        <th class="special6">&lt;5 Years </th>
                        <th class="special6">&gt;=5 Yrs</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. Emergency total case received during the month/ <i>Entrants du mois</i></td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ixs6bqzls6R'&&dataValue.categoryOptionCombo=='ogpshxtAJcX'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ixs6bqzls6R'&&dataValue.categoryOptionCombo=='e6Ucbjb8jMX'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>2. Road Traffic injuries (including cycling)/ <i>Blessures causées par la circulation routière</i></td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WeTILmC9GCL'&&dataValue.categoryOptionCombo=='ogpshxtAJcX'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WeTILmC9GCL'&&dataValue.categoryOptionCombo=='e6Ucbjb8jMX'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>3. Emergency total Referred to higher level/ <i>Référés</i></td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vYlfJKBeXn5'&&dataValue.categoryOptionCombo=='ogpshxtAJcX'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vYlfJKBeXn5'&&dataValue.categoryOptionCombo=='e6Ucbjb8jMX'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>4. Fire/burns (thermo, electrical, chemical)/<i>Brulures</i></td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VwlDFGG9iCN'&&dataValue.categoryOptionCombo=='ogpshxtAJcX'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VwlDFGG9iCN'&&dataValue.categoryOptionCombo=='e6Ucbjb8jMX'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>Other injuries/<i>Autre traumatismes</i></td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LSKnTBG6w9Y'&&dataValue.categoryOptionCombo=='ogpshxtAJcX'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LSKnTBG6w9Y'&&dataValue.categoryOptionCombo=='e6Ucbjb8jMX'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>6. Death in Emergency/<i>Décès dans le service des urgences</i></td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='I6ymJFOBTOR'&&dataValue.categoryOptionCombo=='ogpshxtAJcX'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='I6ymJFOBTOR'&&dataValue.categoryOptionCombo=='e6Ucbjb8jMX'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
                <table className='summaryByAge'>
                    <thead>
                        <th colSpan="2">C) Summary by age/<i> Synthèse par age</i></th>
                        <th class="special6">Under 1 years(include neonates)</th>
                        <th class="special6">1 to 4 years </th>
                        <th class="special6">5 years and above</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Hospitalized/ (Admissions during the month)/<i>Hospitalisé</i></td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xTgHclFPshj'&&dataValue.categoryOptionCombo=='zzCpJ7J36sP'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xTgHclFPshj'&&dataValue.categoryOptionCombo=='SWzGf18rVd5'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xTgHclFPshj'&&dataValue.categoryOptionCombo=='Wmq468k5CW1'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Deaths/ <i>Décès</i></td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gmUTpCfpwuH'&&dataValue.categoryOptionCombo=='zzCpJ7J36sP'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gmUTpCfpwuH'&&dataValue.categoryOptionCombo=='SWzGf18rVd5'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gmUTpCfpwuH'&&dataValue.categoryOptionCombo=='Wmq468k5CW1'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
                <table className='paymentForHospitalization'>
                    <thead>
                        <th colSpan="2">D) Payment for Hospitalization/ <i>Paiement en hospitalisation</i></th>
                        <td class="special6">Total</td>
                        <th>E) Special causes of admissions and deaths/<i>Causes Spéciales d’hospitalisation et de décès</i></th>
                        <th class="special6">Admissions/ <i>Hospitalisés</i></th>
                        <th class="special6">Deaths/<i>Décès</i></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Insured Discharges (Mutuelle ,etc)/ <i>Sortants avec assurance (Mutuelle, etc)</i></td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='as1RkZW5hhd'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td>1. Road traffic accidents/ <i>Accidents de circulation routière</i></td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='D2OItZs6dD6'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HtCDGkLcyfv'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
                <table className='causesOfHospitalization'>
                    <thead>
                        <tr>
                            <th rowSpan="3" colSpan="2">F) Causes of Hospitalization and death at discharge/ <i>Causes principales d’hospitalisation à la sortie</i></th>
                            <th rowSpan="3" class="special6">CODE ICD 11</th>
                            <th style={{ width: "160px" }} colSpan="4">Hospitalization/ <i>Hospitalisés</i> </th>
                            <th style={{ width: "160px" }} colSpan="4">Deaths/ <i>Décès</i></th>
                        </tr>
                        <tr>
                            <th colSpan="2" class="special1">&lt;5 yrs</th>
                            <th colSpan="2" class="special1">&gt;=5 yrs</th>
                            <th colSpan="2" class="special1">&lt;5 yrs</th>
                            <th colSpan="2" class="special1">&gt;=5 yrs</th>
                        </tr>
                        <tr>
                            <th class="special5">M</th>
                            <th class="special5">F</th>
                            <th class="special5">M</th>
                            <th class="special5">F</th>
                            <th class="special5">M</th>
                            <th class="special5">F</th>
                            <th class="special5">F</th>
                            <th class="special5">F</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Pneumonia/<i>Pneumonie</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dZlLftR3JqJ'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dZlLftR3JqJ'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dZlLftR3JqJ'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dZlLftR3JqJ'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vkbm04dutmA'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vkbm04dutmA'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vkbm04dutmA'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vkbm04dutmA'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Other respiratory diseases/<i>Autre maladies respiratoire</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jLdCiMY043h'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jLdCiMY043h'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jLdCiMY043h'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jLdCiMY043h'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hSasfQqyB5t'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hSasfQqyB5t'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hSasfQqyB5t'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hSasfQqyB5t'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Acute Malnutrition/<i>Malnutrition Aigue</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rQr6zw8HJEi'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rQr6zw8HJEi'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rQr6zw8HJEi'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rQr6zw8HJEi'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Q48EliotTcN'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Q48EliotTcN'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Q48EliotTcN'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Q48EliotTcN'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>HIV/AIDS related opportunistic Infection/<i>Infection opportuniste due VIH</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FAjquoTjfVx'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FAjquoTjfVx'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FAjquoTjfVx'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FAjquoTjfVx'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hpE75slEP6M'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hpE75slEP6M'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hpE75slEP6M'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hpE75slEP6M'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Sexual transmitted diseases (STI)/<i>Maladies sexuellement transmissible</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NkCOG9kW8Kd'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NkCOG9kW8Kd'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NkCOG9kW8Kd'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NkCOG9kW8Kd'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zDn4tIVg3Cf'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zDn4tIVg3Cf'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zDn4tIVg3Cf'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zDn4tIVg3Cf'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Intestinal parasites</td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WI8TlHV7HI2'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WI8TlHV7HI2'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WI8TlHV7HI2'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WI8TlHV7HI2'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IawXcuzgSy3'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IawXcuzgSy3'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IawXcuzgSy3'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IawXcuzgSy3'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">7</td>
                            <td>Diarrhea diseases/<i>Maladies Diarrhéiques</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bkKIZEkuMCA'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bkKIZEkuMCA'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bkKIZEkuMCA'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bkKIZEkuMCA'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='I8Bl6g0q1vo'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='I8Bl6g0q1vo'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='I8Bl6g0q1vo'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='I8Bl6g0q1vo'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">8</td>
                            <td>Skin diseases/<i>Maladies de la peau</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ISSpZfgqZv6'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ISSpZfgqZv6'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ISSpZfgqZv6'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ISSpZfgqZv6'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IwU4vnwKtJn'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IwU4vnwKtJn'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IwU4vnwKtJn'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IwU4vnwKtJn'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">9</td>
                            <td>Burns/ <i>Brulures</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WOQmYjzf2wc'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WOQmYjzf2wc'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WOQmYjzf2wc'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WOQmYjzf2wc'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zdmDKEZiSuQ'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zdmDKEZiSuQ'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zdmDKEZiSuQ'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zdmDKEZiSuQ'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">10</td>
                            <td>Hepatitis/ <i>Hépatite</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QdPQgPFuL0Z'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QdPQgPFuL0Z'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QdPQgPFuL0Z'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QdPQgPFuL0Z'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XLFQDnUvGXa'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XLFQDnUvGXa'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XLFQDnUvGXa'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XLFQDnUvGXa'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">11</td>
                            <td>Cirrhosis of the liver/ <i>Cirrhose du foie</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lmdifyIwAWE'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lmdifyIwAWE'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lmdifyIwAWE'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lmdifyIwAWE'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Jty0YhB15Sy'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Jty0YhB15Sy'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Jty0YhB15Sy'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Jty0YhB15Sy'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">12</td>
                            <td>Diseases of the stomach or the duodenum /<i>Gastrites et maladies duodénale</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='UIVCk2cSwIm'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='UIVCk2cSwIm'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='UIVCk2cSwIm'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='UIVCk2cSwIm'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='SIrZW5JfFyw'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='SIrZW5JfFyw'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='SIrZW5JfFyw'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='SIrZW5JfFyw'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">13</td>
                            <td>Appendicitis/ <i>Appendicites</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WEY6kDs83SR'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WEY6kDs83SR'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WEY6kDs83SR'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WEY6kDs83SR'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='biKiT5AIrV2'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='biKiT5AIrV2'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='biKiT5AIrV2'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='biKiT5AIrV2'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">14</td>
                            <td>Diseases of intestine/<i>Maladies intestinales</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WqopgvmLzAH'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WqopgvmLzAH'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WqopgvmLzAH'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WqopgvmLzAH'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YUcffpuatai'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YUcffpuatai'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YUcffpuatai'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YUcffpuatai'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">15</td>
                            <td>Diseases of the genitourinary system/<i>Maladies du system uro- génitale</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='M7Z9aw9g8G0'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='M7Z9aw9g8G0'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='M7Z9aw9g8G0'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='M7Z9aw9g8G0'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ViNUTTLTYW8'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ViNUTTLTYW8'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ViNUTTLTYW8'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ViNUTTLTYW8'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">16</td>
                            <td>Bone and Joint Diseases/<i>Maladies des os et des articulations, autres que les traumatismes</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='falsJqwQPeS'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='falsJqwQPeS'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='falsJqwQPeS'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='falsJqwQPeS'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KzP98OlTFeQ'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KzP98OlTFeQ'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KzP98OlTFeQ'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KzP98OlTFeQ'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">17</td>
                            <td>Bone and Joint injuries/ <i>Fracture osseuse et articulaire</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dVErNhADgu6'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dVErNhADgu6'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dVErNhADgu6'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dVErNhADgu6'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZOKCHfDLABt'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZOKCHfDLABt'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZOKCHfDLABt'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZOKCHfDLABt'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">18</td>
                            <td>Tetanus/<i>Tétanos</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HVxegZtEQhf'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HVxegZtEQhf'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HVxegZtEQhf'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HVxegZtEQhf'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O2ZTlO9mMg5'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O2ZTlO9mMg5'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O2ZTlO9mMg5'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O2ZTlO9mMg5'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">19</td>
                            <td>Cancer all/<i>Toutes les formes de cancer</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='t6jFCSpOmNp'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='t6jFCSpOmNp'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='t6jFCSpOmNp'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='t6jFCSpOmNp'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HzvqZDdJkeV'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HzvqZDdJkeV'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HzvqZDdJkeV'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HzvqZDdJkeV'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">20</td>
                            <td>Snake bites Envenomation</td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ASsxKqBRfZJ'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ASsxKqBRfZJ'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ASsxKqBRfZJ'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ASsxKqBRfZJ'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mnU2SaczSIo'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mnU2SaczSIo'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mnU2SaczSIo'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mnU2SaczSIo'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">21</td>
                            <td>Sepsis/<i>Septicémie</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wc7SZmwfkPX'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wc7SZmwfkPX'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wc7SZmwfkPX'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wc7SZmwfkPX'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tDJtR5rWkfk'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tDJtR5rWkfk'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tDJtR5rWkfk'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tDJtR5rWkfk'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">22</td>
                            <td>Tuberculosis/<i>Tuberculose</i></td>
                            <td class="special6"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MSZEcac8qQS'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MSZEcac8qQS'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MSZEcac8qQS'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MSZEcac8qQS'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GSq62EFsEkW'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GSq62EFsEkW'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GSq62EFsEkW'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GSq62EFsEkW'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">23</td>
                            <td>Gynecological problems/<i>Problèmes gynécologiques</i></td>
                            <td class="special6"></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VdnnrQ1pioo'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VdnnrQ1pioo'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KAyG3kSTN3P'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KAyG3kSTN3P'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='gender_based-violence'>
                <table className='Atable'>
                    <thead>
                        <th colSpan="14" style={{ backgroundColor: "black" }}>A</th>
                        <tr>
                            <th rowSpan="2" class="special">A</th>
                            <th rowSpan="2"></th>
                            <th class="special8" colSpan="2">&lt;=5 years</th>
                            <th class="specialcl" colSpan="2">6-8 years</th>
                            <th class="specialcl" colSpan="2">9-13 years</th>
                            <th class="specialcl" colSpan="2">14-17 years</th>
                            <th class="special8" colSpan="2">18-20 years</th>
                            <th class="special8" colSpan="2">&gt;=21 yrs</th>
                        </tr>
                        <tr>
                            <th class="special">M</th>
                            <th class="special">F</th>
                            <th class="special">M</th>
                            <th class="special">F</th>
                            <th class="special">M</th>
                            <th class="special">F</th>
                            <th class="special">M</th>
                            <th class="special">F</th>
                            <th class="special">M</th>
                            <th class="special">F</th>
                            <th class="special">M</th>
                            <th class="special">F</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>GBV victims with symptoms of sexual violence (new cases)</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>GBV victims with symptoms of physical violence (new cases)</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>GBV victims with symptoms of emotional violence (new cases)</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>GBV victims with symptoms of economic violence (new cases)</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>GBV victims referred for care to higher level health facility</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>GBV victims referred to this facility by RIB</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">7</td>
                            <td>GBV victims referred to this facility by community health workers</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">8</td>
                            <td>GBV victims HIV+ sero-conversion 3 months after exposure</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">9</td>
                            <td>GBV victims with irreversible disabilities due to GBV</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">10</td>
                            <td>GBV victim deaths</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>

                        <tr>
                            <td class="special">11</td>
                            <td>GBV victims pregnant 2 weeks after exposure</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">12</td>
                            <td>GBV victims received emergency contraception within 72 hours</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="special">13</td>
                            <td>GBV victims received post exposure HIV prophylaxis within 72 hours</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                        <tr>
                            <td class="specialcl1">14</td>
                            <td class="specialcl2">GBV victims with symptoms of sexual violence received from lower level health facility</td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                            <td class="special"></td>
                        </tr>
                    </tbody>
                </table>
                <table className='abortionInduced'>
                    <thead>
                        <tr>
                            <th class="special">B</th>
                            <th>Abortion Induced/legal</th>
                            <th style={{ width: "140px" }} colSpan="2">Under 18 years</th>
                            <th style={{ width: "140px" }} colSpan="2">18 years and above</th>
                        </tr>
                        <tr>
                            <th colSpan="2" style={{ alignItems: "center" }}><span class="red">a</span>. Legal abortions by exemptions</th>
                            <th style={{ width: "140px" }} colSpan="2"></th>
                            <th style={{ width: "140px" }} colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Induced (legal) abortion for therapeutic abortion (Above 22 weeks)</td>
                            <td style={{ width: "140px" }} colSpan="2"></td>
                            <td style={{ width: "140px" }} colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special"></td>
                            <td></td>
                            <th class="special2">Under 13 weeks Gest. Age</th>
                            <th class="special2">13-22 weeks Gest. Age</th>
                            <th class="special2">Under 13 weeks Gest. Age</th>
                            <th class="special2">13-22 weeks Gest. Age</th>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Induced (legal) abortion for rape</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Induced (legal) abortion for incest</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>Induced (legal) abortion for forced marriage</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Induced (legal) abortion Child (exclude cases for rape, incest, forced marriage and therapeutic abortion)</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Induced (legal) abortion for therapeutic abortion</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <th colSpan="2"><span class="red">b</span>. Methods used</th>
                            <th style={{ width: "140px" }} colSpan="2"></th>
                            <th style={{ width: "140px" }} colSpan="2"></th>
                        </tr>
                        <tr>
                            <td class="special">1</td>
                            <td>Induced (legal) abortion by Manual Vacuum Aspiration (MVA)</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Induced (legal) abortion by electrical aspiration</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Induced (legal) abortion by Curetage</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>Induced (legal) abortion by Mifepristone + Misoprostol</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Induced (legal) abortion by Misoprostol only</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Induced (legal) abortion by Combined methods (Medical and surgical methods)</td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                            <td class="special2"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='surgery_section'>
                <table className='sugery'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="5">IX. Surgery/ Chururgie</th>
                        </tr>
                        <tr>
                            <th class="special"></th>
                            <th class="special2">Services</th>
                            <th>Type of surgical intervention/ type d’intervention chirurgicale</th>
                            <th class="special2">Total interventions/interventions</th>
                            <th class="special6">Post-surgical Infection Total/ Total d’infections post chirurgicales</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="13" class="special">1</td>
                            <td rowSpan="13" class="special2">General surgery/ Chirurgie generale</td>
                            <td>1. Appendicectomy/ Appendicectomie</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dIw8h4SVohL'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td rowSpan="13" class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AZmeQrs4gS4'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>2. Hernioraphy/ Hernioraphie</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oCBL7bDERdG'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>3. Laparotomy/Laparotomie</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B3QKBZNz6Jb'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>4. Thyroidectomy/ Thyroidectomie</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WglWWz1aTLa'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>5. Adenomectomy/Adenomectomie</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='r1dl2ajMkb4'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>6. Breast surgery/Operation de sein</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='z6FMre13d2A'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>7. Hydrocele repair/Réparation de l’hydrocèle</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bpxmyaIDIF7'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>8. testis tortion repair/Réparation de la torsion testiculaire</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='uWmVCFo8pfS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>9. hemorrhoidectomy/Ablation des hemorroides</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DH6ELliW1se'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>10. Tissue debridement /Débridement tissulaire</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Na2jjNmqOGy'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>11. Skin grafting</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='a3iuEle8XBG'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>12. Hernia repair</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='w6hPOChdozz'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>13.Surgery due to ascariasis complications</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yuau61eXHDB'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td rowSpan="15" class="special">2</td>
                            <td rowSpan="15" class="special2">Gyneco - Obstetrical/ Gyneco-obstetricales</td>
                            <td>1.Caesarean Section/Césarienne</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bDfCZHYYSeS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td rowSpan="15" class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ds4TY7pbIMg'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>2. Dilatation and Curettage/ <i>Dilatation et curettage</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zOx9W8iQU0B'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>3. Gynecological Hysterectomy/ <i>Hysterectomie gynecologique</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gfSVNfwAc89'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>4. Obstetrical Hysterectomy/ <i>Hysterectomie obstetricale</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='T3apdtExjUQ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>5. Laparotomy for uterine rupture / <i>Laparatomie pour rupture uterine</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='L2yfwcLUzZS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>6. Laparotomy for ectopic pregnancy/ <i>Laparatomie pour grossesse extra-uterine</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='m029xv3md8H'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>7. Uterine repair / <i>Réparation de rupture utérine</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jRT5joD5qpe'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>8. Myomectomy/ <i>myomectomie</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XUIqbCN0oE7'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>9. Vesico vaginal Fistula Repair/<i>Fistules vesico-vaginale réparées</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WU9TlQlsDJ1'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>10. Recto vaginal Fistula Repair/<i>Fistules recto-vaginale réparées</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DuGJi7TAkmG'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>11. Ureteric vaginal Fistula Repair /<i>Fistules uretero-vaginale réparées</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Lz8MOwhtMly'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>12 Tubal Ligation/ <i>Ligature des trompes</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vjDITqliXXE'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>13 Vasectomy/ <i>Vasectomie</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='j3U6rf6l56l'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>14. Episiotomy/ <i>Episiotomie</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ws9v4HtKtCN'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>15.Other Gyneco -Obstetrical Surgery</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QkzJaXWOCCH'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td rowSpan="7" class="special">3</td>
                            <td rowSpan="7" class="special2">Orthopedic </td>
                            <td>1. Amputations</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qFn95z5iVCX'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td rowSpan="7" class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BrK9i4YaD9X'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>2. Open fracture repair by external fixation/<i>Fixation externe de fracture ouverte</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Rx7G39ebAAg'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>3.Clubfoot repair</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bxtDGz2cfem'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>4. Closed treatment of fracture</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Z4eAqoR8fPX'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>5.Joint dislocation treatment</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='n1oVQ4IcXZo'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>6.Drainage of osteomyelitis/ <i>septic arthritis</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fDz8nYXrSPE'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>7.Orthopedic surgery other/<i>Autre chirurgie orthopédique</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iuJKSgVCOY8'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td rowSpan="7" class="special">4</td>
                            <td rowSpan="7" class="special2">Ophthalmologic</td>
                            <td>1. Glaucoma/Glaucome</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Q7SfiAGBJlp'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td rowSpan="7" class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ylefLVXyLre'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>2. Trachoma/<i>Trachome</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='RfIpiloejfV'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>3. Cataract/<i>Cataracte</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IgL5TXXBA62'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>4. Eye Trauma/<i>Traumatisme oculaire</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YGldL9Z7vPy'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>5. Ophthalmological surgery other/<i>Autre chirurgie oculaire</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fdlBJCymLTF'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>6. Cornea transplantation</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WeC1DZt4mNb'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>7.Pterygium</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gdnOBCbokWh'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td rowSpan="2" class="special">5</td>
                            <td rowSpan="2" class="special2">Plastic surgery</td>
                            <td>1. Cleft palate,cleft lip/<i>Bec de lièvre</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vL1EV7ffzpe'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td rowSpan="2" class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='m8WuIQDC0Ru'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>2. Other plastic surgery/<i>Autre chirurgie plastique</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Z6PhXPcNjdr'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td rowSpan="9" class="special">6</td>
                            <td rowSpan="9" class="special2">Other Surgery procedures </td>
                            <td>1. Neonatal abdominal defect repair</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='p4Bx2mtu45z'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td rowSpan="9" class="special6">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Bti68KB9KcS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>2. Colostomy for imperforate anus</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VX3lmsx2T2v'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>3. Cystostomy</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tk0xnI5Y0pY'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>4. Chest tube insertion</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='T8aacE1lraz'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>5. Tracheostomy/ Cricothyroidotomy</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oXGEKK7olap'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>6. Circumcision</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IxajmDp6wrQ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>7. Suturing wound</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yHxjE3csUR3'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>8. Wound debridement</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ftYg7dhtnYj'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>9. Incision and drainage of abscess</td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kl5zALbzpmX'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td rowSpan="3" class="special">7</td>
                            <td colSpan="4">SURGICAL INTERVENTIONS TOTAL</td>
                        </tr>
                        <tr>
                            <td rowSpan="2" class="special2">Of which</td>
                            <td> 1. Major surgery/<i>Chirurgie majeure</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ymg1tiy6G5N'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td rowSpan="2" class="special6"></td>
                        </tr>
                        <tr>
                            <td>2. Minor surgery/<i>Chirurgie mineure</i></td>
                            <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QKTrqPiySvx'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="anesthesia_section">
                <table className='anesthesia'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="3">X. Anesthesia/ Anesthésie</th>
                        </tr>
                        <tr>
                            <th class="special"></th>
                            <th>Anesthesia</th>
                            <th class="special5">Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>General Anesthesia/ <i>Anesthésie Générale</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jxkvz59TzMg'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Regional Anesthesia/ <i>Anesthésie Régionale (rachianesthésie,..)</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='cu1aMhd8SDe'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Local Anesthesia/ <i>Anesthésie Locale</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='s0g5vUyKfVS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='rehabilitation_section'>
                <table className='rehabilitation '>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="7">XI. Rehabilitation and physiotherapy</th>
                        </tr>
                        <tr>
                            <th class="special">A</th>
                            <th>Assistive products distributed</th>
                            <th class="special7">Mobility devices</th>
                            <th class="special7">Vision </th>
                            <th class="special5">Self-care</th>
                            <th class="special5">Hearing</th>
                            <th class="special5">other</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Number of assistive products distributed</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='S577VRgt5PZ'&&dataValue.categoryOptionCombo=='V8Hq9avD9QY'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='S577VRgt5PZ'&&dataValue.categoryOptionCombo=='uvmX6E5XIyJ'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='S577VRgt5PZ'&&dataValue.categoryOptionCombo=='GkxJGhCPlwK'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='S577VRgt5PZ'&&dataValue.categoryOptionCombo=='YrfBblFY1YK'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='S577VRgt5PZ'&&dataValue.categoryOptionCombo=='HCwPkngt2sC'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
                <table className='Btable'>
                    <thead>
                        <tr>
                            <th class="special">B</th>
                            <th></th>
                            <th class="special7">Inpatient</th>
                            <th class="special7">Outpatient</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Number of sessions provided by Physiotherapist (PT)</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HB90AV2I3p1'&&dataValue.categoryOptionCombo=='rNtZwl0RNMn'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HB90AV2I3p1'&&dataValue.categoryOptionCombo=='dg3FDiu1K2G'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Number of sessions provided by Occupational Therapist (OT)</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='a3zG5C1fjPZ'&&dataValue.categoryOptionCombo=='rNtZwl0RNMn'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='a3zG5C1fjPZ'&&dataValue.categoryOptionCombo=='dg3FDiu1K2G'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Number of sessions provided by Speech and language therapist (SLT)</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='m3RTcDoBQTo'&&dataValue.categoryOptionCombo=='rNtZwl0RNMn'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='m3RTcDoBQTo'&&dataValue.categoryOptionCombo=='dg3FDiu1K2G'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>Total new rehabilitation cases received</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gVNIxRHf0EL'&&dataValue.categoryOptionCombo=='rNtZwl0RNMn'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gVNIxRHf0EL'&&dataValue.categoryOptionCombo=='dg3FDiu1K2G'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <th class="special"></th>
                            <th></th>
                            <th class="special7" colSpan="2">Total</th>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Number of outreach sessions</td>
                            <td class="special7" colSpan="2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DohWR4n768D'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div> 

            {/*division with some confusing data elements*/}

         <div className='obstetrical_section'>
                <table className='obstetrical'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="6">XII. Obstetrical Complications/Complications obstetricales</th>
                        </tr>
                        <tr>
                            <th class="special" rowSpan="2">A</th>
                            <th rowSpan="2"></th>
                            <th class="special5"></th>
                            <th class="special7">OPD NC/<i>Consultation externe</i></th>
                            <th class="special7">Hospitalized/<i>Hospitalisé</i></th>
                            <th class="special5">Deaths/<i>Décès</i></th>
                        </tr>
                        <tr>
                            <th class="special5">ICD-11</th>
                            <th class="special7"></th>
                            <th class="special7"></th>
                            <th class="special5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Total number of abortions</td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Spontaneous abortions</td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Complications of abortions/ <i>Avortements compliqués</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>Ectopic pregnancy/ <i>Grosesse ectopiques (Extra uterines)</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Antepartum Hemorrhage (APH)/ <i>Hémorragie prénatale</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Post-partum hemorrhage (PPH) /<i> Hémorragie Post-partum</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">7</td>
                            <td>Eclampsia /<i>Eclampsie</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">8</td>
                            <td>Severe Pre-Eclampsia/ Eclampsie / <i>Pre Eclampsie Sévère</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">9</td>
                            <td>Post C/Section infection /<i>Infections post cesarienne</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">10</td>
                            <td>Other Postpartum infections /<i>Autres infection puerpérale(après accouchement par voie basse)</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">11</td>
                            <td>Prolonged or Obstructed labor/<i>Travail prolongé (ou dystocie mécanique)</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">12</td>
                            <td>Uterine rupture/<i>Rupture uterine</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">13</td>
                            <td>Amniotic embolism/<i>Embolie amniotique</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">14</td>
                            <td>Complications of anesthesia/<i>Complications de l’anesthésie</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">15</td>
                            <td>Other Direct Obstetrical Complication /<i>Autres complications obstetricales directes</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">16</td>
                            <td>Anemia Severe (&lt;7gm/dl)/ <i>Anémie Sévère (&lt;7gm/dl)</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">17</td>
                            <td>HIV/Opportunistic Infections/<i>VIH infections opportunists</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">18</td>
                            <td>Pulmonary embolism/ <i>Embolie pulmonaire</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">19</td>
                            <td>Pneumonia on pregnancy/ <i>Pneumonie sur grossesse</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">20</td>
                            <td>Other indirect obstetrical Complication/ <i>Autres complications obstetricales indirectes</i></td>
                            <td class="special5"></td>
                            <td class="special7"></td>
                            <td class="special7"></td>
                            <td class="special5"></td>
                        </tr>
                    </tbody>
                </table>
                <table className='emergencyObsteric'>
                    <thead>
                        <tr>
                            <th class="special">B</th>
                            <th>Emergency Obstetric and Neonatal Care Interventions (Basic and Comprehensive): <i>Les fonctions de Soins obstetricaux et neonataux d’urgence complets </i></th>
                            <th class="special5">Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>ntravenous/Intramuscular antibiotics to manage Obstetrical Infections/<i> Cas ayant reçu les Antibiotiques intraveineuses/Intramusculaires pour traiter les infections puerpérales</i></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Mother received uterotonic drugs to manage PPH/ <i>Femme ayant recu un uterotonique pour traiter l’hémorragie du post partum</i></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Manual removal of placenta/ <i>Delivrance manuelle du placenta</i></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>Post-Abortion Care (Manual vacuum aspiration)/ <i>Soins Post-Avortement (Aspiration Manuelle ou curettage)</i></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Delivery by Vacuum extraction/ <i>Accouchement par ventouse obstetricale</i></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Severe Pre and eclampsia cases receiving magnesium sulfate/ <i>Cas de (pré) éclampsie qui ont reçus le sulfate de magnésium</i></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">7</td>
                            <td>Blood transfusion for obstetrical complications /<i>Transfusion sanguine pour complication obstétricales</i></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">8</td>
                            <td>Women with obstetrical complications referred for emergency care to higher levels /<i>Femmes avec complications obstetricales transferees a l’echelon supérieur</i></td>
                            <td class="special5"></td>
                        </tr>
                    </tbody>
                </table>
                <table className='deliiveriesAndBirths'>
                    <thead>
                        <tr>
                            <th class="special">C</th>
                            <th>Deliveries and Births at Health facility/<i>Accouchements et naissances Formation sanitaire</i></th>
                            <th class="special2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Deliveries total at health facility/<i>Accouchements, total</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Deliveries by Caesarean Section/<i>Césarienne</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Delivery complicated by perineal tear (second-,third,-fourth degree)/<i>Accouchement compliqués par déchirure périnéale</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>Birth trauma to newborn/<i>Traumatismes du nouveau- né à la naissance</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Cleft palate or Cleft lip/<i>Bec de lievre ou Fente Labio-palatine</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Other congenital malformation/<i>Autre malformation congénitale</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">7</td>
                            <td class="specialcl2">Deliveries under 14 years / <i class="specialcl2">Accouchement, femmes âgées de moins 14 ans</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">8</td>
                            <td class="specialcl2">Deliveries 14 – 17 years /<i class="specialcl2">Accouchement, femmes de 14-17 ans</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">9</td>
                            <td>Deliveries 18 – 19 years/<i>Accouchement, femmes de 18-19 ans</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">10</td>
                            <td>Multiple Pregnancies (women who delivered twins, triplets, etc.)/<i>Grossesses multiples (Jumeaux, triplets, etc.)</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">11</td>
                            <td>Women consulted for risk of premature delivery between 24-34 weeks /<i>Femmes qui ont consulté pour ménace d’accouchement premature entre24-34 semaines</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">12</td>
                            <td>Women consulted for risk of premature delivery between 24-34 weeks who received Corticosteroid / <i>Femmes qui ont consulté pour ménace d’accouchement prématuré entre24-34 qui ont recu les corticosteroides</i></td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">13</td>
                            <td>Women consulted with Preterm Premature rupture membranes (PPROM) /<i>Les femmes qui ont consulté avec rupture premature des membranes sur grossesse non a terme</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">14</td>
                            <td>Women consulted with Preterm Premature rupture membranes who received prophylactic antibiotics/<i>Les femmes qui ont consulté avec rupture premature des membranes sur grossesse non a terme qui ont recu les antibiotiques</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">15</td>
                            <td>Women who received oxytocin immediately after birth for active management of third stage of labor/ <i>Femmes qui ont recu Oxytocin après l’accouchement pour la prise en charge active du troisieme stade du travail</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">16</td>
                            <td>Maternal deaths during labor, delivery and 24 hours after delivery/ <i>Décès maternel pendant le travail, accouchement ou pendant 24 après accouchement</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">17</td>
                            <td>Births, live /<i>Naissances vivantes</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">18</td>
                            <td>Birth weight &lt;2500 gr (alive) /<i>Poids à la naissance &lt;2500 grvivantes</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">19</td>
                            <td>Premature newborns (alive) 22-37 weeks /<i>Nouveaux né vivants qui sont prématurés</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">20</td>
                            <td>Birth Weight ≤2 Kg (alive newborns ) all /<i>Poids à la naissance ≤2000 gr (Tous les nouveaux nés vivants)</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">21</td>
                            <td>Still births fresh (≥28 weeks or ≥1000grams) all/ <i>Morts nés frais (≥ 28 semaines ou ≥ 1000 Grams)</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">22</td>
                            <td>Still births macerated (≥28 weeks or≥1000 grams) /<i>Morts nés macérés ( ≥28 Semaines ou ≥1000 Grams )</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">23</td>
                            <td>Still births fresh (≥2500 grams) /<i>Morts nés frais (≥2500 gr)</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">24</td>
                            <td>Deaths at birth of live born babies (within 30 minutes)/<i>Décès a la naissance pour les bebes nes vivants (endéans 30 minutes de la naissance)</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">25</td>
                            <td>Newborns breastfed within 1 hour of delivery/<i> Nouveaux-nés allaité endéans la première heure après naissance</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">26</td>
                            <td>Live Newborns who didn’t cry/breath at birth/ Nouveau- nés vivants qui n’ont pas crié (pleuré)/<i>respiré a la naissance</i></td>
                            <td class="special2"></td>
                        </tr>
                        <tr>
                            <td class="special">27</td>
                            <td>Live Newborns who didn’t cry/breath at birth and were resuscitated successfully (cry/breath within 5 minutes APGAR &lt; 5 at 5 min)/ <i>Les nouveaux nes vivants réanimés avec succès (Ceux qui n’avaient pas crié/respiré a la naissance mais qui ont pu crier)/respirer endéans 5 minutes après la réanimation, APGAR &lt; 5 a la 5 min</i></td>
                            <td class="special2"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="postnatal_section">
                <table className='postnatalCare'>
                    <thead>
                        <tr class="specialth">
                            <th colSpan="2" >XIII. Postnatal Care</th>
                            <th class="special5" style={{ color: "aliceblue" }}>Mother</th>
                            <th class="special5" style={{ color: "aliceblue" }}>New Born</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>PNC1 visits within 24 Hours of birth /<i>Première CPoN endéans 24 heures</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yIJWAcQn5Nb'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oCUAtaHPHye'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Mothers screened for anemia during PNC 1 Visit/<i> Mères depistées pour anémie pendant CPoN 1</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zM4W9DGvMnl'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Mothers received Iron/Folic Acid during PNC1/ Meres ayant recu le fer/<i>acide folique a la CPoN1</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ckKvdDxEAMk'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>Anemia (Hb&lt;9.5 Gr/Dl) detected during PNC Visits (PNC1s)/ <i>Mères anémique detectées pendant la première CPoN</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yVL5TxyAiXv'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special5"></td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Complications/danger signs detected during any PNC visit/ <i>Les mères ou nouveau-nés avec complications ou signes de danger detectés à n’importe quelle CPoN</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='i6lslbIyUuJ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pGA9SwHFWob'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Referrals done for complications at any visit/ <i>Les transferts faits durant les CPoN</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kWKJdIHEOrm'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TTiMnsZ1BYC'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

           <div className="kangaroo_section">
                <table className='kangaroo'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="3">XIV. Kangaroo Mother Care/ Soins maternels Kangourou</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Low birth weight &lt; 2000 grams babies admitted in KMC/ <i>Nouveau-nés à faible poids à la naissance &lt; 2000 grams admises au KMC</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='H4HLPPwHBOC'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Newborns discharged from KMC Unit/<i>Nouveaux nés sorties de KMC</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fH4WgUoaWDS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="neonatal_section">
                <table className='neonatal'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="7">XV. Neonatal causes of hospitalization and deaths at discharge /Causes d’ospitalisation et deces en neonatologie</th>
                        </tr>
                        <tr>
                            <th class="speci">A</th>
                            <th>Disease/ <i>maladies</i> </th>
                            <th class="special5"></th>
                            <th class="special1" colSpan="2">Hospitalization/ <i>Admissions en hospitalisation</i></th>
                            <th colSpan="2" class="special9">Deaths/<i>Deces</i></th>
                        </tr>
                        <tr>
                            <td class="speci"></td>
                            <td></td>
                            <td class="special5">ICD-11</td>
                            <td class="special5">0-7 days/<i>0-7 jours</i></td>
                            <td class="special5">8- 28 days/<i>8-28 jours</i></td>
                            <td class="special1">0-7 days (excluding deaths at birth)/<i>0-7 jours (exclure les desces à la naissance)</i></td>
                            <td class="special5">8- 28 days/ <i>8-28 jours</i></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="speci">1</td>
                            <td class="specialtd">Asphyxia/<i>Asphyxie</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yDtQ2j6ILvU'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yDtQ2j6ILvU'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qWSaiPCXwrY'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qWSaiPCXwrY'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">2</td>
                            <td class="specialtd">Prematurity (22 to 27 weeks)/<i>Prematurité (22 a 27 semaines)</i> </td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hZxXTed21N4'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hZxXTed21N4'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='knjSf9pI3Xb'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='knjSf9pI3Xb'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">3</td>
                            <td class="specialtd">Prematurity (28 to 37weeks)/<i>Prematurité (28 a 37 semaines)</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='x0j6p6zKjsX'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='x0j6p6zKjsX'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nJcu07h2yJa'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nJcu07h2yJa'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">4</td>
                            <td class="specialtd">Congenital malformations, / <i>malformations congenitales</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OFxA2KD8RYY'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OFxA2KD8RYY'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Mu9zu7dxd3n'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Mu9zu7dxd3n'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">5</td>
                            <td class="specialtd">Pneumonia/<i>Pneumonie</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LNo6i6KsyBw'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LNo6i6KsyBw'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ges9VUFdavq'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ges9VUFdavq'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">6</td>
                            <td class="specialtd">Skin infections/<i>Infections cutanées</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ucuNvtn2wwl'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ucuNvtn2wwl'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GpI5QHH9LK1'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GpI5QHH9LK1'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">7</td>
                            <td class="specialtd">Neonatal infections (Sepsis) /<i>septicemie suspectée</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AYKxZ5LKyr9'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AYKxZ5LKyr9'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AYhuyIAZ09B'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AYhuyIAZ09B'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">8</td>
                            <td class="specialtd">Tetanus Neonatal/<i>Tetanos Néonatal</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NGeh3V0P8Ec'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NGeh3V0P8Ec'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IXzLmEDE4T3'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IXzLmEDE4T3'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">9</td>
                            <td class="specialtd">Hypothermia at admission/<i>Hypothermie à l'admission</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ftC0uMgO9Fq'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ftC0uMgO9Fq'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oyMctxyOPHC'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oyMctxyOPHC'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">10</td>
                            <td class="specialtd">All other causes of neonatal morbidity /<i>Autres morbidités néonatales</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LaSY3dkleFI'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LaSY3dkleFI'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LeanBRh6JUJ'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LeanBRh6JUJ'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">B</td>
                            <td class="specialtd">Total neonates born in this health facility /<i>Nombre total des bébés nés dans cet formation sanitaire</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='SqLEppN8faX'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='SqLEppN8faX'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='akMrigBmy9n'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='akMrigBmy9n'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">C</td>
                            <td class="specialtd">Total neonates born outside this health facility /<i>Total des bébés qui sont nés en dehors de cet formation sanitaire</i></td>
                            <td class="special5"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='q10kSfRD1G5'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='q10kSfRD1G5'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                            <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='usrZTn8oZEl'&&dataValue.categoryOptionCombo=='bo7gLd7FBoo'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='usrZTn8oZEl'&&dataValue.categoryOptionCombo=='YcFyDsP9Nbc'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="nitrition_section">
                <table className='nutritionScreening'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="5">XVI. Nutrition Screening (All services)/ Dépistage des maladies nutritionnelles (tous services)</th>
                        </tr>
                        <tr>
                            <th class="special">A</th>
                            <th></th>
                            <th class="special4">&lt; 24 months </th>
                            <th class="special4">24 -59 months</th>
                            <th class="special4">&gt;=5 yrs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td>Screened for malnutrition/<i> Dépistage de la malnutrition</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QSc06GoP6fL'&&dataValue.categoryOptionCombo=='p648D4zBFmx'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QSc06GoP6fL'&&dataValue.categoryOptionCombo=='JGVRmcEfUIQ'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QSc06GoP6fL'&&dataValue.categoryOptionCombo=='uaTon1vBL9Z'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>Number of malnourished patients detected<i> (Count individuals not malnutrition types below)</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KF7zZLvuEdO'&&dataValue.categoryOptionCombo=='p648D4zBFmx'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KF7zZLvuEdO'&&dataValue.categoryOptionCombo=='JGVRmcEfUIQ'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KF7zZLvuEdO'&&dataValue.categoryOptionCombo=='uaTon1vBL9Z'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>Severe acute malnutrition(With complication)/<i>malnutrition aigüe sévère(avec complications)</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OQWkMsJQ8Op'&&dataValue.categoryOptionCombo=='p648D4zBFmx'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OQWkMsJQ8Op'&&dataValue.categoryOptionCombo=='JGVRmcEfUIQ'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OQWkMsJQ8Op'&&dataValue.categoryOptionCombo=='uaTon1vBL9Z'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>Moderate acute Malnutrition(with complication)/<i>malnutrition aigüe modérée(avec complications)</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ENSrpH3BmmN'&&dataValue.categoryOptionCombo=='p648D4zBFmx'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ENSrpH3BmmN'&&dataValue.categoryOptionCombo=='JGVRmcEfUIQ'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ENSrpH3BmmN'&&dataValue.categoryOptionCombo=='uaTon1vBL9Z'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Underweight/<i>Insuffisance pondérale</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LG7nxxUVgxH'&&dataValue.categoryOptionCombo=='p648D4zBFmx'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LG7nxxUVgxH'&&dataValue.categoryOptionCombo=='JGVRmcEfUIQ'?dataValue.value:''}</span>))}</td>
                            <td class="special4"></td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Chronic malnutrition (stunting)/ <i>Malnutrition chronique</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wJjjoRZIIJj'&&dataValue.categoryOptionCombo=='p648D4zBFmx'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wJjjoRZIIJj'&&dataValue.categoryOptionCombo=='JGVRmcEfUIQ'?dataValue.value:''}</span>))}</td>
                            <td class="special4"></td>
                        </tr>
                        <tr>
                            <td class="special">7</td>
                            <td>Referred to outpatient malnutrition program (Health Centre)/ <i>Référé au programme de la malnutrition (ambulatoire)</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kbCtNOz51wu'&&dataValue.categoryOptionCombo=='p648D4zBFmx'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kbCtNOz51wu'&&dataValue.categoryOptionCombo=='JGVRmcEfUIQ'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kbCtNOz51wu'&&dataValue.categoryOptionCombo=='uaTon1vBL9Z'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">8</td>
                            <td>Referred to inpatient malnutrition program (Hospital)/ <i>Référé au programme de PEC de la malnutrition (Hôpital)</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xLKH8uxKS8s'&&dataValue.categoryOptionCombo=='p648D4zBFmx'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xLKH8uxKS8s'&&dataValue.categoryOptionCombo=='JGVRmcEfUIQ'?dataValue.value:''}</span>))}</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xLKH8uxKS8s'&&dataValue.categoryOptionCombo=='uaTon1vBL9Z'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
                <table className='inpatient'>
                    <thead>
                        <tr>
                            <th colSpan="9">B. Inpatient Rehabilitation of Malnourished/ <i>Réhabilitation des malnouris en hospitalisation</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="specia"></td>
                            <td class="special5"></td>
                            <td class="special4"></td>
                            <td class="special9" colSpan="3">Severe Acute Malnourished / <i>Malnutrition aiguë severe</i></td>
                            <td class="special9" colSpan="3">Moderate Acute Malnourished /<i> Malnutrition aiguë moderée</i></td>
                        </tr>
                        <tr>
                            <td class="specia"></td>
                            <td class="special5"></td>
                            <td class="special4"></td>
                            <td class="special5">&lt; 24 months </td>
                            <td class="special5">24-59 Months</td>
                            <td class="special5">5 years and above</td>
                            <td class="special5">&lt; 24 months </td>
                            <td class="special5">24-59 Months</td>
                            <td class="special5">5 years and above</td>
                        </tr>
                        <tr>
                            <td class="specia">1</td>
                            <td colSpan="2">Present at beginning of month /<i> Présent au début du mois</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Gix0YVnNrmh'&&dataValue.categoryOptionCombo=='pUfNTJWYGMf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Gix0YVnNrmh'&&dataValue.categoryOptionCombo=='eSe2oawnA2h'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Gix0YVnNrmh'&&dataValue.categoryOptionCombo=='hhXIgg0VlU8'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Gix0YVnNrmh'&&dataValue.categoryOptionCombo=='LswJkrIRQuG'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Gix0YVnNrmh'&&dataValue.categoryOptionCombo=='yf94FU9h9MD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Gix0YVnNrmh'&&dataValue.categoryOptionCombo=='sP6vLrtZLXf'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="specia">2</td>
                            <td class="special5">Admissions</td>
                            <td class="special4">2.1 New Cases /<i> Nouveaux cas</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B5O4VA5o3lm'&&dataValue.categoryOptionCombo=='pUfNTJWYGMf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B5O4VA5o3lm'&&dataValue.categoryOptionCombo=='eSe2oawnA2h'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B5O4VA5o3lm'&&dataValue.categoryOptionCombo=='hhXIgg0VlU8'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B5O4VA5o3lm'&&dataValue.categoryOptionCombo=='LswJkrIRQuG'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B5O4VA5o3lm'&&dataValue.categoryOptionCombo=='yf94FU9h9MD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B5O4VA5o3lm'&&dataValue.categoryOptionCombo=='sP6vLrtZLXf'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="specia" rowSpan="4">3</td>
                            <td class="special5" rowSpan="4">Discharges<br />/<i>Sortant du mois</i></td>
                            <td class="special4">3.1 Cured /<i>Guéri</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U9bLr7Sr1ux'&&dataValue.categoryOptionCombo=='pUfNTJWYGMf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U9bLr7Sr1ux'&&dataValue.categoryOptionCombo=='eSe2oawnA2h'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U9bLr7Sr1ux'&&dataValue.categoryOptionCombo=='hhXIgg0VlU8'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U9bLr7Sr1ux'&&dataValue.categoryOptionCombo=='LswJkrIRQuG'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U9bLr7Sr1ux'&&dataValue.categoryOptionCombo=='yf94FU9h9MD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U9bLr7Sr1ux'&&dataValue.categoryOptionCombo=='sP6vLrtZLXf'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special4">3.2 Counter referrals to health center/ <i>Contres référés au CS</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='deUInTIoDDS'&&dataValue.categoryOptionCombo=='pUfNTJWYGMf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='deUInTIoDDS'&&dataValue.categoryOptionCombo=='eSe2oawnA2h'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='deUInTIoDDS'&&dataValue.categoryOptionCombo=='hhXIgg0VlU8'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='deUInTIoDDS'&&dataValue.categoryOptionCombo=='LswJkrIRQuG'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='deUInTIoDDS'&&dataValue.categoryOptionCombo=='yf94FU9h9MD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='deUInTIoDDS'&&dataValue.categoryOptionCombo=='sP6vLrtZLXf'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special4">3.3 Abandoned / <i>Abandonnés</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vV9daDS6Mpb'&&dataValue.categoryOptionCombo=='pUfNTJWYGMf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vV9daDS6Mpb'&&dataValue.categoryOptionCombo=='eSe2oawnA2h'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vV9daDS6Mpb'&&dataValue.categoryOptionCombo=='hhXIgg0VlU8'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vV9daDS6Mpb'&&dataValue.categoryOptionCombo=='LswJkrIRQuG'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vV9daDS6Mpb'&&dataValue.categoryOptionCombo=='yf94FU9h9MD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vV9daDS6Mpb'&&dataValue.categoryOptionCombo=='sP6vLrtZLXf'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special4">3.4 Died /<i> Décès</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zVClkIO5jmI'&&dataValue.categoryOptionCombo=='pUfNTJWYGMf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zVClkIO5jmI'&&dataValue.categoryOptionCombo=='eSe2oawnA2h'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zVClkIO5jmI'&&dataValue.categoryOptionCombo=='hhXIgg0VlU8'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zVClkIO5jmI'&&dataValue.categoryOptionCombo=='LswJkrIRQuG'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zVClkIO5jmI'&&dataValue.categoryOptionCombo=='yf94FU9h9MD'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zVClkIO5jmI'&&dataValue.categoryOptionCombo=='sP6vLrtZLXf'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
                <table className='methods'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="7"></th>
                        </tr>
                        <tr>
                            <th class="special">A</th>
                            <th class="special9">Methods</th>
                            <th class="special8">New Acceptors in the program / <i>Nouveaux (elles) Acceptants(es) dans le programme</i></th>
                            <th class="special8">PPFP uptake (Before discharge)/ <i>PF en postpartum avant la sortie de maternité</i></th>
                            <th class="special8">PPFP uptake (Before discharge)/ <i>PF en postpartum avant la sortie de maternité</i></th>
                            <th class="special8">Stopped FP Method /<i>Arrêt de la methode PF</i></th>
                            <th class="special8">Active users at end of month /<i>Utilisateurs(trices) a la fin du mois</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td class="special9">Oral Contraceptives, progestative/ <i>Contraceptifs oraux, progestatif</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='X5q4nzV9tee'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rMDlDJ5cb7S'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O6TGO6kdo1i'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CLH2WvpTZLe'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pBK9wBLJPvs'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td class="special9">Oral Contraceptives, combined /<i>Contraceptifs oraux, combinée</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gWVZxOl2SM0'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8"></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sS7yh9LFO6h'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zKT7MpGdaHT'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oifQS5vfC9N'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td class="special9">njectables (Depo-Provera) / <i>Injectables (Depo-Provera)</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KiUnct0R8hk'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yUljSzS1Y6L'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vWT9GQummeD'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='faPkwHlUtsD'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='P8wjgQiKWvw'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td class="special9">Injectables_DMPA-SC/<i>Injectables_DMPA SC</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='q140SCZpDL9'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='D13haShRZRD'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='A3ZseSvq9qM'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vAE4rxNyMDs'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GxZ6fvXCo2s'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td class="special9">Injectables (Norristerat)/<i>Injectables (Norristerat)</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CFeHOML5bFD'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qc6mG3ProUn'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='SjKf85CxXu8'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FBoXrJz9prq'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tGSdGLXnLf7'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td class="special9">mplants/<i>Implanon NXT</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yQwI15mC28F'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BAAyGHJ0PE4'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='J1KJztMMIrg'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IhxiFhNBV9t'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Hh3Rg3hqTnk'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">7</td>
                            <td class="special9">Implants/<i>Jadelle</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='z1hydsnWEWP'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DqCVEnS7bML'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Zha3KDDkB0O'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QxoUllm4Jaz'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='y1rM8K6lRga'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">8</td>
                            <td class="special9">IUD_Copper/ <i>DIU</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dYCyfMz0E9Y'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aerxOAMlAWM'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='M1EKUzts4zg'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xFMDlMfZfcw'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nD8IEzbKeMY'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">9</td>
                            <td class="special9">UD_Hormonal</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CHl7JwFGFWv'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Pv7bWE9KXk0'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zoTXnE2L3WW'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='p7TPdnwF47I'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vhTI1b4xsAd'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">10</td>
                            <td class="special9">Male condoms / <i>Préservatifs masculins</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ba9B2qPVBly'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='p2PPUqBR3gD'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='l4zwenGYF1R'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='j2nFTmot9fp'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DzLZjlrbqvq'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">11</td>
                            <td class="special9">Female condoms /<i> Préservatifs féminins</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='UqNRfw4yFMt'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PODEHjYs5qg'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MAUhH0baFrS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aNNTwHyk1wr'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ih4pGKfwy0o'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">12</td>
                            <td class="special9">Cycle beads / <i>MJF (Collier)</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='uiT9PkkZSly'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8"></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JoVYTqFTXwu'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TtZ2Ax5xqpD'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='KJWoTLblVi2'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">13</td>
                            <td class="special9">Lactational amenorrhea (LAM) / <i>MAMA</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jxx29hKfkcv'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Iy2598P6WHI'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zqjKpn1k42N'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XIJOBFOJ7Yo'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PI4GvYWrZbT'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">14</td>
                            <td class="special9">Auto-observation</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VGiM1CPBQpr'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8"></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PGec8q7wkd6'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QGhaTbeQNFv'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='llIlmBo7dlS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">15</td>
                            <td class="special9">Tubal ligations/<i>Ligature des trompes</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HMKQJCFUELz'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='epHYAcaV1S2'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xt0wOJQIgeA'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8"></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='j6aQyxC4BvY'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">16</td>
                            <td class="special9">Vasectomy/<i>Vasectomie</i></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Cps7Z0IYIfX'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QLsYlMR4XKC'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='SyxB3xLcSeV'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special8"></td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GmfkClkyKIs'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
                <table className='summaryByAge'>
                    <thead>
                        <tr>
                            <th class="special">B</th>
                            <th style={{ width: '160px' }}>Summary by age </th>
                            <th class="special5">15-19 Yrs</th>
                            <th class="special5">20 – 24 Yrs </th>
                            <th class="special5">&gt;= 25 yrs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special">1</td>
                            <td style={{ width: '160px' }}>New Acceptors in the program /<i> Nouveaux (elles) Acceptant (es) dans le programme</i></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dojxLAeOWyd'&&dataValue.categoryOptionCombo=='n85FTsT6smV'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dojxLAeOWyd'&&dataValue.categoryOptionCombo=='LUcYXVY6eM6'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dojxLAeOWyd'&&dataValue.categoryOptionCombo=='iPzOtMGCTMv'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="labo_section">
                <table className='laboratory'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="9">XVIII. Laboratory/ Laboratoire</th>
                        </tr>
                        <tr>
                            <th class="special11" colSpan="3"></th>
                            <th class="special11" colSpan="4">Results/ <i>Résultats </i></th>
                            <th class="specialcl3" colSpan="2">Total</th>
                        </tr>
                        <tr>
                            <th class="special11" colSpan="3">Exams/ Examens </th>
                            <th class="special9" colSpan="3">Positives</th>
                            <th class="special5">Negatives</th>
                            <th class="specialcl">&lt;5Yrs </th>
                            <th class="specialcl">5Yrs+</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special11" colSpan="3">1. Blood Smears Plasmodium</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dGj56SGnCnI'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dGj56SGnCnI'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialcl">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LGx3zxrNLsj'&&dataValue.categoryOptionCombo=='ogpshxtAJcX'?dataValue.value:''}</span>))}</td>
                            <td class="specialcl">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LGx3zxrNLsj'&&dataValue.categoryOptionCombo=='e6Ucbjb8jMX'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special11" colSpan="3">2. Rapid Diagnostic Tests for Malaria/ Test rapide du paludisme</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dKRpKJNVb1R'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dKRpKJNVb1R'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialcl">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='orfANx36Y3l'&&dataValue.categoryOptionCombo=='ogpshxtAJcX'?dataValue.value:''}</span>))}</td>
                            <td class="specialcl">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='orfANx36Y3l'&&dataValue.categoryOptionCombo=='e6Ucbjb8jMX'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special11" colSpan="3">3. Stools Samples TOTAL/. Examens de selles (nombre d’échantillons analysés)</td>
                            <td class="specialtd4" colSpan="3"></td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='RlNBU1szPwr'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }} rowSpan="14"></td>
                            <td class="special" rowSpan="14"> Of which</td>
                            <td class="special9"></td>
                            <td class="special9" colSpan="3">Positive/Age group</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9"></td>
                            <td class="special5">0-4Yrs</td>
                            <td class="special5">5-15Yrs</td>
                            <td class="special5">16+Yrs</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.1 Ascaris</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ut24MERW4yr'&&dataValue.categoryOptionCombo=='KuHERWP9387'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ut24MERW4yr'&&dataValue.categoryOptionCombo=='GzenjKg6Wng'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ut24MERW4yr'&&dataValue.categoryOptionCombo=='eyDV0NI0sxB'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.2 Trichuris (Tricocephale)</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hCsLKAeODPG'&&dataValue.categoryOptionCombo=='KuHERWP9387'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hCsLKAeODPG'&&dataValue.categoryOptionCombo=='GzenjKg6Wng'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hCsLKAeODPG'&&dataValue.categoryOptionCombo=='eyDV0NI0sxB'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.3 Ankylostoma (hookworms)</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='u94z9I9IUXn'&&dataValue.categoryOptionCombo=='KuHERWP9387'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='u94z9I9IUXn'&&dataValue.categoryOptionCombo=='GzenjKg6Wng'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='u94z9I9IUXn'&&dataValue.categoryOptionCombo=='eyDV0NI0sxB'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.4 Schistosoma in stool</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Pq5xDiaKshA'&&dataValue.categoryOptionCombo=='KuHERWP9387'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Pq5xDiaKshA'&&dataValue.categoryOptionCombo=='GzenjKg6Wng'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Pq5xDiaKshA'&&dataValue.categoryOptionCombo=='eyDV0NI0sxB'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9" style={{ backgroundColor: "black" }}></td>
                            <td class="special9" colSpan="3">Positive/Total</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.5 Taenia (solium and saginata)</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rHylBUT6bYa'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.6 Entamoeba histolytica</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='T71wgj43P73'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.7 Giardia lamblia or intestinalis</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DRby9OB09U4'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.8 Enterobius vermicularis (Oxyure)</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='N0cGqERQBHD'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.9 Strongyloides stercolaris (Angillule)</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='l5CPCDDxsDf'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.10 Trichomonas intestinalis</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WhuTJzZa8x5'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">3.11 Other parasites in stools/ Autres parasites intestinaux</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='p9B5TpIkl0N'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <th colSpan="9">4. Urine</th>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }} rowSpan="3"></td>
                            <td rowSpan="3" class="special"> Of which</td>
                            <td class="special9">4.1. Sugar/ <i>Sucre</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='K3uM4zTQbxF'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='K3uM4zTQbxF'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td class="special9">4.2. Albumin</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='E75Lz4QGjEE'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='E75Lz4QGjEE'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>

                        <tr>
                            <td class="special9">4.3. Pregnancy test/ <i>Test de grossesse</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qz4EZbU4mvC'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qz4EZbU4mvC'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <th class="specialth1" colSpan="9">5. Bacteriology/ <i class="ispg">Bactériologie</i></th>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td rowSpan="3" style={{ maxWidth: "30px" }}> 5.1.Vaginal-<br/>swab<br/>/<i>Ecouvillon vaginal</i></td>
                            <td class="special9">5.1.a Fresh/<i> Frais</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AIwScXIpZ0s'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AIwScXIpZ0s'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td class="special9">5.1.b Gram/<i> Gram</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XZHuyibAmdc'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XZHuyibAmdc'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td class="special9">5.1.c Of which diplococcus gram (-)/<i>don’t diplococcus gram (-)</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='m9W9rt06NaE'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td rowSpan="3" style={{ maxWidth: "30px" }}>5.2. Urethral<br/> swab<br/>/<i>Ecouvillon urétral</i></td>
                            <td class="special9">5.1.a Fresh/ <i>Frais</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DfyvbxycjOy'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DfyvbxycjOy'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td class="special9">5.1.b Gram/ <i>Gram</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EP5i60qLUvq'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EP5i60qLUvq'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td class="special9">5.1.c Of which diplococcus gram (-)/<i>don’t diplococcus gram (-)</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tBwjkZtT15O'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td rowSpan="3" class="special5"> 5.3 Urine</td>
                            <td class="special9">5.1.a Fresh/ <i>Frais</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AqW0MAYgc2B'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AqW0MAYgc2B'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td class="special9">5.1.b Gram/<i> Gram</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IMcg2WawGAS'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IMcg2WawGAS'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td class="special9">5.1.c Of which diplococcus gram (-)/<i>don’t diplococcus gram (-)</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MjKtLZ7vRL4'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1"></td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <th class="specialth1" colSpan="9" s>6. Blood/ Sang</th>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }} rowSpan="9"></td>
                            <td style={{ width: "150px" }} colSpan="2">6.1. RPR</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sVeQGmQoFBu'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sVeQGmQoFBu'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "150px" }} colSpan="2">6.2. HIV final result/ <i>HIV résultat final</i></td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mf57zt8Zpgr'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mf57zt8Zpgr'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "150px" }} colSpan="2">6.3. ESR/<i>VS</i></td>
                            <td class="special9" colSpan="3"></td>
                            <td class="specialtd1"></td>
                            <td class="special1" colSpan="2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='RbZsq9GYXvm'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "150px" }} colSpan="2">6.4. Full Blood Count (FBC/NFS)</td>
                            <td class="specialtd4" colSpan="3"></td>
                            <td class="specialtd1"></td>
                            <td class="special1" colSpan="2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mkSRXV02tFJ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "150px" }} colSpan="2">6.5. ALAT(GPT) (Alanine Aminotransferase )</td>
                            <td class="specialtd4" colSpan="3"></td>
                            <td class="specialtd1"></td>
                            <td class="special1" colSpan="2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WJE7lOOlfEP'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "150px" }} colSpan="2">6.6. Creatinine</td>
                            <td class="specialtd4" colSpan="3"></td>
                            <td class="specialtd1"></td>
                            <td class="special1" colSpan="2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NMJOaJkJg1A'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "150px" }} colSpan="2">6.7. Blood glucose</td>
                            <td class="specialtd4" colSpan="3"></td>
                            <td class="specialtd1"></td>
                            <td class="special1" colSpan="2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ASSbq3HMGY0'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "150px" }} colSpan="2">6.8. Amylase</td>
                            <td class="specialtd4" colSpan="3"></td>
                            <td class="specialtd1"></td>
                            <td class="special1" colSpan="2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pQIQRrj58Ga'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "150px" }} colSpan="2">6.9. CD4</td>
                            <td class="specialtd4" colSpan="3"></td>
                            <td class="specialtd1"></td>
                            <td class="special1" colSpan="2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HiwCjMe0mR6'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td style={{ width: "150px" }} colSpan="2">6.10. Pregnancy test</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='o6RaWn2HUQ9'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='o6RaWn2HUQ9'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td style={{ width: "150px" }} colSpan="2">6.11. CRAG (Serum Cryptococcal Antigen)</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='neQoEu66SFI'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='neQoEu66SFI'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td style={{ width: "150px" }} colSpan="2">6.12. HBV (Hepatitis B Virus)</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MkdDMJlYYrw'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MkdDMJlYYrw'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td style={{ width: "10px" }}></td>
                            <td style={{ width: "150px" }} colSpan="2">6.13. HCV (Hepatitis C Virus)</td>
                            <td class="special9" colSpan="3">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HfZkPtitnkO'&&dataValue.categoryOptionCombo=='DjH2G9hAwTx'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HfZkPtitnkO'&&dataValue.categoryOptionCombo=='UcvynyjWX9K'?dataValue.value:''}</span>))}</td>
                            <td class="specialtd5" colSpan="2"></td>
                        </tr>
                        <tr>
                            <th class="special11" colSpan="3">7. Cerebro Spinal fluid /<i> Liquide cérebro spinale</i></th>
                            <td class="special9" colSpan="3"></td>
                            <td class="specialtd1"></td>
                            <td class="special1" colSpan="2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bfwojiaWF57'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <th class="special11" colSpan="3">8. Other Lab tests /<i> Autres tests de laboratoires</i></th>
                            <td class="special9" colSpan="3"></td>
                            <td class="specialtd1"></td>
                            <td class="special1" colSpan="2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='RRaTlwwFQnC'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <th class="special11" colSpan="3">.TOTAL tests conducted in the laboratory/ <i>TOTAL tests de laboratoire</i></th>
                            <td class="special9" colSpan="3"></td>
                            <td class="specialtd1"></td>
                            <td class="special1" colSpan="2"></td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <div className="tracerDrug_section">
                                <table className='tracerDrug'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="8"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special"></td>
                            <td>Tracer drug</td>
                            <td class="special7">Quantity at the beginning of the month</td>
                            <td class="special7">Quantity received</td>
                            <td class="special7">Quantity Dispensed</td>
                            <td class="special7">Quantity Expired
                                /Damaged/
                                Lost</td>
                            <td class="special7">Quantity at End of Month</td>
                            <td class="special7">Days out of Stock</td>
                        </tr>
                        <tr>
                            <td class="special">1</td>
                            <td>CoartemArtéméther+ Lumefanthrine tab 20 mg + 120mg (6x1)</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rk0BAx86UL0'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lynjCW4qzri'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fxiW00FbQNw'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CoajC45NOnC'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LjmML2iEK4t'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">2</td>
                            <td>CoartemArtéméther+ Lumefanthrine tab 20 mg + 120mg (6x2)</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='w8nXOUmofmI'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tnUkORHNqEm'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vW82uScYVWZ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TeNsafwfHSf'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='J1WVn19pZQE'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">3</td>
                            <td>CoartemArtéméther+ Lumefanthrine tab 20 mg + 120mg (6x3)</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='uz7lvnzZPjS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WLEnWIGIPVN'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZMvJoWFLWWu'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nItOZnJSZU6'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='RU2yfZmQIi0'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">4</td>
                            <td>CoartemArtéméther+ Lumefanthrine tab 20 mg + 120mg (6x4)</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hUicoS6NZAb'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NE7d6pbpepA'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WIns3WhhNhE'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PtZsEarYuX2'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZF5cpmZr40I'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">5</td>
                            <td>Artesunate Suppository 200 mg</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CKyVIGaTZER'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='cS8gtaHz8xQ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NgDa1Jqehfs'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pzHCW5JOQUG'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WwX8elThS8g'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">6</td>
                            <td>Artesunate Suppository 100 mg</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rvdBZnKq6bC'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Q5bmwRjnhVl'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Pe9wGFfkcP3'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hGQdXOskQEV'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='d6Xi2aZgijh'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">7</td>
                            <td>Artesunate Vial 60mg/ml</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ggWRcexmHVB'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Fvx2NvpRFtH'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='b87UaMRNcVs'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='coKCWVE6LKd'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lSpvhziRdMf'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">8</td>
                            <td>Rapid Diagnostic Tests for Malaria (mRDT)</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PJkwyTAHeVX'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='HDSuGk2YCPt'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yHhA4EVlFPs'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='N9Fl7BlnpYx'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zAFNP5XTkuI'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">9</td>
                            <td>Quinine vial 300 mg/ml</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sUHtH4cOHrw'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='SbmOOty65Pg'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ffoiv0r3yZN'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yutP8EMTaQy'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sviwx77bbEV'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">10</td>
                            <td>Quinine tab 300 mg</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='uyhz43Ggom8'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jbkmRJwdXBS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VeXaGTeN5S8'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='exmAIdhsuCF'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ybbFRlsfaoo'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">11</td>
                            <td>Amoxycillin syrup 125mg/5ml</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='G2H7rJ2bEk0'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DTkvwRFWoRv'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MgEAjP3p7ZP'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IQ0iXfgQwnw'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='W9GUYH23kai'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">12</td>
                            <td>Ampicillin vial 500mg</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='h8C1K4tNfgQ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='eJgdVQiJ1jK'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GcagaNDi7WA'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ci8VeGEvSz8'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MfXlDsrATUM'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">13</td>
                            <td>Cloxacillin tab 250mg</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CLPq9v8M5NR'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gPWrRI7OTGr'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PGXfqDi5rRa'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TUX16CvEHg1'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qfMjfATFHlO'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">14</td>
                            <td>Gentamycin vial 40mg/ml</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jWteCxG2gJy'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='t9l9YHIiiB2'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BRdfoxGwaVj'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BvWmJF91L7M'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ujP53fJdUIM'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">15</td>
                            <td>Ketamine vial 50mg/ml</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WWQTquQvqr5'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AHTlVyMFWDv'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QIUNmRYLyRX'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='coxHTHD5yNE'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='amrpI4Gc28c'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">16</td>
                            <td>Ocytocin vial 5ui</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qI2454vp3rG'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='d7zosCUiGPA'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='j9PrvQkYYXK'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='eTIVDRIXk5G'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JcuG4lu5z69'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">17</td>
                            <td>Lidocaine vial 2%</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Y5taUvzIWlL'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oEBEUQu9QVd'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IvFdKAzLw5M'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='N3ScCH97Rt1'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='uGbVD6Eh5vI'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">18</td>
                            <td>Phenobarbital tab 30mg</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='cSfMgeCX1Zt'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ObBhm3UT1hP'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JKW5zsJgDfg'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dkYil8003Oy'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jFxPmJ2i9vV'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>

                        <tr>
                            <td class="special">19</td>
                            <td>Morphine hcl tab 10 mg</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='RGQZgeJxwal'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Wl0uWvCQYx0'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ehDU5vpcqQq'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='LK0RV9NB0Qe'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PjR4AV4mDI3'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">20</td>
                            <td>Captopril tab 25 mg</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='h02PNZ3exid'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VpaepYouFNK'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='C69XYKwVZ03'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bIS1ZPbS7IQ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dHLKyyDLsxv'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">21</td>
                            <td>Hydrochlorothiazide Solid oral 25 mg</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='dZXW3zzZeBl'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vizSkYPMFM9'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tN27hhZzOha'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ScDhrChyTrv'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fPygxZVJ7ZM'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">22</td>
                            <td>Insulin Inj Rapid 100 UI/ml</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vEKz2x7dxTI'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='de2p9E1I5nM'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BItd0Ie8aE0'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IGG9FNjYK4H'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nkZufgixyx0'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special">23</td>
                            <td>InsulinInj lente 100 UI/m</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZJbYj4KCb2R'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Lim2VoAZGp1'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='maGLLRDktsW'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kZqYEFZmW0D'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special7"></td>
                            <td class="special7">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pr63PcD7Lfd'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>

            <div className="medical_imagery_section">
                <table className='medicalImagery'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="4">XX. Medical Imagery/ Imagerie Médicale</th>
                        </tr>
                        <tr>
                            <th class="special10">X-Ray (Radiology)/ X-Ray (Radiologie)</th>
                            <th class="special4">Number</th>
                            <th class="special10">Other/ <i>Autres</i> </th>
                            <th class="special4">Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="special10">1. X-Ray Lung / <i>X-Ray Poumons</i> </td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hanMLAwzbnH'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special10">6. Gastroscopy/ <i>Gastroscopie</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='x22DY4l0OQ7'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special10">2. X-Ray Bones/ <i>X-Ray Os</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xXI1BxFtUxK'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special10">7. Ultrasound (Echography)/<i>Echographie</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AarhsOnulhG'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special10">3. X-Ray Abdomen without preparation/ <i>X-Ray abdomen sans préparation</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wniVHb8nnRx'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special10">8. ECG</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XuP28WxTGvQ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special10">4. X-Ray Abdomen with dye/<i> X-Ray abdomen avec préparation</i> </td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tZxntBDQyK6'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special10">9 Other medical imagery/ <i>Autres examens d’imagerie médicale</i></td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zfzWLa86JnL'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="special10">5. X-Ray other/ Autres</td>
                            <td class="special4">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='t29FCe967lt'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                            <td class="special10"></td>
                            <td class="special4"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="ambulance_section">
                <table className='ambulance'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="2">XXI. AMBULANCE</th>
                        </tr>
                        <tr>
                            <th class="specialth1">a. Number of ambulance </th>
                            <th class="specialth2">Total Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. Total Number of ambulances</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O2eseKx8fnq'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>2. Well-functioning</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xivocdJjyXZ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>3. Bad conditions still in service</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ZZtpLbxagRR'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>4. Out of service-Serviceable</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DdunwBg465u'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>5. Out of service-To be disposed</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Eri21akE89t'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>6. Vehicle had accident this month</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bLSmuFkRqcf'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <th class="specialth1">b. Ambulance Finance</th>
                            <th class="specialth2"></th>
                        </tr>
                        <tr>
                            <th class="specialth3">Total Receipts (A)</th>
                            <th class="specialth4">Amount</th>
                        </tr>
                        <tr>
                            <td>1. Total cash received on hand this month (a)</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U14H8REynIC'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>2. Total receivables (b)</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='uszOHaJMQmW'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>Total Receipts (c) (c = (a+b))</td>
                            <td class="special8"></td>
                        </tr>
                        <tr>
                            <th class="specialth3">Expenditures (B)</th>
                            <th class="specialth4">Amount</th>
                        </tr>
                        <tr>
                            <td>3. Fuel (d)</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AvW1bMlogEO'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>4. Ambulance Maintenance and repair/ Vehicle inspection/Garage (e)</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='m76oBP8VcVG'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>5. Ambulance insurance (f)</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ksUKgtbXUwR'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>Ambulance Total Expenses (g)=(d+e+f)</td>
                            <td class="special8"></td>
                        </tr>
                        <tr>
                            <th class="specialth3">Credit (C)</th>
                            <th class="specialth4">Amount</th>
                        </tr>
                        <tr>
                            <td>6. Credits at the beginning of the month (h)</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gfFLdT8ykWx'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>7. (+) Additional credits during the month (i)</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JeD62jNrTS7'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>8. (-) Reimbursements during the month (j)</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bGZ3veIGN52'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>Total credits at the end of the month (k) = (h+i)-(j)</td>
                            <td class="special8"></td>
                        </tr>
                        <tr>
                            <th class="specialth3">Financial Statement (D)</th>
                            <th class="specialth4">Amount</th>
                        </tr>
                        <tr>
                            <td>9. Total available at the beginning of the month (l)</td>
                            <td class="special8">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='h7O4b9bw94v'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>Balance of receipts and expenses (m) = (c-g)</td>
                            <td class="special8"></td>
                        </tr>
                        <tr>
                            <td>Total available at the end of the month (General bank account) n=(l+m)+j</td>
                            <td class="special8"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="staffing_section">
                <table className='staffing'>
                    <thead>
                        <tr>
                            <th class="specialth" colSpan="12">XXII. Staffing Information (Quarterly reporting form)</th>
                        </tr>
                        <tr>
                            <th class="speci"></th>
                            <th class="special12"></th>
                            <th class="special1" colSpan="2">Gender</th>
                            <th style={{ width: "240px" }} colSpan="6">Age Group</th>
                            <th class="special1" colSpan="2">Nationalit</th>
                        </tr>
                        <tr>
                            <th class="speci">A</th>
                            <th class="special12">Category </th>
                            <th class="special5">Male </th>
                            <th class="special5">Female </th>
                            <th class="special5">&lt;25 Yrs</th>
                            <th class="special5">25-34 yrs</th>
                            <th class="special5">35-44 yrs</th>
                            <th class="special5">45-54 yrs</th>
                            <th class="special5">55-64 yrs</th>
                            <th class="special5">&gt;65 Yrs </th>
                            <th class="special5">Rwandan </th>
                            <th class="special5">Foreign</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="speci">1</td>
                            <td class="special12">Doctors (Specialist)</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GZnIUHOpThq'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GZnIUHOpThq'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mog4xKMIM7H'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mog4xKMIM7H'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mog4xKMIM7H'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mog4xKMIM7H'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mog4xKMIM7H'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mog4xKMIM7H'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Wmd0YN03NHO'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Wmd0YN03NHO'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">2</td>
                            <td class="special12">Doctors (Generalist)</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='w0DuHL128r3'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='w0DuHL128r3'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jQTWnukRrd7'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jQTWnukRrd7'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jQTWnukRrd7'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jQTWnukRrd7'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jQTWnukRrd7'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jQTWnukRrd7'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FUFwmCsB00x'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FUFwmCsB00x'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">3</td>
                            <td class="special12">Dental Surgeons</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wExr5Sdugre'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='wExr5Sdugre'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NNaB2Z1VhV3'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NNaB2Z1VhV3'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NNaB2Z1VhV3'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NNaB2Z1VhV3'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NNaB2Z1VhV3'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='NNaB2Z1VhV3'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jNaihwAASbk'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jNaihwAASbk'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">4</td>
                            <td class="special12">Nurses</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lP5i0XXKsjk'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lP5i0XXKsjk'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BIv0j1J0eeV'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BIv0j1J0eeV'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BIv0j1J0eeV'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BIv0j1J0eeV'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BIv0j1J0eeV'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BIv0j1J0eeV'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='afkRTlqbBuF'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='afkRTlqbBuF'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">5</td>
                            <td class="special12">Midwives</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JP8vodIbQlp'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JP8vodIbQlp'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BPiFH0uLHx4'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BPiFH0uLHx4'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BPiFH0uLHx4'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BPiFH0uLHx4'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BPiFH0uLHx4'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='BPiFH0uLHx4'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ExVA7Yd9vSR'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ExVA7Yd9vSR'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">6</td>
                            <td class="special12">Dentist therapist</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='m0niswGZH49'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='m0niswGZH49'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sCF3OHv7PdG'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sCF3OHv7PdG'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sCF3OHv7PdG'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sCF3OHv7PdG'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sCF3OHv7PdG'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sCF3OHv7PdG'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WRBOFuHQm1R'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='WRBOFuHQm1R'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">7</td>
                            <td class="special12">Pharmacists</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VYfnzjFdzuR'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VYfnzjFdzuR'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Z16Dag2z0AX'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Z16Dag2z0AX'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Z16Dag2z0AX'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Z16Dag2z0AX'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Z16Dag2z0AX'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Z16Dag2z0AX'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Fu04GGYJXmT'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Fu04GGYJXmT'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">8</td>
                            <td class="special12">Lab technicians</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rNHnkW4S7rd'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rNHnkW4S7rd'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TNVRXkIDAHs'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TNVRXkIDAHs'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TNVRXkIDAHs'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TNVRXkIDAHs'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TNVRXkIDAHs'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TNVRXkIDAHs'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='p8TLGoRtXSR'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='p8TLGoRtXSR'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">9</td>
                            <td class="special12">Ophthalmology clinical Officers</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XWw4DqQ0wwq'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XWw4DqQ0wwq'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TKNWaLpnKpE'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TKNWaLpnKpE'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TKNWaLpnKpE'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TKNWaLpnKpE'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TKNWaLpnKpE'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TKNWaLpnKpE'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aIjbXzqW3nc'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aIjbXzqW3nc'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">10</td>
                            <td class="special12">Non-Physician Anesthetists(Anesthesia Technician)</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CQpeKaJbJBA'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CQpeKaJbJBA'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Rc9h4DubWuA'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Rc9h4DubWuA'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Rc9h4DubWuA'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Rc9h4DubWuA'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Rc9h4DubWuA'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Rc9h4DubWuA'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rgTGU0Mx5DK'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rgTGU0Mx5DK'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">11</td>
                            <td class="special12">Nutritionist</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xuGC5Uh43eY'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xuGC5Uh43eY'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IkuttFUP2fd'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IkuttFUP2fd'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IkuttFUP2fd'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IkuttFUP2fd'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IkuttFUP2fd'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='IkuttFUP2fd'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YWre7ktcZmQ'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YWre7ktcZmQ'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">12</td>
                            <td class="special12">Mental Health Nurses</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='uuI7MMhM4Hh'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='uuI7MMhM4Hh'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xycb4ifDp3m'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xycb4ifDp3m'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xycb4ifDp3m'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xycb4ifDp3m'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xycb4ifDp3m'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xycb4ifDp3m'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CgiX0prfdrz'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CgiX0prfdrz'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">13</td>
                            <td class="special12">Medical Imagery Technologists</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rKfL44oBMGS'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rKfL44oBMGS'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zmm9CTTBntd'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zmm9CTTBntd'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zmm9CTTBntd'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zmm9CTTBntd'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zmm9CTTBntd'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zmm9CTTBntd'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qsPPgPGHvAN'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qsPPgPGHvAN'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">14</td>
                            <td class="special12">Environmental Health officers</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QQoAcU0wL14'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QQoAcU0wL14'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgZ6blNuqO0'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgZ6blNuqO0'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgZ6blNuqO0'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgZ6blNuqO0'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgZ6blNuqO0'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgZ6blNuqO0'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gtbXoABCG0j'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gtbXoABCG0j'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">15</td>
                            <td class="special12">Biomedical technician</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='R2c4MyJ8C6u'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='R2c4MyJ8C6u'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aDov73Mflvh'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aDov73Mflvh'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aDov73Mflvh'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aDov73Mflvh'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aDov73Mflvh'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='aDov73Mflvh'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iuSlhuZXmyx'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iuSlhuZXmyx'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">16</td>
                            <td class="special12">Physiotherapis</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DIkAJjfK3mz'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='DIkAJjfK3mz'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YpqfYEOJP8E'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YpqfYEOJP8E'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YpqfYEOJP8E'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YpqfYEOJP8E'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YpqfYEOJP8E'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YpqfYEOJP8E'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fvdrqlwv6Un'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fvdrqlwv6Un'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">17</td>
                            <td class="special12">Health Information System Staff(Data manager, M&E, supervisors)</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mhkbUKOmxNZ'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='mhkbUKOmxNZ'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='n5Lzs11Ul5Q'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='n5Lzs11Ul5Q'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='n5Lzs11Ul5Q'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='n5Lzs11Ul5Q'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='n5Lzs11Ul5Q'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='n5Lzs11Ul5Q'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='RwGoYIgfc96'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='RwGoYIgfc96'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">18</td>
                            <td class="special12">Social Worker</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CgOMfXL9Sse'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CgOMfXL9Sse'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ifWGkI29HmF'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ifWGkI29HmF'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ifWGkI29HmF'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ifWGkI29HmF'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ifWGkI29HmF'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ifWGkI29HmF'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hkqb2vVWxm8'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='hkqb2vVWxm8'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">19</td>
                            <td class="special12">Clinical Psychologis</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ka3DyMgGmOR'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='ka3DyMgGmOR'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AtASwwVQYMm'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AtASwwVQYMm'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AtASwwVQYMm'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AtASwwVQYMm'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AtASwwVQYMm'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='AtASwwVQYMm'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bwQtACxFVZ4'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bwQtACxFVZ4'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td class="speci">20</td>
                            <td class="special12">Administrative and Support Personne</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rmbMULzuiSN'&&dataValue.categoryOptionCombo=='s8fha2EkCIC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='rmbMULzuiSN'&&dataValue.categoryOptionCombo=='YXdQtfRTOUt'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='riQFR9vU6Wb'&&dataValue.categoryOptionCombo=='wg5ekUL9Yam'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='riQFR9vU6Wb'&&dataValue.categoryOptionCombo=='VPifjbrgTFf'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='riQFR9vU6Wb'&&dataValue.categoryOptionCombo=='sVCsdHTZ7vX'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='riQFR9vU6Wb'&&dataValue.categoryOptionCombo=='DAzEBw483vi'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='riQFR9vU6Wb'&&dataValue.categoryOptionCombo=='xxOqZ8MwNMb'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='riQFR9vU6Wb'&&dataValue.categoryOptionCombo=='UZmB2yalyWe'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oTi8UfkegT8'&&dataValue.categoryOptionCombo=='cmjKT4JiauC'?dataValue.value:''}</span>))}</td>
                            <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oTi8UfkegT8'&&dataValue.categoryOptionCombo=='UASIAOSjEI4'?dataValue.value:''}</span>))}</td>
                        </tr>
                    </tbody>
                </table>
               </div> 


            <button className='input' onClick={onclose}>Cancel</button>
            <button className='primary'>Download</button>
        </div>
    )}

    
 export default Form;