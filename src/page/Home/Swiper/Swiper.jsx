import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./Swiper.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function SwiperJs() {
  return (
    <div className="wrap--slide">
      <div className="wrap--title">
        <h4 className="wrap--title__paragraph">Featured Items</h4>
        <div className="wrap--title__arrow">
          <span className="lnr lnr-arrow-left"></span>
          <span className="lnr lnr-arrow-right"></span>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="swiper-slide">
              <span className="swiper-slide-tag">Sale</span>
              <div className="swiper-slide-product">
              <Link to="/detail">
                <img
                  src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-1-img-1.jpg"
                  alt=""
                />
                <div className="swiper-product">
                  <div className="swiper-product-left">
                    <div className="swiper-product-categories">
                      <h5 itemProp="name" className="swiper-product-title">
                        <Link
                          itemProp="url"
                          className="swiper-product-link"
                          to="/detail"
                        >
                          Green Pack
                        </Link>
                      </h5>
                      <Link to="/detail" rel="tag">
                        Cosmetics
                      </Link>
                    </div>
                  </div>
                  <div className="swiper-product-right">
                    <div className="swiper-product-amount">
                      <div className="swiper-product-price">
                        <span
                          className="swiper-product-price-discount"
                          style={{ color: "#80827e" }}
                        >
                          $120.00
                        </span>
                        <span className="swiper-product-Listed price">
                          $95.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <span className="swiper-slide-tag">New</span>
            <div className="swiper-slide-img">
              <img
                src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-2-img-1.jpg"
                alt=""
              />
              <div className="swiper-product">
                <div className="swiper-product-left">
                  <div className="swiper-product-categories">
                    <h5 itemProp="name" className="swiper-product-title">
                      <Link
                        itemProp="url"
                        className="swiper-product-link"
                        to="/detail"
                      >
                        Coco Skies
                      </Link>
                    </h5>
                    <Link to="/detail" rel="tag">
                      Body Care
                    </Link>
                  </div>
                </div>
                <div className="swiper-product-right">
                  <div className="swiper-product-amount">
                    <div className="swiper-product-price">
                      <span className="swiper-product-Listed price">
                        $78.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <span className="swiper-slide-tag">Sale</span>
            <div className="swiper-slide-img">
              <img
                src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-3-img-1.jpg"
                alt=""
              />
              <div className="swiper-product">
                <div className="swiper-product-left">
                  <div className="swiper-product-categories">
                    <h5 itemProp="name" className="swiper-product-title">
                      <a
                        itemProp="url"
                        className="swiper-product-link"
                        href="https://sante.qodeinteractive.com/product/coco-skies/"
                      >
                        Coco Green
                      </a>
                    </h5>
                    <a
                      href="https://sante.qodeinteractive.com/product-category/body-care/"
                      rel="tag"
                    >
                      Body Care
                    </a>
                  </div>
                </div>
                <div className="swiper-product-right">
                  <div className="swiper-product-amount">
                    <div className="swiper-product-price">
                      <span
                        className="swiper-product-price-discount"
                        style={{ color: "#80827e" }}
                      >
                        $70.00
                      </span>
                      <span className="swiper-product-Listed price">
                        $50.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div className="swiper-slide-img">
              <img
                src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1.jpg"
                alt=""
              />
              <div className="swiper-product">
                <div className="swiper-product-left">
                  <div className="swiper-product-categories">
                    <h5 itemProp="name" className="swiper-product-title">
                      <a
                        itemProp="url"
                        className="swiper-product-link"
                        href="https://sante.qodeinteractive.com/product/coco-skies/"
                      >
                        Green Pack
                      </a>
                    </h5>
                    <a
                      href="https://sante.qodeinteractive.com/product-category/body-care/"
                      rel="tag"
                    >
                      Body Care
                    </a>
                  </div>
                </div>
                <div className="swiper-product-right">
                  <div className="swiper-product-amount">
                    <div className="swiper-product-price">
                      <span className="swiper-product-Listed price">
                        $35.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div className="swiper-slide-img">
              <img
                src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-5-img-1.jpg"
                alt=""
              />
              <div className="swiper-product">
                <div className="swiper-product-left">
                  <div className="swiper-product-categories">
                    <h5 itemProp="name" className="swiper-product-title">
                      <a
                        itemProp="url"
                        className="swiper-product-link"
                        href="https://sante.qodeinteractive.com/product/coco-skies/"
                      >
                        Green Pack
                      </a>
                    </h5>
                    <a
                      href="https://sante.qodeinteractive.com/product-category/body-care/"
                      rel="tag"
                    >
                      Body Care
                    </a>
                  </div>
                </div>
                <div className="swiper-product-right">
                  <div className="swiper-product-amount">
                    <div className="swiper-product-price">
                      <span className="swiper-product-Listed price">
                        $70.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div className="swiper-slide-img">
              <img
                src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-6-img-1.jpg"
                alt=""
              />
              <div className="swiper-product">
                <div className="swiper-product-left">
                  <div className="swiper-product-categories">
                    <h5 itemProp="name" className="swiper-product-title">
                      <a
                        itemProp="url"
                        className="swiper-product-link"
                        href="https://sante.qodeinteractive.com/product/coco-skies/"
                      >
                        Green Pack
                      </a>
                    </h5>
                    <a
                      href="https://sante.qodeinteractive.com/product-category/body-care/"
                      rel="tag"
                    >
                      Body Care
                    </a>
                  </div>
                </div>
                <div className="swiper-product-right">
                  <div className="swiper-product-amount">
                    <div className="swiper-product-price">
                      <span className="swiper-product-Listed price">
                        $25.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div className="swiper-slide-img">
              <img
                src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-7-img-1.jpg"
                alt=""
              />
              <div className="swiper-product">
                <div className="swiper-product-left">
                  <div className="swiper-product-categories">
                    <h5 itemProp="name" className="swiper-product-title">
                      <a
                        itemProp="url"
                        className="swiper-product-link"
                        href="https://sante.qodeinteractive.com/product/coco-skies/"
                      >
                        Green Pack
                      </a>
                    </h5>
                    <a
                      href="https://sante.qodeinteractive.com/product-category/body-care/"
                      rel="tag"
                    >
                      Body Care
                    </a>
                  </div>
                </div>
                <div className="swiper-product-right">
                  <div className="swiper-product-amount">
                    <div className="swiper-product-price">
                      <span className="swiper-product-Listed price">
                        $45.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div className="swiper-slide-img">
              <img
                src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-8-img-1.jpg"
                alt=""
              />
              <div className="swiper-product">
                <div className="swiper-product-left">
                  <div className="swiper-product-categories">
                    <h5 itemProp="name" className="swiper-product-title">
                      <a
                        itemProp="url"
                        className="swiper-product-link"
                        href="https://sante.qodeinteractive.com/product/coco-skies/"
                      >
                        Green Pack
                      </a>
                    </h5>
                    <a
                      href="https://sante.qodeinteractive.com/product-category/body-care/"
                      rel="tag"
                    >
                      Body Care
                    </a>
                  </div>
                </div>
                <div className="swiper-product-right">
                  <div className="swiper-product-amount">
                    <div className="swiper-product-price">
                      <span className="swiper-product-Listed price">
                        $35.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperJs;
