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

export default function AddTender({ showToastMessage }) {
  const [open, setOpen] = React.useState(false);
  const [tender, setTender] = useState({
    tenderName: '', description: '', startTime: '', endTime: '', bufferTime: ''
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setTender({ ...tender, [name]: value });

  }

  const postData = async (e) => {
    e.preventDefault();
    try {
      axios.post(`/api/tenderdata`, {
        tenderName: tender.tenderName,
        description: tender.description,
        startTime: tender.startTime,
        endTime: tender.endTime,
        bufferTime: tender.bufferTime,

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
      <Button variant="contained" size="small" onClick={handleOpen}>Add Tender</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center' fontWeight='bold'>
            Add Tender Details
          </Typography>
          <form method='post' id="modal-modal-description">
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="text"
              label="Tender Name"
              variant="outlined"
              name="tenderName"
              value={tender.tenderName}
              onChange={handleInputs}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="text"
              label="Tender Description"
              variant="outlined"
              name="description"
              value={tender.description}
              onChange={handleInputs}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="time"
              label="Tender Start Time"
              variant="outlined"
              name="startTime"
              value={tender.startTime}
              onChange={handleInputs}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="time"
              label="Tender End Time"
              variant="outlined"
              name="endTime"
              value={tender.endTime}
              onChange={handleInputs}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="time"
              label="Tender Buffer Time"
              variant="outlined"
              name="bufferTime"
              value={tender.bufferTime}
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