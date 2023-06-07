import React from "react";

const MentalHealth = ({ data }) => {
  return (
    <div className="mental_health_section">
      <table className="mentalHealth">
        <thead>
          <tr>
            <th colSpan="4" class="specialth">
              IV. Mental Health/<i class="isp"> Santé mentale</i>
            </th>
          </tr>
          <tr>
            <th class="special">A</th>
            <th>Summary</th>
            <th class="special2">CD-10</th>
            <th class="special2">Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>Mental patients under follow up</td>
            <td class="special2"></td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NAvYD9KUmqs" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>
              Mental patients hospitalized/{" "}
              <i>Patients hospitalisés pour des troubles mentaux</i>
            </td>
            <td class="special2"></td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "JqycbuAW6tO" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>
              Mental patients referred to upper level /{" "}
              <i>Patients référés à un niveau medical plus élevé</i>
            </td>
            <td class="special2"></td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HaBVW2PnvQQ" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="newCasesOldCases">
        <thead>
          <tr>
            <th colSpan="3"></th>
            <th colSpan="4" style={{ width: "160px", alignItems: "center" }}>
              {" "}
              New cases
            </th>
            <th colSpan="4" style={{ width: "160px", alignItems: "center" }}>
              {" "}
              Old Cases Seen
            </th>
          </tr>
          <tr>
            <th class="special"></th>
            <th></th>
            <th class="special2"></th>
            <th colSpan="2" class="special1">
              0-19Yrs
            </th>
            <th colSpan="2" class="special1">
              &gt;=20 Yrs
            </th>
            <th colSpan="2" class="special1">
              0-19Yrs
            </th>
            <th colSpan="2" class="special1">
              &gt;=20 Yrs
            </th>
          </tr>
          <tr>
            <th class="special">B</th>
            <th>
              Diagnosis/ <i>Diagnostique</i>
            </th>
            <th class="special2">ICD-11</th>
            <th class="special5">M</th>
            <th class="special5">F</th>
            <th class="special5">M</th>
            <th class="special5">F</th>
            <th class="special5">M</th>
            <th class="special5">F</th>
            <th class="special5">M</th>
            <th class="special5">F</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>
              Anxiety disorders/<i>Les troubles anxieux</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bZkjRNkNITu" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bZkjRNkNITu" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bZkjRNkNITu" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bZkjRNkNITu" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aebjZSZx7dN" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aebjZSZx7dN" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aebjZSZx7dN" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aebjZSZx7dN" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>
              Post-traumatic stress disorder/{" "}
              <i>Syndrome de Stress Post-Traumatique</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fN0Pc3OX02R" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fN0Pc3OX02R" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fN0Pc3OX02R" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fN0Pc3OX02R" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PXs02WH7ULD" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PXs02WH7ULD" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PXs02WH7ULD" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PXs02WH7ULD" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>
              Schizophrenia and other psychoses /{" "}
              <i>Schizophrénie et autres Psychoses</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "g3T5YqFHilH" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "g3T5YqFHilH" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "g3T5YqFHilH" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "g3T5YqFHilH" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TH6BAntXJ8a" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TH6BAntXJ8a" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TH6BAntXJ8a" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TH6BAntXJ8a" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>
              Somatoform disorders/<i>Troubles somatiques</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PHmPKPRyzPF" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PHmPKPRyzPF" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PHmPKPRyzPF" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "PHmPKPRyzPF" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bwUrM2J3XyD" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bwUrM2J3XyD" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bwUrM2J3XyD" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bwUrM2J3XyD" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>
              Mental disorders due to alcohol and substance abuse/{" "}
              <i>Troubles mentaux dus à la toxicomanie</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "axLMHIM0fBT" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "axLMHIM0fBT" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "axLMHIM0fBT" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "axLMHIM0fBT" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dZdO3GRuaeX" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dZdO3GRuaeX" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dZdO3GRuaeX" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dZdO3GRuaeX" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>
              Depression/ <i>Dépression</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VfFHOgOnWkv" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VfFHOgOnWkv" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VfFHOgOnWkv" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VfFHOgOnWkv" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "diX0yRW3dtk" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "diX0yRW3dtk" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "diX0yRW3dtk" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "diX0yRW3dtk" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">7</td>
            <td>
              Suicide attempt / <i>Suicide tentative</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xJKGUnPT78f" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xJKGUnPT78f" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xJKGUnPT78f" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xJKGUnPT78f" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "meCAKq86jnO" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "meCAKq86jnO" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "meCAKq86jnO" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "meCAKq86jnO" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">8</td>
            <td>
              Bipolar disorders/<i>Troubles bipolaires</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ljudCVNYhG9" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ljudCVNYhG9" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ljudCVNYhG9" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ljudCVNYhG9" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TBcGJgIY6HD" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TBcGJgIY6HD" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TBcGJgIY6HD" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TBcGJgIY6HD" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">9</td>
            <td>
              Neuro-development disorders/ <i>Troubles neurodéveloppementaux</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IqdY85Jq0e3" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IqdY85Jq0e3" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IqdY85Jq0e3" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IqdY85Jq0e3" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ufQeIJBYa5q" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ufQeIJBYa5q" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ufQeIJBYa5q" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ufQeIJBYa5q" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">10</td>
            <td>
              Epilepsy/<i>Epilepsie</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MracaYsy3nI" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MracaYsy3nI" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MracaYsy3nI" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MracaYsy3nI" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XMaYXY2mvWf" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XMaYXY2mvWf" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XMaYXY2mvWf" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XMaYXY2mvWf" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">11</td>
            <td>
              Other mental problems/<i>Autre problèmes mentaux</i>
            </td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qp4G7wGaDYn" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qp4G7wGaDYn" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qp4G7wGaDYn" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qp4G7wGaDYn" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YSDDoJlC7ux" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YSDDoJlC7ux" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YSDDoJlC7ux" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YSDDoJlC7ux" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">12</td>
            <td>Other neurological disorders</td>
            <td class="special2"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qB8MVLLOmVa" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qB8MVLLOmVa" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qB8MVLLOmVa" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qB8MVLLOmVa" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rgIWRG99lSC" &&
                  dataValue.categoryOptionCombo == "UAobY6ks0Cw"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rgIWRG99lSC" &&
                  dataValue.categoryOptionCombo == "N49aGqZKg53"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rgIWRG99lSC" &&
                  dataValue.categoryOptionCombo == "q13tPjAiAXs"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rgIWRG99lSC" &&
                  dataValue.categoryOptionCombo == "wcqnmvSFslD"
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
export default MentalHealth;
