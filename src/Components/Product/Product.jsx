import React from "react";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import { useShop } from "../../Contexts/ShopContext";

function Product() {
    const {search,setSearch,data,filteredData, setFilteredData}=useShop()
  // const { data, } = useShop();
  return (<>
        <Filter />
        

      <section className="container mx-auto px-4 mt-[18vh] grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData?.map((e, i) => (
          <ProductCard
            key={i}
            id={e._id}
            brandLogo={e.brandLogo}
            brand={e.brand}
            images={e.images}
            category={e.category}
            name={e.name}
            price={e.new_price}
          />
        ))}
      </section>
    </>
  );
}

export default Product;
