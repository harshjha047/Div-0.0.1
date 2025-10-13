import React, { useState } from "react";
import { useShop } from "../../Contexts/ShopContext";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { useParams } from "react-router-dom";

function ProductCat() {
  const { data } = useShop();
    const {brand}=useParams()

  // const [products, setProducts] = useState(data);

  return (<>
  <Filter/>
    <section className="container mx-auto px-4 mt-[18vh] grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map(
        (e, i) =>
          brand === e.brand && (
            <ProductCard
              id={e._id}
              brandLogo={e.brandLogo}
              brand={e.brand}
              images={e.images}
              category={e.category}
              name={e.name}
              price={e.new_price}
            />
          )
      )}
    </section>
    </>
  );
}

export default ProductCat;
