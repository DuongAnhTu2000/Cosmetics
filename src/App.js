import Home from './page/Home/Home';
import Shop from './page/Shop/Shop';
import Cart from './page/Cart/Cart';
import ProductDetail from './page/ProductDetail/ProductDetail';
import UserAdmin from './page/Admin/UserAdmin';
import ProductList from './page/Admin/ProductList';
// import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from "react-router-dom";
import { store } from './redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <div>
      {/* <ScrollToTop  /> */}
      <Routes>
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="detail" element={<ProductDetail  />} />
      <Route path="admin" element={<UserAdmin  />} />
      <Route path="product" element={<ProductList  />} />
      </Routes>
    </div>
    </Provider>
  )
}

export default App;