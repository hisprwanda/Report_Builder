import React from 'react'

const Chronic = ({data}) => {
  return (
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
  )
}
export default Chronic