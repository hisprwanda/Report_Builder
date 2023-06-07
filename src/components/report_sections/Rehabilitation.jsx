import React from "react";

const Rehabilitation = ({ data }) => {
  return (
    <div className="rehabilitation_section">
      <table className="rehabilitation ">
        <thead>
          <tr>
            <th class="specialth" colSpan="7">
              XI. Rehabilitation and physiotherapy
            </th>
          </tr>
          <tr>
            <th class="special">A</th>
            <th>Assistive products distributed</th>
            <th class="special7">Mobility devices</th>
            <th class="special7">Vision </th>
            <th class="special5">Self-care</th>
            <th class="special5">Hearing</th>
            <th class="special5">other</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>Number of assistive products distributed</td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "S577VRgt5PZ" &&
                  dataValue.categoryOptionCombo == "V8Hq9avD9QY"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "S577VRgt5PZ" &&
                  dataValue.categoryOptionCombo == "uvmX6E5XIyJ"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "S577VRgt5PZ" &&
                  dataValue.categoryOptionCombo == "GkxJGhCPlwK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "S577VRgt5PZ" &&
                  dataValue.categoryOptionCombo == "YrfBblFY1YK"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "S577VRgt5PZ" &&
                  dataValue.categoryOptionCombo == "HCwPkngt2sC"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="Btable">
        <thead>
          <tr>
            <th class="special">B</th>
            <th></th>
            <th class="special7">Inpatient</th>
            <th class="special7">Outpatient</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>Number of sessions provided by Physiotherapist (PT)</td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HB90AV2I3p1" &&
                  dataValue.categoryOptionCombo == "rNtZwl0RNMn"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "HB90AV2I3p1" &&
                  dataValue.categoryOptionCombo == "dg3FDiu1K2G"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">2</td>
            <td>Number of sessions provided by Occupational Therapist (OT)</td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "a3zG5C1fjPZ" &&
                  dataValue.categoryOptionCombo == "rNtZwl0RNMn"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "a3zG5C1fjPZ" &&
                  dataValue.categoryOptionCombo == "dg3FDiu1K2G"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">3</td>
            <td>
              Number of sessions provided by Speech and language therapist (SLT)
            </td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "m3RTcDoBQTo" &&
                  dataValue.categoryOptionCombo == "rNtZwl0RNMn"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "m3RTcDoBQTo" &&
                  dataValue.categoryOptionCombo == "dg3FDiu1K2G"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special">4</td>
            <td>Total new rehabilitation cases received</td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gVNIxRHf0EL" &&
                  dataValue.categoryOptionCombo == "rNtZwl0RNMn"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td class="special7">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gVNIxRHf0EL" &&
                  dataValue.categoryOptionCombo == "dg3FDiu1K2G"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th class="special"></th>
            <th></th>
            <th class="special7" colSpan="2">
              Total
            </th>
          </tr>
          <tr>
            <td class="special">5</td>
            <td>Number of outreach sessions</td>
            <td class="special7" colSpan="2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DohWR4n768D" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
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
export default Rehabilitation;
