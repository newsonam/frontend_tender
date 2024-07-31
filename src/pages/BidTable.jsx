// App.js
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


const App = ({ showToastMessage }) => {
    const [biddata, setBidData] = useState([]);
    const [sortBid, setSortBid] = useState([]);
    useEffect(() => {
        const getBidData = async () => {
            const response = await axios.get(`/api/bidlist`);
            const tendernew = await response.data.data;
            setBidData(tendernew);

        }
        getBidData();

    }, []);
    useEffect(() => {
        const sortedBids = [...biddata].sort((a, b) => a.bidCost - b.bidCost);
        setSortBid(sortedBids);
    }, [sortBid]); 

    return (
        <div className='bidtable'>
            <h1>BID DETAILS</h1>
            <TableContainer component={Paper} sx={{ width: 900, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead  >
                        <TableRow>
                            <TableCell sx={{ backgroundColor: 'black', color: '#02CCFE' }}  >Bid ID</TableCell>
                            <TableCell sx={{ backgroundColor: 'black', color: '#02CCFE' }}>Comapny Name</TableCell>
                            <TableCell align="right" sx={{ backgroundColor: 'black', color: '#02CCFE' }}>Bid Time</TableCell>
                            <TableCell align="right" sx={{ backgroundColor: 'black', color: '#02CCFE' }}>Bid Cost</TableCell>
                            <TableCell align="right" sx={{ backgroundColor: 'black', color: '#02CCFE' }}>Bid Date</TableCell>
                            <TableCell align="right" sx={{ backgroundColor: 'black', color: '#02CCFE' }}>Tender ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortBid.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell component="th" scope="row">
                                    {item._id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {item.companyName}
                                </TableCell>
                                <TableCell align="right">{item.bidTime}</TableCell>
                                <TableCell align="right">{item.bidCost}</TableCell>
                                <TableCell align="right">{item.bidDate}</TableCell>
                                <TableCell align="right">{item.tenderId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default App;
