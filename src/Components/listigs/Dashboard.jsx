// importing packages
import React, { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { NavLink } from "react-router-dom";

// importin Files

import Show from "./Show";
import Flash from "../layouts/Flash";
import ListingCard from "./ListingCard";

function Dasboard() {
  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    axios
      .get("https://wanderlust-backend-4f5f.onrender.com/")
      .then((res) => {
        // console.log(res.data);
        setAllListings(res.data);
      })
      .catch((err) => {
        console.log("there is not data", err);
      });
  }, []);

  return (
    <div className="flex flex-wrap p-8 gap-8 justify-center">
      {allListings &&
        allListings.map((el) => (
          <NavLink to={`show/${el._id}`} key={el._id} state={{ listing: el }}>
            <ListingCard listing={el} />
          </NavLink>
        ))}
    </div>
  );
}

export default Dasboard;
