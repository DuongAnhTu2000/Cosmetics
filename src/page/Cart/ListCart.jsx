import "./ListCart.scss";
import ButonStyle from "../../scss/component/ButtonStyle";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../redux/cartSlice";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function ListCart() {
  const products = useSelector((state) => state.cart.products);
  console.log("products", products);
  const dispatch = useDispatch();
  const handleDecrease = (id, price) => {
    dispatch(
      decreaseQuantity({
        id,
        price,
      }),
      console.log(increaseQuantity())
    );
  };
  const handleIncrease = (id, price) => {
    dispatch(
      increaseQuantity({
        id,
        price,
      }),
      console.log(increaseQuantity())
    );
  };
  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };
  const listItem = JSON.parse(localStorage.getItem("cartItems"));
  const [count, setCount] = useState(listItem[0].count || 0);
  const [title] = useState({
    title: "Proceed to checkout",
  });

  return (
    <div className="cart--container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container={true} spacing={0} columns={10}>
          <Grid item xs={6}>
            <Item>
              {products.map((product) => (
                <div className="cart--wrap" key={product?.id}>
                  <form>
                    <table className="table--cart">
                      <tbody className="product">
                        <tr className="table--cart__items">
                          <td
                            className="product--remove"
                            onClick={() => {
                              handleDelete(product?.id);
                            }}
                          >
                            <span className="lnr lnr-cross"></span>
                          </td>
                          <td className="product--image">
                            <img src={product.image} alt=""></img>
                          </td>
                          <td className="product--name">
                            <Link
                              to="/detail"
                              style={{ textDecoration: "none" }}
                            >
                              <h5>{product.name}</h5>
                            </Link>
                          </td>
                          &emsp; &emsp; &emsp;
                          <td className="product--quantity">
                            <input
                              type="text"
                              name="quantity"
                              value={count}
                              size="4"
                              placeholder=""
                              className="input--text"
                            ></input>
                            <span
                              className="quantity--plus"
                              onClick={() => {
                                setCount(Math.max(count - 1, 1));
                                handleDecrease(product?.id, product.price);
                              }}
                            >
                              <span className="lnr lnr-chevron-down"></span>
                            </span>
                            <span
                              className="quantity--minus"
                              onClick={() => {
                                setCount(count + 1);
                                handleIncrease(product?.id, product.price);
                              }}
                            >
                              <span className="lnr lnr-chevron-up"></span>
                            </span>
                          </td>
                          &emsp; &emsp;
                          <td className="product--total">
                            <span>${product.price}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              ))}
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <div className="cart--totals">
                <h2>Cart totals</h2>
                <table className="totals--price">
                  <tbody>
                    <tr className="cart--subtotal">
                      <h5>Subtotal</h5>
                      <td className="subtotal">
                        <span>
                          {products.reduce((total, cur) => {
                            return total + cur.totalPrice;
                          }, 0)}
                          $
                        </span>
                      </td>
                    </tr>
                    <tr className="shipping">
                      <h5>Shipping</h5>
                      <td className="option--delivery">
                        <ul>
                          <li>
                            <input
                              type="radio"
                              name="delivery"
                              value=""
                            ></input>
                            <label>Flat rate</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="delivery"
                              value=""
                            ></input>
                            <label>Free shipping</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="delivery"
                              value=""
                            ></input>
                            <label>Local pickup</label>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="order--total">
                      <h5>Total</h5>
                      <h5>
                        $
                        {products.reduce((total, cur) => {
                          return total + cur.totalPrice;
                        }, 0)}
                      </h5>
                    </tr>
                    <tr className="checkout">
                      <ButonStyle
                        className="btn--checkout"
                        title={title.title}
                        style={{ width: "100%" }}
                      />
                    </tr>
                  </tbody>
                </table>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ListCart;
