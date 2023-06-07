import React from "react";

const Nutrition = ({ data }) => {
  return (
    <div className="nutrition_section">
      <table className="nutritionScreening">
        <thead>
          <tr>
            <th class="specialth" colSpan="5">
              XVI. Nutrition Screening (All services)/ Dépistage des maladies
              nutritionnelles (tous services)
            </th>
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
            <td>
              Screened for malnutrition/<i> Dépistage de la malnutrition</i>
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QSc06GoP6fL" &&
                  dataValue.categoryOptionCombo == "p648D4zBFmx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QSc06GoP6fL" &&
                  dataValue.categoryOptionCombo == "JGVRmcEfUIQ"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QSc06GoP6fL" &&
                  dataValue.categoryOptionCombo == "uaTon1vBL9Z"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>
              Number of malnourished patients detected
              <i> (Count individuals not malnutrition types below)</i>
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KF7zZLvuEdO" &&
                  dataValue.categoryOptionCombo == "p648D4zBFmx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KF7zZLvuEdO" &&
                  dataValue.categoryOptionCombo == "JGVRmcEfUIQ"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KF7zZLvuEdO" &&
                  dataValue.categoryOptionCombo == "uaTon1vBL9Z"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>
              Severe acute malnutrition(With complication)/
              <i>malnutrition aigüe sévère(avec complications)</i>
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OQWkMsJQ8Op" &&
                  dataValue.categoryOptionCombo == "p648D4zBFmx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OQWkMsJQ8Op" &&
                  dataValue.categoryOptionCombo == "JGVRmcEfUIQ"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OQWkMsJQ8Op" &&
                  dataValue.categoryOptionCombo == "uaTon1vBL9Z"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>
              Moderate acute Malnutrition(with complication)/
              <i>malnutrition aigüe modérée(avec complications)</i>
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ENSrpH3BmmN" &&
                  dataValue.categoryOptionCombo == "p648D4zBFmx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ENSrpH3BmmN" &&
                  dataValue.categoryOptionCombo == "JGVRmcEfUIQ"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ENSrpH3BmmN" &&
                  dataValue.categoryOptionCombo == "uaTon1vBL9Z"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>
              Underweight/<i>Insuffisance pondérale</i>
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LG7nxxUVgxH" &&
                  dataValue.categoryOptionCombo == "p648D4zBFmx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LG7nxxUVgxH" &&
                  dataValue.categoryOptionCombo == "JGVRmcEfUIQ"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>
              Chronic malnutrition (stunting)/ <i>Malnutrition chronique</i>
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "wJjjoRZIIJj" &&
                  dataValue.categoryOptionCombo == "p648D4zBFmx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "wJjjoRZIIJj" &&
                  dataValue.categoryOptionCombo == "JGVRmcEfUIQ"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">7</td>
            <td>
              Referred to outpatient malnutrition program (Health Centre)/{" "}
              <i>Référé au programme de la malnutrition (ambulatoire)</i>
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "kbCtNOz51wu" &&
                  dataValue.categoryOptionCombo == "p648D4zBFmx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "kbCtNOz51wu" &&
                  dataValue.categoryOptionCombo == "JGVRmcEfUIQ"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "kbCtNOz51wu" &&
                  dataValue.categoryOptionCombo == "uaTon1vBL9Z"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">8</td>
            <td>
              Referred to inpatient malnutrition program (Hospital)/{" "}
              <i>Référé au programme de PEC de la malnutrition (Hôpital)</i>
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xLKH8uxKS8s" &&
                  dataValue.categoryOptionCombo == "p648D4zBFmx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xLKH8uxKS8s" &&
                  dataValue.categoryOptionCombo == "JGVRmcEfUIQ"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xLKH8uxKS8s" &&
                  dataValue.categoryOptionCombo == "uaTon1vBL9Z"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="inpatient">
        <thead>
          <tr>
            <th colSpan="9">
              B. Inpatient Rehabilitation of Malnourished/{" "}
              <i>Réhabilitation des malnouris en hospitalisation</i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="specia"></td>
            <td class="special5"></td>
            <td class="special4"></td>
            <td class="special9" colSpan="3">
              Severe Acute Malnourished / <i>Malnutrition aiguë severe</i>
            </td>
            <td class="special9" colSpan="3">
              Moderate Acute Malnourished /<i> Malnutrition aiguë moderée</i>
            </td>
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
            <td colSpan="2">
              Present at beginning of month /<i> Présent au début du mois</i>
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Gix0YVnNrmh" &&
                  dataValue.categoryOptionCombo == "pUfNTJWYGMf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Gix0YVnNrmh" &&
                  dataValue.categoryOptionCombo == "eSe2oawnA2h"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Gix0YVnNrmh" &&
                  dataValue.categoryOptionCombo == "hhXIgg0VlU8"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Gix0YVnNrmh" &&
                  dataValue.categoryOptionCombo == "LswJkrIRQuG"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Gix0YVnNrmh" &&
                  dataValue.categoryOptionCombo == "yf94FU9h9MD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Gix0YVnNrmh" &&
                  dataValue.categoryOptionCombo == "sP6vLrtZLXf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="specia">2</td>
            <td class="special5">Admissions</td>
            <td class="special4">
              2.1 New Cases /<i> Nouveaux cas</i>
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "B5O4VA5o3lm" &&
                  dataValue.categoryOptionCombo == "pUfNTJWYGMf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "B5O4VA5o3lm" &&
                  dataValue.categoryOptionCombo == "eSe2oawnA2h"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "B5O4VA5o3lm" &&
                  dataValue.categoryOptionCombo == "hhXIgg0VlU8"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "B5O4VA5o3lm" &&
                  dataValue.categoryOptionCombo == "LswJkrIRQuG"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "B5O4VA5o3lm" &&
                  dataValue.categoryOptionCombo == "yf94FU9h9MD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "B5O4VA5o3lm" &&
                  dataValue.categoryOptionCombo == "sP6vLrtZLXf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="specia" rowSpan="4">
              3
            </td>
            <td class="special5" rowSpan="4">
              Discharges
              <br />/<i>Sortant du mois</i>
            </td>
            <td class="special4">
              3.1 Cured /<i>Guéri</i>
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "U9bLr7Sr1ux" &&
                  dataValue.categoryOptionCombo == "pUfNTJWYGMf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "U9bLr7Sr1ux" &&
                  dataValue.categoryOptionCombo == "eSe2oawnA2h"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "U9bLr7Sr1ux" &&
                  dataValue.categoryOptionCombo == "hhXIgg0VlU8"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "U9bLr7Sr1ux" &&
                  dataValue.categoryOptionCombo == "LswJkrIRQuG"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "U9bLr7Sr1ux" &&
                  dataValue.categoryOptionCombo == "yf94FU9h9MD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "U9bLr7Sr1ux" &&
                  dataValue.categoryOptionCombo == "sP6vLrtZLXf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special4">
              3.2 Counter referrals to health center/{" "}
              <i>Contres référés au CS</i>
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "deUInTIoDDS" &&
                  dataValue.categoryOptionCombo == "pUfNTJWYGMf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "deUInTIoDDS" &&
                  dataValue.categoryOptionCombo == "eSe2oawnA2h"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "deUInTIoDDS" &&
                  dataValue.categoryOptionCombo == "hhXIgg0VlU8"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "deUInTIoDDS" &&
                  dataValue.categoryOptionCombo == "LswJkrIRQuG"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "deUInTIoDDS" &&
                  dataValue.categoryOptionCombo == "yf94FU9h9MD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "deUInTIoDDS" &&
                  dataValue.categoryOptionCombo == "sP6vLrtZLXf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special4">
              3.3 Abandoned / <i>Abandonnés</i>
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vV9daDS6Mpb" &&
                  dataValue.categoryOptionCombo == "pUfNTJWYGMf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vV9daDS6Mpb" &&
                  dataValue.categoryOptionCombo == "eSe2oawnA2h"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vV9daDS6Mpb" &&
                  dataValue.categoryOptionCombo == "hhXIgg0VlU8"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vV9daDS6Mpb" &&
                  dataValue.categoryOptionCombo == "LswJkrIRQuG"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vV9daDS6Mpb" &&
                  dataValue.categoryOptionCombo == "yf94FU9h9MD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vV9daDS6Mpb" &&
                  dataValue.categoryOptionCombo == "sP6vLrtZLXf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special4">
              3.4 Died /<i> Décès</i>
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zVClkIO5jmI" &&
                  dataValue.categoryOptionCombo == "pUfNTJWYGMf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zVClkIO5jmI" &&
                  dataValue.categoryOptionCombo == "eSe2oawnA2h"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zVClkIO5jmI" &&
                  dataValue.categoryOptionCombo == "hhXIgg0VlU8"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zVClkIO5jmI" &&
                  dataValue.categoryOptionCombo == "LswJkrIRQuG"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zVClkIO5jmI" &&
                  dataValue.categoryOptionCombo == "yf94FU9h9MD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zVClkIO5jmI" &&
                  dataValue.categoryOptionCombo == "sP6vLrtZLXf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="methods">
        <thead>
          <tr>
            <th class="specialth" colSpan="7"></th>
          </tr>
          <tr>
            <th class="special">A</th>
            <th class="special9">Methods</th>
            <th class="special8">
              New Acceptors in the program /{" "}
              <i>Nouveaux (elles) Acceptants(es) dans le programme</i>
            </th>
            <th class="special8">
              PPFP uptake (Before discharge)/{" "}
              <i>PF en postpartum avant la sortie de maternité</i>
            </th>
            <th class="special8">
              PPFP uptake (Before discharge)/{" "}
              <i>PF en postpartum avant la sortie de maternité</i>
            </th>
            <th class="special8">
              Stopped FP Method /<i>Arrêt de la methode PF</i>
            </th>
            <th class="special8">
              Active users at end of month /
              <i>Utilisateurs(trices) a la fin du mois</i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td class="special9">
              Oral Contraceptives, progestative/{" "}
              <i>Contraceptifs oraux, progestatif</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "X5q4nzV9tee" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rMDlDJ5cb7S" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "O6TGO6kdo1i" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "CLH2WvpTZLe" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "pBK9wBLJPvs" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td class="special9">
              Oral Contraceptives, combined /
              <i>Contraceptifs oraux, combinée</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gWVZxOl2SM0" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8"></td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sS7yh9LFO6h" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zKT7MpGdaHT" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "oifQS5vfC9N" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td class="special9">
              njectables (Depo-Provera) / <i>Injectables (Depo-Provera)</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KiUnct0R8hk" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "yUljSzS1Y6L" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vWT9GQummeD" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "faPkwHlUtsD" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "P8wjgQiKWvw" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td class="special9">
              Injectables_DMPA-SC/<i>Injectables_DMPA SC</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "q140SCZpDL9" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "D13haShRZRD" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "A3ZseSvq9qM" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vAE4rxNyMDs" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "GxZ6fvXCo2s" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td class="special9">
              Injectables (Norristerat)/<i>Injectables (Norristerat)</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "CFeHOML5bFD" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qc6mG3ProUn" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "SjKf85CxXu8" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "FBoXrJz9prq" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "tGSdGLXnLf7" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td class="special9">
              mplants/<i>Implanon NXT</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "yQwI15mC28F" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BAAyGHJ0PE4" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "J1KJztMMIrg" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IhxiFhNBV9t" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Hh3Rg3hqTnk" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">7</td>
            <td class="special9">
              Implants/<i>Jadelle</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "z1hydsnWEWP" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DqCVEnS7bML" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Zha3KDDkB0O" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QxoUllm4Jaz" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "y1rM8K6lRga" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">8</td>
            <td class="special9">
              IUD_Copper/ <i>DIU</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dYCyfMz0E9Y" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aerxOAMlAWM" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "M1EKUzts4zg" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xFMDlMfZfcw" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "nD8IEzbKeMY" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">9</td>
            <td class="special9">UD_Hormonal</td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "CHl7JwFGFWv" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Pv7bWE9KXk0" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zoTXnE2L3WW" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "p7TPdnwF47I" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vhTI1b4xsAd" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">10</td>
            <td class="special9">
              Male condoms / <i>Préservatifs masculins</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Ba9B2qPVBly" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "p2PPUqBR3gD" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "l4zwenGYF1R" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "j2nFTmot9fp" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DzLZjlrbqvq" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">11</td>
            <td class="special9">
              Female condoms /<i> Préservatifs féminins</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "UqNRfw4yFMt" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PODEHjYs5qg" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MAUhH0baFrS" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aNNTwHyk1wr" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ih4pGKfwy0o" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">12</td>
            <td class="special9">
              Cycle beads / <i>MJF (Collier)</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "uiT9PkkZSly" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8"></td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "JoVYTqFTXwu" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TtZ2Ax5xqpD" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KJWoTLblVi2" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">13</td>
            <td class="special9">
              Lactational amenorrhea (LAM) / <i>MAMA</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jxx29hKfkcv" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Iy2598P6WHI" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zqjKpn1k42N" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XIJOBFOJ7Yo" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PI4GvYWrZbT" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">14</td>
            <td class="special9">Auto-observation</td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VGiM1CPBQpr" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8"></td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PGec8q7wkd6" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QGhaTbeQNFv" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "llIlmBo7dlS" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">15</td>
            <td class="special9">
              Tubal ligations/<i>Ligature des trompes</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HMKQJCFUELz" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "epHYAcaV1S2" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xt0wOJQIgeA" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8"></td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "j6aQyxC4BvY" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">16</td>
            <td class="special9">
              Vasectomy/<i>Vasectomie</i>
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Cps7Z0IYIfX" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QLsYlMR4XKC" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "SyxB3xLcSeV" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special8"></td>
            <td class="special8">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "GmfkClkyKIs" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="summaryByAge">
        <thead>
          <tr>
            <th class="special">B</th>
            <th style={{ width: "160px" }}>Summary by age </th>
            <th class="special5">15-19 Yrs</th>
            <th class="special5">20 – 24 Yrs </th>
            <th class="special5">&gt;= 25 yrs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td style={{ width: "160px" }}>
              New Acceptors in the program /
              <i> Nouveaux (elles) Acceptant (es) dans le programme</i>
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dojxLAeOWyd" &&
                  dataValue.categoryOptionCombo == "n85FTsT6smV"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dojxLAeOWyd" &&
                  dataValue.categoryOptionCombo == "LUcYXVY6eM6"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dojxLAeOWyd" &&
                  dataValue.categoryOptionCombo == "iPzOtMGCTMv"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Nutrition;
