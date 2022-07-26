const API_KEY="514edc558ea90d7ad4884701ebe8d4a8"


const requests = {
fetchTrending: `/trending/all/week?api_key=${API_KEY}&lenguaje=en-US`,
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres-28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres-10749`,
fetchDocumentaries:` /discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;













// import React, { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { selectPrice } from "../features/PriceSlice";
// import ReactDOM from "react-dom";
// const PaypalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
// const Paypal = () => {
//   const price = useSelector(selectPrice);
//   const createOrder = (data, action) => {
//     return action.order.create({
//       purchase_units: [
//         {
//           description: "TINOFLIX SUBSCRIPTION",
//           amount: {
//             currency_code: "EUR",
//             value: price,
//           },
//         },
//       ],
//     });
//   };
//   const onApprove = (data, actions) => {
//     return actions.order.capture();
//   };
//   return (
//     <div>
//       <PaypalButton
//         createOrder={(data, actions) => createOrder(data, actions)}
//         onApprove={(data, actions) => onApprove(data, actions)}
//       />
//     </div>
//   );
// };

// export default Paypal;
