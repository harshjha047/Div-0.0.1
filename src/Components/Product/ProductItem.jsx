import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useShop } from '../../Contexts/ShopContext';
import BreadCrump from './BreadCrump/BreadCrump';
import { IoStar } from "react-icons/io5";
import ReviewInput from './Review/ReviewInput';
import ReviewOutput from './Review/ReviewOutput';
import { useProfile } from '../../Contexts/ProfileContext';

function ProductItem() {
  const {ProductId}=useParams()
    const navigator = useNavigate()
  const {data,cart,addToCart, RemoveFromCart}= useShop()
  const product = data?.find((e)=>e?._id===ProductId)
    const { getProfileData } = useProfile();
  
  const CartItem={
    productId:ProductId,
    productName:product?.name,
    priceAtAddTime:product?.new_price,
    selectedVariant:{
      color:product?.variants.filter((e)=>e?.type=="color")[0]?.value,
      size:product?.variants.filter((e)=>e?.type=="size")[0]?.value,
    },
    quantity: 1,
    subtotal: product?.new_price,
  }
 
  const [cartItem, setCartItem] = useState(CartItem);

const handleChange = (e) => {
  const { name, value } = e.target;

  // If updating a variant (color/size)
  if (name === "color" || name === "size") {
    setCartItem((prev) => ({
      ...prev,
      selectedVariant: {
        ...prev.selectedVariant,
        [name]: value,
      },
    }));
  }
  // If updating quantity
  else if (name === "quantity") {
    const quantity = Number(value); // convert to number
    setCartItem((prev) => ({
      ...prev,
      quantity,
      subtotal: quantity * prev.priceAtAddTime,
    }));
  } 
  // For other flat fields
  else {
    setCartItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const [tog, setTog] = useState(true)
  const average = product?.reviews?.length > 0? product?.reviews?.reduce((sum, num) => sum + num?.rating, 0) / product?.reviews?.length: 0;

   const [units] = cart?.filter((i)=>i?.productId==ProductId)
  //  console.log(units);
   const BuyNow=()=>{
    addToCart(cartItem)
    navigator("/cart")
   }
console.log(product);

    
  return (<>
    
    <BreadCrump product={product}/>

      {/* <!-- Product Detail --> */}
  <div className="container mx-auto px-4 py-8">
    <div className="lg:flex lg:gap-12">
      {/* <!-- Product Images --> */}
      <div className="lg:w-1/2">
        <div className="mb-4">
          <img id="main-image" src={product?.images[0]?.url} alt={product?.images[0]?.alt} className="w-full rounded-lg"/>
        </div>
        
        {/* <!-- Thumbnail Images --> */}
        <div className="flex space-x-2">
          {product?.images?.map((e,i)=>
          <img src={e?.url} alt={e?.alt} key={i}  className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-blue-500"  />
          )}
        </div>
      </div>

      {/* <!-- Product Info --> */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product?.name}</h1>
        
        {/* <!-- Price --> */}
        <div className="mb-6">
          <span className="text-3xl font-bold text-white">₹ {product?.new_price}</span>
          <span className="text-lg text-gray-400 line-through ml-2">₹{product?.old_price}</span>
          <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm ml-2">{Math.round(-(((product?.new_price/product?.old_price)*100)-100))}% OFF</span>
        </div>

        {/* <!-- Rating --> */}
        <div className="flex items-center mb-6">
          <div className="flex ">
            <svg className={`w-5 h-5 fill-current ${average>=1?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average>=2?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average>=3?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average>=4?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg className={`w-5 h-5 fill-current ${average==5?"text-yellow-400":""}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          </div>
          <span className="text-gray-400 ml-2">{average} ({product?.reviews?.length} reviews)</span>
        </div>

        {/* <!-- Description --> */}
        <div className="mb-6">
          <p className="text-gray-300">{product?.description}</p>
        </div>

        {/* <!-- Color Options --> */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Color</h3>
          <div className="flex space-x-3">
            {product?.variants?.map((e,i)=> e?.type=="color" &&<button key={i} onChange={handleChange}  onClick={()=>setCartItem({...cartItem,[selectedVariant.color]:e?.value}) } name='productColor' value={e?.value} className={`w-8 h-8 rounded-full bg-[${e?.value}] border-2 hover:border-white ${cartItem?.selectedVariant?.color == e?.value?"border-white":"border-transparent"}`} style={{ backgroundColor: e?.value }}></button>)}
          </div>
        </div>

        {/* <!-- Size Selection --> */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Size</h3>
          <div className="grid grid-cols-4 gap-2">
            {product?.variants?.map((e,i)=> e?.type=="size"&& <button key={i} onChange={handleChange} onClick={()=>setCartItem({...cartItem,[selectedVariant?.size]:e?.value})} name='productSize' value={e?.value} className={`${cartItem?.selectedVariant?.size == e?.value?"text-blue-500 border-blue-500 hover:text-gray-400":"border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-500"} py-2 px-4 border rounded-lg`}>{e?.value}</button>)}
          </div>
        </div>

        {/* <!-- Quantity --> */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-3">Quantity</h3>
          <div className="flex items-center bg-gray-800 rounded-lg w-fit">
            <button className="px-4 py-2 text-white hover:bg-gray-700 rounded-l-lg" onClick={()=>{RemoveFromCart(cartItem)}}>-</button>
            <span className="px-6 py-2 text-white">{units?units?.quantity:"0"}</span>
            <button className="px-4 py-2 text-white hover:bg-gray-700 rounded-r-lg" onClick={()=>{
              addToCart(cartItem) 
              console.log(cartItem)
            }}>+</button>
          </div>
        </div>

        {/* <!-- Action Buttons --> */}
        <div className="space-y-4">
          <button onClick={()=>{addToCart(cartItem)}} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Add to Cart
          </button>
          <button onClick={BuyNow} className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700">
            Buy Now
          </button>
        </div>

        {/* <!-- Product Features --> */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="flex items-center text-gray-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-sm">Authentic Product</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            <span className="text-sm">Free Shipping</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
            </svg>
            <span className="text-sm">Easy Returns</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <span className="text-sm">24/7 Support</span>
          </div>
        </div>

      </div>
    </div>

    {/* <!-- Product Details Tabs --> */}
    <div className="mt-16">
      <div className="border-b border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button onClick={()=>{setTog(true)}}  className={`py-2 px-1 border-b-2 ${tog?"border-blue-500 text-blue-500 font-medium":"border-transparent text-gray-400"} hover:text-white `}>Description</button>
          <button onClick={()=>{setTog(false)}} className={`py-2 px-1 border-b-2 ${tog?"border-transparent text-gray-400":"border-blue-500 text-blue-500 font-medium"} hover:text-white`}>Reviews</button>
        </nav>
      </div>
      {tog?<div className="py-8">
        <div className="text-gray-300 space-y-4">
          <pre>{product?.description}</pre>
        </div>
      </div>: <div className="py-8">
        <div className="text-gray-300 space-y-4">
          {getProfileData &&  <ReviewInput id={ProductId}/>  }
          {product?.reviews?.map((e,i)=>
          <ReviewOutput data={{e,i,ProductId}}/>

          )}
        </div>
      </div>}
      
     
      </div>
    </div>
  </>
  )
}

export default ProductItem