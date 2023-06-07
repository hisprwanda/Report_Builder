import React from "react";

const CancerScreening = ({ data }) => {
  return (
    <div className="cancer_screening_section">
      <table className="cancerScreening">
        <thead>
          <th colSpan="3" class="specialth">
            VII. Cancer screening
          </th>
        </thead>
        <tbody>
          <tr>
            <td class="special5">1</td>
            <td>
              Women screened for cervical cancer/
              <i>Femmes dépistées pour le cancer du col</i>
            </td>
            <td style={{ width: "100px" }}>
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DXh9JsIYGob" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special5">2</td>
            <td>
              Women screened for breast cancer/{" "}
              <i>Femmes dépistées pour le cancer de sein</i>
            </td>
            <td style={{ width: "100px" }}>
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gcPa7C6m5FI" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td class="special5">3</td>
            <td>
              Biopsies collected for all types of cancer/
              <i>Toute forme de Biopsies prélevée</i>
            </td>
            <td style={{ width: "100px" }}>
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "biBmIro5aKL" &&
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
export default CancerScreening;
