import React from 'react'
import BackButton from '../../../components/back/BackButton'
import { Table, TableBody, TableCell, TableCellHead, TableHead, TableRow, TableRowHead, } from '@dhis2/ui';
import './report-formats-list.scss'
import { Button } from '@dhis2-ui/button'
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate  } from 'react-router-dom';

const ReportFormatsList = () => {
    const navigate = useNavigate();
    
    const openReportFormatForEdit = () => {
        navigate('/report/report-edit');

    }


  return (
    <div className='report'>

        <div className='bottom'>
            <BackButton className='back' />

            <div className='top'>
                <div className='title'>Saved Formats</div>
                <Button name='Basic button' value='default'>
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
                
                    <TableRow className='row'>
                        <TableCell>
                            Format 1
                        </TableCell>
                        <TableCell className='action-btns'>
                            <Button name='Basic button' value='default' onClick={openReportFormatForEdit}><EditIcon /> Edit </Button>
                            <Button name='Basic button' value='default'><PlayArrowIcon /> Preview </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow className='row'>
                        <TableCell>
                            Format 2
                        </TableCell>
                        <TableCell  className='action-btns'>
                            <Button name='Basic button' value='default'><EditIcon /> Edit </Button>
                            <Button name='Basic button' value='default'><PlayArrowIcon />  Preview </Button>
                        </TableCell>
                        
                    </TableRow>
                    <TableRow className='row'>
                        <TableCell>
                            Format 3
                        </TableCell>
                        <TableCell  className='action-btns'>
                            <Button name='Basic button' value='default'><EditIcon /> Edit </Button>
                            <Button name='Basic button' value='default'><PlayArrowIcon />  Preview </Button>
                        </TableCell>
                        
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default ReportFormatsList