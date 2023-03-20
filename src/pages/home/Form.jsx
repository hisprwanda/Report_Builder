import React ,{ useRef }from 'react';
import './Popup.scss'
import './preview.scss'
import Logo  from './Logo.jpeg';
import { useReactToPrint } from "react-to-print";
const Form = ({visible }) =>{
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "District Monthly Report",
    
  });
    if (!visible) return null ;
    return (
        <div>
            <div ref={componentRef}>

            <header className='section'>
                <img src={Logo}></img>
                <p>
                  <h1>Health Centers Monthly HMIS Report</h1>
                  <h2><i>Rapport Mensuel SIS de l’Hôpital de district</i></h2>
                </p>
            </header>
            <table align="center" className='identification'>
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
                        <td class="special1"></td>
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

                            <td class="special11">1.Name of Health Center Manager/<i>Nom du Titulaire</i></td>
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
            <table align="center" className='outpatient'>
                <thead>
                    <th colSpan="6" class="specialth"> II. Outpatient Consultations/<i class="isp">Consultations Externes</i></th>
                </thead>
                <tbody>
                    <td style={{ width: "578px" }} class="tabletd1">
                        <td style={{ width: "553px" }}>
                            <tr>
                                <th colSpan="5">A) Outpatient Morbidity summary table/ <i>Tableau synthétique: Consultations externs</i></th>
                            </tr>
                            <tr>
                                <td rowSpan="2">Outpatient visits/ <i>Consultations Externes </i></td>
                                <td colSpan="2">&lt; 5 Yrs</td>
                                <td colSpan="2" style={{ maxWidth: "40px" }}> 5 years and above</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>F</td>
                                <td>M</td>
                                <td>F</td>
                            </tr>
                            <tr>
                                <td>New cases (NC)/ <i>Nouveaux cas</i></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Old cases/ <i>Anciens cas</i></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </td>

                    </td>
                    <td class="tabletd2" style={{ width: "40%", }}>
                        <tr>
                            <th style={{ maxWidth: "313px" }}>B) Health insurance status of new cases/<i> Assurance maladies pour nouveaux cas</i></th>
                            <th style={{ width: "104px" }}>TOTAL</th>
                        </tr>
                        <tr>
                            <td style={{ maxWidth: "313px" }}>Insured (Mutuelle or other insurance members)/<i> Assurés (Mutuelle ou autres assurances)</i></td>
                            <td style={{ width: "104px" }}></td>
                        </tr>
                    </td>
                </tbody>
            </table>
            <table align="center" className='referrals'>
                <thead>
                    <th>C)Refferals/<i>Transferts</i></th>
                    <th>Total</th>
                    <th>
                        D)Origin of Outpatient/<i>D) Origine de patients Ambulatoires(OPD)</i>
                    </th>
                    <th>Total</th>
                </thead>
                <tbody>
                    <><tr>
                        <td>1.Referred to Hospital/<i>Referes a l'hopital</i></td>
                        <td></td>
                        <td>1.New cases from the cactchment area(Zone)/<i>Nouveaux cas de la zone de Rayonnement(Zone)</i></td>
                        <td></td>
                    </tr>
                        <tr>
                            <td>2.Counter referrals recieved / <i>Contres referes recues</i></td>
                            <td></td>
                            <td>2.New cases from out of the Catchment area/<i>Nouveaux cas (hors zone)</i></td>
                            <td></td>
                        </tr></>

                </tbody>
            </table>
            <table align="center" className='newCasesOPD'>
                <thead>
                    <th colspan="3">E) New cases of priority health problems in OPD/<i>Nouveaux cas de maladies (Causes majeures de Consultation)</i></th>
                    <th colspan="2" class="special1">Under 5 years </th>
                    <th colSpan="2" class="special1">&gt;= 5 Year</th>
                </thead>
                <tbody>
                    <tr>
                        <td class="special">#</td>
                        <td>Diagnosis /<i>Diagnostique</i></td>
                        <td class="special2">ICD-11</td>
                        <th class="special5">M</th>
                        <th class="special5">F</th>
                        <th class="special5">M</th>
                        <th class="special5">F</th>
                    </tr>
                    <tr>
                        <td class="special">1.</td>
                        <td>Diarrhea diseases/<i>Maladies diarrheiques</i></td>
                        <td class="special2">1A40.Z</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">2.</td>
                        <td>Intestinal parasites others/<i>Parasites intestinale autres</i></td>
                        <td class="special2">B65-B83</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">3.</td>
                        <td>Snake Bite/<i>Morsure de serpent</i></td>
                        <td class="special2">8B42</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">4.</td>
                        <td>Amebiasis</td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">5.</td>
                        <td>Cysticercosis</td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">6.</td>
                        <td>Schistosomiasis</td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">7.</td>
                        <td>Pneumonia/<i>Pneumonie</i></td>
                        <td class="special2">CA40.Z</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">8.</td>
                        <td>Bronchitis</td>
                        <td class="special2">CA20</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">9.</td>
                        <td>other Acute Resiratory diseases/<i>Maladies aigues des voies respiratoires autres</i></td>
                        <td class="special2">CA07.0</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">10.</td>
                        <td>Acute Malnutrition/<i>Malnutrition Aigue</i></td>
                        <td class="special2">5B7Z</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">11.</td>
                        <td>HIV/AIDS related opportunustic Infection/<i>Infection opportuniste du VIH</i></td>
                        <td class="special2">1C62.3</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">12.</td>
                        <td>Gastritis and doudentitis/<i>Gastrite et Duodenite</i></td>
                        <td class="special2">DA51</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">13.</td>
                        <td>Scabies(Crusted or classic scabies)</td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">14.</td>
                        <td>Tungaiasis/Jigger Disease (mavunja)</td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">15.</td>
                        <td>Other Skin Diseases/<i>Maladies de la peau</i></td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">16.</td>
                        <td>Abscesses/<i>Abcès</i></td>
                        <td class="special2">D64.9</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">17.</td>
                        <td>Anemia/<i> Anémie (confirmée) </i></td>
                        <td class="special2">D64.9</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">18.</td>
                        <td>Viral hepatitis B,C CHRONIC/<i>Hépatite B,C Chronique</i></td>
                        <td class="special2">(B15-B19)</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">19.</td>
                        <td>Diseases of Urinary tract system/ <i>Maladies du système urinaire</i></td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">20.</td>
                        <td>Bone and joint Diseases, Other than fractures/ <i>Maladies des os et des articulations, auters que les traumatismes</i></td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">21.</td>
                        <td>Bone and Joint Fractures/ <i>Facture ousseuse et articulaire</i></td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">22.</td>
                        <td>Physical traumas, other than fractures/ <i>Traumatismes Physiques, Autres que les Fractures</i></td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">23.</td>
                        <td>Sepsis/ <i>Septicémie </i></td>
                        <td class="special2">IG40, 1g41</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">24.</td>
                        <td>Goitre/ <i>Goitre </i></td>
                        <td class="special2">5A01.Z</td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>
                    <tr>
                        <td class="special">25.</td>
                        <td>Gynecological problems/ <i>Problèmes gynécologiques</i></td>
                        <td class="special2"></td>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                        <th class="special5"></th>
                    </tr>


                </tbody>
            </table>
            <table align="center" className='eyeOralEar'>
                <thead>
                    <th colspan="3">F)Eye, oral and ear diseases /<i>Les Maladies Oculaires, Orales et oreille </i></th>
                    <th colspan="6" style={{ width: '160px', textAlign: 'center' }}>New cases/<i>New cases</i></th>

                </thead>
                <tbody>
                    <tr>
                        <td class="special"></td>
                        <td></td>
                        <td></td>
                        <th colSpan={"2"}>0-19 yrs </th>
                        <th colSpan={"2"}>20-39 yrs</th>
                        <th colSpan={"2"}>&gt;= 40 Yrs</th>

                    </tr>
                    <tr>
                        <td class="special"></td>
                        <th></th>
                        <td></td>
                        <th class="special1">M</th>
                        <th class="special1">F</th>
                        <th class="special1">M</th>
                        <th class="special1">F</th>
                        <th class="special1">M</th>
                        <th class="special1">F</th>
                    </tr>
                    <tr>
                        <th class="special">a</th>
                        <th>Eye diseases /<i>Maladies Oculaires</i></th>
                        <td class="special2"></td>
                        <td colSpan={"6"} class="special1"></td>

                    </tr>
                    <tr>
                        <td class="special">1.</td>
                        <td>Glaucoma/<i> Glaucome</i></td>
                        <td class="special2">H40</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">2.</td>
                        <td>Cataract/<i>Cataracte </i></td>
                        <td class="special2">H29.9</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">3.</td>
                        <td>Refractive error/<i>Erreurs de réfraction</i></td>
                        <td class="special2">H52.7</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">4.</td>
                        <td>Pinguecula/<i> Pinguécula</i></td>
                        <td class="special2">9A61.0</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">5.</td>
                        <td>Uveitis/<i>Uvéite</i></td>
                        <td class="special2">H20.9</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">6.</td>
                        <td>Presbyopia/<i>presbytie</i></td>
                        <td class="special2"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">7.</td>
                        <td>Diabetic retinopathy/<i> Rétinopathie diabétique</i></td>
                        <td class="special2">9B71.0Z</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">8.</td>
                        <td>Retinopathy of Prematurity/<i>Retinopathie chez les prématurés </i></td>
                        <td class="special2">9B71.3</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">9.</td>
                        <td>Allergic Conjunctivitis/<i>Conjonctivite Allergique</i></td>
                        <td class="special2">9A60.02</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">10.</td>
                        <td>Infectious Conjunctivitis/<i>Infection conjonctivale</i></td>
                        <td class="special2">9A60.Y</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">11.</td>
                        <td>Eye trauma/<i>Traumatisme occulaire</i></td>
                        <td class="special2">S05.9</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">12.</td>
                        <td>Pterygium/<i>Ptérygion</i></td>
                        <td class="special2">9A61.1</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">13.</td>
                        <td>Trachoma</td>
                        <td class="special2"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">14.</td>
                        <td>Other Eye diseases/<i>Autres maladies occulaires </i></td>
                        <td class="special2">H57.9</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <th class="special">B</th>
                        <th>Eye diseases /<i>Maladies Oculaires</i></th>
                        <td class="special2"></td>
                        <td colSpan={"6"} class="special1"></td>

                    </tr>
                    <tr>
                        <td class="special">1.</td>
                        <td>Otitis externa, unspecified/<i> Otitis externa, unspecified</i></td>
                        <td class="special2">AA3Z</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">2.</td>
                        <td>Disorders of external ear, unspecified/<i>Troubles de l'oreille externe, non spécifiés </i></td>
                        <td class="special2"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">3.</td>
                        <td>Suppurative otitis media, unspecified/ <i>Otite moyenne suppurée, non spécifié</i></td>
                        <td class="special2"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">4.</td>
                        <td>Hearing impairment/ deafness/<i>Déficience auditive/surdité </i></td>
                        <td class="special2">AA9Z</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">5.</td>
                        <td>Acute mastoiditis/ <i>Acute mastoiditis</i></td>
                        <td class="special2">AB52</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">6.</td>
                        <td>Chronic mastoiditis/<i>Mastoïdite Chronique </i></td>
                        <td class="special2">AB11.0</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">7.</td>
                        <td>Other ear diseases/ <i>Autres maladies de l’Oreille</i></td>
                        <td class="special2">AB11.1</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special"><b>C</b></td>
                        <th>Oral diseases</th>
                        <td class="special2"></td>
                        <td colSpan={"6"} class="special1"></td>

                    </tr>
                    <tr>
                        <td class="special">1.</td>
                        <td>Periodontal disease/<i> Maladies pérodontales </i></td>
                        <td class="special2">K05</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">2.</td>
                        <td>Disorders of tooth development and eruption (Excl.: embedded and impacted teeth)/<i>Troubles du développement et eruption dentaire</i></td>
                        <td class="special2">K00</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">3.</td>
                        <td>Embedded and impacted teeth/<i> Dents encarnées et impactées </i></td>
                        <td class="special2">K01</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">4.</td>
                        <td>Dental caries/<i> Carrie dentaire </i></td>
                        <td class="special2">K02</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">5.</td>
                        <td>Other diseases of hard tissues of teeth/<i> Autres maladies de l’email dentaire</i></td>
                        <td class="special2">K03</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">6.</td>
                        <td>Diseases of pulp and periapical tissues/<i>Maladies de la pulpe et couronne dentaire</i></td>
                        <td class="special2">K04</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">7.</td>
                        <td>Acute gingivitis/<i> Autre gencivite</i></td>
                        <td class="special2">K05</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">8.</td>
                        <td>Other disorders of gingiva and edentulous alveolar ridge/<i> Autres troubles de gencives et de la cavité alvéolaire</i></td>
                        <td class="special2">K06</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">9.</td>
                        <td>Dentofacial anomalies [including malocclusion]/<i>Anomalies dentofacial [y compris les anomalies d’occlusion]</i></td>
                        <td class="special2">K07</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td class="special">10.</td>
                        <td>Other Teeth and oro-buccal cavity diseases/<i> Autre Infections de dents et de la cavité buccale</i></td>
                        <td class="special2">K08.9</td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                </tbody>
            </table>
            <table align='center' className='dentalProcedures'>
                <thead>
                    <tr>
                        <th class="special3">d</th>
                        <th>Dental procedures</th>
                        <th class="special1">Code</th>
                        <th class="special2">Number</th>
                        <th class="special3"></th>
                        <th></th>
                        <th class="special1"> Code</th>
                        <th class="special2">Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="special3">1</td>
                        <td>Examination and Diagnosis, Clinical Oral </td>
                        <td class="special1">1000</td>
                        <td class="special2"></td>
                        <td class="special3">7</td>
                        <td>Root planing, periodontal</td>
                        <td class="special1">43400</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td class="special3">2</td>
                        <td>Radiographs</td>
                        <td class="special1">2100</td>
                        <td class="special2"></td>
                        <td class="special3">8</td>
                        <td>Denture Complete </td>
                        <td class="special1">51000</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td class="special3">3</td>
                        <td>Polishing/Cleaning</td>
                        <td class="special1">11100 </td>
                        <td class="special2"></td>
                        <td class="special3">9</td>
                        <td>Dentures, Repairs/Additions </td>
                        <td class="special1">55000</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td class="special3">4</td>
                        <td>Caries/Trauma/Pain Control</td>
                        <td class="special1">20100</td>
                        <td class="special2"></td>
                        <td class="special3">10</td>
                        <td>Therapeutic Tissue Conditioning</td>
                        <td class="special1">56500</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td class="special3">5</td>
                        <td>Restorations </td>
                        <td class="special1">23000</td>
                        <td class="special2"></td>
                        <td class="special3">11</td>
                        <td>Removals, (extractions), Erupted Teeth </td>
                        <td class="special1">71000</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td class="special3">6</td>
                        <td>Periodontal Services, Surgical </td>
                        <td class="special1">42000</td>
                        <td class="special2"></td>
                        <td class="special3">12</td>
                        <td>Removals, (extractions), residual roots</td>
                        <td class="special1">72300</td>
                        <td class="special2"></td>
                    </tr>
                </tbody>
            </table>
            <table className="malaria">
                <thead>
                    <tr>
                        <th colSpan="8" class="specialth">III. Malaria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowSpan='2' class="special"></th>
                        <th rowSpan='2'></th>
                        <th colSpan='2' style={{ width: '100px', textAlign: 'center' }}>OPD</th>
                        <th colSpan='2' style={{ width: '100px', textAlign: 'center' }}>Hospitalisation</th>
                        <th colSpan='2' style={{ width: '100px', textAlign: 'center' }}>Deaths</th>
                    </tr>
                    <tr>
                        <td class="special4">Under 5 yrs </td>
                        <td class="special4">&gt;=5Yrs </td>
                        <td class="special4">Under 5 yrs</td>
                        <td class="special4">&gt;=5Yrs</td>
                        <td class="special4">Under 5 yrs</td>
                        <td class="special4">&gt;=5Yrs</td>
                    </tr>

                    <tr>
                        <th class="special">a</th>
                        <th>Simple Malaria/<i>Paludisme simple</i> </th>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">1</td>
                        <td>All fever cases received//<i>tous les cas de fièvre reçus</i> </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Simple Malaria not in Pregnancy (exclude <i>post-partum</i>) /<i>Paludisme simple hormis les femmes enceintes et apres l'accouchement</i> </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Simple Malaria in Pregnancy/<i>Paludisme simple sur la grossesse</i> </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td>Simple Malaria in <i>post-partum (42 days after delivery</i>)/<i>Paludisme simple Durant la periode du postpartum dans les 42 jours après accouchement</i> </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">5</td>
                        <td>Simple Malaria with Minor Digestive Symptoms (not in Pregnancy)/<i>Paludisme simple avec troubles digestifs mineurs (exclure paludisme sur la grossesse)</i> </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">6</td>
                        <td>Simple Malaria with Minor Digestive Symptoms in Pregnancy/<i>Paludisme simple avec troubles digestifs mineurs sur la grossesse</i> </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">7</td>
                        <td>Simple Malaria with Minor Digestive Symptoms in <i>post-partum (within 42 days after delivery</i>)/<i>Paludisme simple avec troubles digestifs mineurs en postpartum (dans les 42 jours après accouchement)</i> </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <th class="special">b</th>
                        <th><i>SEVERE MALARIA</i>/<i>Paludisme severe</i> </th>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">1</td>
                        <td>Severe Malaria not in Pregnancy/<i>Paludisme severe exclu chez la femme enceinte</i> </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Severe Malaria in Pregnancy/<i>Paludisme severe chez la femme enceinte</i> </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Severe Malaria in postpartum (within 42 days after delivery)/<i>Paludisme severe en postpartum (dans les 42 jours après accouchement)</i> </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <th class="special">c</th>
                        <th><i>TREATMENT</i> </th>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td>Number of persons who received first line treatment with ACTs(Total)</td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">5</td>
                        <td>Number of persons who received first line treatment with Quinine(Total) </td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">6</td>
                        <td>Number of persons treated with Artesunate (Total)</td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                </tbody>
            </table>
            <table className='malariaCases'>
                <thead>
                    <th rowSpan="2" class="special">d</th>
                    <th rowSpan="2">Malaria cases Summary</th>
                    <th colSpan="2" style={{ width: "100px", alignItems: 'center' }}>Under 5 yrs</th>
                    <th colSpan="2" style={{ width: "100px", alignItems: 'center' }}> &gt;=5 yrs</th>
                    <tr>
                        <th class="special4">Male</th>
                        <th class="special4">Female</th>
                        <th class="special4">Male</th>
                        <th class="special4">Female</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td class="special">1</td>
                        <td>Malaria cases received in OPD</td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Inpatients Malaria cases</td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Severe Malaria cases</td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td>Malaria deaths</td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Mental patients hospitalized/ <i>Patients hospitalisés pour des troubles mentaux</i></td>
                        <td class="special2"></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Mental patients referred to upper level / <i>Patients référés à un niveau medical plus élevé</i></td>
                        <td class="special2"></td>
                        <td class="special2"></td>
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
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Post-traumatic stress disorder/ <i>Syndrome de Stress Post-Traumatique</i></td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Schizophrenia and other psychoses / <i>Schizophrénie et autres Psychoses</i></td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td>Somatoform disorders/<i>Troubles somatiques</i></td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">5</td>
                        <td>Mental disorders due to alcohol and substance abuse/ <i>Troubles mentaux dus à la toxicomanie</i></td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">6</td>
                        <td>Depression/ <i>Dépression</i></td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">7</td>
                        <td>Suicide attempt / <i>Suicide tentative</i></td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">8</td>
                        <td>Bipolar disorders/<i>Troubles bipolaires</i></td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">9</td>
                        <td>Neuro-development disorders/ <i>Troubles neurodéveloppementaux</i></td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">10</td>
                        <td>Epilepsy/<i>Epilepsie</i></td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">11</td>
                        <td>Other mental problems/<i>Autre problèmes mentaux</i></td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">12</td>
                        <td>Other neurological disorders</td>
                        <td class="special2"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Confirmed Cancer</td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Asthma/<i>Asthme</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td>Other Chronic respiratory diseases/<i>Autre maladies respiratoires chroniques</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">5</td>
                        <td>Diabetes - Type 1</td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">6</td>
                        <td>Diabetes - Type 2</td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">7</td>
                        <td>Diabetes gestational/<i>Diabetes sur grossesse</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">8</td>
                        <td>Hypertension/<i>Hypertension</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">9</td>
                        <td>Cardiomyopathies</td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">10</td>
                        <td>Coronary artery disease</td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">11</td>
                        <td>Pericardial disease</td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">12</td>
                        <td>Post Cardiac Surgical patients</td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">13</td>
                        <td>Heart failure</td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">14</td>
                        <td>Stroke/TIA/<i>Accident vasculo cerebrale</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">15</td>
                        <td>Rheumatic heart disease/<i>Maladie cardiaque rhumatismale</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">16</td>
                        <td>Congenital heart disease/<i>Maladie cardiaque congénitale</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">17</td>
                        <td>Other Cardiovascular diseases/<i>Autre maladie cardio vasculaire</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">18</td>
                        <td>Deep veinus thrombosis/ <i>Thrombose veineuse profonde</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">19</td>
                        <td> Renal failure/<i>Insufisance rénale</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">20</td>
                        <td>Other chronic kidney diseases/<i>Autre maladies rénaale chronique</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">21</td>
                        <td>Other endocrine and metabolic diseases/<i>Autre maladies hormonales et métabolique</i></td>
                        <td class="special2"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td style={{ width: "80px" }}></td>
                        <td style={{ width: "80px" }}></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Severe pain patients that receive morphine/ <i>Clients ayant de douleur sévère qui reçoivent de la morphine</i></td>
                        <td style={{ width: "80px" }}></td>
                        <td style={{ width: "80px" }}></td>
                    </tr>
                </tbody>
            </table>
            <table className='cancerScreening'>
                <thead>
                    <th colSpan="3" class="specialth">VII. Cancer screening</th>
                </thead>
                <tbody>
                    <tr>
                        <td class="special5">1</td>
                        <td>Women screened for cervical cancer/<i>Femmes dépistées pour le cancer du col</i></td>
                        <td style={{ width: "100px" }}></td>
                    </tr>
                    <tr>
                        <td class="special5">2</td>
                        <td>Women screened for breast cancer/ <i>Femmes dépistées pour le cancer de sein</i></td>
                        <td style={{ width: "100px" }}></td>
                    </tr>
                    <tr>
                        <td class="special5">3</td>
                        <td>Biopsies collected for all types of cancer/<i>Toute forme de Biopsies prélevée</i></td>
                        <td style={{ width: "100px" }}></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "20px" }}>2</td>
                        <td colSpan="2">Present at the beginning of the month/ <i>Présent au début du mois</i></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
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
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "20px" }}></td>
                        <td class="special">3.2</td>
                        <td> Non-referred patients/<i> Non Référés</i></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
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
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "20px" }}></td>
                        <td class="special">4.2</td>
                        <td>Unauthorized discharge/<i>Sortie non autorisé</i></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "20px" }}></td>
                        <td class="special">4.3</td>
                        <td>Deaths/<i> Décès</i></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "20px" }}></td>
                        <td class="special">4.4</td>
                        <td> Referred/ <i>Référés</i></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "20px" }}></td>
                        <td class="special">4.5</td>
                        <td>Counter-referred/ <i>Contre Référés</i></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "20px" }}>5</td>
                        <td colSpan="2">Present at the end of the month/ <i>Présenta la fin du mois</i></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "20px" }}>6</td>
                        <td colSpan="2">otal hospitalization days for discharged patients (c)/ <i>Somme total séjour des sortants (c)</i></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "20px" }}>7</td>
                        <td colSpan="2">Actual hospitalization days (This month only) (d)/<i> Nb journées. hosp. Effectives (d)</i></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
                        <td class="special1"></td>
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
                        <td class="special6"></td>
                        <td class="special6"></td>
                    </tr>
                    <tr>
                        <td>2. Road Traffic injuries (including cycling)/ <i>Blessures causées par la circulation routière</i></td>
                        <td class="special6"></td>
                        <td class="special6"></td>
                    </tr>
                    <tr>
                        <td>3. Emergency total Referred to higher level/ <i>Référés</i></td>
                        <td class="special6"></td>
                        <td class="special6"></td>
                    </tr>
                    <tr>
                        <td>4. Fire/burns (thermo, electrical, chemical)/<i>Brulures</i></td>
                        <td class="special6"></td>
                        <td class="special6"></td>
                    </tr>
                    <tr>
                        <td>Other injuries/<i>Autre traumatismes</i></td>
                        <td class="special6"></td>
                        <td class="special6"></td>
                    </tr>
                    <tr>
                        <td>6. Death in Emergency/<i>Décès dans le service des urgences</i></td>
                        <td class="special6"></td>
                        <td class="special6"></td>
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
                        <td class="special6"></td>
                        <td class="special6"></td>
                        <td class="special6"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Deaths/ <i>Décès</i></td>
                        <td class="special6"></td>
                        <td class="special6"></td>
                        <td class="special6"></td>
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
                        <td class="special6"></td>
                        <td>1. Road traffic accidents/ <i>Accidents de circulation routière</i></td>
                        <td class="special6"></td>
                        <td class="special6"></td>
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
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Other respiratory diseases/<i>Autre maladies respiratoire</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Acute Malnutrition/<i>Malnutrition Aigue</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td>HIV/AIDS related opportunistic Infection/<i>Infection opportuniste due VIH</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">5</td>
                        <td>Sexual transmitted diseases (STI)/<i>Maladies sexuellement transmissible</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">6</td>
                        <td>Intestinal parasites</td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">7</td>
                        <td>Diarrhea diseases/<i>Maladies Diarrhéiques</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">8</td>
                        <td>Skin diseases/<i>Maladies de la peau</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">9</td>
                        <td>Burns/ <i>Brulures</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">10</td>
                        <td>Hepatitis/ <i>Hépatite</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">11</td>
                        <td>Cirrhosis of the liver/ <i>Cirrhose du foie</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">12</td>
                        <td>Diseases of the stomach or the duodenum /<i>Gastrites et maladies duodénale</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">13</td>
                        <td>Appendicitis/ <i>Appendicites</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">14</td>
                        <td>Diseases of intestine/<i>Maladies intestinales</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">15</td>
                        <td>Diseases of the genitourinary system/<i>Maladies du system uro- génitale</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">16</td>
                        <td>Bone and Joint Diseases/<i>Maladies des os et des articulations, autres que les traumatismes</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">17</td>
                        <td>Bone and Joint injuries/ <i>Fracture osseuse et articulaire</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">18</td>
                        <td>Tetanus/<i>Tétanos</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">19</td>
                        <td>Cancer all/<i>Toutes les formes de cancer</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">20</td>
                        <td>Snake bites Envenomation</td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">21</td>
                        <td>Sepsis/<i>Septicémie</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">22</td>
                        <td>Tuberculosis/<i>Tuberculose</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">23</td>
                        <td>Gynecological problems/<i>Problèmes gynécologiques</i></td>
                        <td class="special6"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special2"></td>
                        <td rowSpan="13" class="special6"></td>
                    </tr>
                    <tr>
                        <td>2. Hernioraphy/ Hernioraphie</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>3. Laparotomy/Laparotomie</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>4. Thyroidectomy/ Thyroidectomie</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>5. Adenomectomy/Adenomectomie</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>6. Breast surgery/Operation de sein</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>7. Hydrocele repair/Réparation de l’hydrocèle</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>8. testis tortion repair/Réparation de la torsion testiculaire</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>9. hemorrhoidectomy/Ablation des hemorroides</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>10. Tissue debridement /Débridement tissulaire</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>11. Skin grafting</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>12. Hernia repair</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>13.Surgery due to ascariasis complications</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td rowSpan="15" class="special">2</td>
                        <td rowSpan="15" class="special2">Gyneco - Obstetrical/ Gyneco-obstetricales</td>
                        <td>1.Caesarean Section/Césarienne</td>
                        <td class="special2"></td>
                        <td rowSpan="15" class="special6"></td>
                    </tr>
                    <tr>
                        <td>2. Dilatation and Curettage/ <i>Dilatation et curettage</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>3. Gynecological Hysterectomy/ <i>Hysterectomie gynecologique</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>4. Obstetrical Hysterectomy/ <i>Hysterectomie obstetricale</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>5. Laparotomy for uterine rupture / <i>Laparatomie pour rupture uterine</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>6. Laparotomy for ectopic pregnancy/ <i>Laparatomie pour grossesse extra-uterine</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>7. Uterine repair / <i>Réparation de rupture utérine</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>8. Myomectomy/ <i>myomectomie</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>9. Vesico vaginal Fistula Repair/<i>Fistules vesico-vaginale réparées</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>10. Recto vaginal Fistula Repair/<i>Fistules recto-vaginale réparées</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>11. Ureteric vaginal Fistula Repair /<i>Fistules uretero-vaginale réparées</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>12 Tubal Ligation/ <i>Ligature des trompes</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>13 Vasectomy/ <i>Vasectomie</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>14. Episiotomy/ <i>Episiotomie</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>15.Other Gyneco -Obstetrical Surgery</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td rowSpan="7" class="special">3</td>
                        <td rowSpan="7" class="special2">Orthopedic </td>
                        <td>1. Amputations</td>
                        <td class="special2"></td>
                        <td rowSpan="7" class="special6"></td>
                    </tr>
                    <tr>
                        <td>2. Open fracture repair by external fixation/<i>Fixation externe de fracture ouverte</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>3.Clubfoot repair</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>4. Closed treatment of fracture</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>5.Joint dislocation treatment</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>6.Drainage of osteomyelitis/ <i>septic arthritis</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>7.Orthopedic surgery other/<i>Autre chirurgie orthopédique</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td rowSpan="7" class="special">4</td>
                        <td rowSpan="7" class="special2">Ophthalmologic</td>
                        <td>1. Glaucoma/Glaucome</td>
                        <td class="special2"></td>
                        <td rowSpan="7" class="special6"></td>
                    </tr>
                    <tr>
                        <td>2. Trachoma/<i>Trachome</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>3. Cataract/<i>Cataracte</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>4. Eye Trauma/<i>Traumatisme oculaire</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>5. Ophthalmological surgery other/<i>Autre chirurgie oculaire</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>6. Cornea transplantation</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>7.Pterygium</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td rowSpan="2" class="special">5</td>
                        <td rowSpan="2" class="special2">Plastic surgery</td>
                        <td>1. Cleft palate,cleft lip/<i>Bec de lièvre</i></td>
                        <td class="special2"></td>
                        <td rowSpan="2" class="special6"></td>
                    </tr>
                    <tr>
                        <td>2. Other plastic surgery/<i>Autre chirurgie plastique</i></td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td rowSpan="9" class="special">6</td>
                        <td rowSpan="9" class="special2">Other Surgery procedures </td>
                        <td>1. Neonatal abdominal defect repair</td>
                        <td class="special2"></td>
                        <td rowSpan="9" class="special6"></td>
                    </tr>
                    <tr>
                        <td>2. Colostomy for imperforate anus</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>3. Cystostomy</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>4. Chest tube insertion</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>5. Tracheostomy/ Cricothyroidotomy</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>6. Circumcision</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>7. Suturing wound</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>8. Wound debridement</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td>9. Incision and drainage of abscess</td>
                        <td class="special2"></td>
                    </tr>
                    <tr>
                        <td rowSpan="3" class="special">7</td>
                        <td colSpan="4">SURGICAL INTERVENTIONS TOTA</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" class="special2">Of which</td>
                        <td> 1. Major surgery/<i>Chirurgie majeure</i></td>
                        <td class="special2"></td>
                        <td rowSpan="2" class="special6"></td>
                    </tr>
                    <tr>
                        <td>2. Minor surgery/<i>Chirurgie mineure</i></td>
                        <td class="special2"></td>
                    </tr>

                </tbody>
            </table>
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
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Regional Anesthesia/ <i>Anesthésie Régionale (rachianesthésie,..)</i></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Local Anesthesia/ <i>Anesthésie Locale</i></td>
                        <td class="special5"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
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
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Number of sessions provided by Occupational Therapist (OT)</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Number of sessions provided by Speech and language therapist (SLT)</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td>Total new rehabilitation cases received</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <th class="special"></th>
                        <th></th>
                        <th class="special7" colSpan="2">Total</th>
                    </tr>
                    <tr>
                        <td class="special">5</td>
                        <td>Number of outreach sessions</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                </tbody>
            </table>
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
            <table className='postnatalCare'>
                <thead>
                    <tr class="specialth">
                        <th colSpan="2" style={{ color: "aliceblue" }}>XIII. Postnatal Care</th>
                        <th class="special5" style={{ color: "aliceblue" }}>Mother</th>
                        <th class="special5" style={{ color: "aliceblue" }}>New Born</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="special">1</td>
                        <td>PNC1 visits within 24 Hours of birth /<i>Première CPoN endéans 24 heures</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Mothers screened for anemia during PNC 1 Visit/<i> Mères depistées pour anémie pendant CPoN 1</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Mothers received Iron/Folic Acid during PNC1/ Meres ayant recu le fer/<i>acide folique a la CPoN1</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td>Anemia (Hb&lt;9.5 Gr/Dl) detected during PNC Visits (PNC1s)/ <i>Mères anémique detectées pendant la première CPoN</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">5</td>
                        <td>Complications/danger signs detected during any PNC visit/ <i>Les mères ou nouveau-nés avec complications ou signes de danger detectés à n’importe quelle CPoN</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">6</td>
                        <td>Referrals done for complications at any visit/ <i>Les transferts faits durant les CPoN</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Newborns discharged from KMC Unit/<i>Nouveaux nés sorties de KMC</i></td>
                        <td class="special5"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">2</td>
                        <td class="specialtd">Prematurity (22 to 27 weeks)/<i>Prematurité (22 a 27 semaines)</i> </td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">3</td>
                        <td class="specialtd">Prematurity (28 to 37weeks)/<i>Prematurité (28 a 37 semaines)</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">4</td>
                        <td class="specialtd">Congenital malformations, / <i>malformations congenitales</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">5</td>
                        <td class="specialtd">Pneumonia/<i>Pneumonie</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">6</td>
                        <td class="specialtd">Skin infections/<i>Infections cutanées</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">7</td>
                        <td class="specialtd">Neonatal infections (Sepsis) /<i>septicemie suspectée</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">8</td>
                        <td class="specialtd">Tetanus Neonatal/<i>Tetanos Néonatal</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">9</td>
                        <td class="specialtd">Hypothermia at admission/<i>Hypothermie à l'admission</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">10</td>
                        <td class="specialtd">All other causes of neonatal morbidity /<i>Autres morbidités néonatales</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">B</td>
                        <td class="specialtd">Total neonates born in this health facility /<i>Nombre total des bébés nés dans cet formation sanitaire</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">C</td>
                        <td class="specialtd">Total neonates born outside this health facility /<i>Total des bébés qui sont nés en dehors de cet formation sanitaire</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special1"></td>
                        <td class="special5"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>Number of malnourished patients detected<i> (Count individuals not malnutrition types below)</i></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>Severe acute malnutrition(With complication)/<i>malnutrition aigüe sévère(avec complications)</i></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td>Moderate acute Malnutrition(with complication)/<i>malnutrition aigüe modérée(avec complications)</i></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">5</td>
                        <td>Underweight/<i>Insuffisance pondérale</i></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">6</td>
                        <td>Chronic malnutrition (stunting)/ <i>Malnutrition chronique</i></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">7</td>
                        <td>Referred to outpatient malnutrition program (Health Centre)/ <i>Référé au programme de la malnutrition (ambulatoire)</i></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special">8</td>
                        <td>Referred to inpatient malnutrition program (Hospital)/ <i>Référé au programme de PEC de la malnutrition (Hôpital)</i></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
                        <td class="special4"></td>
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
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="specia">2</td>
                        <td class="special5">Admissions</td>
                        <td class="special4">2.1 New Cases /<i> Nouveaux cas</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="specia" rowSpan="4">3</td>
                        <td class="special5" rowSpan="4">Discharges<br />/<i>Sortant du mois</i></td>
                        <td class="special4">3.1 Cured /<i>Guéri</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special4">3.2 Counter referrals to health center/ <i>Contres référés au CS</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special4">3.3 Abandoned / <i>Abandonnés</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="special4">3.4 Died /<i> Décès</i></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
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
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td class="special9">Oral Contraceptives, combined /<i>Contraceptifs oraux, combinée</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td class="special9">njectables (Depo-Provera) / <i>Injectables (Depo-Provera)</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td class="special9">Injectables_DMPA-SC/<i>Injectables_DMPA SC</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">5</td>
                        <td class="special9">Injectables (Norristerat)/<i>Injectables (Norristerat)</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">6</td>
                        <td class="special9">mplants/<i>Implanon NXT</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">7</td>
                        <td class="special9">Implants/<i>Jadelle</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">8</td>
                        <td class="special9">IUD_Copper/ <i>DIU</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">9</td>
                        <td class="special9">UD_Hormonal</td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">10</td>
                        <td class="special9">Male condoms / <i>Préservatifs masculins</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">11</td>
                        <td class="special9">Female condoms /<i> Préservatifs féminins</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">12</td>
                        <td class="special9">Cycle beads / <i>MJF (Collier)</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">13</td>
                        <td class="special9">Lactational amenorrhea (LAM) / <i>MAMA</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">14</td>
                        <td class="special9">Auto-observation</td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">15</td>
                        <td class="special9">Tubal ligations/<i>Ligature des trompes</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td class="special">16</td>
                        <td class="special9">Vasectomy/<i>Vasectomie</i></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
                        <td class="special8"></td>
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
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialcl"></td>
                        <td class="specialcl"></td>
                    </tr>
                    <tr>
                        <td class="special11" colSpan="3">2. Rapid Diagnostic Tests for Malaria/ Test rapide du paludisme</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialcl"></td>
                        <td class="specialcl"></td>
                    </tr>
                    <tr>
                        <td class="special11" colSpan="3">3. Stools Samples TOTAL/. Examens de selles (nombre d’échantillons analysés)</td>
                        <td class="specialtd4" colSpan="3"></td>
                        <td class="special5"></td>
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
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td class="special9">3.2 Trichuris (Tricocephale)</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td class="special9">3.3 Ankylostoma (hookworms)</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td class="special9">3.4 Schistosoma in stool</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
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
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td class="special9">3.6 Entamoeba histolytica</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td class="special9">3.7 Giardia lamblia or intestinalis</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td class="special9">3.8 Enterobius vermicularis (Oxyure)</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td class="special9">3.9 Strongyloides stercolaris (Angillule)</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td class="special9">3.10 Trichomonas intestinalis</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td class="special9">3.11 Other parasites in stools/ Autres parasites intestinaux</td>
                        <td class="special9" colSpan="3"></td>
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
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td class="special9">4.2. Albumin</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>

                    <tr>
                        <td class="special9">4.3. Pregnancy test/ <i>Test de grossesse</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <th class="specialth1" colSpan="9">5. Bacteriology/ <i class="ispg">Bactériologie</i></th>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td rowSpan="3" style={{ maxWidth: "30px" }}> 5.1.Vaginal-<br/>swab<br/>/<i>Ecouvillon vaginal</i></td>
                        <td class="special9">5.1.a Fresh/<i> Frais</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td class="special9">5.1.b Gram/<i> Gram</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td class="special9">5.1.c Of which diplococcus gram (-)/<i>don’t diplococcus gram (-)</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td rowSpan="3" style={{ maxWidth: "30px" }}>5.2. Urethral<br/> swab<br/>/<i>Ecouvillon urétral</i></td>
                        <td class="special9">5.1.a Fresh/ <i>Frais</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td class="special9">5.1.b Gram/ <i>Gram</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td class="special9">5.1.c Of which diplococcus gram (-)/<i>don’t diplococcus gram (-)</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td rowSpan="3" class="special5"> 5.3 Urine</td>
                        <td class="special9">5.1.a Fresh/ <i>Frais</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td class="special9">5.1.b Gram/<i> Gram</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="special5"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td class="special9">5.1.c Of which diplococcus gram (-)/<i>don’t diplococcus gram (-)</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <th class="specialth1" colSpan="9" s>6. Blood/ Sang</th>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }} rowSpan="9"></td>
                        <td style={{ width: "150px" }} colSpan="2">6.1. RPR</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }} colSpan="2">6.2. HIV final result/ <i>HIV résultat final</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }} colSpan="2">6.3. ESR/<i>VS</i></td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="special1" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }} colSpan="2">6.4. Full Blood Count (FBC/NFS)</td>
                        <td class="specialtd4" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="special1" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }} colSpan="2">6.5. ALAT(GPT) (Alanine Aminotransferase )</td>
                        <td class="specialtd4" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="special1" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }} colSpan="2">6.6. Creatinine</td>
                        <td class="specialtd4" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="special1" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }} colSpan="2">6.7. Blood glucose</td>
                        <td class="specialtd4" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="special1" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }} colSpan="2">6.8. Amylase</td>
                        <td class="specialtd4" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="special1" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }} colSpan="2">6.9. CD4</td>
                        <td class="specialtd4" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="special1" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td style={{ width: "150px" }} colSpan="2">6.10. Pregnancy test</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td style={{ width: "150px" }} colSpan="2">6.11. CRAG (Serum Cryptococcal Antigen)</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td style={{ width: "150px" }} colSpan="2">6.12. HBV (Hepatitis B Virus)</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <td style={{ width: "10px" }}></td>
                        <td style={{ width: "150px" }} colSpan="2">6.13. HCV (Hepatitis C Virus)</td>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="specialtd5" colSpan="2"></td>
                    </tr>
                    <tr>
                        <th class="special11" colSpan="3">7. Cerebro Spinal fluid /<i> Liquide cérebro spinale</i></th>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="special1" colSpan="2"></td>
                    </tr>
                    <tr>
                        <th class="special11" colSpan="3">8. Other Lab tests /<i> Autres tests de laboratoires</i></th>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="special1" colSpan="2"></td>
                    </tr>
                    <tr>
                        <th class="special11" colSpan="3">.TOTAL tests conducted in the laboratory/ <i>TOTAL tests de laboratoire</i></th>
                        <td class="special9" colSpan="3"></td>
                        <td class="specialtd1"></td>
                        <td class="special1" colSpan="2"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">2</td>
                        <td>CoartemArtéméther+ Lumefanthrine tab 20 mg + 120mg (6x2)</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">3</td>
                        <td>CoartemArtéméther+ Lumefanthrine tab 20 mg + 120mg (6x3)</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">4</td>
                        <td>CoartemArtéméther+ Lumefanthrine tab 20 mg + 120mg (6x4)</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">5</td>
                        <td>Artesunate Suppository 200 mg</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">6</td>
                        <td>Artesunate Suppository 100 mg</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">7</td>
                        <td>Artesunate Vial 60mg/ml</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">8</td>
                        <td>Rapid Diagnostic Tests for Malaria (mRDT)</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">9</td>
                        <td>Quinine vial 300 mg/ml</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">10</td>
                        <td>Quinine tab 300 mg</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">11</td>
                        <td>Amoxycillin syrup 125mg/5ml</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">12</td>
                        <td>Ampicillin vial 500mg</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">13</td>
                        <td>Cloxacillin tab 250mg</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">14</td>
                        <td>Gentamycin vial 40mg/ml</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">15</td>
                        <td>Ketamine vial 50mg/ml</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">16</td>
                        <td>Ocytocin vial 5ui</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">17</td>
                        <td>Lidocaine vial 2%</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">18</td>
                        <td>Phenobarbital tab 30mg</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>

                    <tr>
                        <td class="special">19</td>
                        <td>Morphine hcl tab 10 mg</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">20</td>
                        <td>Captopril tab 25 mg</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">21</td>
                        <td>Hydrochlorothiazide Solid oral 25 mg</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">22</td>
                        <td>Insulin Inj Rapid 100 UI/ml</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                    <tr>
                        <td class="special">23</td>
                        <td>InsulinInj lente 100 UI/m</td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                        <td class="special7"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special4"></td>
                        <td class="special10">6. Gastroscopy/ <i>Gastroscopie</i></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special10">2. X-Ray Bones/ <i>X-Ray Os</i></td>
                        <td class="special4"></td>
                        <td class="special10">7. Ultrasound (Echography)/<i>Echographie</i></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special10">3. X-Ray Abdomen without preparation/ <i>X-Ray abdomen sans préparation</i></td>
                        <td class="special4"></td>
                        <td class="special10">8. ECG</td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special10">4. X-Ray Abdomen with dye/<i> X-Ray abdomen avec préparation</i> </td>
                        <td class="special4"></td>
                        <td class="special10">9 Other medical imagery/ <i>Autres examens d’imagerie médicale</i></td>
                        <td class="special4"></td>
                    </tr>
                    <tr>
                        <td class="special10">5. X-Ray other/ Autres</td>
                        <td class="special4"></td>
                        <td class="special10"></td>
                        <td class="special4"></td>
                    </tr>
                </tbody>
            </table>
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
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td>2. Well-functioning</td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td>3. Bad conditions still in service</td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td>4. Out of service-Serviceable</td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td>5. Out of service-To be disposed</td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td>6. Vehicle had accident this month</td>
                        <td class="special8"></td>
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
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td>2. Total receivables (b)</td>
                        <td class="special8"></td>
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
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td>4. Ambulance Maintenance and repair/ Vehicle inspection/Garage (e)</td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td>5. Ambulance insurance (f)</td>
                        <td class="special8"></td>
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
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td>7. (+) Additional credits during the month (i)</td>
                        <td class="special8"></td>
                    </tr>
                    <tr>
                        <td>8. (-) Reimbursements during the month (j)</td>
                        <td class="special8"></td>
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
                        <td class="special8"></td>
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
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">2</td>
                        <td class="special12">Doctors (Generalist)</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">3</td>
                        <td class="special12">Dental Surgeons</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">4</td>
                        <td class="special12">Nurses</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">5</td>
                        <td class="special12">Midwives</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">6</td>
                        <td class="special12">Dentist therapist</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">7</td>
                        <td class="special12">Pharmacists</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">8</td>
                        <td class="special12">Lab technicians</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">9</td>
                        <td class="special12">Ophthalmology clinical Officers</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">10</td>
                        <td class="special12">Non-Physician Anesthetists(Anesthesia Technician)</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">11</td>
                        <td class="special12">Nutritionist</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">12</td>
                        <td class="special12">Mental Health Nurses</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">13</td>
                        <td class="special12">Medical Imagery Technologists</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">14</td>
                        <td class="special12">Environmental Health officers</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">15</td>
                        <td class="special12">Biomedical technician</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">16</td>
                        <td class="special12">Physiotherapis</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">17</td>
                        <td class="special12">Health Information System Staff(Data manager, M&E, supervisors)</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">18</td>
                        <td class="special12">Social Worker</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">19</td>
                        <td class="special12">Clinical Psychologis</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                    <tr>
                        <td class="speci">20</td>
                        <td class="special12">Administrative and Support Personne</td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                        <td class="special5"></td>
                    </tr>
                </tbody>
            </table>
            
        </div> 
        <button className='input' onclick={onclose}>cancel</button>
        <button className='primary' onclick={handlePrint}>Download</button>
        </div>
    )}
 export default Form;