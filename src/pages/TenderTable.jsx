// App.js
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BidData from './BidData';
import axios from 'axios';


const App = ({showToastMessage}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getTenderData = async () => {
      const response = await axios.get(`/api/tenderlist`);
      const tendernew = await response.data.data;
      setData(tendernew);
    }
    getTenderData();
  }, []);
  return (
    <TableContainer component={Paper} sx={{ width: 900,display:'flex',justifyContent:'center',alignItems:'center' }}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead  >
          <TableRow>
            <TableCell sx={{ backgroundColor: 'black',color:'#02CCFE'}}  >Tender ID</TableCell>
            <TableCell sx={{ backgroundColor: 'black',color:'#02CCFE'}}>Tender Name</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'black',color:'#02CCFE'}}>Description</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'black',color:'#02CCFE'}}>Start Time</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'black',color:'#02CCFE'}}>End Time</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'black',color:'#02CCFE'}}>Buffer Time</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'black',color:'#02CCFE'}}>Bid Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell component="th" scope="row">
                {item._id}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.tenderName}
              </TableCell>
              <TableCell align="right">{item.description}</TableCell>
              <TableCell align="right">{item.startTime}</TableCell>
              <TableCell align="right">{item.endTime}</TableCell>
              <TableCell align="right">{item.bufferTime}</TableCell>
              <TableCell align="right">{<BidData showToastMessage={showToastMessage} id={item._id} />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default App;
