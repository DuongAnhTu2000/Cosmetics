import "./NavbarHome.scss";
import { ReactComponent as Cart } from "../../assets/svg/Cart.svg";
import { Link} from "react-router-dom";
function NavbarHome() {
  return (
    <div className="navbar--home">
      <div className="navbar--home__icon">
        <Link itemProp="url" to="/">
          <img src={require("../../assets/image/logo.png")} alt="logo" />
        </Link>
      </div>

      <div className="navbar--home__menu">
        <Link to="/">
          <span className="navbar--home__menu__list">Home</span>
        </Link>
        <Link to="/#">
          <span className="navbar--home__menu__list">Pages</span>
        </Link>
        <Link to="/shop">
          <span className="navbar--home__menu__list">Shop</span>
        </Link>
        <Link to="/#">
          <span className="navbar--home__menu__list">Store</span>
        </Link>
        <Link to="/#">
          <span className="navbar--home__menu__list">Blog</span>
        </Link>
        <Link to="/#">
          <span className="navbar--home__menu__list">Landing</span>
        </Link>
        <div className="cart">
            <Link itemProp="url" to="/cart">
              <div className="cart__button " >
                <Cart />
                <span className="cart--count">0</span>
              </div>
              <div className="cart--dropdown">
                <div className="cart--dropdown__wrap cart--navbar">
                  <p>No products in the cart.</p>
                </div>
              </div>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default NavbarHome;
