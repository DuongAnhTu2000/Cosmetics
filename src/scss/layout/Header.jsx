import "./Header.scss";
import ModalPage from '../component/ModalPage';
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../page/assets/svg/Cart.svg";
import { ReactComponent as Option } from "../../page/assets/svg/Option.svg";
function Header() {

  return (
    <div className="header--container">
      <div className="header--container__left">
        <Link itemProp="url" rel="home" to="/home">
          <img
            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/logo-home5-2.png"
            alt="logo"
            itemProp=""
          ></img>
        </Link>
      </div>
      <div className=".navbar--home__menu header--container__center">
        <Link to="/home">
          <span className="navbar--home__menu__list">Home</span>
        </Link>
        <Link to="#">
          <span className="navbar--home__menu__list">Pages</span>
        </Link>
        <Link to="/shop">
          <span className="navbar--home__menu__list">Shop</span>
        </Link>
        <Link to="#">
          <span className="navbar--home__menu__list">Store</span>
        </Link>
        <Link to="#">
          <span className="navbar--home__menu__list">Blog</span>
        </Link>
        <Link to="#">
          <span className="navbar--home__menu__list">Landing</span>
        </Link>
      </div>
      <div className="header--container__right">
        <ModalPage  />
        <div className="navbar--home__menu">
          <div className="cart">
            <Link itemProp="url" to="/cart">
              <div className="cart__button">
                <Cart />
                <span className="cart--count">0</span>
              </div>
              <div className="cart--dropdown">
                <div className="cart--dropdown__wrap">
                  <p>No products in the cart.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Option style={{cursor:' pointer'}}/>
      </div>
    </div>
  );
}

export default Header;
