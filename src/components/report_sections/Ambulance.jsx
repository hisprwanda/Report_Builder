import React from 'react'

const Ambulance = ({data}) => {
  return (
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
  )
}
export default Ambulance