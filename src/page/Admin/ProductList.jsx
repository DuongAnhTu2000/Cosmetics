import './ProductList.scss';
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
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Footer from '../../scss/layout/Footer';
import { getProduct, deleteProduct, updateProduct, addProduct } from '../../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState, useRef } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  border: '1px solid #dbe3d2',
  opacity: 0.2,
  boxShadow: 4,
  padding: 4,
};

function ProductList() {
  // const [selectedImage, setSelectedImage] = useState(null);
  const products = useSelector((state) => {
    return state.product.product;
  });
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [categories, setCategories] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleLoadProduct = () => {
    dispatch(getProduct());
  };
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      image,
      name,
      categories,
      price,
      description,
    };
    await dispatch(addProduct(newProduct));
    await handleLoadProduct();
    e.target.reset();
    console.log('reset');
  };

  const handleUpdateProduct = (id) => {
    const productUpdate = {
      id,
      newData: {
        image,
        name,
        categories,
        price,
        description,
      },
    };
    dispatch(updateProduct(productUpdate));
    dispatch(getProduct());
    console.log(getProduct());
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProduct());
  };

  return (
    <>
      <NavbarAdmin />
      <div className="dashboard--product">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className='dashboard--product__title'>
                <TableCell>STT</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Categories</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, id) => (
                <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <div className="image--product">
                      <img src={product.image} alt=""></img>
                    </div>
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.categories}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>
                    <IconButton onClick={handleOpen}>
                      <EditIcon />
                    </IconButton>
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
                          <div className="form--update">
                            <Button
                              variant="outlined"
                              component="label"
                              required={true}
                              fullWidth={true}
                              value={image}
                              color="success"
                                onChange={(e) => {
                                setImage(e.target.value);
                              }}
                            >
                              Upload
                              <input hidden accept="image/*" type="file" />
                              <PhotoCamera />
                            </Button>
                            <TextField
                              label="Name"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              value={name}
                              color="success"
                              className="form--update"
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                            <TextField
                              label="Categories"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              value={categories}
                              color="success"
                              className="form--update"
                              onChange={(e) => {
                                setCategories(e.target.value);
                              }}
                            />
                            <TextField
                              label="Price"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              value={price}
                              color="success"
                              className="form--update"
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                            />
                            <TextField
                              label="Description"
                              variant="outlined"
                              margin="dense"
                              fullWidth={true}
                              required={true}
                              ref={inputRef}
                              value={description}
                              color="success"
                              className="form--update"
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                            />
                          </div>
                          <div className="btn--update">
                            <Button onClick={handleClose} variant="outlined" fullWidth={true} color="success">
                              Cancel
                            </Button>
                            <Button
                              variant="outlined"
                              color="success"
                              fullWidth={true}
                              onClick={() => {
                                handleUpdateProduct(product.id);
                                handleLoadProduct();
                                handleClose();
                              }}
                            >
                              OK
                            </Button>
                          </div>
                        </Box>
                      </Fade>
                    </Modal>
                    <IconButton
                      onClick={() => {
                        handleDeleteProduct(product.id);
                        handleLoadProduct();
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
          <form className="form--addProduct" >
            <Button
             variant="outlined"
             component="label"
             fullWidth={true}
             color="success"
             onChange={(e) => {
              setImage(e.target.value);
            }}
             >
              Upload
              <input
                hidden
                accept="image/*"
                name="image"
                type="file"
               
              />
              <PhotoCamera />
            </Button>
            <TextField
              label="Name"
              name="Name"
              color="success"
              required={true}
              ref={inputRef}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              label="Categories"
              name="categories"
              color="success"
              required={true}
              ref={inputRef}
              onChange={(e) => {
                setCategories(e.target.value);
              }}
            />
            <TextField
              label="Price"
              name="price"
              color="success"
              required={true}
              ref={inputRef}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <TextField
              label="Description"
              name="description"
              color="success"
              required={true}
              ref={inputRef}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Button color="success" variant="contained" onClick={handleAddProduct}>
              Add Product
            </Button>
          </form>
        </Stack>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
