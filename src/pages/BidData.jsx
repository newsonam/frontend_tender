import React, { useState } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import './ReferNow.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BidData({ showToastMessage,id }) {
  const [open, setOpen] = React.useState(false);
  const [bid, setBid] = useState({
    companyName: '', bidTime: '', bidCost: '', bidDate: '', flag: ''
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setBid({ ...bid, [name]: value });

  }

  const postData = async (e) => {
    e.preventDefault();
    try {
      axios.post(`/api/bid/${id}`, {
        companyName: bid.companyName,
        bidTime: bid.bidTime,
        bidCost: bid.bidCost,
        bidDate: bid.bidDate,
        flag: bid.flag,

      }).then((response) => {
        console.log(response);
        if (response.data.message) {
          showToastMessage();
        }
        setOpen(false);
      })
    } catch (err) {
      console.log(err);
    }

  }

  

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleOpen}>Add Bid</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center' fontWeight='bold'>
            Add Bid Details
          </Typography>
          <form method='post' id="modal-modal-description">
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="text"
              label="Company Name"
              variant="outlined"
              name="companyName"
              value={bid.companyName}
              onChange={handleInputs}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="time"
              label="Bid Time"
              variant="outlined"
              name="bidTime"
              value={bid.bidTime}
              onChange={handleInputs}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="number"
              label="Bid Cost"
              variant="outlined"
              name="bidCost"
              value={bid.bidCost}
              onChange={handleInputs}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="date"
              label="Bid Date"
              variant="outlined"
              name="bidDate"
              value={bid.bidDate}
              onChange={handleInputs}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="text"
              label="Bid Flag"
              variant="outlined"
              name="flag"
              value={bid.flag}
              onChange={handleInputs}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />

            <div className='submit-btn'>
              <Button  variant="contained" size="small" onClick={postData} >
                Submit
              </Button>

            </div>
          </form>

        </Box>

      </Modal>
    </div>
  );
}