import React, { useState } from "react";
import List from "./Pages/DataApi";

function GoodWill() {
    const [ref, setRef]=useState(List.FooterGoodwill)
    // const [tag, setTag]=useState(List.tags)
    return(<>
        {ref.map((r,i)=>{
             const Icon = r.img;
        return(
        <div key={i} className="flex flex-col items-center space-y-2">
      <div className={`w-12 h-12 ${r.color} rounded-full flex items-center justify-center`}>
            <Icon className="text-2xl"/>
      </div>
      <h5 className="text-white font-medium text-sm">{r.title}</h5>
      <p className="text-gray-400 text-xs">{r.dis}</p>
    </div>
        )
    })}
    
    </>)

}

export default GoodWill;
