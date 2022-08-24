import './UserAdmin.scss';
import NavbarAdmin from './NavbarAdmin';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Footer from '../../scss/layout/Footer';
import React, { useState } from 'react';

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


const users = [
    {
        id: 1,
        name: 'Last Login',
        username: 'dateTime',
      },
      {
        id: 2,
        name: 'Last Login',
        username: 'dateTime',
      },
      {
        id: 3,
        name: 'Last Login',
        username: 'dateTime',
      },
      {
        id: 4,
        name: 'Last Login',
        username: 'dateTime',
      },
      {
        id: 5,
        name: 'Last Login',
        username: 'dateTime',
      },
];

function User() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <NavbarAdmin />
      <div className="dashboard">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user,id) => (
                <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                  {user.id}
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>
                    <EditIcon className="icon" onClick={handleOpen}>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open}>
                          <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                              Text in a modal
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                          </Box>
                        </Fade>
                      </Modal>
                    </EditIcon>
                    &nbsp; &nbsp; 
                    <DeleteIcon className="icon" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </>
  );
}

export default User;
