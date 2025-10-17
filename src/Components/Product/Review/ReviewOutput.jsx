import React from "react";
import { IoStar } from "react-icons/io5";
import { useProfile } from "../../../Contexts/ProfileContext";
import { AiOutlineDelete } from "react-icons/ai";
import { useShop } from "../../../Contexts/ShopContext";

function ReviewOutput({ data }) {
  const { getProfileData } = useProfile();
  const { removeReview } = useShop();

  const { e, i, ProductId } = data;
  const { _id } = e;

  return (
    <div key={i} className="w-full border  rounded-2xl p-4">
      <div className="p-2 flex justify-between">
        {e?.name}{" "}
        <span>
          Rate {e?.rating}{" "}
          <div className="text-yellow-400 inline-block">
            <IoStar />
          </div>
        </span>
      </div>
      <div className="border w-full rounded-md p-2 relative flex items-center">
        {e?.comment}{" "}
        {getProfileData?._id === e.user && (
          <div
            className=" text-red-500 hover:text-red-800 text-lg absolute right-3"
            onClick={() => removeReview({ _id, ProductId })}
          >
            <AiOutlineDelete />
          </div>
        )}{" "}
      </div>
    </div>
  );
}

export default ReviewOutput;
