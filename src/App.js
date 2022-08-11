import Home from './page/Home/Home';
import Shop from './page/Shop/Shop';
import Cart from './page/Cart/Cart';

// import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      {/* <ScrollToTop  /> */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App;