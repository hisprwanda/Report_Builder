import React from "react";

const Kangaroo = ({ data }) => {
  return (
    <div className="kangaroo_section">
      <table className="kangaroo">
        <thead>
          <tr>
            <th class="specialth" colSpan="3">
              XIV. Kangaroo Mother Care/ Soins maternels Kangourou
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="special">1</td>
            <td>
              Low birth weight &lt; 2000 grams babies admitted in KMC/{" "}
              <i>
                Nouveau-nés à faible poids à la naissance &lt; 2000 grams
                admises au KMC
              </i>
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "H4HLPPwHBOC" &&
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
              Newborns discharged from KMC Unit/
              <i>Nouveaux nés sorties de KMC</i>
            </td>
            <td class="special5">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fH4WgUoaWDS" &&
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
export default Kangaroo;
