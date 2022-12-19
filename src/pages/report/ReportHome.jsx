import React from 'react'
import BackButton from '../../components/back/BackButton'
import './reporthome.scss';
// import {DataTableColumnHeader , DataTable, DataTableRow, Table, TableBody, TableCell, TableCellHead, TableHead, TableRow, DataTableCell, DataTableCell  } from "@dhis2/ui";
import { Table, TableBody, TableCell, TableCellHead, TableHead, TableRow, TableRowHead, TableFoot, TableFooterButton  } from "@dhis2/ui";

import { Button } from '@dhis2-ui/button'
const ReportHome = () => {
  return (
    <div className='report'>
    <BackButton />
    <div className="top">
      <div className="title">Saved Formats</div>
      <Button name="Basic button" value="default">
        {'+'} Create New
      </Button>
    </div>

    <div className="bottom">
        <Table className='table'>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>
                        Name
                    </TableCellHead>
                    <TableCellHead>
                        
                    </TableCellHead>
                    <TableCellHead>
                        
                    </TableCellHead>
                    
                </TableRowHead>
            </TableHead>
            <TableBody>
              
                <TableRow>
                    <TableCell>
                        Format 1
                    </TableCell>
                    <TableCell>
                        
                    </TableCell>
                    <TableCell>
                        <Button name="Basic button" value="default"> Preview </Button>
                        <Button name="Basic button" value="default"> Edit </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Format 2
                    </TableCell>
                    <TableCell>

                    </TableCell>
                    <TableCell>
                        <Button name="Basic button" value="default"> Preview </Button>
                        <Button name="Basic button" value="default"> Edit </Button>
                    </TableCell>
                    
                </TableRow>
                <TableRow>
                    <TableCell>
                        Format 3
                    </TableCell>
                    <TableCell>

                    </TableCell>
                    <TableCell>
                        <Button name="Basic button" value="default"> Preview </Button>
                        <Button name="Basic button" value="default"> Edit </Button>
                    </TableCell>
                    
                </TableRow>
            </TableBody>
        </Table>
    </div>
</div>
  )
}

export default ReportHome