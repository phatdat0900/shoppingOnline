import React from "react";
import Navbar from "../Navbar";
import Annoucement from "../Annoucement";
import Slider from "../Slider";
import Categories from "../Categories";
import Products from "../Products";
const Home = () => {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
        </div>
    );
};

export default Home;
