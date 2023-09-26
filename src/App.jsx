import "./App.css";

import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelsProvider from "./contex/HotelsProvider";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import BookmarkLayout from "./components/BookmarkLayout/BookmarkLayout";
import BookmarksProvider from "./contex/BookmarkListProvider";
import Bookmark from "./components/Bookmark/Bookmark";
import SingleBookmark from "./components/SingleBookmark/SingleBookmark";
import AddNewBookmark from "./components/AddNewBookmark/AddNewBookmark";
import AuthProvider from "./contex/AuthProvider";
import Login from "./components/Login/Login";

function App() {
  return (
   <AuthProvider>
     <BookmarksProvider>
      <HotelsProvider>
        <Toaster />
        <Header />

        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
          <Route path="/bookmark" element={<BookmarkLayout />}>
            <Route index element={<Bookmark/>} />
            <Route path=":id" element={<SingleBookmark/>} />
            <Route path="add" element={<AddNewBookmark/>} />
          </Route>
        </Routes>
      </HotelsProvider>
    </BookmarksProvider>
   </AuthProvider>
  );
}

export default App;
