import {useState} from 'react'
import BackButton from '../../../components/back/BackButton'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './report-edit.scss'
import { Button } from '@dhis2-ui/button'
import { Modal,  ModalContent } from '@dhis2-ui/modal'

const ReportEdit = () => {
    const [value, setValue] = useState('');
    const [hide, setHide] = useState(true);

    const handleChange = (event) => {
      setValue(event.target.value);
    }

    const [formatRows, setFormatRows] = useState(
      [
          { id: 1, rowTitle: 'Row 1', contentType: 'data', dataItem: 'ART Monthly Summary (Reporting Rate)', orgUnit: 'Kibagabaga Hospital', periods: 'Last Month'},
          { id: 2, rowTitle: 'Row 2', contentType: 'text', dataItem: 'Mortality Monthly Summary (Reporting Rate)', orgUnit: 'Gihundwe Hospital', periods: 'This Week'},
          { id: 3, rowTitle: 'Row 3', contentType: 'data', dataItem: 'ANC Yearly Summary (Reporting Rate)', orgUnit: 'Kabgayi Hospital', periods: 'Yesterday'},
          { id: 4, rowTitle: 'Row 4', contentType: 'text', dataItem: 'Vaccination Summary (Reporting Rate)', orgUnit: 'Ruhengeri Hospital', periods: 'Last Year'},
        ]
    );

    const [rowTitle, setRowTitle] = useState('');
    const [contentType, setContentType] = useState('');
    const [dataItem, setDataItem] = useState('');
    const [orgUnit, setOrgUnit] = useState('');
    const [periods, setPeriods] = useState('');



    // Adding a row from a format 
    const addRow = () => {
      const id = Math.floor(Math.random() * 100) +1
      const newRow = {id, rowTitle, contentType, dataItem, orgUnit, periods};
      setFormatRows([...formatRows, newRow]);
      setHide(true);
    }

    // Deleting a row from a format 
    const handleDeleteRow = (id) => {
      setFormatRows(formatRows.filter((row) => row.id !== id));
    }
    

  return (
    <div className='report_edit'>
        <div className="back_btn">
            <BackButton linkTo='/report' btnLabel='Back to Formats List'/>
        </div>

        <div className="header">
            <div className="title">
              Edit Format 1
            </div>
            <div className="btn">
            <Button name='Basic button' value='default' onClick={() => setHide(false)}>
                <AddIcon /> Add Row
            </Button>
            </div>
        </div>

        {formatRows.length > 0 ?
            formatRows.map((row, index) => (

            <div className="edit_form_row" key={index}>
                
                <div className="left">
                  <div className="container">
                    <span className="row_no">{row.rowTitle}</span>
                    <span><MoreVertIcon className='icon' /></span>
                  </div>
                </div>

                <div className="middle">
                    <div className="selector">
                      <span>Content Type</span>
                      <select value={row.contentType} onChange={handleChange}>
                        <option value=''>Select Content Type</option>
                        <option value="data">Data</option>
                        <option value="text">Text</option>
                        <option value="empty">Empty</option>
                      </select>
                    </div>

                    <div className="data_container">
                      <span className="title">Data Item</span>
                      <span className="value">{row.dataItem}</span>
                    </div>

                    <div className="data_container">
                      <span className="title">Organisation Unit(s)</span>
                      <span className="value">{row.orgUnit}</span>
                    </div>

                    <div className="data_container">
                      <span className="title">Period(s)</span>
                      <span className="value">{row.periods}</span>
                    </div>
                </div>

                <div className="right" onClick={() => handleDeleteRow(row.id)}>
                    <DeleteIcon className='icon'/>
                </div>
            </div>
            ))
            :
            <div>
              <h3 style={{ fontStyle: 'italic', fontSize:19}}>No format rows available. Create rows for this format</h3>
            </div>
        }


        {/* add Row modal */}

        <div>
          <Modal className="generate_report_modal" hide={hide} large>
            {/* <ModalTitle>My Modal</ModalTitle> */}
            <ModalContent>
                  <div >
                      <div className='modal'>
                            <div className="modal_header">
                                
                                <div className='title'>
                                    <span>Add a new row</span>
                                </div>
                            </div>
                    
                            <input className='modalInput' label="Row Title" name="defaultName" placeholder="Row title" value={rowTitle} onChange={(e) => setRowTitle(e.target.value)} required/>
                            <input className='modalInput' label="Content Type" name="defaultName" placeholder="Content Type" value={contentType} onChange={(e) => setContentType(e.target.value)} required/>
                            <input className='modalInput' label="Data Item" name="defaultName" placeholder="Data item" value={dataItem} onChange={(e) => setDataItem(e.target.value)} required/>
                            <input className='modalInput' label="Org Unit" name="defaultName" placeholder="Organisation Unit" value={orgUnit} onChange={(e) => setOrgUnit(e.target.value)} required/>
                            <input className='modalInput' label="Periods" name="defaultName" placeholder="Periods" value={periods} onChange={(e) => setPeriods(e.target.value)} required/>

                            <div className="bottom_btns">
                                <Button className='btn' secondary onClick={() => setHide(true)}> Cancel </Button>
                                <Button className='btn' primary onClick={addRow}> Add Row </Button>
                            </div>
                      </div>
                  </div>
            </ModalContent>
          </Modal>
        </div>
    </div>
  )
}

export default ReportEdit