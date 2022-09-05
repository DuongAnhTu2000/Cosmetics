import './Admin.scss';
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
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Footer from '../../scss/layout/Footer';
import { getUser, addUser, updateUser, deleteUser } from '../../redux/userSlice';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #dbe3d2',
  opacity: 0.4,
  boxShadow: 4,
  padding: 4,
};
function Admin() {
  const users = useSelector((state) => {
    return state.user.user;
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleLoadUser = () => {
    console.log('load user');
    dispatch(getUser());
  };
  const handleAddUser = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      birthday,
    };
    await dispatch(addUser(newUser));
    await handleLoadUser();
    e.target.reset();
    console.log('reset');
  };

  const handleUpdateUser = (id) => {
    const dataUpdate = {
      id,
      newData: {
        name,
        email,
        birthday,
      },
    };
    dispatch(updateUser(dataUpdate));
    dispatch(getUser());
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
    dispatch(getUser());
  };
  return (
    <>
      <NavbarAdmin />
      <div className="dashboard">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.birthday}</TableCell>
                  <TableCell>
                    <IconButton onClick={handleOpen}>
                      <EditIcon className="icon" />
                    </IconButton>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                    >
                      <Fade in={open}>
                        <Box sx={style}>
                          <div className="form--update">
                            <TextField
                              label="User Name"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              color="success"
                              className="form--update"
                              variant="outlined"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                            <TextField
                              label="Email"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              color="success"
                              className="form--update"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                            <TextField
                              label="Birthday"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              color="success"
                              className="form--update"
                              value={birthday}
                              onChange={(e) => {
                                setBirthday(e.target.value);
                              }}
                            />
                          </div>
                          <div className="button--update">
                            <Button onClick={handleClose} variant="outlined" color="success" fullWidth={true}>
                              Cancel
                            </Button>
                            <Button
                              variant="outlined"
                              fullWidth={true}
                              color="success"
                              onClick={() => {
                                handleUpdateUser(user.id);
                                handleLoadUser();
                                handleClose();
                              }}
                            >
                              OK
                            </Button>
                          </div>
                        </Box>
                      </Fade>
                    </Modal>
                    &nbsp;
                    <IconButton
                      onClick={() => {
                        handleDeleteUser(user.id);
                        handleLoadUser();
                      }}
                    >
                      <DeleteIcon className="icon" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack direction="row" spacing={2}>
          <form onSubmit={handleAddUser} className="form--adduser">
            <TextField
              label="User Name"
              className="input--edituser"
              name="username"
              color="success"
              ref={inputRef}
              required={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              label="Email"
              className="input--edituser"
              name="email"
              color="success"
              ref={inputRef}
              required={true}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              label="Birthday"
              className="input--edituser"
              name="birthday"
              color="success"
              ref={inputRef}
              required={true}
              onChange={(e) => {
                setBirthday(e.target.value);
              }}
            />
            <Button variant="outlined" color="success" type="submit">
              Add User
            </Button>
          </form>
        </Stack>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
