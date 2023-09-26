// import { createContext, useContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import useFetch from "../Hooks/useFetch";
// import axios from "axios";
// import toast from "react-hot-toast";

// const HotelContext = createContext();
// const BASE_URL = "http://localhost:5000/hotels";

// function HotelsProvider({children}) {
//     const [currentHotel, setCurrentHotel] = useState(null);
//     const [isLoadingCurrHotel, setIsLoadingCurrHotel] = useState(false);
//     const [searchParams, setSearchParams] = useSearchParams();
//     const destination = searchParams.get("destination");
//     const room = JSON.parse(searchParams.get("options"))?.room;
  
//     const { isloading, data: hotels } = useFetch(
//       "http://localhost:5000/hotels",
//       `q=${destination || ""}&accommodates_gte=${room || 1}`
//     );

//     async function getHotel(id){
//       setIsLoadingCurrHotel(true);
//       try {
//         const {data} = await axios.get(`"http://localhost:5000/hotels"/${id}`);
//         setCurrentHotel(data);
//         setIsLoadingCurrHotel(false);
//       } catch (error) {
//         toast.error(error.message);
//         setIsLoadingCurrHotel(false);
//       }
//     }

//   return (
//     <HotelContext.Provider value={{ isloading, hotels, getHotel, isLoadingCurrHotel, currentHotel }} >
//         {children}
//     </HotelContext.Provider>
//   );
// }
// export default HotelsProvider;

// export function useHotels(){
//     return useContext(HotelContext)
// }

import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import axios from "axios";
import { toast } from "react-hot-toast";

const HotelContext = createContext();
const BASE_URL = "http://localhost:5000/hotels";

function HotelsProvider({ children }) {
  const [currentHotel, setCurrentHotel] = useState(null);
  const [isLoadingCurrHotel, setIsLoadinCurrHotel] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;

  const { isLoading, data: hotels } = useFetch(
    BASE_URL,
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  async function getHotel(id) {
    setIsLoadinCurrHotel(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setCurrentHotel(data);
      setIsLoadinCurrHotel(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadinCurrHotel(false);
    }
  }

  return (
    <HotelContext.Provider
      value={{
        isLoading,
        hotels,
        currentHotel,
        getHotel,
        isLoadingCurrHotel,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}
export default HotelsProvider;

export function useHotels() {
  return useContext(HotelContext);
}
