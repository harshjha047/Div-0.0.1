import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { useShop } from "../../../Contexts/ShopContext";
import { useProfile } from "../../../Contexts/ProfileContext";
import toast from "react-hot-toast";

function ReviewInput(id) {
  const { data,addReview,fetchAllProducts } = useShop();
  const { getProfileData } = useProfile();

  const initState = {
    rating: "",
    comment: "",
  };

  const [inputBox, setInputBox] = useState(initState);
  const { rating, comment } = inputBox;
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setInputBox({ ...inputBox, [name]: value });
  };
  const handleSubmit = (e) => {
    // e?.preventDefault();
    addReview({id,inputBox})
    fetchAllProducts()
    toast.success("Review added")
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-full border rounded-2xl p-4 flex justify-between"
    >
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={handleChange}
        className="border rounded-md p-2 justify-between w-[70%] text-black pl-2"
      />
      <div className="p-2">
        <span>
          Rate
          <select
            name="rating"
            id=""
            onChange={handleChange}
            className="text-black"
          >
            <option value="">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="text-yellow-400 inline-block">
            <IoStar />
          </div>
        </span>
      </div>
      <button className="border px-6" type="submit">
        send
      </button>
    </form>
  );
}

export default ReviewInput;
