import React, { useEffect } from "react";
import { useBookmark } from "../../contex/BookmarkListProvider";
import Loader from "../Loader/Loader";
import ReactCountryFlag from "react-country-flag";
import { useNavigate, useParams } from "react-router-dom";

function SingleBookmark() {
  const { currentBookmark, getBookmark, isLoading } = useBookmark();
    const {id} = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    getBookmark(id);
  }, [id]);

  if (isLoading|| !currentBookmark) return <Loader />;

  return (
    <div>
        <button onClick={()=>navigate(-1)} className="btn btn--back"><strong> &larr; back </strong></button>
      <h2>{currentBookmark.cityName}</h2>
      <div className="bookmarkItem">
        <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
        &nbsp;&nbsp; <strong>{currentBookmark.cityName}</strong> &nbsp;&nbsp;
        <span>{currentBookmark.country}</span>
      </div>
    </div>
  );
}

export default SingleBookmark;
