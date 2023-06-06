import React from 'react'

const Postnatal = ({data}) => {
  return (
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
  )
}
export default Postnatal