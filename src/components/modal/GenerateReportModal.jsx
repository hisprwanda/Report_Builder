import React, {useState} from 'react'
import { Modal, ModalTitle, ModalContent, ModalActions } from '@dhis2-ui/modal'
import format1_preview from '../../assets/images/format1_preview.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@dhis2-ui/button'
import './modal_styles.scss'
import { useNavigate  } from 'react-router-dom';


export const GenerateReportModal = (props) => {
    const [hide, setHide] = useState(true)
  
    return (
      <div>
        <button onClick={() => setHide(false)}>Open Modal</button>
        <Modal className="generate_report_modal" hide={hide} large>
          {/* <ModalTitle>My Modal</ModalTitle> */}
          <ModalContent>
                <div >
                    <div className='modal'>
                    <div className="modal_header">
                        
                        <div className='title'>
                        <span>Generate New Report </span>
                        </div>

                        <div className="formats_btns">
                            <span className="recents btn">Recents Formats <AccessTimeIcon className='icon' fontSize='small' /></span>
                            <span className="new btn" onClick={openFormatsList}>New Formats <NoteAddIcon className='icon'  fontSize='small'/></span>
                        </div>

                    </div>

                    <div className="formats">
                        <div className="format_placeholder chosen_format">
                            <img src='' alt='' className='format_image new' />
                            <span className="label">
                            New
                            </span>
                        </div>

                        {/* vertical divider between available formats and chosen format */}
                        <div className="divider">

                        </div>

                        {/* available formats for choose from */}
                        <div className="available_formats">

                        <div className="format_placeholder">
                            <img  src={format1_preview} alt='Format Image' className='format_image' />
                            <span className="label">
                            Format 1
                            </span>
                        </div>
                        
                        <div className="format_placeholder">
                            <img  src={format1_preview} alt='Format Image' className='format_image' />
                            <span className="label">
                            Format 2
                            </span>
                        </div>

                        <div className="format_placeholder">
                            <img  src={format1_preview} alt='Format Image' className='format_image' />
                            <span className="label">
                            Format 2
                            </span>
                        </div>

                        </div>

                        {/* next btn */}
                        <div className="next_btn">
                            <ArrowForwardIosIcon />
                        </div>
                    </div>

                    <div className="bottom_btns">
                        <Button className='btn' secondary onClick={() => setHide(true)}> Cancel </Button>
                        <Button className='btn' primary onClick={() => alert('Report Format Created!')}> Create </Button>
                    </div>
                    </div>
                </div>
          </ModalContent>
        </Modal>
      </div>
    )
  }
  
export default GenerateReportModal


