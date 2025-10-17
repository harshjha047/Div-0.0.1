import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAdmin } from "../../Contexts/AdminContext";
import { IoIosSend } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

function IndivisualProductCard() {
  const { id } = useParams();
  const {adminProductlist,createProduct} = useAdmin();
  const product = adminProductlist?.find((e) => e?._id === id);
  const varInit = {
    type: "",
    value: "",
  };
  const [varInputBox, setVarInputBox] = useState(varInit);
  const [tog, setTog] = useState(true);
  const initState = {
    name: product?.name || "",
    description: product?.description || "",
    new_price: product?.new_price || "",
    old_price: product?.old_price || "",
    category: product?.category || "",
    brand: product?.brand || "",
    stock: product?.stock || "",
    variants: product?.variants||[],
    images: product?.images||[],
  };

  const [inputBox, setInputBox] = useState(initState);
  const {
    name,
    description,
    new_price,
    old_price,
    category,
    brand,
    stock,
    variants,
    images,
  } = inputBox;
  const { type, value } = varInputBox;

  // console.log(initState);
  const handleChange = (e) => {
    const { name, value } = e?.target;
    if (name == "type" || name == "value") {
      setVarInputBox({ ...varInputBox, [name]: value });
    } else {
      setInputBox({ ...inputBox, [name]: value });
    }
  };

    const handleSubmit = (e) => {
        e.preventDefault();
    if (tog) {
      setInputBox({ ...inputBox, variants: [...variants, varInputBox] });
    } else {
      createProduct(inputBox)
    }
  };
  const deleteVariant=(e)=>{
    const afterdeletedata=inputBox?.variants?.filter((i)=>i?.value!=e?.value )
          setInputBox({ ...inputBox, variants: [...afterdeletedata] });
  }

  console.log(inputBox);
  

  return (
    <div className="w-full bg-[#F8F7F1] h-[85vh] px-3 py-2 rounded-md customScroller">
      <form action="" onSubmit={handleSubmit}>
      <fieldset className="w-full h-[10vh] border border-black relative">
        <legend className="ml-2">Product Name</legend>
        <input
          type="text"
          className="h-full w-full absolute outline-none pl-2 bg-[#00000000]"
          placeholder="Enter your product name here"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </fieldset>

      <fieldset className="w-full h-[10vh] border border-black relative">
        <legend className="ml-2">Description</legend>
        <input
          type="text"
          className="h-full w-full absolute outline-none pl-2 bg-[#00000000]"
          value={description}
          placeholder="Add a description"
          onChange={handleChange}
          name="description"
        />
      </fieldset>

      <div className="flex justify-between items-center">
        <fieldset className="w-[49%] h-[10vh] border border-black relative">
          <legend className="ml-2">New price</legend>
          <input
            type="text"
            className="h-full w-full absolute outline-none pl-2 bg-[#00000000]"
            value={new_price}
            placeholder="Enter discounted price"
            onChange={handleChange}
            name="new_price"
          />
        </fieldset>
        <fieldset className="w-[49%] h-[10vh] border border-black relative">
          <legend className="ml-2">old price</legend>
          <input
            type="text"
            className="h-full w-full absolute outline-none pl-2 bg-[#00000000]"
            value={old_price}
            placeholder="Enter MRP"
            onChange={handleChange}
            name="old_price"
          />
        </fieldset>
      </div>
      <div className="flex justify-between items-center">
        <fieldset className="w-[33%] h-[10vh] border border-black relative">
          <legend className="ml-2">Catagory</legend>
          <input
            type="text"
            className="h-full w-full absolute outline-none pl-2 bg-[#00000000]"
            onChange={handleChange}
            value={category}
            name="category"
            placeholder="Enter product catagory"
          />
        </fieldset>
        <fieldset className="w-[33%] h-[10vh] border border-black relative">
          <legend className="ml-2">Brand</legend>
          <input
            type="text"
            className="h-full w-full absolute outline-none pl-2 bg-[#00000000]"
            onChange={handleChange}
            value={brand}
            name="brand"
            placeholder="Enter brand name"
          />
        </fieldset>
        <fieldset className="w-[33%] h-[10vh] border border-black relative">
          <legend className="ml-2">Stock</legend>
          <input
            type="text"
            className="h-full w-full absolute outline-none pl-2 bg-[#00000000]"
            onChange={handleChange}
            value={stock}
            name="stock"
            placeholder="How much unit you have"
          />
        </fieldset>
      </div>

      <div className="flex justify-between ">
        <div className="w-[49%] border border-black">
          <fieldset className="w-full h-[10vh] border border-black ">
            <legend className="ml-2">Images</legend>
            <div className=" w-full ">
              <div className="w-full  flex justify-between">
                <input
                  type="file"
                  onChange={handleChange}
                  name="url"
                  id=""
                  className="h-full w-[40%]  outline-none pl-2 bg-[#00000000]"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="alt"
                  id=""
                  className=" w-[40%]  outline-none pl-2  bg-[#00000000] border-b border-b-black"
                  placeholder="Alt"
                />
                <div className=" p-2 right-0 border bg-white  h-full"><IoIosSend/></div>

              </div>
            </div>
          </fieldset>
          <div className=" ">hello</div>
        </div>
        <div className="w-[49%] border border-black">
          <fieldset className="w-full h-[10vh] border border-black ">
            <legend className="ml-2">Variants</legend>
            <div className=" w-full ">
              <div className="w-full  flex  justify-between">
                <select
                  name="type"
                  onChange={handleChange}
                  id="type"
                  className="w-[40%] pl-2  bg-[#00000000] "
                >
                  <option value="">select type</option>
                  <option value="color">Color</option>
                  <option value="size">Size</option>
                </select>
                <input
                  type="text"
                  name="value"
                  onChange={handleChange}
                  value={value}
                  id=""
                  className=" w-[40%]  outline-none pl-2  bg-[#00000000] border-b border-b-black"
                  placeholder="Enter value here"
                />
                <button type="submit" className=" p-2 right-0 border bg-white  h-full" ><IoIosSend/></button>
              </div>
            </div>
          </fieldset>
          {variants?.map((e, i) => {
            return (
              <>
                <div className="flex w-full justify-between">
                  <div className="w-[40%] px-3 py-1">{e.type}</div>
                  <div className="w-[40%] px-3 py-1">{e.value}</div>
                  <button className="p-2" onClick={()=>deleteVariant(e)}><AiOutlineDelete/></button>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {product ? (
        <button className="border px-3 py-1 my-4 border-black">Edit</button>
      ) : (
        <button className="border px-3 py-1 my-4 border-black" onClick={()=>setTog(!tog)}>Create</button>
      )}
      </form>
    </div>
  );
}

export default IndivisualProductCard;
