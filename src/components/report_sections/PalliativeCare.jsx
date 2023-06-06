import React from 'react'

const PalliativeCare = ({data}) => {
  return (
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
  )
}
export default PalliativeCare