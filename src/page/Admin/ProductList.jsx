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
import Footer from '../../scss/layout/Footer';

const products = [
  {
    id: 1,
    image: 'https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iphone-13-1.jpeg',
    name: 'name',
    categories: 'dateTime',
    price: '$35',
  },
];

function ProductList() {
  return (
    <>
      <NavbarAdmin />
      <div className="dashboard">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Categories</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, id) => (
                <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <div className="image--product">
                    <img src={product.image} alt=""></img>
                    </div>
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.categories}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <EditIcon className="icon" /> &nbsp;
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

export default ProductList;
