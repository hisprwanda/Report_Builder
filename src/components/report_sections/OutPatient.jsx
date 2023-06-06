import React from 'react'

const OutPatient = ({data}) => {
  return (
    <div className='outpatient_section'>
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
                            <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='T6H8cO1Tr5t'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='T6H8cO1Tr5t'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='T6H8cO1Tr5t'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='T6H8cO1Tr5t'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                        </tr>
                        <tr>
                            <td>Old cases/ <i>Anciens cas</i></td>
                            <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='o73Sit5drOc'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                            <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='o73Sit5drOc'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                            <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='o73Sit5drOc'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                            <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='o73Sit5drOc'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
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
                        <td style={{ width: "104px" }}>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XnTgGzEfdCP'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
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
                        <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vXwpoA3iex2'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                    <td>1.New cases from the cactchment area(Zone)/<i>Nouveaux cas de la zone de Rayonnement(Zone)</i></td>
                        <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='qyvH5Y73w85'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                </tr>
                    <tr>
                        <td>2.Counter referrals recieved / <i>Contres referes recues</i></td>
                        <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='GpQ2x3ZDHTe'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                        <td>2.New cases from out of the Catchment area/<i>Nouveaux cas (hors zone)</i></td>
                        <td>{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sOXjcgk31XK'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
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
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='eK2A6GCkjF8'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='eK2A6GCkjF8'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='eK2A6GCkjF8'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='eK2A6GCkjF8'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">2.</td>
                    <td>Intestinal parasites others/<i>Parasites intestinale autres</i></td>
                    <td class="special2">B65-B83</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XWrSxfUvE6X'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XWrSxfUvE6X'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XWrSxfUvE6X'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XWrSxfUvE6X'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">3.</td>
                    <td>Snake Bite/<i>Morsure de serpent</i></td>
                    <td class="special2">8B42</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oSCOWUn8rVC'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oSCOWUn8rVC'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oSCOWUn8rVC'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='oSCOWUn8rVC'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">4.</td>
                    <td>Amebiasis</td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JOT6pLyw6JD'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JOT6pLyw6JD'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JOT6pLyw6JD'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='JOT6pLyw6JD'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">5.</td>
                    <td>Cysticercosis</td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VzX0sbtscAf'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VzX0sbtscAf'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VzX0sbtscAf'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VzX0sbtscAf'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">6.</td>
                    <td>Schistosomiasis</td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='f6HIkceQiz0'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='f6HIkceQiz0'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='f6HIkceQiz0'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='f6HIkceQiz0'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">7.</td>
                    <td>Pneumonia/<i>Pneumonie</i></td>
                    <td class="special2">CA40.Z</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xU8wx7P4MhG'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xU8wx7P4MhG'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xU8wx7P4MhG'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='xU8wx7P4MhG'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">8.</td>
                    <td>Bronchitis</td>
                    <td class="special2">CA20</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kq8mzlj7MZi'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kq8mzlj7MZi'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kq8mzlj7MZi'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kq8mzlj7MZi'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">9.</td>
                    <td>other Acute Resiratory diseases/<i>Maladies aigues des voies respiratoires autres</i></td>
                    <td class="special2">CA07.0</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pvE8GT5UvZ6'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pvE8GT5UvZ6'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pvE8GT5UvZ6'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='pvE8GT5UvZ6'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">10.</td>
                    <td>Acute Malnutrition/<i>Malnutrition Aigue</i></td>
                    <td class="special2">5B7Z</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QKN6oLReYyD'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QKN6oLReYyD'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QKN6oLReYyD'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='QKN6oLReYyD'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">11.</td>
                    <td>HIV/AIDS related opportunustic Infection/<i>Infection opportuniste du VIH</i></td>
                    <td class="special2">1C62.3</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XJ422jsvxns'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XJ422jsvxns'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XJ422jsvxns'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='XJ422jsvxns'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">12.</td>
                    <td>Gastritis and doudentitis/<i>Gastrite et Duodenite</i></td>
                    <td class="special2">DA51</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nCL3Tsb7Yjs'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nCL3Tsb7Yjs'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nCL3Tsb7Yjs'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nCL3Tsb7Yjs'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">13.</td>
                    <td>Scabies(Crusted or classic scabies)</td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nCL3Tsb7Yjs'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nCL3Tsb7Yjs'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nCL3Tsb7Yjs'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='nCL3Tsb7Yjs'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">14.</td>
                    <td>Tungaiasis/Jigger Disease (mavunja)</td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FB1arDvyK86'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FB1arDvyK86'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FB1arDvyK86'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FB1arDvyK86'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>                        </tr>
                <tr>
                    <td class="special">15.</td>
                    <td>Other Skin Diseases/<i>Maladies de la peau</i></td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='X7o6DuDLBMe'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='X7o6DuDLBMe'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='X7o6DuDLBMe'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='X7o6DuDLBMe'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">16.</td>
                    <td>Abscesses/<i>Abcès</i></td>
                    <td class="special2">D64.9</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gYg72JzdZd4'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gYg72JzdZd4'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gYg72JzdZd4'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='gYg72JzdZd4'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">17.</td>
                    <td>Anemia/<i> Anémie (confirmée) </i></td>
                    <td class="special2">D64.9</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yFqMWTHmVzC'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yFqMWTHmVzC'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yFqMWTHmVzC'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yFqMWTHmVzC'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">18.</td>
                    <td>Viral hepatitis B,C CHRONIC/<i>Hépatite B,C Chronique</i></td>
                    <td class="special2">(B15-B19)</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EdC0G0NQsXW'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EdC0G0NQsXW'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EdC0G0NQsXW'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EdC0G0NQsXW'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">19.</td>
                    <td>Diseases of Urinary tract system/ <i>Maladies du système urinaire</i></td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='A5Rhph7db4Y'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='A5Rhph7db4Y'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='A5Rhph7db4Y'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='A5Rhph7db4Y'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">20.</td>
                    <td>Bone and joint Diseases, Other than fractures/ <i>Maladies des os et des articulations, auters que les traumatismes</i></td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yDsS6F5lrqg'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yDsS6F5lrqg'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yDsS6F5lrqg'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yDsS6F5lrqg'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">21.</td>
                    <td>Bone and Joint Fractures/ <i>Facture ousseuse et articulaire</i></td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MHRf4kWhLVO'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MHRf4kWhLVO'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MHRf4kWhLVO'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MHRf4kWhLVO'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">22.</td>
                    <td>Physical traumas, other than fractures/ <i>Traumatismes Physiques, Autres que les Fractures</i></td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sF9pFihMO6t'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sF9pFihMO6t'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sF9pFihMO6t'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sF9pFihMO6t'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">23.</td>
                    <td>Sepsis/ <i>Septicémie </i></td>
                    <td class="special2">IG40, 1g41</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O6YNOECR7FX'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O6YNOECR7FX'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O6YNOECR7FX'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='O6YNOECR7FX'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">24.</td>
                    <td>Goitre/ <i>Goitre </i></td>
                    <td class="special2">5A01.Z</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B6S0YcQHyZ3'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B6S0YcQHyZ3'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B6S0YcQHyZ3'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='B6S0YcQHyZ3'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">25.</td>
                    <td>Gynecological problems/ <i>Problèmes gynécologiques</i></td>
                    <td class="special2"></td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ke7uV6HnkG2'&&dataValue.categoryOptionCombo=='FCdiaRlPumY'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ke7uV6HnkG2'&&dataValue.categoryOptionCombo=='G0576RJmv6Y'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ke7uV6HnkG2'&&dataValue.categoryOptionCombo=='aqLxpqBHcWN'?dataValue.value:''}</span>))}</td>
                    <td class="special5">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ke7uV6HnkG2'&&dataValue.categoryOptionCombo=='zKiAxbqZCjx'?dataValue.value:''}</span>))}</td>
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
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iKkD3Bii8lf'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iKkD3Bii8lf'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iKkD3Bii8lf'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iKkD3Bii8lf'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iKkD3Bii8lf'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iKkD3Bii8lf'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">2.</td>
                    <td>Cataract/<i>Cataracte </i></td>
                    <td class="special2">H29.9</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U8CRxlniaaV'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U8CRxlniaaV'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U8CRxlniaaV'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U8CRxlniaaV'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U8CRxlniaaV'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U8CRxlniaaV'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">3.</td>
                    <td>Refractive error/<i>Erreurs de réfraction</i></td>
                    <td class="special2">H52.7</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EwOOlIAgUpk'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EwOOlIAgUpk'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EwOOlIAgUpk'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EwOOlIAgUpk'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EwOOlIAgUpk'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='EwOOlIAgUpk'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">4.</td>
                    <td>Pinguecula/<i> Pinguécula</i></td>
                    <td class="special2">9A61.0</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ar2OQCEUZwR'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ar2OQCEUZwR'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ar2OQCEUZwR'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ar2OQCEUZwR'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ar2OQCEUZwR'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ar2OQCEUZwR'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">5.</td>
                    <td>Uveitis/<i>Uvéite</i></td>
                    <td class="special2">H20.9</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='paQpaEQ0POH'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='paQpaEQ0POH'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='paQpaEQ0POH'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='paQpaEQ0POH'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='paQpaEQ0POH'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='paQpaEQ0POH'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">6.</td>
                    <td>Presbyopia/<i>presbytie</i></td>
                    <td class="special2"></td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='afgUZwsO5R2'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='afgUZwsO5R2'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='afgUZwsO5R2'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='afgUZwsO5R2'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='afgUZwsO5R2'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='afgUZwsO5R2'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">7.</td>
                    <td>Diabetic retinopathy/<i> Rétinopathie diabétique</i></td>
                    <td class="special2">9B71.0Z</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Xs8yYf3DEfO'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Xs8yYf3DEfO'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Xs8yYf3DEfO'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Xs8yYf3DEfO'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Xs8yYf3DEfO'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Xs8yYf3DEfO'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">8.</td>
                    <td>Retinopathy of Prematurity/<i>Retinopathie chez les prématurés </i></td>
                    <td class="special2">9B71.3</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TDRDomKx8hX'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TDRDomKx8hX'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TDRDomKx8hX'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TDRDomKx8hX'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TDRDomKx8hX'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TDRDomKx8hX'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">9.</td>
                    <td>Allergic Conjunctivitis/<i>Conjonctivite Allergique</i></td>
                    <td class="special2">9A60.02</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CeQh0F7B2gF'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CeQh0F7B2gF'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CeQh0F7B2gF'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CeQh0F7B2gF'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CeQh0F7B2gF'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CeQh0F7B2gF'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">10.</td>
                    <td>Infectious Conjunctivitis/<i>Infection conjonctivale</i></td>
                    <td class="special2">9A60.Y</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VPPrAdlpe3o'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VPPrAdlpe3o'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VPPrAdlpe3o'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VPPrAdlpe3o'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VPPrAdlpe3o'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='VPPrAdlpe3o'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">11.</td>
                    <td>Eye trauma/<i>Traumatisme occulaire</i></td>
                    <td class="special2">S05.9</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ck1QaxpJPnB'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ck1QaxpJPnB'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ck1QaxpJPnB'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ck1QaxpJPnB'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ck1QaxpJPnB'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ck1QaxpJPnB'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">12.</td>
                    <td>Pterygium/<i>Ptérygion</i></td>
                    <td class="special2">9A61.1</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgfl9U3O9BF'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgfl9U3O9BF'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgfl9U3O9BF'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgfl9U3O9BF'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgfl9U3O9BF'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='zgfl9U3O9BF'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">13.</td>
                    <td>Trachoma</td>
                    <td class="special2"></td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iAbH7xnY5XJ'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iAbH7xnY5XJ'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iAbH7xnY5XJ'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iAbH7xnY5XJ'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iAbH7xnY5XJ'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iAbH7xnY5XJ'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">14.</td>
                    <td>Other Eye diseases/<i>Autres maladies occulaires </i></td>
                    <td class="special2">H57.9</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tJSrZYc6srk'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tJSrZYc6srk'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tJSrZYc6srk'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tJSrZYc6srk'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tJSrZYc6srk'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='tJSrZYc6srk'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <th class="special">B</th>
                    <th>Diseases of the ear<i></i></th>
                    <td class="special2"></td>
                    <td colSpan={"6"} class="special1"></td>

                </tr>
                <tr>
                    <td class="special">1.</td>
                    <td>Otitis externa, unspecified/<i> Otitis externa, unspecified</i></td>
                    <td class="special2">AA3Z</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YRfwK3ZsxSs'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YRfwK3ZsxSs'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YRfwK3ZsxSs'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YRfwK3ZsxSs'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YRfwK3ZsxSs'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='YRfwK3ZsxSs'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">2.</td>
                    <td>Disorders of external ear, unspecified/<i>Troubles de l'oreille externe, non spécifiés </i></td>
                    <td class="special2"></td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OW3uHKyWNQp'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OW3uHKyWNQp'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OW3uHKyWNQp'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OW3uHKyWNQp'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OW3uHKyWNQp'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OW3uHKyWNQp'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">3.</td>
                    <td>Suppurative otitis media, unspecified/ <i>Otite moyenne suppurée, non spécifié</i></td>
                    <td class="special2"></td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lwLkuthVHh6'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lwLkuthVHh6'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lwLkuthVHh6'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lwLkuthVHh6'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lwLkuthVHh6'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='lwLkuthVHh6'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">4.</td>
                    <td>Hearing impairment/ deafness/<i>Déficience auditive/surdité </i></td>
                    <td class="special2">AA9Z</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jM63yeDqpD9'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jM63yeDqpD9'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jM63yeDqpD9'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jM63yeDqpD9'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jM63yeDqpD9'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jM63yeDqpD9'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">5.</td>
                    <td>Acute mastoiditis/ <i>Acute mastoiditis</i></td>
                    <td class="special2">AB52</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bPK2k469B2J'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bPK2k469B2J'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bPK2k469B2J'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bPK2k469B2J'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bPK2k469B2J'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='bPK2k469B2J'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">6.</td>
                    <td>Chronic mastoiditis/<i>Mastoïdite Chronique </i></td>
                    <td class="special2">AB11.0</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='umCrdXiI3q1'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='umCrdXiI3q1'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='umCrdXiI3q1'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='umCrdXiI3q1'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='umCrdXiI3q1'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='umCrdXiI3q1'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">7.</td>
                    <td>Other ear diseases/ <i>Autres maladies de l’Oreille</i></td>
                    <td class="special2">AB11.1</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kqypSvvoCgm'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kqypSvvoCgm'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kqypSvvoCgm'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kqypSvvoCgm'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kqypSvvoCgm'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='kqypSvvoCgm'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
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
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Dir2aqXjQH8'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Dir2aqXjQH8'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Dir2aqXjQH8'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Dir2aqXjQH8'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Dir2aqXjQH8'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Dir2aqXjQH8'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">2.</td>
                    <td>Disorders of tooth development and eruption (Excl.: embedded and impacted teeth)/<i>Troubles du développement et eruption dentaire</i></td>
                    <td class="special2">K00</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='F3O5uCCDZfa'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='F3O5uCCDZfa'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='F3O5uCCDZfa'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='F3O5uCCDZfa'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='F3O5uCCDZfa'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='F3O5uCCDZfa'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">3.</td>
                    <td>Embedded and impacted teeth/<i> Dents encarnées et impactées </i></td>
                    <td class="special2">K01</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TrNTVyIG37E'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TrNTVyIG37E'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TrNTVyIG37E'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TrNTVyIG37E'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TrNTVyIG37E'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='TrNTVyIG37E'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">4.</td>
                    <td>Dental caries/<i> Carrie dentaire </i></td>
                    <td class="special2">K02</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fGg16FaXK9y'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fGg16FaXK9y'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fGg16FaXK9y'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fGg16FaXK9y'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fGg16FaXK9y'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='fGg16FaXK9y'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">5.</td>
                    <td>Other diseases of hard tissues of teeth/<i> Autres maladies de l’email dentaire</i></td>
                    <td class="special2">K03</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='cWyleRkrFpS'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='cWyleRkrFpS'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='cWyleRkrFpS'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='cWyleRkrFpS'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='cWyleRkrFpS'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='cWyleRkrFpS'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">6.</td>
                    <td>Diseases of pulp and periapical tissues/<i>Maladies de la pulpe et couronne dentaire</i></td>
                    <td class="special2">K04</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OABaSfMc9Cu'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OABaSfMc9Cu'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OABaSfMc9Cu'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OABaSfMc9Cu'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OABaSfMc9Cu'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='OABaSfMc9Cu'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">7.</td>
                    <td>Acute gingivitis/<i> Autre gencivite</i></td>
                    <td class="special2">K05</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yyPnH5l6ISI'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yyPnH5l6ISI'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yyPnH5l6ISI'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yyPnH5l6ISI'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yyPnH5l6ISI'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yyPnH5l6ISI'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">8.</td>
                    <td>Other disorders of gingiva and edentulous alveolar ridge/<i> Autres troubles de gencives et de la cavité alvéolaire</i></td>
                    <td class="special2">K06</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PpAJDuEcoYL'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PpAJDuEcoYL'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PpAJDuEcoYL'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PpAJDuEcoYL'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PpAJDuEcoYL'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='PpAJDuEcoYL'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">9.</td>
                    <td>Dentofacial anomalies [including malocclusion]/<i>Anomalies dentofacial [y compris les anomalies d’occlusion]</i></td>
                    <td class="special2">K07</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U7wo7X5IkUw'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U7wo7X5IkUw'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U7wo7X5IkUw'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U7wo7X5IkUw'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U7wo7X5IkUw'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='U7wo7X5IkUw'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special">10.</td>
                    <td>Other Teeth and oro-buccal cavity diseases/<i> Autre Infections de dents et de la cavité buccale</i></td>
                    <td class="special2">K08.9</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sreK0bMzMko'&&dataValue.categoryOptionCombo=='kdmS7zvhGuL'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sreK0bMzMko'&&dataValue.categoryOptionCombo=='XBiYp3AjoeR'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sreK0bMzMko'&&dataValue.categoryOptionCombo=='rF2VMwZ8JpO'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sreK0bMzMko'&&dataValue.categoryOptionCombo=='an6vscaUk16'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sreK0bMzMko'&&dataValue.categoryOptionCombo=='kLjlM4XxvKP'?dataValue.value:''}</span>))}</td>
                    <td class="special1">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='sreK0bMzMko'&&dataValue.categoryOptionCombo=='ANrxW4pIIP6'?dataValue.value:''}</span>))}</td>
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
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='D8sMp0HZBkp'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                    <td class="special3"></td>
                    <td>Root planing, periodontal</td>
                    <td class="special1">43400</td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='F5inj44DHc4'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special3">2</td>
                    <td>Radiographs</td>
                    <td class="special1">2100</td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='Ey4m4gOp53d'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                    <td class="special3">8</td>
                    <td>Denture Complete </td>
                    <td class="special1">51000</td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='yUPuXJzcwJ3'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special3">3</td>
                    <td>Polishing/Cleaning</td>
                    <td class="special1">11100 </td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='iErbfjKVES0'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                    <td class="special3">9</td>
                    <td>Dentures, Repairs/Additions </td>
                    <td class="special1">55000</td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='FWMRuawXIPQ'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special3">4</td>
                    <td>Caries/Trauma/Pain Control</td>
                    <td class="special1">20100</td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='vvvvhqwlNIS'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                    <td class="special3">10</td>
                    <td>Therapeutic Tissue Conditioning</td>
                    <td class="special1">56500</td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='MSiDnXexndm'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special3">5</td>
                    <td>Restorations </td>
                    <td class="special1">23000</td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='t7MZ8o2uKAh'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                    <td class="special3">11</td>
                    <td>Removals, (extractions), Erupted Teeth </td>
                    <td class="special1">71000</td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='v9yHUJpG0io'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                </tr>
                <tr>
                    <td class="special3">6</td>
                    <td>Periodontal Services, Surgical </td>
                    <td class="special1">42000</td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='CyiBOQOFlEK'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                    <td class="special3">12</td>
                    <td>Removals, (extractions), residual roots</td>
                    <td class="special1">72300</td>
                    <td class="special2">{data.dataValueSets.dataValues.map((dataValue)=>(<span>{dataValue.dataElement=='jkozSHLaPxz'&&dataValue.categoryOptionCombo=='BNTdWBe0N1F'?dataValue.value:''}</span>))}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default OutPatient