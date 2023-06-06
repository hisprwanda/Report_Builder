import React from 'react'

const Neonatal = ({data}) => {
  return (
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
  )
}
export default Neonatal