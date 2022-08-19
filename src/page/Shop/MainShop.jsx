import "./MainShop.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const theme = createTheme({
  custom: {
    color: "#68745c",
  },
});
const minDistance = 0;

function MainProduct(title) {
  const [value, setValue1] = useState([0, 150]);
  const [age, setAge] = useState("");

  const handleOption = (event) => {
    setAge(event.target.value);
  };
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue1([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <div className="main--product">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid flexDirection="column" container item xs={7.5} spacing={0}>
            <Item>
              <div className="main--product__result">
                <p>Showing 1–9 of 86 results</p>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 230 }}
                >
                  <InputLabel id="demo-simple-select-standard-label"
                  disableAnimation={false}
                  sx={{
                    // borderBottom: "1px solid #e0e0e0",
                  }}
                  >
                    Default sorting
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleOption}
                    label="Age"
                   
                  >
                    <MenuItem value={10}>Default sorting</MenuItem>
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
                <Pagination
                  count={10}
                  disabled={false}
                  theme={theme}
                  hidePrevButton={false}
                ></Pagination>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={2.5}>
            <Item>
              <div className="price--filter">
                <h4>Price Filter</h4>
                <Slider
                  value={value}
                  onChange={handleChange}
                  disableSwap
                  step={10}
                  size="small"
                  min={0}
                  max={150}
                  sx={{
                    width: "110%",
                    color: "#68745c",
                    height: "1px",
                    padding: "15px 0",
                  }}
                />
                <div className="price--label">
                  <span name="orderby" className="from">
                    Price: $70 — $150
                  </span>
                  <button type="button">Filter</button>
                </div>
                <div className="widget--products">
                  <h4>Featured Products</h4>
                  <ul className="widget--products__list">
                    
                    <li className="widget--products__list__item">
                      <a href="https://sante.qodeinteractive.com/product/coco-skies/">
                        <img
                          width="70"
                          height="102"
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-2-img-1-300x441.jpg"
                          alt=""
                        ></img>
                      </a>
                      <div className="widget--content">
                        <h6>
                          <a
                            itemProp="url"
                            href="https://sante.qodeinteractive.com/product/coco-skies/"
                          >
                            Coco Skies
                          </a>
                        </h6>
                        <span>$78.00</span>
                      </div>
                    </li>
                    <li className="widget--products__list__item">
                      <a href="https://sante.qodeinteractive.com/product/coco-green/">
                        <img
                          width="70"
                          height="102"
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-3-img-1-300x441.jpg"
                          alt=""
                        ></img>
                      </a>
                      <div className="widget--content">
                        <h6>
                          <a
                            itemProp="url"
                            href="https://sante.qodeinteractive.com/product/coco-skies/"
                          >
                            Coco Green
                          </a>
                        </h6>
                        <span className="swiper-product-price-discount">
                          $70.00
                        </span>
                        <span>$50.00</span>
                      </div>
                    </li>
                    <li className="widget--products__list__item">
                      <a href="https://sante.qodeinteractive.com/product/scrub/">
                        <img
                          width="70"
                          height="102"
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1-300x441.jpg"
                          alt=""
                        ></img>
                      </a>
                      <div className="widget--content">
                        <h6>
                          <a
                            itemProp="url"
                            href="https://sante.qodeinteractive.com/product/coco-skies/"
                          >
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
