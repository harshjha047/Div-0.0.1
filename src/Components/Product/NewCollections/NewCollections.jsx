import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import List from "../../Pages/DataApi";
import ProductCard from "../ProductCard";

function NewCollections() {
  const [FreshArrivals, setFreshArrivals] = useState(List.FreshArrivals);

  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-50">Fresh Arrivals</h2>
      <section className="container mx-auto px-4  grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {FreshArrivals.map((e, i) => {
          return (
            <div key={i} className="">
            <ProductCard
              id={e._id}
              brandLogo={e.brandLogo}
              brand={e.brand}
              images={e.images}
              category={e.category}
              name={e.name}
              price={e.price}
            />
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default NewCollections;
