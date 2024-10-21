import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import ShopInformation from './Pages/ShopInformation';
import ShopIntroduce from './Pages/ShopIntroduce';
import Contact from './Pages/Contact';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import PlaceOrder from './Pages/PlaceOrder'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sanpham' element={<ShopCategory category="men"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/gioithieu' element={<ShopInformation/>}/>
        <Route path='/khuyenmai' element={<ShopIntroduce/>}/>
        <Route path='/tintuc' element={<ShopIntroduce/>}/>
        <Route path='/lienhe' element={<Contact/>}/>
        <Route path='/taikhoan' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App