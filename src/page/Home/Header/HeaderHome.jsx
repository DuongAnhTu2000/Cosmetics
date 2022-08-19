import "./HeaderHome.scss";
import ModalPage from '../../../scss/component/ModalPage'
import { green } from "@mui/material/colors";
function HeaderHome() {
  return (
    <div className="home--header">
      <div className="home--header__left">
        <a
          itemProp="url"
          href="https://www.facebook.com/QodeInteractive/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a
          itemProp="url"
          href="https://twitter.com/QodeInteractive"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter" />
        </a>
        <a
          itemProp="url"
          href="https://www.instagram.com/qodeinteractive/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className="home--header__center">
        <span>Free deliveries worldwide! For more info click &nbsp; </span>
        <a href="https://sante.qodeinteractive.com/contact-us/">
          <span style={{ textDecoration: "underline", color: "#1a1d1f" }}>
            Here
          </span>
        </a>
      </div>
      <div className="home--header__right">
        <div className="home--header__right__wishlist">
          <span className="lnr lnr-heart" />
          <span className="header--text">Wishlist (0)</span>
        </div>
        <ModalPage 
        sx={{
         color: green,
         fontSize: "14px",
        }}
        />
      </div>
    </div>
  );
}

export default HeaderHome;
