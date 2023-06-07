import React from "react";

const Laboratory = ({ data }) => {
  return (
    <div className="labo_section">
      <table className="laboratory">
        <thead>
          <tr>
            <th class="specialth" colSpan="9">
              XVIII. Laboratory/ Laboratoire
            </th>
          </tr>
          <tr>
            <th class="special11" colSpan="3"></th>
            <th class="special11" colSpan="4">
              Results/ <i>Résultats </i>
            </th>
            <th class="specialcl3" colSpan="2">
              Total
            </th>
          </tr>
          <tr>
            <th class="special11" colSpan="3">
              Exams/ Examens{" "}
            </th>
            <th class="special9" colSpan="3">
              Positives
            </th>
            <th class="special5">Negatives</th>
            <th class="specialcl">&lt;5Yrs </th>
            <th class="specialcl">5Yrs+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special11" colSpan="3">
              1. Blood Smears Plasmodium
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dGj56SGnCnI" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dGj56SGnCnI" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialcl">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LGx3zxrNLsj" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialcl">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LGx3zxrNLsj" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special11" colSpan="3">
              2. Rapid Diagnostic Tests for Malaria/ Test rapide du paludisme
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dKRpKJNVb1R" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dKRpKJNVb1R" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialcl">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "orfANx36Y3l" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialcl">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "orfANx36Y3l" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special11" colSpan="3">
              3. Stools Samples TOTAL/. Examens de selles (nombre d’échantillons
              analysés)
            </td>
            <td class="specialtd4" colSpan="3"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "RlNBU1szPwr" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }} rowSpan="14"></td>
            <td class="special" rowSpan="14">
              {" "}
              Of which
            </td>
            <td class="special9"></td>
            <td class="special9" colSpan="3">
              Positive/Age group
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9"></td>
            <td class="special5">0-4Yrs</td>
            <td class="special5">5-15Yrs</td>
            <td class="special5">16+Yrs</td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">3.1 Ascaris</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ut24MERW4yr" &&
                  dataValue.categoryOptionCombo == "KuHERWP9387"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ut24MERW4yr" &&
                  dataValue.categoryOptionCombo == "GzenjKg6Wng"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ut24MERW4yr" &&
                  dataValue.categoryOptionCombo == "eyDV0NI0sxB"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">3.2 Trichuris (Tricocephale)</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hCsLKAeODPG" &&
                  dataValue.categoryOptionCombo == "KuHERWP9387"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hCsLKAeODPG" &&
                  dataValue.categoryOptionCombo == "GzenjKg6Wng"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hCsLKAeODPG" &&
                  dataValue.categoryOptionCombo == "eyDV0NI0sxB"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">3.3 Ankylostoma (hookworms)</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "u94z9I9IUXn" &&
                  dataValue.categoryOptionCombo == "KuHERWP9387"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "u94z9I9IUXn" &&
                  dataValue.categoryOptionCombo == "GzenjKg6Wng"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "u94z9I9IUXn" &&
                  dataValue.categoryOptionCombo == "eyDV0NI0sxB"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">3.4 Schistosoma in stool</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Pq5xDiaKshA" &&
                  dataValue.categoryOptionCombo == "KuHERWP9387"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Pq5xDiaKshA" &&
                  dataValue.categoryOptionCombo == "GzenjKg6Wng"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Pq5xDiaKshA" &&
                  dataValue.categoryOptionCombo == "eyDV0NI0sxB"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9" style={{ backgroundColor: "black" }}></td>
            <td class="special9" colSpan="3">
              Positive/Total
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">3.5 Taenia (solium and saginata)</td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rHylBUT6bYa" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">3.6 Entamoeba histolytica</td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "T71wgj43P73" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">3.7 Giardia lamblia or intestinalis</td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DRby9OB09U4" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">3.8 Enterobius vermicularis (Oxyure)</td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "N0cGqERQBHD" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">3.9 Strongyloides stercolaris (Angillule)</td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "l5CPCDDxsDf" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">3.10 Trichomonas intestinalis</td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WhuTJzZa8x5" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">
              3.11 Other parasites in stools/ Autres parasites intestinaux
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "p9B5TpIkl0N" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <th colSpan="9">4. Urine</th>
          </tr>
          <tr>
            <td style={{ width: "10px" }} rowSpan="3"></td>
            <td rowSpan="3" class="special">
              {" "}
              Of which
            </td>
            <td class="special9">
              4.1. Sugar/ <i>Sucre</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "K3uM4zTQbxF" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "K3uM4zTQbxF" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td class="special9">4.2. Albumin</td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "E75Lz4QGjEE" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "E75Lz4QGjEE" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>

          <tr>
            <td class="special9">
              4.3. Pregnancy test/ <i>Test de grossesse</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qz4EZbU4mvC" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qz4EZbU4mvC" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <th class="specialth1" colSpan="9">
              5. Bacteriology/ <i class="ispg">Bactériologie</i>
            </th>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td rowSpan="3" style={{ maxWidth: "30px" }}>
              {" "}
              5.1.Vaginal-
              <br />
              swab
              <br />/<i>Ecouvillon vaginal</i>
            </td>
            <td class="special9">
              5.1.a Fresh/<i> Frais</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AIwScXIpZ0s" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AIwScXIpZ0s" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td class="special9">
              5.1.b Gram/<i> Gram</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XZHuyibAmdc" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XZHuyibAmdc" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td class="special9">
              5.1.c Of which diplococcus gram (-)/
              <i>don’t diplococcus gram (-)</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "m9W9rt06NaE" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td rowSpan="3" style={{ maxWidth: "30px" }}>
              5.2. Urethral
              <br /> swab
              <br />/<i>Ecouvillon urétral</i>
            </td>
            <td class="special9">
              5.1.a Fresh/ <i>Frais</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DfyvbxycjOy" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DfyvbxycjOy" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td class="special9">
              5.1.b Gram/ <i>Gram</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "EP5i60qLUvq" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "EP5i60qLUvq" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td class="special9">
              5.1.c Of which diplococcus gram (-)/
              <i>don’t diplococcus gram (-)</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "tBwjkZtT15O" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td rowSpan="3" class="special5">
              {" "}
              5.3 Urine
            </td>
            <td class="special9">
              5.1.a Fresh/ <i>Frais</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AqW0MAYgc2B" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AqW0MAYgc2B" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td class="special9">
              5.1.b Gram/<i> Gram</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IMcg2WawGAS" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IMcg2WawGAS" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td class="special9">
              5.1.c Of which diplococcus gram (-)/
              <i>don’t diplococcus gram (-)</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MjKtLZ7vRL4" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1"></td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <th class="specialth1" colSpan="9" s>
              6. Blood/ Sang
            </th>
          </tr>
          <tr>
            <td style={{ width: "10px" }} rowSpan="9"></td>
            <td style={{ width: "150px" }} colSpan="2">
              6.1. RPR
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sVeQGmQoFBu" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sVeQGmQoFBu" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "150px" }} colSpan="2">
              6.2. HIV final result/ <i>HIV résultat final</i>
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mf57zt8Zpgr" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mf57zt8Zpgr" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "150px" }} colSpan="2">
              6.3. ESR/<i>VS</i>
            </td>
            <td class="special9" colSpan="3"></td>
            <td class="specialtd1"></td>
            <td class="special1" colSpan="2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "RbZsq9GYXvm" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "150px" }} colSpan="2">
              6.4. Full Blood Count (FBC/NFS)
            </td>
            <td class="specialtd4" colSpan="3"></td>
            <td class="specialtd1"></td>
            <td class="special1" colSpan="2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mkSRXV02tFJ" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "150px" }} colSpan="2">
              6.5. ALAT(GPT) (Alanine Aminotransferase )
            </td>
            <td class="specialtd4" colSpan="3"></td>
            <td class="specialtd1"></td>
            <td class="special1" colSpan="2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WJE7lOOlfEP" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "150px" }} colSpan="2">
              6.6. Creatinine
            </td>
            <td class="specialtd4" colSpan="3"></td>
            <td class="specialtd1"></td>
            <td class="special1" colSpan="2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NMJOaJkJg1A" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "150px" }} colSpan="2">
              6.7. Blood glucose
            </td>
            <td class="specialtd4" colSpan="3"></td>
            <td class="specialtd1"></td>
            <td class="special1" colSpan="2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ASSbq3HMGY0" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "150px" }} colSpan="2">
              6.8. Amylase
            </td>
            <td class="specialtd4" colSpan="3"></td>
            <td class="specialtd1"></td>
            <td class="special1" colSpan="2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "pQIQRrj58Ga" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "150px" }} colSpan="2">
              6.9. CD4
            </td>
            <td class="specialtd4" colSpan="3"></td>
            <td class="specialtd1"></td>
            <td class="special1" colSpan="2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HiwCjMe0mR6" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td style={{ width: "150px" }} colSpan="2">
              6.10. Pregnancy test
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "o6RaWn2HUQ9" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "o6RaWn2HUQ9" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td style={{ width: "150px" }} colSpan="2">
              6.11. CRAG (Serum Cryptococcal Antigen)
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "neQoEu66SFI" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "neQoEu66SFI" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td style={{ width: "150px" }} colSpan="2">
              6.12. HBV (Hepatitis B Virus)
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MkdDMJlYYrw" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MkdDMJlYYrw" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <td style={{ width: "10px" }}></td>
            <td style={{ width: "150px" }} colSpan="2">
              6.13. HCV (Hepatitis C Virus)
            </td>
            <td class="special9" colSpan="3">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HfZkPtitnkO" &&
                  dataValue.categoryOptionCombo == "DjH2G9hAwTx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HfZkPtitnkO" &&
                  dataValue.categoryOptionCombo == "UcvynyjWX9K"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="specialtd5" colSpan="2"></td>
          </tr>
          <tr>
            <th class="special11" colSpan="3">
              7. Cerebro Spinal fluid /<i> Liquide cérebro spinale</i>
            </th>
            <td class="special9" colSpan="3"></td>
            <td class="specialtd1"></td>
            <td class="special1" colSpan="2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bfwojiaWF57" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th class="special11" colSpan="3">
              8. Other Lab tests /<i> Autres tests de laboratoires</i>
            </th>
            <td class="special9" colSpan="3"></td>
            <td class="specialtd1"></td>
            <td class="special1" colSpan="2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "RRaTlwwFQnC" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th class="special11" colSpan="3">
              .TOTAL tests conducted in the laboratory/{" "}
              <i>TOTAL tests de laboratoire</i>
            </th>
            <td class="special9" colSpan="3"></td>
            <td class="specialtd1"></td>
            <td class="special1" colSpan="2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Laboratory;
