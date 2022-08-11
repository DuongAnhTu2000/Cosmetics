import "./SliderJS.scss";
import { Link } from "react-router-dom";

function SliderJS() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval={3000}
    >
      <div className="carousel-inner slider carousel--content ">
        <div className="carousel-item active ">
          <img
            src={require("../../assets/image/slider.jpg")}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block carousel--content__1">
            <img src="./assets/image/leaf-white.png" alt="" />
            <h5>Natural Skin</h5>
            <p>Organic &amp; vegan cosmetics</p>
            <Link to="/shop">
              <button type="button" className="button--style button--slider">
                View More
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src={require("../../assets/image/slider2.jpg")}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block carousel--content__2 ">
            <h5>Collection starter</h5>
            <p>A New Generation of Natural Cosmetic Ingredients</p>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src={require("../../assets/image/slider3.jpg")}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block carousel--content__3">
            <h5>Collection starter</h5>
            <p>Our new organic tea blends</p>
            <Link to="/shop">
              <button type="button" className="button--style button--slider">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default SliderJS;
