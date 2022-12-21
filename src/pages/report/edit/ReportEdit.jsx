import React from 'react'
import BackButton from '../../../components/back/BackButton'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './report-edit.scss'

const ReportEdit = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }


  return (
    <div className='report_edit'>
        <div className="back_btn">
            <BackButton />
        </div>

        <div className="header">
            <div className="title">
              Edit Format 1
            </div>
            <div className="btn">
            <AddIcon /> Add Row
            </div>
        </div>

        <div className="edit_form_row">
            
            <div className="left">
              <div className="container">
                <span className="row_no">Row 1</span>
                <span><MoreVertIcon className='icon' /></span>
              </div>
            </div>

            <div className="middle">
                <div className="selector">
                  <span>Content Type</span>
                  <select value={value} onChange={handleChange}>
                    <option value="">Select Content Type</option>
                    <option value="data">Data</option>
                    <option value="text">Text</option>
                    <option value="empty">Empty</option>
                  </select>
                </div>

                <div className="data_container">
                  <span className="title">Data Item</span>
                  <span className="value">ART Monthly Summary (Reporting Rate)</span>
                </div>

                <div className="data_container">
                  <span className="title">Organisation Unit(s)</span>
                  <span className="value">Kibagabaga Hospital</span>
                </div>

                <div className="data_container">
                  <span className="title">Period(s)</span>
                  <span className="value">Last Month</span>
                </div>
            </div>

            <div className="right">
                <DeleteIcon className='icon'/>
            </div>
        </div>

        <div className="edit_form_row">
            
        <div className="left">
              <div className="container">
                <span className="row_no">Row 1</span>
                <span><MoreVertIcon className='icon' /></span>
              </div>
            </div>

            <div className="middle">
                <div className="selector">
                  <span>Content Type</span>
                  <select value={value} onChange={handleChange}>
                    <option value="">Select Content Type</option>
                    <option value="data">Data</option>
                    <option value="text">Text</option>
                    <option value="empty">Empty</option>
                  </select>
                </div>

                <div className="data_container">
                  <span className="title">Data Item</span>
                  <span className="value">ART Monthly Summary (Reporting Rate)</span>
                </div>

                <div className="data_container">
                  <span className="title">Organisation Units</span>
                  <span className="value">Kibagabaga Hospital</span>
                </div>

                <div className="data_container">
                  <span className="title">Period(s)</span>
                  <span className="value">Last Month</span>
                </div>
            </div>

            <div className="right">
                <DeleteIcon className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default ReportEdit