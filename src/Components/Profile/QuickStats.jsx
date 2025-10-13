import React from "react";
import { Link } from "react-router-dom";

function QuickStats(props) {
  return (
    <Link to={props.link}>
      <div className="bg-gray-700 rounded-lg p-4 text-center">
        <div className={`text-2xl font-bold text-orange-400 ${props.css}`}>{props.value}</div>
        <div className="text-sm text-gray-300">{props.name}</div>
      </div>
    </Link>
  );
}

export default QuickStats;
