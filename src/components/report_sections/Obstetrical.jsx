import React from "react";

const Obstetrical = ({ data }) => {
  return (
    <div className="obstetrical_section">
      <table className="obstetrical">
        <thead>
          <tr>
            <th class="specialth" colSpan="6">
              XII. Obstetrical Complications/Complications obstetricales
            </th>
          </tr>
          <tr>
            <th class="special" rowSpan="2">
              A
            </th>
            <th rowSpan="2"></th>
            <th class="special5"></th>
            <th class="special7">
              OPD NC/<i>Consultation externe</i>
            </th>
            <th class="special7">
              Hospitalized/<i>Hospitalisé</i>
            </th>
            <th class="special5">
              Deaths/<i>Décès</i>
            </th>
          </tr>
          <tr>
            <th class="special5">ICD-11</th>
            <th class="special7"></th>
            <th class="special7"></th>
            <th class="special5"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>Total number of abortions</td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "G8sttgBrQmj" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "FZwuxohc9V4" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "dzfT8CgOTQZ" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>Spontaneous abortions</td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "NFlA1rbzmTK" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "zn2ZgVUeDJN" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "KjL4iPButKD" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>
              Complications of abortions/ <i>Avortements compliqués</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "o5aBgC7M9y5" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "NhKQDbpwc8b" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "sLeVWcSv77l" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>
              Ectopic pregnancy/ <i>Grosesse ectopiques (Extra uterines)</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "dD6OG9afFjJ" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "igtlyEFtsR9" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "gcjVsSMU07i" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>
              Antepartum Hemorrhage (APH)/ <i>Hémorragie prénatale</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "dfynxoug4JC" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "ahzxHzp9oTh" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "BzXn6TWlNjv" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>
              Post-partum hemorrhage (PPH) /<i> Hémorragie Post-partum</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "VxaENqFAuyD" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "CwDatgWUNJr" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "OpeDTCfBrTu" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">7</td>
            <td>
              Eclampsia /<i>Eclampsie</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "uv1AD9tqk0C" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "jUhNMc3lDu9" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "W09Bqri4Lvl" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">8</td>
            <td>
              Severe Pre-Eclampsia/ Eclampsie / <i>Pre Eclampsie Sévère</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "my1u8tP5Ore" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "fP1fqhWBFhY" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "FY53iCVPtxP" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">9</td>
            <td>
              Post C/Section infection /<i>Infections post cesarienne</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "jZvFSCyGTFV" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "h5cXjPjV4KI" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "dq3c4UZYyEG" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">10</td>
            <td>
              Other Postpartum infections /
              <i>
                Autres infection puerpérale(après accouchement par voie basse)
              </i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Aj4Uh28oDnx" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "xtZef29LvhT" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "aqoZNXRh3u1" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">11</td>
            <td>
              Prolonged or Obstructed labor/
              <i>Travail prolongé (ou dystocie mécanique)</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "N7S5UkyNkkX" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "MeGOgk5IQym" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "pAvzbDlWb6C" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">12</td>
            <td>
              Uterine rupture/<i>Rupture uterine</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "TcCrxbTJswU" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "xT9ktntXyHj" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "tTYaEaWc98i" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">13</td>
            <td>
              Amniotic embolism/<i>Embolie amniotique</i>
            </td>
            <td class="special5"></td>
            <td class="special7"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "D6QZdNHCvBK" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "LofV8CY91p8" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">14</td>
            <td>
              Complications of anesthesia/<i>Complications de l’anesthésie</i>
            </td>
            <td class="special5"></td>
            <td class="special7"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "JtzrGZlmNew" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "F6V6P8jr8W1" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">15</td>
            <td>
              Other Direct Obstetrical Complication /
              <i>Autres complications obstetricales directes</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "fOf536jAhyP" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "khTtflzJxcc" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "p2Ln9D5JArn" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">16</td>
            <td>
              Anemia Severe (&lt;7gm/dl)/ <i>Anémie Sévère (&lt;7gm/dl)</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "IKBafy5jHOz" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "BOvEH3pzgqL" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "DSW473n6arF" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">17</td>
            <td>
              HIV/Opportunistic Infections/<i>VIH infections opportunists</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "esf6rmsuWz6" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "WnTFjrMPMpq" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "pInalQxxInh" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">18</td>
            <td>
              Pulmonary embolism/ <i>Embolie pulmonaire</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "FpcZiFReiM1" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "eo3zZVoICjg" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "aKwv7St1ZGt" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">19</td>
            <td>
              Pneumonia on pregnancy/ <i>Pneumonie sur grossesse</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "OHzbgrWx3HS" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "oBh5E8awDa6" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Fk0CP2LRsoa" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">20</td>
            <td>
              Other indirect obstetrical Complication/{" "}
              <i>Autres complications obstetricales indirectes</i>
            </td>
            <td class="special5"></td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "pfyMeeI7D4E" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special7">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "HLhmVJp2HnN" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Q0Y2mTMyznN" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
        </tbody>
      </table>
      <table className="emergencyObsteric">
        <thead>
          <tr>
            <th class="special">B</th>
            <th>
              Emergency Obstetric and Neonatal Care Interventions (Basic and
              Comprehensive):{" "}
              <i>
                Les fonctions de Soins obstetricaux et neonataux d’urgence
                complets{" "}
              </i>
            </th>
            <th class="special5">Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>
              ntravenous/Intramuscular antibiotics to manage Obstetrical
              Infections/
              <i>
                {" "}
                Cas ayant reçu les Antibiotiques intraveineuses/Intramusculaires
                pour traiter les infections puerpérales
              </i>
            </td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yiqBXJJuu1J" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>
              Mother received uterotonic drugs to manage PPH/{" "}
              <i>
                Femme ayant recu un uterotonique pour traiter l’hémorragie du
                post partum
              </i>
            </td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "uabBcrbOMi3" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>
              Manual removal of placenta/ <i>Delivrance manuelle du placenta</i>
            </td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "DnekMOdY0YJ" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>
              Post-Abortion Care (Manual vacuum aspiration)/{" "}
              <i>Soins Post-Avortement (Aspiration Manuelle ou curettage)</i>
            </td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "SOdb3pVVYl1" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>
              Delivery by Vacuum extraction/{" "}
              <i>Accouchement par ventouse obstetricale</i>
            </td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "XYHy7efMtNg" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>
              Severe Pre and eclampsia cases receiving magnesium sulfate/{" "}
              <i>
                Cas de (pré) éclampsie qui ont reçus le sulfate de magnésium
              </i>
            </td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "LTe1RxQAZJf" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">7</td>
            <td>
              Blood transfusion for obstetrical complications /
              <i>Transfusion sanguine pour complication obstétricales</i>
            </td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "q9qJIX1fELT" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">8</td>
            <td>
              Women with obstetrical complications referred for emergency care
              to higher levels /
              <i>
                Femmes avec complications obstetricales transferees a l’echelon
                supérieur
              </i>
            </td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "fICuyReInRd" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
        </tbody>
      </table>
      <table className="deliiveriesAndBirths">
        <thead>
          <tr>
            <th class="special">C</th>
            <th>
              Deliveries and Births at Health facility/
              <i>Accouchements et naissances Formation sanitaire</i>
            </th>
            <th class="special2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>
              Deliveries total at health facility/<i>Accouchements, total</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "TWmX6JS19hO" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>
              Deliveries by Caesarean Section/<i>Césarienne</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "YjFoB5z7hPM" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>
              Delivery complicated by perineal tear (second-,third,-fourth
              degree)/<i>Accouchement compliqués par déchirure périnéale</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "yuVx24YWaQC" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>
              Birth trauma to newborn/
              <i>Traumatismes du nouveau- né à la naissance</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "mT8zF8qImG1" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>
              Cleft palate or Cleft lip/
              <i>Bec de lievre ou Fente Labio-palatine</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "zzu1At9VFrE" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>
              Other congenital malformation/
              <i>Autre malformation congénitale</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "RZlLsJsdUdY" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">7</td>
            <td class="specialcl2">
              Deliveries under 14 years /{" "}
              <i class="specialcl2">
                Accouchement, femmes âgées de moins 14 ans
              </i>
            </td>
            <td class="special2"></td>
          </tr>
          <tr>
            <td class="special">8</td>
            <td class="specialcl2">
              Deliveries 14 – 17 years /
              <i class="specialcl2">Accouchement, femmes de 14-17 ans</i>
            </td>
            <td class="special2"></td>
          </tr>
          <tr>
            <td class="special">9</td>
            <td>
              Deliveries 18 – 19 years/<i>Accouchement, femmes de 18-19 ans</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "sCC684QS0cr" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">10</td>
            <td>
              Multiple Pregnancies (women who delivered twins, triplets, etc.)/
              <i>Grossesses multiples (Jumeaux, triplets, etc.)</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "EcgQ17EawEC" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">11</td>
            <td>
              Women consulted for risk of premature delivery between 24-34 weeks
              /
              <i>
                Femmes qui ont consulté pour ménace d’accouchement premature
                entre24-34 semaines
              </i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "q7MMSCrzFhb" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">12</td>
            <td>
              Women consulted for risk of premature delivery between 24-34 weeks
              who received Corticosteroid /{" "}
              <i>
                Femmes qui ont consulté pour ménace d’accouchement prématuré
                entre24-34 qui ont recu les corticosteroides
              </i>
            </td>
            <td class="special5">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "tHcXRIwSGxY" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">13</td>
            <td>
              Women consulted with Preterm Premature rupture membranes (PPROM) /
              <i>
                Les femmes qui ont consulté avec rupture premature des membranes
                sur grossesse non a terme
              </i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "bWuzcOXesgP" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">14</td>
            <td>
              Women consulted with Preterm Premature rupture membranes who
              received prophylactic antibiotics/
              <i>
                Les femmes qui ont consulté avec rupture premature des membranes
                sur grossesse non a terme qui ont recu les antibiotiques
              </i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "KoaO4mxdAgz" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">15</td>
            <td>
              Women who received oxytocin immediately after birth for active
              management of third stage of labor/{" "}
              <i>
                Femmes qui ont recu Oxytocin après l’accouchement pour la prise
                en charge active du troisieme stade du travail
              </i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "YnfI5goUnPy" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">16</td>
            <td>
              Maternal deaths during labor, delivery and 24 hours after
              delivery/{" "}
              <i>
                Décès maternel pendant le travail, accouchement ou pendant 24
                après accouchement
              </i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "VfzC8s6TUrs" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">17</td>
            <td>
              Births, live /<i>Naissances vivantes</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "wRUJGPh9tuz" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">18</td>
            <td>
              Birth weight &lt;2500 gr (alive) /
              <i>Poids à la naissance &lt;2500 grvivantes</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "krWvxbmJ8RK" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">19</td>
            <td>
              Premature newborns (alive) 22-37 weeks /
              <i>Nouveaux né vivants qui sont prématurés</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "j2prahOx4Hb" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">20</td>
            <td>
              Birth Weight ≤2 Kg (alive newborns ) all /
              <i>
                Poids à la naissance ≤2000 gr (Tous les nouveaux nés vivants)
              </i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "PieFWU8m9A6" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">21</td>
            <td>
              Still births fresh (≥28 weeks or ≥1000grams) all/{" "}
              <i>Morts nés frais (≥ 28 semaines ou ≥ 1000 Grams)</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "FTWMq0h5Xts" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">22</td>
            <td>
              Still births macerated (≥28 weeks or≥1000 grams) /
              <i>Morts nés macérés ( ≥28 Semaines ou ≥1000 Grams )</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "gMxziX5AXhD" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">23</td>
            <td>
              Still births fresh (≥2500 grams) /
              <i>Morts nés frais (≥2500 gr)</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "TzwBpxiT20L" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">24</td>
            <td>
              Deaths at birth of live born babies (within 30 minutes)/
              <i>
                Décès a la naissance pour les bebes nes vivants (endéans 30
                minutes de la naissance)
              </i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "ya7qr3mLlW0" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">25</td>
            <td>
              Newborns breastfed within 1 hour of delivery/
              <i>
                {" "}
                Nouveaux-nés allaité endéans la première heure après naissance
              </i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "Ggt7SxZTo7u" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">26</td>
            <td>
              Live Newborns who didn’t cry/breath at birth/ Nouveau- nés vivants
              qui n’ont pas crié (pleuré)/<i>respiré a la naissance</i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "roGWjYfjXli" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
          <tr>
            <td class="special">27</td>
            <td>
              Live Newborns who didn’t cry/breath at birth and were resuscitated
              successfully (cry/breath within 5 minutes APGAR &lt; 5 at 5 min)/{" "}
              <i>
                Les nouveaux nes vivants réanimés avec succès (Ceux qui
                n’avaient pas crié/respiré a la naissance mais qui ont pu
                crier)/respirer endéans 5 minutes après la réanimation, APGAR
                &lt; 5 a la 5 min
              </i>
            </td>
            <td class="special2">{data.dataValueSets.dataValues.map((dataValue) => (<span>{dataValue.dataElement == "t3GLvTvbekD" && dataValue.categoryOptionCombo == "BNTdWBe0N1F" ? dataValue.value: ""}</span>))}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Obstetrical;
