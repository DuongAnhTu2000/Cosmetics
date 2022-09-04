import './MainShop.scss';
// import AddToCart from '../../scss/component/AddToCart';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { createTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getProduct } from '../../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));


function MainProduct() {
  const products = useSelector((state) => {
    return state.product.product;
  });
  const [value, setValue] = useState([0, 150]);
  // const [hover , setHover] = useState(false);
  const [option, setOption] = useState('');
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleOption = (event) => {
    setOption(event.target.value);
  };
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  function handleClick() {
    navigate('/detail');
  }
  return (
    <div className="main--product">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid flexDirection="column" container item xs={7.5} spacing={0}>
            <Item>
              <div className="main--product__result">
                <p>Showing 1–9 of 86 results</p>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 230 }}>
                  <Select value={option} onChange={handleOption} displayEmpty>
                    <MenuItem value="" className='font--filter'>
                      <em>Default sorting</em>
                    </MenuItem>
                    <MenuItem value={10}>Sort by popularity</MenuItem>
                    <MenuItem value={20}>Sort by average rating</MenuItem>
                    <MenuItem value={30}>Sort by latest</MenuItem>
                    <MenuItem value={30}>Sort by price: low to high</MenuItem>
                    <MenuItem value={30}>Sort by price: high to low</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Item>
            <Item>
              <Stack>
                <div className="main--product__list" >
                {products.map((product, id) => (
                    <div className="swiper-slide" style={{ textDecoration: 'none' }} onClick={handleClick} key={id}>
                      <span className="swiper-slide-tag">Sale</span>
                      <img src={product.image} alt="" />
                      <div className="swiper-product">
                        <div className="swiper-product-left">
                          <div className="swiper-product-categories">
                            <h5 itemProp="name" className="swiper-product-title">
                              <Link itemProp="url" className="swiper-product-link" to="/detail">
                                {product.name}
                              </Link>
                            </h5>
                            <Link to="/detail" rel="tag">
                              {product.categories}
                            </Link>
                          </div>
                        </div>
                        <div className="swiper-product-right">
                          <div className="swiper-product-amount">
                            <div className="swiper-product-price">
                              <span className="swiper-product-price-discount"></span>
                              <span className="product-price">${product.price}</span>
                               
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
                </div>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={2.5}>
            <Item>
              <div className="price--filter">
                <h4>Price Filter</h4>
                <Slider
                  value={value}
                  onChange={handleSliderChange}
                  disableSwap
                  step={10}
                  size="small"
                  min={0}
                  max={150}
                  sx={{
                    width: '110%',
                    color: '#68745c',
                    height: '1px',
                    padding: '15px 0',
                  }}
                />
                <div className="price--label">
                  <span name="orderby" className="from" onChange={handleInputChange}>
                    Price: ${value[0]} — ${value[1]}
                  </span>
                  <button type="button">Filter</button>
                </div>
                <div className="widget--products">
                  <h4>Featured Products</h4>
                  <ul className="widget--products__list">
                    <li className="widget--products__list__item">
                      <Link to="/detail">
                        <img
                          width="70"
                          height="102"
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-2-img-1-300x441.jpg"
                          alt=""
                        ></img>
                      </Link>
                      <div className="widget--content">
                        <h6>
                          <Link itemProp="url" to="/detail">
                            Coco Skies
                          </Link>
                        </h6>
                        <span>$78.00</span>
                      </div>
                    </li>
                    <li className="widget--products__list__item">
                      <Link to="/detail">
                        <img
                          width="70"
                          height="102"
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-3-img-1-300x441.jpg"
                          alt=""
                        ></img>
                      </Link>
                      <div className="widget--content">
                        <h6>
                          <Link itemProp="url" to="/detail">
                            Coco Green
                          </Link>
                        </h6>
                        <span className="swiper-product-price-discount">$70.00</span>
                        <span>$50.00</span>
                      </div>
                    </li>
                    <li className="widget--products__list__item">
                      <Link to="/detail">
                        <img
                          width="70"
                          height="102"
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1-300x441.jpg"
                          alt=""
                        ></img>
                      </Link>
                      <div className="widget--content">
                        <h6>
                          <a itemProp="url" href="https://sante.qodeinteractive.com/product/coco-skies/">
                            Scrub
                          </a>
                        </h6>
                        <span>$35.00</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget--categories">
                  <h4>Categories</h4>
                  <ul>
                    <span>
                      <Link to="/#">Beauty</Link>
                    </span>
                    <span>
                      <Link to="/#">Body Care</Link>
                    </span>
                    <span>
                      <Link to="/#">Breakfast</Link>
                    </span>
                    <span>
                      <Link to="/#">Classic</Link>
                    </span>
                    <span>
                      <Link to="/#">Cosmetics</Link>
                    </span>
                    <span>
                      <Link to="/#">Face</Link>
                    </span>
                    <span>
                      <Link to="/#">Flour</Link>
                    </span>
                    <span>
                      <Link to="/#">Healthy</Link>
                    </span>
                    <span>
                      <Link to="/#">Jam</Link>
                    </span>
                    <span>
                      <Link to="/#">Natural</Link>
                    </span>
                    <span>
                      <Link to="/#">Selfcare</Link>
                    </span>
                    <span>
                      <Link to="/#">Veggies</Link>
                    </span>
                  </ul>
                </div>
                <div className="widget--social">
                  <h4>Follow us</h4>
                  <ul>
                    <Link itemProp="url" to="/#" rel="noreferrer">
                      <i className="fa-brands fa-facebook-f header--left__icon" />
                    </Link>
                    <Link itemProp="url" to="/#" rel="noreferrer">
                      <i className="fa-brands fa-twitter header--left__icon" />
                    </Link>
                    <Link itemProp="url" to="/#" rel="noreferrer">
                      <i className="fa-brands fa-instagram header--left__icon" />
                    </Link>
                  </ul>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MainProduct;
