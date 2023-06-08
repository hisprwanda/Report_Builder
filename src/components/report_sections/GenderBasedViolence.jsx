import React from "react";

const GenderBasedViolence = ({ data }) => {
  return (
    <div className="gender_based-violence">
      <table className="Atable">
        <thead>
          <th colSpan="14" style={{ backgroundColor: "black" }}>
            I. Gender Based Violence
          </th>
          <tr>
            <th rowSpan="2" class="special">
              A
            </th>
            <th rowSpan="2"></th>
            <th class="special8" colSpan="2">
              &lt;=5 years
            </th>
            <th class="specialcl" colSpan="2">
              6-8 years
            </th>
            <th class="specialcl" colSpan="2">
              9-13 years
            </th>
            <th class="specialcl" colSpan="2">
              14-17 years
            </th>
            <th class="special8" colSpan="2">
              18-20 years
            </th>
            <th class="special8" colSpan="2">
              &gt;=21 yrs
            </th>
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
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "ACKLtKQjI1r" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "ACKLtKQjI1r" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "ACKLtKQjI1r" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "ACKLtKQjI1r" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "ACKLtKQjI1r" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "ACKLtKQjI1r" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>GBV victims with symptoms of physical violence (new cases)</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "sMhk1o9ZxTM" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "sMhk1o9ZxTM" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "sMhk1o9ZxTM" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "sMhk1o9ZxTM" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "sMhk1o9ZxTM" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "sMhk1o9ZxTM" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>GBV victims with symptoms of emotional violence (new cases)</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "XSd8FFp5YFz" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "XSd8FFp5YFz" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "XSd8FFp5YFz" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "XSd8FFp5YFz" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "XSd8FFp5YFz" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "XSd8FFp5YFz" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>GBV victims with symptoms of economic violence (new cases)</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "vpQ5h9sOcAP" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "vpQ5h9sOcAP" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "vpQ5h9sOcAP" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "vpQ5h9sOcAP" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "vpQ5h9sOcAP" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "vpQ5h9sOcAP" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>
              GBV victims referred for care to higher level health facility
            </td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "srXxYFvwnbd" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "srXxYFvwnbd" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "srXxYFvwnbd" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "srXxYFvwnbd" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "srXxYFvwnbd" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "srXxYFvwnbd" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>GBV victims referred to this facility by RIB</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yvqNdeIYeSV" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yvqNdeIYeSV" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yvqNdeIYeSV" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yvqNdeIYeSV" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yvqNdeIYeSV" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yvqNdeIYeSV" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">7</td>
            <td>
              GBV victims referred to this facility by community health workers
            </td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oiMAiBVJDmw" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oiMAiBVJDmw" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oiMAiBVJDmw" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oiMAiBVJDmw" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oiMAiBVJDmw" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oiMAiBVJDmw" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">8</td>
            <td>GBV victims HIV+ sero-conversion 3 months after exposure</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "BdA2ZztzIk6" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "BdA2ZztzIk6" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "BdA2ZztzIk6" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "BdA2ZztzIk6" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "BdA2ZztzIk6" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "BdA2ZztzIk6" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">9</td>
            <td>GBV victims with irreversible disabilities due to GBV</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Ztw7snPmOq1" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Ztw7snPmOq1" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Ztw7snPmOq1" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Ztw7snPmOq1" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Ztw7snPmOq1" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Ztw7snPmOq1" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">10</td>
            <td>GBV victim deaths</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EGASyJ5UAv9" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EGASyJ5UAv9" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EGASyJ5UAv9" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EGASyJ5UAv9" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EGASyJ5UAv9" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EGASyJ5UAv9" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
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
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "GdpXZlx6Oyo" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "GdpXZlx6Oyo" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">12</td>
            <td>
              GBV victims received emergency contraception within 72 hours</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "A92x1wUd97f" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "A92x1wUd97f" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">13</td>
            <td>
              GBV victims received post exposure HIV prophylaxis within 72 hours
            </td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "x6NuIblrfUh" && dataValue.categoryOptionCombo == "lw2sejsSwvD" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "x6NuIblrfUh" && dataValue.categoryOptionCombo == "ylPS1Vv5fJ2" ? dataValue.value: ""}</span>))}</td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special"></td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "x6NuIblrfUh" && dataValue.categoryOptionCombo == "yfhrBLHMx7U" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "x6NuIblrfUh" && dataValue.categoryOptionCombo == "kn0FHf53oz0" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "x6NuIblrfUh" && dataValue.categoryOptionCombo == "vIECRTQE0gl" ? dataValue.value: ""}</span>))}</td>
            <td class="special">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "x6NuIblrfUh" && dataValue.categoryOptionCombo == "tk62lepzU3S" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="specialcl1">14</td>
            <td class="specialcl2">
              GBV victims with symptoms of sexual violence received from lower
              level health facility
            </td>
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
      <table className="abortionInduced">
        <thead>
          <tr>
            <th class="special">B</th>
            <th>Abortion Induced/legal</th>
            <th style={{ width: "140px" }} colSpan="2">
              Under 18 years
            </th>
            <th style={{ width: "140px" }} colSpan="2">
              18 years and above
            </th>
          </tr>
          <tr>
            <th colSpan="2" style={{ alignItems: "center" }}>
              <span class="red">a</span>. Legal abortions by exemptions
            </th>
            <th style={{ width: "140px" }} colSpan="2"></th>
            <th style={{ width: "140px" }} colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>
              Induced (legal) abortion for therapeutic abortion (Above 22 weeks)
            </td>
            <td style={{ width: "140px" }} colSpan="2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "eUB9bAUjnJJ" && dataValue.categoryOptionCombo == "Mt38aQfd1Em" ? dataValue.value: ""}</span>))}</td>
            <td style={{ width: "140px" }} colSpan="2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "eUB9bAUjnJJ" && dataValue.categoryOptionCombo == "ekSZ09bOUpN" ? dataValue.value: ""}</span>))}</td>
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
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oguwbPSTnL0" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oguwbPSTnL0" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oguwbPSTnL0" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oguwbPSTnL0" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>Induced (legal) abortion for incest</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EwkBa6RzQZy" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EwkBa6RzQZy" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EwkBa6RzQZy" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EwkBa6RzQZy" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>Induced (legal) abortion for forced marriage</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Uuxq1Nl2XTZ" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Uuxq1Nl2XTZ" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Uuxq1Nl2XTZ" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Uuxq1Nl2XTZ" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>
              Induced (legal) abortion Child (exclude cases for rape, incest,
              forced marriage and therapeutic abortion)
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yX6JHSyAaij" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yX6JHSyAaij" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yX6JHSyAaij" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yX6JHSyAaij" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>Induced (legal) abortion for therapeutic abortion</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "eIgD3vou3aO" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "eIgD3vou3aO" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "eIgD3vou3aO" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "eIgD3vou3aO" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <th colSpan="2">
              <span class="red">b</span>. Methods used
            </th>
            <th style={{ width: "140px" }} colSpan="2"></th>
            <th style={{ width: "140px" }} colSpan="2"></th>
          </tr>
          <tr>
            <td class="special">1</td>
            <td>Induced (legal) abortion by Manual Vacuum Aspiration (MVA)</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "m2v1Gq33fOU" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "m2v1Gq33fOU" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "m2v1Gq33fOU" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "m2v1Gq33fOU" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>Induced (legal) abortion by electrical aspiration</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "t0RHwcPisQR" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "t0RHwcPisQR" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "t0RHwcPisQR" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "t0RHwcPisQR" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>Induced (legal) abortion by Curetage</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "A7XmD1OhSn0" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "A7XmD1OhSn0" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "A7XmD1OhSn0" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "A7XmD1OhSn0" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>Induced (legal) abortion by Mifepristone + Misoprostol</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "IDsYM5hq2Zs" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "IDsYM5hq2Zs" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "IDsYM5hq2Zs" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "IDsYM5hq2Zs" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>Induced (legal) abortion by Misoprostol only</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "u35KgIJit6V" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "u35KgIJit6V" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "u35KgIJit6V" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "u35KgIJit6V" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>
              Induced (legal) abortion by Combined methods (Medical and surgical
              methods)
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "rp2hkX1hETx" && dataValue.categoryOptionCombo == "NxPv7iKYhDx" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "rp2hkX1hETx" && dataValue.categoryOptionCombo == "rnniGhMALvZ" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "rp2hkX1hETx" && dataValue.categoryOptionCombo == "I3aseILCNiY" ? dataValue.value: ""}</span>))}</td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "rp2hkX1hETx" && dataValue.categoryOptionCombo == "hDjEOddFinV" ? dataValue.value: ""}</span>))}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default GenderBasedViolence;
