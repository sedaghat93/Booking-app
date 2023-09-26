import React from "react";
import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useHotels } from "../../contex/HotelsProvider";

function AppLayout() {
 const {hotels} = useHotels()
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet/>
      </div>
        <Map markerLocations={hotels}/>
        {/* <div className="mapContainer">map</div> */}
    </div>
  );
}

export default AppLayout;
