import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@dhis2-ui/button'
import "./home.scss";
// import format1_preview from '../../../assets/images/format1_preview.png'
import format1_preview from '../../assets/images/format1_preview.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GenerateReportModal from '../../components/modal/GenerateReportModal';
import { Modal, ModalTitle, ModalContent, ModalActions } from '@dhis2-ui/modal'


const Home = () => {
  const [hide, setHide] = useState(true)

  
  return (
    <div className='home'>
        <div className="home_widgets">
          <Link to="/" className="homeCard" style={{ textDecoration: "none"}}>
              <span className="title"> User App</span>
              <span className="content"> Navigate to Users app to change permissions. Roles define persmissions of User.</span>
              <span className="link"> Manager Users</span>
          </Link>
          <Link to='report' className="homeCard" style={{ textDecoration: "none"}}>
              <span className="title"> Report Format</span>
              <span className="content">Something about changing report formats.</span>
              <span className="link"> Edit Report Formats</span>
          </Link>
          <Link className="homeCard" style={{ textDecoration: "none"}} onClick={() => setHide(false)}>
              <span className="title"> Overall Report</span>
              <span className="content"> Something about generating overall reports.</span>
              <span className="link"> Create New Report</span>
          </Link>
        </div>

        <div>
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
                          <span className="recents btn">Recent Formats <AccessTimeIcon className='icon' fontSize='small' /></span>
                          <span className="new btn">New Formats <NoteAddIcon className='icon'  fontSize='small' /></span>
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
      
    </div>
  )
}


export default Home