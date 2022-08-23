import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Bookdemo from "./Bookdemo";
import Feature from "./Feature/Feature";
import Home from "./Home/Home";
import Integration from "./Integration/Integration";
import Pricing from "./Pricing/Pricing";
import Signin from "./Signin/Signin";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/feature" element={<Feature/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/integration" element={<Integration/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/bookdemo" element={<Bookdemo/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
    </Routes>
  );
};

export default Allroutes;
