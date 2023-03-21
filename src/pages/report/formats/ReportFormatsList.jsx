import {useState} from 'react'
import BackButton from '../../../components/back/BackButton'
import { Table, TableBody, TableCell, TableCellHead, TableHead, TableRow, TableRowHead,Input } from '@dhis2/ui';
import './report-formats-list.scss'
import { Button } from '@dhis2-ui/button'
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate  } from 'react-router-dom';
import { Modal, ModalTitle, ModalContent, ModalActions } from '@dhis2-ui/modal'



    function ReportFormatsList() {
        const [hide, setHide] = useState(true);
        const [formatTitle, setFormatTitle] = useState('');

        const [formats, setFormats] = useState(
            [
                { id: 1, formatTitle: 'Format 1' },
                { id: 2, formatTitle: 'Format 2' },
                { id: 3, formatTitle: 'Format 3' },
                { id: 4, formatTitle: 'ANC Weekly by District' },
            ]
        );


        const navigate = useNavigate();

        const openReportFormatForEdit = () => {
            navigate('/report/report-edit');
        };

        const openReportFormatForPreview = () => {
            
            navigate('/report/report-preview');
            


        };

        // Adding a new format to the list
        const addFormat = (e) => {
            // e.preventDefault()
            if (!formatTitle) {
                alert('Please Provide a format title');
                return;
            }
            const id = Math.floor(Math.random() * 100) + 1;

            const newFormat = { id, formatTitle };
            setFormats([...formats, newFormat]);

            // clear input
            setFormatTitle('');

            // hide the modal
            setHide(true);

        };

        // Deleting a format from the list
        const deleteFormat = (id) => {
            setFormats(formats.filter((format) => format.id !== id));
        };


        return (
            <div className='report'>

                <div className='bottom'>
                    <BackButton className='back' btnLabel='Back Home' />

                    <div className='top'>
                        <div className='title'>Saved Formats</div>
                        <Button name='Basic button' value='default' onClick={() => setHide(false)}>
                            <AddIcon /> Create New
                        </Button>
                    </div>
                    <Table className='table'>
                        <TableHead>
                            <TableRowHead>
                                <TableCellHead>
                                    Name
                                </TableCellHead>
                                <TableCellHead>

                                </TableCellHead>

                            </TableRowHead>
                        </TableHead>
                        <TableBody>
                            {formats.length > 0 ?

                                formats.map((format, index) => (
                                    <TableRow className='row' key={index}>
                                        <TableCell>
                                            {format.formatTitle}
                                        </TableCell>
                                        <TableCell className='action-btns'>
                                            <Button name='Basic button' value='default' onClick={openReportFormatForPreview}><PlayArrowIcon /> Preview </Button>
                                            <Button name='Basic button' value='default' onClick={openReportFormatForEdit}><EditIcon /> Edit </Button>
                                            <Button name='Basic button' value='default' onClick={() => deleteFormat(format.id)}><DeleteIcon /> Delete </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                                :
                                <TableRow>
                                    <TableCell className=' row empty-row'>
                                        <p> No Formats available. Create new formats</p>
                                    </TableCell>
                                </TableRow>}
                        </TableBody>
                    </Table>
                </div>

                <div>
                    <Modal className="generate_report_modal" hide={hide} large>
                        {/* <ModalTitle>My Modal</ModalTitle> */}
                        <ModalContent>
                            <div>
                                <div className='modal'>
                                    <div className="modal_header">

                                        <div className='title'>
                                            <span>Create a new format </span>
                                        </div>
                                    </div>

                                    <input
                                        className='modalInput'
                                        label="Form title"
                                        name="defaultName"
                                        placeholder="Enter form Title"
                                        value={formatTitle}
                                        required
                                        onChange={(e) => setFormatTitle(e.target.value)} />

                                    <div className="bottom_btns">
                                        <Button className='btn' secondary onClick={() => setHide(true)}> Cancel </Button>
                                        <Button className='btn' primary onClick={addFormat}> Create </Button>
                                    </div>
                                </div>
                            </div>
                        </ModalContent>
                    </Modal>
                </div>

            </div>
        );
    }

export default ReportFormatsList