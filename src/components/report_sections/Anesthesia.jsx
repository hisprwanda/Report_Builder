import React from 'react'

const Anesthesia = ({data}) => {
  return (
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
  )
}
export default Anesthesia