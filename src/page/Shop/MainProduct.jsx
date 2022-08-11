import "./MainProduct.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

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
function MainProduct(title) {
  return (
    <div className="main--product">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid flexDirection="column" container item xs={7.5} spacing={0}>
            <Item>
              <div className="main--product__result">
                <p>Showing 1–9 of 86 results</p>
                <form className="" method="get">
                  <select
                    name="orderby"
                    className="orderby select2-hidden-accessible"
                    defaultValue="DEFAULT"
                  >
                    <option defaultValue="menu_order">Default sorting</option>
                    <option defaultValue="popularity">
                      Sort by popularity
                    </option>
                    <option defaultValue="rating">
                      Sort by average rating
                    </option>
                    <option defaultValue="date">Sort by latest</option>
                    <option defaultValue="price">
                      Sort by price: low to high
                    </option>
                    <option defaultValue="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
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
                  defaultValue={0}
                  step={10}
                  size="small"
                  min={0}
                  max={150}
                  sx={{
                    width: "110%",
                    color: "#68745c",
                    height: "2px",
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
                  <h4>Featured MainProducts</h4>
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
                    <Link
                      itemProp="url"
                      to="/#"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f header--left__icon" />
                    </Link>
                    <Link
                      itemProp="url"
                      to="/#"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-twitter header--left__icon" />
                    </Link>
                    <Link
                      itemProp="url"
                      to="/#"
                      rel="noreferrer"
                    >
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
