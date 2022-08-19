import "./MainDetail.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  opacity: 0.4,
};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  padding: "1px",
  // color: theme.palette.text.primary,
  boxShadow: "none",
}));

function MainDetail() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="main--detail">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          <Grid item xs={5.5}>
            <Item>
              <div className="product--galery">
                <div className="product--galery__wrap">
                  <div className="product--galery__img">
                    <img
                      src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-1-300x441.jpg"
                      alt=""
                      onClick={handleOpen}
                    />
                  </div>
                  <div className="product--galery__img">
                    <img
                      src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-5-300x441.jpg"
                      alt=""
                      onClick={handleOpen}
                    />
                  </div>
                  <div className="product--galery__img">
                    <img
                      src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-2-300x441.jpg"
                      alt=""
                      onClick={handleOpen}
                    />
                  </div>
                  <div className="product--galery__img">
                    <img
                      src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-3-300x441.jpg"
                      alt=""
                      onClick={handleOpen}
                    />
                  </div>
                  <div className="product--galery__img">
                    <img
                      src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-4-300x441.jpg"
                      alt=""
                      onClick={handleOpen}
                    />
                  </div>
                </div>
                <div className="product--galery__img">
                  <img
                    src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1.jpg"
                    alt=""
                    onClick={handleOpen}
                  />
                </div>
              </div>
              <Modal
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
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      lazy={true}
                      loop={true}
                      navigation={true}
                      modules={[Lazy, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-1.jpg"
                          className="swiper-lazy"
                          alt=""
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-5.jpg"
                          className="swiper-lazy"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-2.jpg"
                          className="swiper-lazy"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-3.jpg"
                          className="swiper-lazy"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-gallery-4.jpg"
                          className="swiper-lazy"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1.jpg"
                          className="swiper-lazy"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                  </Box>
                </Fade>
              </Modal>
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <div className="product--summary">
                <h2>Scrub</h2>
                <p className="price">
                  <span className="amount">$35.00</span>
                </p>
                <div className="text-description">
                  <p>
                    Quem tota utroque mea ea, nam blandit disputando te, sale
                    volutpat pri in. Mutat eleifend per ut, has ut nusquam
                    accumsan mnesarchum. Solum reque signiferumque ius ea. In
                    primis eripuit menandri his, usu modus munere at eos.
                  </p>
                </div>
                <form className="btn--number" method="post">
                  <div className="btn--number__quantity">
                    <input type="button" defaultValue="-" />
                    <input
                      aria-label="quantity"
                      max="10"
                      min="1"
                      name=""
                      type="number"
                      defaultValue="1"
                    />
                    <input type="button" defaultValue="+" />
                  </div>
                  <button
                    type="submit"
                    name="add-to-cart"
                    defaultValue="237"
                    className="button--cart"
                  >
                    Add to cart
                  </button>
                </form>
                <div className="wishlist">
                  <i class="lnr lnr-heart"></i>
                  <span>add to wishlist</span>
                </div>
                <div className="product-description">
                  <div>
                    <span>SKU: </span>
                    <span>004</span>
                  </div>
                  <div>
                    <span>Category: </span>
                    <span>
                      <a href="/#" rel="tag" alt="">
                        Body Care
                      </a>
                    </span>
                  </div>
                  <div>
                    <span >Tags: </span>
                    <span >
                      <a href="/#" rel="tag" alt="">
                        Honeymoon
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MainDetail;
