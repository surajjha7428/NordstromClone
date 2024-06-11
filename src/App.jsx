import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './Pages/SignIn'
import Purchase from './Pages/Purchases'
import Store from './Pages/Store'
import NoPage from './Pages/NoPage'
import Dropdown from './Components/Dropdown/Dropdown'
import Body from './Components/Body/Body'
import ProductSlider from './Components/Body/ProductSlider'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Navbar />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Stores" element={<Store />} />
          <Route path="/Purchases" element={<Purchase />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Dropdown />
      <Body />
      <ProductSlider />
      <Footer/>
    </div>
  );
}

export default App
