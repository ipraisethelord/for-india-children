import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {Colors} from "../../styles/theme";
import GetRowsfromJson from './GetRowsFromJson';
import CapitalizeFirstLetter from '../reusable/CapitolizeFirstLetter';
const BasicTableMobile = ({ tableName }) => {
  const [data, setData] = useState([]);
 
  // Load data from the appropriate JSON file based on the table name
  const loadData = async () => {
    const rows = await GetRowsfromJson(tableName);
    setData(rows);
   
  };

  // Load data when the component mounts and when the table name changes
  useEffect(() => {
    loadData();
  }, [tableName]);

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "white", //"#bbdefb",//secondary
    },
    '&:nth-of-type(even)': {
      backgroundColor:  theme.palette.secondary.main,
    },
  }));

  const total = data.reduce((acc, row) => acc + parseFloat(row.total), 0).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  return (
   
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 400 }} aria-label="Detail table">
        <TableHead >
          <TableRow sx={{backgroundColor: Colors.primary}}>
            {/* <TableCell>ID</TableCell> */}
            <TableCell>Item</TableCell>
            <TableCell>Estimated Cost</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.id}
              </TableCell> */}
              <TableCell>{row.item}</TableCell>
              <TableCell>{parseFloat(row.price).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0,
  maximumFractionDigits: 0 })} x {row.quantity} = {parseFloat(row.total).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0,
  maximumFractionDigits:0 })}</TableCell>

            </StyledTableRow>
          ))}
           <StyledTableRow>
            <TableCell>
             Project Total:
            </TableCell>
            <TableCell>{total}</TableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  
  );
};

export default BasicTableMobile;
