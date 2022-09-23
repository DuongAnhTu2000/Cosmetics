import React from "react";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./ModalPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "1px solid #dbe3d2",
};
const theme = createTheme({
  palette: {
    primary: {
      main: "#2f3327",
    },
  },
});

function ModalPage() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [setErrorMessage] = useState({ value: "" });
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("1");
  const navigate = useNavigate();


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    // console.log({ isAuth })
    setisLoggedIn(localStorage.getItem("isAuthenticated") ? true : false);
  }, []);
  const logOut = () => {
    setisLoggedIn(false);
    localStorage.clear();
  };

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage(() => ({
        value: "Empty username/password field",
      }));
    } else if (
      userData.username === "admin" &&
      userData.password === "123456"
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
      window.location.reload();
    } else {
      //If credentials entered is invalid

      setErrorMessage(() => ({ value: "Invalid username/password" }));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        disableRipple={true}
        sx={{
          textTransform: "none",
          padding: "0",
          "&:hover": {
            background: "transparent",
          },
        }}
        className="btn--login"
      >
        <div className="home--header__right__login lock ">
          <span className="lnr lnr-lock " />

          {isLoggedIn ? (
            <> 
            
            <span className="header--text" onClick={logOut}>
              Log Out
            </span>
            </>
            
          ) : (
            <span className="header--text" onClick={handleOpen}>
              Login
            </span>
          )}
        </div>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <TabContext value={value}>
              <Box>
                <TabList onChange={handleChange} variant="fullWidth">
                  <Tab
                    label="Login"
                    value="1"
                    className="tab--style"
                    disableRipple={true}
                  />
                  <Tab
                    label="Register"
                    value="2"
                    to="/register"
                    className="tab--style"
                    disableRipple={true}
                  />
                  <Tab
                    label="Reset Pass"
                    value="3"
                    to="/reset-password"
                    className="tab--style"
                    disableRipple={true}
                  />
                </TabList>
              </Box>
              <div className="modal--content">
                <TabPanel value="1">
                  <div className="modal--title">
                    <span>Regostration</span>
                    <h2 className="modal-text">Login</h2>
                  </div>
                  <form>
                    <div className="modal--input">
                      <input
                        type="text"
                        name="username"
                        size={37}
                        placeholder="User Name *"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="modal--input">
                      <input
                        type="password"
                        name="password"
                        size={37}
                        placeholder="Password *"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="modal--link">
                      <div className="modal--link__remember">
                        <input
                          type="checkbox"
                          name="remember"
                          label="Remember me"
                        />
                        <span htmlFor="remember" className="text--remember">
                          Remember me
                        </span>
                      </div>
                      <Link to="/reset-password" className="forgot--password">
                        Lost Your password?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="button--style button--modal"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                    <div className="modal--link">
                      <div className="modal--link__remember">
                        <span htmlFor="remember" className="text--remember">
                          Remember me
                        </span>
                      </div>
                      <Link to="/#" className="forgot--password">
                        Register now
                      </Link>
                    </div>
                  </form>
                </TabPanel>
                <TabPanel value="2">
                  <div className="modal--title">
                    <span>Regostration</span>
                    <h2 className="modal-text">Register</h2>
                  </div>
                  <div className="modal--input">
                    <input
                      type="text"
                      name="username"
                      size={37}
                      aria-required="true"
                      placeholder="User Name *"
                    />
                    <input
                      type="email"
                      name="email"
                      size={37}
                      aria-required="true"
                      placeholder="Email *"
                    />
                    <input
                      type="password"
                      name="password"
                      size={37}
                      aria-required="true"
                      placeholder="Password *"
                    />
                    <input
                      type="password"
                      name="confirm_password"
                      size={37}
                      aria-required="true"
                      placeholder="Repeat Password *"
                    />
                  </div>
                  <button type="button" className="button--style button--modal">
                    Register
                  </button>
                </TabPanel>
                <TabPanel value="3">
                  <div className="modal--title">
                    <label>
                      Lost your password? Please enter your username or email
                      address. You will receive a link to create a new password
                      via email.
                    </label>
                  </div>
                  <div className="modal--input">
                    <input
                      type="text"
                      name="user_email"
                      size={37}
                      aria-required="true"
                      placeholder="User Name or Email*"
                    />
                  </div>
                  <button type="button" className="button--style button--modal">
                    Reset Password
                  </button>
                </TabPanel>
              </div>
            </TabContext>
          </Box>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
}
export default ModalPage;
