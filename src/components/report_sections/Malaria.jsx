import React from "react";

const Malaria = ({ data }) => {
  return (
    <div className="malaria_section">
      <table className="malaria">
        <thead>
          <tr>
            <th colSpan="8" class="specialth">
              III. Malaria
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan="2" class="special"></th>
            <th rowSpan="2"></th>
            <th colSpan="2" style={{ width: "100px", textAlign: "center" }}>
              OPD
            </th>
            <th colSpan="2" style={{ width: "100px", textAlign: "center" }}>
              Hospitalisation
            </th>
            <th colSpan="2" style={{ width: "100px", textAlign: "center" }}>
              Deaths
            </th>
          </tr>
          <tr>
            <td class="special4">Under 5 yrs </td>
            <td class="special4">&gt;=5Yrs </td>
            <td class="special4">Under 5 yrs</td>
            <td class="special4">&gt;=5Yrs</td>
            <td class="special4">Under 5 yrs</td>
            <td class="special4">&gt;=5Yrs</td>
          </tr>

          <tr>
            <th class="special">a</th>
            <th>
              Simple Malaria/<i>Paludisme simple</i>{" "}
            </th>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ogDumYYLz71" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ogDumYYLz71" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "SGuL8Pd4DI5" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "SGuL8Pd4DI5" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">1</td>
            <td>
              All fever cases received//<i>tous les cas de fièvre reçus</i>{" "}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ogDumYYLz71" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ogDumYYLz71" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "SGuL8Pd4DI5" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "SGuL8Pd4DI5" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>
              Simple Malaria not in Pregnancy (exclude <i>post-partum</i>) /
              <i>
                Paludisme simple hormis les femmes enceintes et apres
                l'accouchement
              </i>{" "}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "M4680LwNAFk" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "M4680LwNAFk" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "pXop68jSgSb" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "pXop68jSgSb" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>
              Simple Malaria in Pregnancy/
              <i>Paludisme simple sur la grossesse</i>{" "}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "B0Y2yqocxjd" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "pAfDGBTnA5u" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>
              Simple Malaria in <i>post-partum (42 days after delivery</i>)/
              <i>
                Paludisme simple Durant la periode du postpartum dans les 42
                jours après accouchement
              </i>{" "}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MmDnglPDD6u" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "f7BqqP06anj" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>
              Simple Malaria with Minor Digestive Symptoms (not in Pregnancy)/
              <i>
                Paludisme simple avec troubles digestifs mineurs (exclure
                paludisme sur la grossesse)
              </i>{" "}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vxpTiHitKhW" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vxpTiHitKhW" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "oL58aW94Awj" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "oL58aW94Awj" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>
              Simple Malaria with Minor Digestive Symptoms in Pregnancy/
              <i>
                Paludisme simple avec troubles digestifs mineurs sur la
                grossesse
              </i>{" "}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "kobchtZma1a" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "O6nSYPeRtae" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">7</td>
            <td>
              Simple Malaria with Minor Digestive Symptoms in{" "}
              <i>post-partum (within 42 days after delivery</i>)/
              <i>
                Paludisme simple avec troubles digestifs mineurs en postpartum
                (dans les 42 jours après accouchement)
              </i>{" "}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ERtHOXfMaoA" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "b7Bq12DBiFW" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <th class="special">b</th>
            <th>
              <i>SEVERE MALARIA</i>/<i>Paludisme severe</i>{" "}
            </th>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">1</td>
            <td>
              Severe Malaria not in Pregnancy/
              <i>Paludisme severe exclu chez la femme enceinte</i>{" "}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XQT0lfAmgM6" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XQT0lfAmgM6" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QL9feCxDtot" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QL9feCxDtot" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OkPlignSxHU" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OkPlignSxHU" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>
              Severe Malaria in Pregnancy/
              <i>Paludisme severe chez la femme enceinte</i>{" "}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YBa2tyVEwRY" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Gd0iqqvtPOX" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "wPk9Uq36HwX" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>
              Severe Malaria in postpartum (within 42 days after delivery)/
              <i>
                Paludisme severe en postpartum (dans les 42 jours après
                accouchement)
              </i>{" "}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Zcp7lFR4OpX" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Zg3L7huIS71" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xQczpXDC6Jf" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th class="special">c</th>
            <th>
              <i>TREATMENT</i>{" "}
            </th>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>
              Number of persons who received first line treatment with
              ACTs(Total)
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "pcLpztYjX6I" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>
              Number of persons who received first line treatment with
              Quinine(Total){" "}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fHdM7WT0Qr3" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>Number of persons treated with Artesunate (Total)</td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "lrDuNs9t3tr" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
            <td class="special4"></td>
          </tr>
        </tbody>
      </table>
      <table className="malariaCases">
        <thead>
          <th rowSpan="2" class="special">
            d
          </th>
          <th rowSpan="2">Malaria cases Summary</th>
          <th colSpan="2" style={{ width: "100px", alignItems: "center" }}>
            Under 5 yrs
          </th>
          <th colSpan="2" style={{ width: "100px", alignItems: "center" }}>
            {" "}
            &gt;=5 yrs
          </th>
          <tr>
            <th class="special4">Male</th>
            <th class="special4">Female</th>
            <th class="special4">Male</th>
            <th class="special4">Female</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>Malaria cases received in OPD</td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Y57dJIWqCHM" &&
                  dataValue.categoryOptionCombo == "NqoTHB1f8yK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Y57dJIWqCHM" &&
                  dataValue.categoryOptionCombo == "tX7Lg7kQVnK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Y57dJIWqCHM" &&
                  dataValue.categoryOptionCombo == "HZlmid8uK4X"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Y57dJIWqCHM" &&
                  dataValue.categoryOptionCombo == "W3HRFymmS2Q"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>Inpatients Malaria cases</td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AIRywAVxcWm" &&
                  dataValue.categoryOptionCombo == "NqoTHB1f8yK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AIRywAVxcWm" &&
                  dataValue.categoryOptionCombo == "tX7Lg7kQVnK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AIRywAVxcWm" &&
                  dataValue.categoryOptionCombo == "HZlmid8uK4X"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AIRywAVxcWm" &&
                  dataValue.categoryOptionCombo == "W3HRFymmS2Q"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>Severe Malaria cases</td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fTuK6oJh5eJ" &&
                  dataValue.categoryOptionCombo == "NqoTHB1f8yK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fTuK6oJh5eJ" &&
                  dataValue.categoryOptionCombo == "tX7Lg7kQVnK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fTuK6oJh5eJ" &&
                  dataValue.categoryOptionCombo == "HZlmid8uK4X"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fTuK6oJh5eJ" &&
                  dataValue.categoryOptionCombo == "W3HRFymmS2Q"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>Malaria deaths</td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xT9vV6PLWMU" &&
                  dataValue.categoryOptionCombo == "NqoTHB1f8yK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xT9vV6PLWMU" &&
                  dataValue.categoryOptionCombo == "tX7Lg7kQVnK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xT9vV6PLWMU" &&
                  dataValue.categoryOptionCombo == "HZlmid8uK4X"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special4">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xT9vV6PLWMU" &&
                  dataValue.categoryOptionCombo == "W3HRFymmS2Q"
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

export default Malaria;
