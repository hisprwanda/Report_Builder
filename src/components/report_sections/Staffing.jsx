import React from "react";

const Staffing = ({ data }) => {
  return (
    <div className="staffing_section">
      <table className="staffing">
        <thead>
          <tr>
            <th class="specialth" colSpan="12">
              XXII. Staffing Information (Quarterly reporting form)
            </th>
          </tr>
          <tr>
            <th class="speci"></th>
            <th class="special12"></th>
            <th class="special1" colSpan="2">
              Gender
            </th>
            <th style={{ width: "240px" }} colSpan="6">
              Age Group
            </th>
            <th class="special1" colSpan="2">
              Nationalit
            </th>
          </tr>
          <tr>
            <th class="speci">A</th>
            <th class="special12">Category </th>
            <th class="special5">Male </th>
            <th class="special5">Female </th>
            <th class="special5">&lt;25 Yrs</th>
            <th class="special5">25-34 yrs</th>
            <th class="special5">35-44 yrs</th>
            <th class="special5">45-54 yrs</th>
            <th class="special5">55-64 yrs</th>
            <th class="special5">&gt;65 Yrs </th>
            <th class="special5">Rwandan </th>
            <th class="special5">Foreign</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="speci">1</td>
            <td class="special12">Doctors (Specialist)</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "GZnIUHOpThq" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "GZnIUHOpThq" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mog4xKMIM7H" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mog4xKMIM7H" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mog4xKMIM7H" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mog4xKMIM7H" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mog4xKMIM7H" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mog4xKMIM7H" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Wmd0YN03NHO" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Wmd0YN03NHO" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">2</td>
            <td class="special12">Doctors (Generalist)</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "w0DuHL128r3" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "w0DuHL128r3" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jQTWnukRrd7" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jQTWnukRrd7" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jQTWnukRrd7" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jQTWnukRrd7" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jQTWnukRrd7" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jQTWnukRrd7" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "FUFwmCsB00x" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "FUFwmCsB00x" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">3</td>
            <td class="special12">Dental Surgeons</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "wExr5Sdugre" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "wExr5Sdugre" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NNaB2Z1VhV3" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NNaB2Z1VhV3" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NNaB2Z1VhV3" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NNaB2Z1VhV3" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NNaB2Z1VhV3" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "NNaB2Z1VhV3" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jNaihwAASbk" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jNaihwAASbk" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">4</td>
            <td class="special12">Nurses</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "lP5i0XXKsjk" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "lP5i0XXKsjk" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BIv0j1J0eeV" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BIv0j1J0eeV" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BIv0j1J0eeV" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BIv0j1J0eeV" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BIv0j1J0eeV" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BIv0j1J0eeV" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "afkRTlqbBuF" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "afkRTlqbBuF" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">5</td>
            <td class="special12">Midwives</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "JP8vodIbQlp" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "JP8vodIbQlp" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BPiFH0uLHx4" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BPiFH0uLHx4" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BPiFH0uLHx4" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BPiFH0uLHx4" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BPiFH0uLHx4" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BPiFH0uLHx4" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ExVA7Yd9vSR" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ExVA7Yd9vSR" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">6</td>
            <td class="special12">Dentist therapist</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "m0niswGZH49" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "m0niswGZH49" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sCF3OHv7PdG" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sCF3OHv7PdG" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sCF3OHv7PdG" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sCF3OHv7PdG" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sCF3OHv7PdG" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "sCF3OHv7PdG" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WRBOFuHQm1R" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WRBOFuHQm1R" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">7</td>
            <td class="special12">Pharmacists</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VYfnzjFdzuR" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VYfnzjFdzuR" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Z16Dag2z0AX" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Z16Dag2z0AX" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Z16Dag2z0AX" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Z16Dag2z0AX" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Z16Dag2z0AX" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Z16Dag2z0AX" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Fu04GGYJXmT" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Fu04GGYJXmT" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">8</td>
            <td class="special12">Lab technicians</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rNHnkW4S7rd" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rNHnkW4S7rd" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TNVRXkIDAHs" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TNVRXkIDAHs" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TNVRXkIDAHs" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TNVRXkIDAHs" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TNVRXkIDAHs" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TNVRXkIDAHs" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "p8TLGoRtXSR" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "p8TLGoRtXSR" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">9</td>
            <td class="special12">Ophthalmology clinical Officers</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XWw4DqQ0wwq" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XWw4DqQ0wwq" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TKNWaLpnKpE" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TKNWaLpnKpE" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TKNWaLpnKpE" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TKNWaLpnKpE" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TKNWaLpnKpE" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "TKNWaLpnKpE" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aIjbXzqW3nc" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aIjbXzqW3nc" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">10</td>
            <td class="special12">
              Non-Physician Anesthetists(Anesthesia Technician)
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "CQpeKaJbJBA" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "CQpeKaJbJBA" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Rc9h4DubWuA" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Rc9h4DubWuA" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Rc9h4DubWuA" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Rc9h4DubWuA" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Rc9h4DubWuA" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Rc9h4DubWuA" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rgTGU0Mx5DK" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rgTGU0Mx5DK" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">11</td>
            <td class="special12">Nutritionist</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xuGC5Uh43eY" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xuGC5Uh43eY" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IkuttFUP2fd" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IkuttFUP2fd" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IkuttFUP2fd" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IkuttFUP2fd" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IkuttFUP2fd" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IkuttFUP2fd" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YWre7ktcZmQ" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YWre7ktcZmQ" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">12</td>
            <td class="special12">Mental Health Nurses</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "uuI7MMhM4Hh" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "uuI7MMhM4Hh" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xycb4ifDp3m" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xycb4ifDp3m" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xycb4ifDp3m" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xycb4ifDp3m" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xycb4ifDp3m" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "xycb4ifDp3m" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "CgiX0prfdrz" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "CgiX0prfdrz" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">13</td>
            <td class="special12">Medical Imagery Technologists</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rKfL44oBMGS" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rKfL44oBMGS" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zmm9CTTBntd" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zmm9CTTBntd" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zmm9CTTBntd" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zmm9CTTBntd" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zmm9CTTBntd" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zmm9CTTBntd" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qsPPgPGHvAN" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qsPPgPGHvAN" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">14</td>
            <td class="special12">Environmental Health officers</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QQoAcU0wL14" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QQoAcU0wL14" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zgZ6blNuqO0" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zgZ6blNuqO0" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zgZ6blNuqO0" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zgZ6blNuqO0" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zgZ6blNuqO0" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zgZ6blNuqO0" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gtbXoABCG0j" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gtbXoABCG0j" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">15</td>
            <td class="special12">Biomedical technician</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "R2c4MyJ8C6u" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "R2c4MyJ8C6u" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aDov73Mflvh" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aDov73Mflvh" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aDov73Mflvh" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aDov73Mflvh" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aDov73Mflvh" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "aDov73Mflvh" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "iuSlhuZXmyx" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "iuSlhuZXmyx" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">16</td>
            <td class="special12">Physiotherapis</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DIkAJjfK3mz" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DIkAJjfK3mz" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YpqfYEOJP8E" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YpqfYEOJP8E" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YpqfYEOJP8E" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YpqfYEOJP8E" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YpqfYEOJP8E" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YpqfYEOJP8E" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fvdrqlwv6Un" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fvdrqlwv6Un" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">17</td>
            <td class="special12">
              Health Information System Staff(Data manager, M&E, supervisors)
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mhkbUKOmxNZ" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "mhkbUKOmxNZ" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "n5Lzs11Ul5Q" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "n5Lzs11Ul5Q" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "n5Lzs11Ul5Q" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "n5Lzs11Ul5Q" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "n5Lzs11Ul5Q" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "n5Lzs11Ul5Q" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "RwGoYIgfc96" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "RwGoYIgfc96" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">18</td>
            <td class="special12">Social Worker</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "CgOMfXL9Sse" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "CgOMfXL9Sse" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ifWGkI29HmF" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ifWGkI29HmF" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ifWGkI29HmF" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ifWGkI29HmF" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ifWGkI29HmF" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ifWGkI29HmF" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hkqb2vVWxm8" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "hkqb2vVWxm8" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">19</td>
            <td class="special12">Clinical Psychologis</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ka3DyMgGmOR" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ka3DyMgGmOR" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AtASwwVQYMm" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AtASwwVQYMm" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AtASwwVQYMm" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AtASwwVQYMm" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AtASwwVQYMm" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AtASwwVQYMm" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bwQtACxFVZ4" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bwQtACxFVZ4" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="speci">20</td>
            <td class="special12">Administrative and Support Personne</td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rmbMULzuiSN" &&
                  dataValue.categoryOptionCombo == "s8fha2EkCIC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "rmbMULzuiSN" &&
                  dataValue.categoryOptionCombo == "YXdQtfRTOUt"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "riQFR9vU6Wb" &&
                  dataValue.categoryOptionCombo == "wg5ekUL9Yam"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "riQFR9vU6Wb" &&
                  dataValue.categoryOptionCombo == "VPifjbrgTFf"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "riQFR9vU6Wb" &&
                  dataValue.categoryOptionCombo == "sVCsdHTZ7vX"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "riQFR9vU6Wb" &&
                  dataValue.categoryOptionCombo == "DAzEBw483vi"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "riQFR9vU6Wb" &&
                  dataValue.categoryOptionCombo == "xxOqZ8MwNMb"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "riQFR9vU6Wb" &&
                  dataValue.categoryOptionCombo == "UZmB2yalyWe"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "oTi8UfkegT8" &&
                  dataValue.categoryOptionCombo == "cmjKT4JiauC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "oTi8UfkegT8" &&
                  dataValue.categoryOptionCombo == "UASIAOSjEI4"
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
export default Staffing;
