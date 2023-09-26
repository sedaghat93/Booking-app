import React from 'react'
import Map from '../Map/Map'
import { Outlet } from 'react-router-dom';
import { useBookmark } from '../../contex/BookmarkListProvider';

function BookmarkLayout() {
  const {bookmarks}= useBookmark();
  console.log(bookmarks);
  return (
    <div className="appLayout">
    <div className="sidebar">
      <Outlet/>
    </div>
      <Map markerLocations={bookmarks} />
  </div>
  )
}

export default BookmarkLayout;