import React from "react";

const Hospitalization = ({ data }) => {
  return (
    <div className="hospitalization_section">
      <table className="hospitalizations">
        <thead>
          <tr>
            <th colSpan="9" class="specialth">
              VIII. Hospitalizations / Hospitalisations
            </th>
          </tr>
          <tr>
            <th colSpan="3">
              A) Summary statistics by service/{" "}
              <i>Résumé des statistiques par service</i>{" "}
            </th>
            <th class="special1">Internal Medicine</th>
            <th class="special1">Pediatrics</th>
            <th class="special1">Surgery</th>
            <th class="special1">Gyn. Obst</th>
            <th class="special1">Intensive care</th>
            <th class="special1">Neonatology</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "20px" }}>1</td>
            <td colSpan="2">
              Number of beds (a)/ <i>Nombre de lits(a)</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LkHMszPYzQs" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LkHMszPYzQs" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LkHMszPYzQs" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LkHMszPYzQs" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LkHMszPYzQs" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LkHMszPYzQs" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}>2</td>
            <td colSpan="2">
              Present at the beginning of the month/{" "}
              <i>Présent au début du mois</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jo9G2Nblp7H" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jo9G2Nblp7H" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jo9G2Nblp7H" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jo9G2Nblp7H" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jo9G2Nblp7H" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jo9G2Nblp7H" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}>3</td>
            <td colSpan="2">
              Admissions during the month of which:/{" "}
              <i>Entrants du mois dont :</i>
            </td>
            <td class="special1"></td>
            <td class="special1"></td>
            <td class="special1"></td>
            <td class="special1"></td>
            <td class="special1"></td>
            <td class="special1"></td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}></td>
            <td class="special">3.1</td>
            <td>
              Referred from the Health Centre/{" "}
              <i>Référés des Centres de sante</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HddFRurHgkk" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HddFRurHgkk" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HddFRurHgkk" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HddFRurHgkk" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HddFRurHgkk" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HddFRurHgkk" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}></td>
            <td class="special">3.2</td>
            <td>
              {" "}
              Non-referred patients/<i> Non Référés</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MAsdrUPyS4M" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MAsdrUPyS4M" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MAsdrUPyS4M" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MAsdrUPyS4M" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MAsdrUPyS4M" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MAsdrUPyS4M" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}>4</td>
            <td colSpan="2">
              Discharges during the month (b) of which/
              <i> Sortant du mois (b)dont :</i>
            </td>
            <td class="special1"></td>
            <td class="special1"></td>
            <td class="special1"></td>
            <td class="special1"></td>
            <td class="special1"></td>
            <td class="special1"></td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}></td>
            <td class="special">4.1</td>
            <td>
              Authorized/Cured/ Sortants autorisés /<i>Guéris</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AvmzcO8Nqc2" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AvmzcO8Nqc2" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AvmzcO8Nqc2" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AvmzcO8Nqc2" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AvmzcO8Nqc2" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AvmzcO8Nqc2" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}></td>
            <td class="special">4.2</td>
            <td>
              Unauthorized discharge/<i>Sortie non autorisé</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hVsGPgnXqmJ" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hVsGPgnXqmJ" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hVsGPgnXqmJ" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hVsGPgnXqmJ" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hVsGPgnXqmJ" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hVsGPgnXqmJ" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}></td>
            <td class="special">4.3</td>
            <td>
              Deaths/<i> Décès</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "j3Kli4Q58xb" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "j3Kli4Q58xb" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "j3Kli4Q58xb" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "j3Kli4Q58xb" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "j3Kli4Q58xb" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "j3Kli4Q58xb" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}></td>
            <td class="special">4.4</td>
            <td>
              {" "}
              Referred/ <i>Référés</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "coS3nfO52h8" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "coS3nfO52h8" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "coS3nfO52h8" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "coS3nfO52h8" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "coS3nfO52h8" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "coS3nfO52h8" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}></td>
            <td class="special">4.5</td>
            <td>
              Counter-referred/ <i>Contre Référés</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ZGuaZccsryg" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ZGuaZccsryg" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ZGuaZccsryg" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ZGuaZccsryg" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ZGuaZccsryg" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ZGuaZccsryg" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}>5</td>
            <td colSpan="2">
              Present at the end of the month/ <i>Présenta la fin du mois</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OGIDhsTU03X" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OGIDhsTU03X" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OGIDhsTU03X" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OGIDhsTU03X" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OGIDhsTU03X" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "OGIDhsTU03X" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}>6</td>
            <td colSpan="2">
              otal hospitalization days for discharged patients (c)/{" "}
              <i>Somme total séjour des sortants (c)</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HACvCGiiZF4" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HACvCGiiZF4" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HACvCGiiZF4" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HACvCGiiZF4" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HACvCGiiZF4" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HACvCGiiZF4" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20px" }}>7</td>
            <td colSpan="2">
              Actual hospitalization days (This month only) (d)/
              <i> Nb journées. hosp. Effectives (d)</i>
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sqXdzAJFLmC" &&
                  dataValue.categoryOptionCombo == "YIdZvrzV6Eo"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sqXdzAJFLmC" &&
                  dataValue.categoryOptionCombo == "qwFlY6Npcm0"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sqXdzAJFLmC" &&
                  dataValue.categoryOptionCombo == "AxdPeXeAC6r"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sqXdzAJFLmC" &&
                  dataValue.categoryOptionCombo == "rS83N7X8kQj"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sqXdzAJFLmC" &&
                  dataValue.categoryOptionCombo == "jqn3wZvyZh2"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special1">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sqXdzAJFLmC" &&
                  dataValue.categoryOptionCombo == "MBSULZCOAjK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="emergenceServices">
        <thead>
          <th> B) Emergence services/Service des urgences </th>
          <th class="special6">&lt;5 Years </th>
          <th class="special6">&gt;=5 Yrs</th>
        </thead>
        <tbody>
          <tr>
            <td>
              1. Emergency total case received during the month/{" "}
              <i>Entrants du mois</i>
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ixs6bqzls6R" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ixs6bqzls6R" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              2. Road Traffic injuries (including cycling)/{" "}
              <i>Blessures causées par la circulation routière</i>
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WeTILmC9GCL" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WeTILmC9GCL" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              3. Emergency total Referred to higher level/ <i>Référés</i>
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vYlfJKBeXn5" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vYlfJKBeXn5" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              4. Fire/burns (thermo, electrical, chemical)/<i>Brulures</i>
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VwlDFGG9iCN" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VwlDFGG9iCN" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              Other injuries/<i>Autre traumatismes</i>
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LSKnTBG6w9Y" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "LSKnTBG6w9Y" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              6. Death in Emergency/<i>Décès dans le service des urgences</i>
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "I6ymJFOBTOR" &&
                  dataValue.categoryOptionCombo == "ogpshxtAJcX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "I6ymJFOBTOR" &&
                  dataValue.categoryOptionCombo == "e6Ucbjb8jMX"
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
          <th colSpan="2">
            C) Summary by age/<i> Synthèse par age</i>
          </th>
          <th class="special6">Under 1 years(include neonates)</th>
          <th class="special6">1 to 4 years </th>
          <th class="special6">5 years and above</th>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>
              Hospitalized/ (Admissions during the month)/<i>Hospitalisé</i>
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xTgHclFPshj" &&
                  dataValue.categoryOptionCombo == "zzCpJ7J36sP"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xTgHclFPshj" &&
                  dataValue.categoryOptionCombo == "SWzGf18rVd5"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xTgHclFPshj" &&
                  dataValue.categoryOptionCombo == "Wmq468k5CW1"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>
              Deaths/ <i>Décès</i>
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gmUTpCfpwuH" &&
                  dataValue.categoryOptionCombo == "zzCpJ7J36sP"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gmUTpCfpwuH" &&
                  dataValue.categoryOptionCombo == "SWzGf18rVd5"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gmUTpCfpwuH" &&
                  dataValue.categoryOptionCombo == "Wmq468k5CW1"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="paymentForHospitalization">
        <thead>
          <th colSpan="2">
            D) Payment for Hospitalization/ <i>Paiement en hospitalisation</i>
          </th>
          <td class="special6">Total</td>
          <th>
            E) Special causes of admissions and deaths/
            <i>Causes Spéciales d’hospitalisation et de décès</i>
          </th>
          <th class="special6">
            Admissions/ <i>Hospitalisés</i>
          </th>
          <th class="special6">
            Deaths/<i>Décès</i>
          </th>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>
              Insured Discharges (Mutuelle ,etc)/{" "}
              <i>Sortants avec assurance (Mutuelle, etc)</i>
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "as1RkZW5hhd" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td>
              1. Road traffic accidents/{" "}
              <i>Accidents de circulation routière</i>
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "D2OItZs6dD6" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HtCDGkLcyfv" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="causesOfHospitalization">
        <thead>
          <tr>
            <th rowSpan="3" colSpan="2">
              F) Causes of Hospitalization and death at discharge/{" "}
              <i>Causes principales d’hospitalisation à la sortie</i>
            </th>
            <th rowSpan="3" class="special6">
              CODE ICD 11
            </th>
            <th style={{ width: "160px" }} colSpan="4">
              Hospitalization/ <i>Hospitalisés</i>{" "}
            </th>
            <th style={{ width: "160px" }} colSpan="4">
              Deaths/ <i>Décès</i>
            </th>
          </tr>
          <tr>
            <th colSpan="2" class="special1">
              &lt;5 yrs
            </th>
            <th colSpan="2" class="special1">
              &gt;=5 yrs
            </th>
            <th colSpan="2" class="special1">
              &lt;5 yrs
            </th>
            <th colSpan="2" class="special1">
              &gt;=5 yrs
            </th>
          </tr>
          <tr>
            <th class="special5">M</th>
            <th class="special5">F</th>
            <th class="special5">M</th>
            <th class="special5">F</th>
            <th class="special5">M</th>
            <th class="special5">F</th>
            <th class="special5">F</th>
            <th class="special5">F</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>
              Pneumonia/<i>Pneumonie</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dZlLftR3JqJ" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dZlLftR3JqJ" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dZlLftR3JqJ" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dZlLftR3JqJ" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vkbm04dutmA" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vkbm04dutmA" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vkbm04dutmA" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vkbm04dutmA" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>
              Other respiratory diseases/<i>Autre maladies respiratoire</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jLdCiMY043h" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jLdCiMY043h" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jLdCiMY043h" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jLdCiMY043h" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hSasfQqyB5t" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hSasfQqyB5t" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hSasfQqyB5t" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hSasfQqyB5t" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>
              Acute Malnutrition/<i>Malnutrition Aigue</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rQr6zw8HJEi" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rQr6zw8HJEi" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rQr6zw8HJEi" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rQr6zw8HJEi" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Q48EliotTcN" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Q48EliotTcN" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Q48EliotTcN" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Q48EliotTcN" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>
              HIV/AIDS related opportunistic Infection/
              <i>Infection opportuniste due VIH</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "FAjquoTjfVx" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "FAjquoTjfVx" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "FAjquoTjfVx" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "FAjquoTjfVx" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hpE75slEP6M" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hpE75slEP6M" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hpE75slEP6M" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hpE75slEP6M" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>
              Sexual transmitted diseases (STI)/
              <i>Maladies sexuellement transmissible</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NkCOG9kW8Kd" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NkCOG9kW8Kd" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NkCOG9kW8Kd" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NkCOG9kW8Kd" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zDn4tIVg3Cf" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zDn4tIVg3Cf" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zDn4tIVg3Cf" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zDn4tIVg3Cf" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">6</td>
            <td>Intestinal parasites</td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WI8TlHV7HI2" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WI8TlHV7HI2" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WI8TlHV7HI2" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WI8TlHV7HI2" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IawXcuzgSy3" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IawXcuzgSy3" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IawXcuzgSy3" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IawXcuzgSy3" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">7</td>
            <td>
              Diarrhea diseases/<i>Maladies Diarrhéiques</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bkKIZEkuMCA" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bkKIZEkuMCA" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bkKIZEkuMCA" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bkKIZEkuMCA" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "I8Bl6g0q1vo" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "I8Bl6g0q1vo" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "I8Bl6g0q1vo" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "I8Bl6g0q1vo" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">8</td>
            <td>
              Skin diseases/<i>Maladies de la peau</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ISSpZfgqZv6" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ISSpZfgqZv6" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ISSpZfgqZv6" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ISSpZfgqZv6" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IwU4vnwKtJn" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IwU4vnwKtJn" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IwU4vnwKtJn" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IwU4vnwKtJn" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">9</td>
            <td>
              Burns/ <i>Brulures</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WOQmYjzf2wc" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WOQmYjzf2wc" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WOQmYjzf2wc" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WOQmYjzf2wc" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zdmDKEZiSuQ" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zdmDKEZiSuQ" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zdmDKEZiSuQ" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zdmDKEZiSuQ" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">10</td>
            <td>
              Hepatitis/ <i>Hépatite</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QdPQgPFuL0Z" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QdPQgPFuL0Z" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QdPQgPFuL0Z" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QdPQgPFuL0Z" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XLFQDnUvGXa" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XLFQDnUvGXa" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XLFQDnUvGXa" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XLFQDnUvGXa" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">11</td>
            <td>
              Cirrhosis of the liver/ <i>Cirrhose du foie</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "lmdifyIwAWE" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "lmdifyIwAWE" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "lmdifyIwAWE" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "lmdifyIwAWE" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Jty0YhB15Sy" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Jty0YhB15Sy" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Jty0YhB15Sy" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Jty0YhB15Sy" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">12</td>
            <td>
              Diseases of the stomach or the duodenum /
              <i>Gastrites et maladies duodénale</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "UIVCk2cSwIm" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "UIVCk2cSwIm" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "UIVCk2cSwIm" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "UIVCk2cSwIm" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "SIrZW5JfFyw" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "SIrZW5JfFyw" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "SIrZW5JfFyw" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "SIrZW5JfFyw" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">13</td>
            <td>
              Appendicitis/ <i>Appendicites</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WEY6kDs83SR" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WEY6kDs83SR" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WEY6kDs83SR" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WEY6kDs83SR" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "biKiT5AIrV2" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "biKiT5AIrV2" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "biKiT5AIrV2" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "biKiT5AIrV2" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">14</td>
            <td>
              Diseases of intestine/<i>Maladies intestinales</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WqopgvmLzAH" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WqopgvmLzAH" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WqopgvmLzAH" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WqopgvmLzAH" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YUcffpuatai" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YUcffpuatai" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YUcffpuatai" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YUcffpuatai" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">15</td>
            <td>
              Diseases of the genitourinary system/
              <i>Maladies du system uro- génitale</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "M7Z9aw9g8G0" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "M7Z9aw9g8G0" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "M7Z9aw9g8G0" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "M7Z9aw9g8G0" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ViNUTTLTYW8" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ViNUTTLTYW8" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ViNUTTLTYW8" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ViNUTTLTYW8" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">16</td>
            <td>
              Bone and Joint Diseases/
              <i>
                Maladies des os et des articulations, autres que les
                traumatismes
              </i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "falsJqwQPeS" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "falsJqwQPeS" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "falsJqwQPeS" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "falsJqwQPeS" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KzP98OlTFeQ" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KzP98OlTFeQ" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KzP98OlTFeQ" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KzP98OlTFeQ" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">17</td>
            <td>
              Bone and Joint injuries/ <i>Fracture osseuse et articulaire</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dVErNhADgu6" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dVErNhADgu6" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dVErNhADgu6" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dVErNhADgu6" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ZOKCHfDLABt" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ZOKCHfDLABt" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ZOKCHfDLABt" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ZOKCHfDLABt" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">18</td>
            <td>
              Tetanus/<i>Tétanos</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HVxegZtEQhf" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HVxegZtEQhf" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HVxegZtEQhf" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HVxegZtEQhf" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "O2ZTlO9mMg5" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "O2ZTlO9mMg5" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "O2ZTlO9mMg5" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "O2ZTlO9mMg5" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">19</td>
            <td>
              Cancer all/<i>Toutes les formes de cancer</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "t6jFCSpOmNp" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "t6jFCSpOmNp" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "t6jFCSpOmNp" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "t6jFCSpOmNp" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HzvqZDdJkeV" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HzvqZDdJkeV" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HzvqZDdJkeV" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HzvqZDdJkeV" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">20</td>
            <td>Snake bites Envenomation</td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ASsxKqBRfZJ" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ASsxKqBRfZJ" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ASsxKqBRfZJ" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ASsxKqBRfZJ" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mnU2SaczSIo" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mnU2SaczSIo" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mnU2SaczSIo" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mnU2SaczSIo" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">21</td>
            <td>
              Sepsis/<i>Septicémie</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "wc7SZmwfkPX" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "wc7SZmwfkPX" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "wc7SZmwfkPX" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "wc7SZmwfkPX" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "tDJtR5rWkfk" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "tDJtR5rWkfk" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "tDJtR5rWkfk" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "tDJtR5rWkfk" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">22</td>
            <td>
              Tuberculosis/<i>Tuberculose</i>
            </td>
            <td class="special6"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MSZEcac8qQS" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MSZEcac8qQS" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MSZEcac8qQS" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "MSZEcac8qQS" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "GSq62EFsEkW" &&
                  dataValue.categoryOptionCombo == "FCdiaRlPumY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "GSq62EFsEkW" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "GSq62EFsEkW" &&
                  dataValue.categoryOptionCombo == "aqLxpqBHcWN"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "GSq62EFsEkW" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">23</td>
            <td>
              Gynecological problems/<i>Problèmes gynécologiques</i>
            </td>
            <td class="special6"></td>
            <td class="special5"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VdnnrQ1pioo" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VdnnrQ1pioo" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KAyG3kSTN3P" &&
                  dataValue.categoryOptionCombo == "G0576RJmv6Y"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5"></td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "KAyG3kSTN3P" &&
                  dataValue.categoryOptionCombo == "zKiAxbqZCjx"
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
export default Hospitalization;
