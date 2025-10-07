import React from "react";
import FeaturedProducts from "../Product/FeaturedProducts/FeaturedProducts";
import NewCollections from "../Product/NewCollections/NewCollections";
import Hero from "../Pages/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <hr className="mt-4 shadow-lg block w-[95%]  mx-auto" />
      <NewCollections />
      <section className=""></section>
    </div>
  );
}

export default Home;
