import React from "react";

const Surgery = ({ data }) => {
  return (
    <div className="surgery_section">
      <table className="sugery">
        <thead>
          <tr>
            <th class="specialth" colSpan="5">
              IX. Surgery/ Chururgie
            </th>
          </tr>
          <tr>
            <th class="special"></th>
            <th class="special2">Services</th>
            <th>
              Type of surgical intervention/ type d’intervention chirurgicale
            </th>
            <th class="special2">Total interventions/interventions</th>
            <th class="special6">
              Post-surgical Infection Total/ Total d’infections post
              chirurgicales
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="13" class="special">
              1
            </td>
            <td rowSpan="13" class="special2">
              General surgery/ Chirurgie generale
            </td>
            <td>1. Appendicectomy/ Appendicectomie</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "dIw8h4SVohL" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td rowSpan="13" class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "AZmeQrs4gS4" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>2. Hernioraphy/ Hernioraphie</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "oCBL7bDERdG" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>3. Laparotomy/Laparotomie</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "B3QKBZNz6Jb" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>4. Thyroidectomy/ Thyroidectomie</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WglWWz1aTLa" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>5. Adenomectomy/Adenomectomie</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "r1dl2ajMkb4" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>6. Breast surgery/Operation de sein</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "z6FMre13d2A" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>7. Hydrocele repair/Réparation de l’hydrocèle</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bpxmyaIDIF7" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              8. testis tortion repair/Réparation de la torsion testiculaire
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "uWmVCFo8pfS" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>9. hemorrhoidectomy/Ablation des hemorroides</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DH6ELliW1se" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>10. Tissue debridement /Débridement tissulaire</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Na2jjNmqOGy" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>11. Skin grafting</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "a3iuEle8XBG" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>12. Hernia repair</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "w6hPOChdozz" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>13.Surgery due to ascariasis complications</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "yuau61eXHDB" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td rowSpan="15" class="special">
              2
            </td>
            <td rowSpan="15" class="special2">
              Gyneco - Obstetrical/ Gyneco-obstetricales
            </td>
            <td>1.Caesarean Section/Césarienne</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bDfCZHYYSeS" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td rowSpan="15" class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ds4TY7pbIMg" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              2. Dilatation and Curettage/ <i>Dilatation et curettage</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "zOx9W8iQU0B" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              3. Gynecological Hysterectomy/ <i>Hysterectomie gynecologique</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gfSVNfwAc89" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              4. Obstetrical Hysterectomy/ <i>Hysterectomie obstetricale</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "T3apdtExjUQ" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              5. Laparotomy for uterine rupture /{" "}
              <i>Laparatomie pour rupture uterine</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "L2yfwcLUzZS" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              6. Laparotomy for ectopic pregnancy/{" "}
              <i>Laparatomie pour grossesse extra-uterine</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "m029xv3md8H" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              7. Uterine repair / <i>Réparation de rupture utérine</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "jRT5joD5qpe" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              8. Myomectomy/ <i>myomectomie</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "XUIqbCN0oE7" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              9. Vesico vaginal Fistula Repair/
              <i>Fistules vesico-vaginale réparées</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WU9TlQlsDJ1" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              10. Recto vaginal Fistula Repair/
              <i>Fistules recto-vaginale réparées</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "DuGJi7TAkmG" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              11. Ureteric vaginal Fistula Repair /
              <i>Fistules uretero-vaginale réparées</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Lz8MOwhtMly" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              12 Tubal Ligation/ <i>Ligature des trompes</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vjDITqliXXE" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              13 Vasectomy/ <i>Vasectomie</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "j3U6rf6l56l" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              14. Episiotomy/ <i>Episiotomie</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ws9v4HtKtCN" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>15.Other Gyneco -Obstetrical Surgery</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QkzJaXWOCCH" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td rowSpan="7" class="special">
              3
            </td>
            <td rowSpan="7" class="special2">
              Orthopedic{" "}
            </td>
            <td>1. Amputations</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "qFn95z5iVCX" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td rowSpan="7" class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "BrK9i4YaD9X" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              2. Open fracture repair by external fixation/
              <i>Fixation externe de fracture ouverte</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Rx7G39ebAAg" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>3.Clubfoot repair</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "bxtDGz2cfem" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>4. Closed treatment of fracture</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Z4eAqoR8fPX" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>5.Joint dislocation treatment</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "n1oVQ4IcXZo" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              6.Drainage of osteomyelitis/ <i>septic arthritis</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fDz8nYXrSPE" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              7.Orthopedic surgery other/<i>Autre chirurgie orthopédique</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "iuJKSgVCOY8" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td rowSpan="7" class="special">
              4
            </td>
            <td rowSpan="7" class="special2">
              Ophthalmologic
            </td>
            <td>1. Glaucoma/Glaucome</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Q7SfiAGBJlp" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td rowSpan="7" class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ylefLVXyLre" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              2. Trachoma/<i>Trachome</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "RfIpiloejfV" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              3. Cataract/<i>Cataracte</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IgL5TXXBA62" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              4. Eye Trauma/<i>Traumatisme oculaire</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "YGldL9Z7vPy" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              5. Ophthalmological surgery other/<i>Autre chirurgie oculaire</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "fdlBJCymLTF" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>6. Cornea transplantation</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "WeC1DZt4mNb" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>7.Pterygium</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "gdnOBCbokWh" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td rowSpan="2" class="special">
              5
            </td>
            <td rowSpan="2" class="special2">
              Plastic surgery
            </td>
            <td>
              1. Cleft palate,cleft lip/<i>Bec de lièvre</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "vL1EV7ffzpe" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td rowSpan="2" class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "m8WuIQDC0Ru" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              2. Other plastic surgery/<i>Autre chirurgie plastique</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Z6PhXPcNjdr" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td rowSpan="9" class="special">
              6
            </td>
            <td rowSpan="9" class="special2">
              Other Surgery procedures{" "}
            </td>
            <td>1. Neonatal abdominal defect repair</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "p4Bx2mtu45z" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td rowSpan="9" class="special6">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "Bti68KB9KcS" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>2. Colostomy for imperforate anus</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "VX3lmsx2T2v" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>3. Cystostomy</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "tk0xnI5Y0pY" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>4. Chest tube insertion</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "T8aacE1lraz" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>5. Tracheostomy/ Cricothyroidotomy</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "oXGEKK7olap" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>6. Circumcision</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "IxajmDp6wrQ" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>7. Suturing wound</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "yHxjE3csUR3" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>8. Wound debridement</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ftYg7dhtnYj" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>9. Incision and drainage of abscess</td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "kl5zALbzpmX" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td rowSpan="3" class="special">
              7
            </td>
            <td colSpan="4">SURGICAL INTERVENTIONS TOTAL</td>
          </tr>
          <tr>
            <td rowSpan="2" class="special2">
              Of which
            </td>
            <td>
              {" "}
              1. Major surgery/<i>Chirurgie majeure</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "ymg1tiy6G5N" &&
                  dataValue.categoryOptionCombo == "BNTdWBe0N1F"
                    ? dataValue.value
                    : ""}
                </span>
              ))}
            </td>
            <td rowSpan="2" class="special6"></td>
          </tr>
          <tr>
            <td>
              2. Minor surgery/<i>Chirurgie mineure</i>
            </td>
            <td class="special2">
              {data.dataValueSets.dataValues.map((dataValue) => (
                <span>
                  {dataValue.dataElement == "QKTrqPiySvx" &&
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
export default Surgery;
