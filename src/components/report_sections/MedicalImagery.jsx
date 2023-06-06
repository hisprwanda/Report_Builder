import React from 'react'

const MedicalImagery = ({data}) => {
  return (
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
  )
}
export default MedicalImagery