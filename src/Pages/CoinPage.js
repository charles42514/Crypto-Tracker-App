// import { LinearProgress,  Typography } from "@material-ui/core";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import CoinInfo from "../Components/CoinInfo";
// import { SingleCoin } from "../config/api";
// import { numberWithCommas } from "../components/CoinsTable";
// import { CryptoState } from "../CryptoContext";

// const CoinPage = () => {
//   const { id } = useParams();
//   const [coin, setCoin] = useState();

//   const { currency, symbol } = CryptoState();

//   const fetchCoin = async () => {
//     const { data } = await axios.get(SingleCoin(id));

//     setCoin(data);
//   };

//   useEffect(() => {
//     fetchCoin();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   };

//   const sidebarStyle = {
//     width: "30%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop: 25,
//     borderRight: "2px solid grey",
//   };

//   const headingStyle = {
//     fontWeight: "bold",
//     marginBottom: 20,
//     fontFamily: "Montserrat",
//   };

//   const descriptionStyle = {
//     width: "100%",
//     fontFamily: "Montserrat",
//     padding: 25,
//     paddingBottom: 15,
//     paddingTop: 0,
//     textAlign: "justify",
//   };

//   const marketDataStyle = {
//     alignSelf: "start",
//     padding: 25,
//     paddingTop: 10,
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-around",
//   };

//   if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

//   return (
//     <div style={containerStyle}>
//       <div style={sidebarStyle}>
//         <img
//           src={coin?.image.large}
//           alt={coin?.name}
//           height="200"
//           style={{ marginBottom: 20 }}
//         />
//         <Typography variant="h3" style={headingStyle}>
//           {coin?.name}
//         </Typography>
//         <Typography variant="subtitle1" style={descriptionStyle}>
//         <div dangerouslySetInnerHTML={{ __html: coin?.description.en.split(". ")[0] }} />
//         </Typography>
//         <div style={marketDataStyle}>
//           <span style={{ display: "flex" }}>
//             <Typography variant="h5" style={headingStyle}>
//               Rank:
//             </Typography>
//             &nbsp; &nbsp;
//             <Typography
//               variant="h5"
//               style={{
//                 fontFamily: "Montserrat",
//               }}
//             >
//               {numberWithCommas(coin?.market_cap_rank)}
//             </Typography>
//           </span>

//           <span style={{ display: "flex" }}>
//             <Typography variant="h5" style={headingStyle}>
//               Current Price:
//             </Typography>
//             &nbsp; &nbsp;
//             <Typography
//               variant="h5"
//               style={{
//                 fontFamily: "Montserrat",
//               }}
//             >
//               {symbol}{" "}
//               {numberWithCommas(
//                 coin?.market_data.current_price[currency.toLowerCase()]
//               )}
//             </Typography>
//           </span>
//           <span style={{ display: "flex" }}>
//             <Typography variant="h5" style={headingStyle}>
//               Market Cap:
//             </Typography>
//             &nbsp; &nbsp;
//             <Typography
//               variant="h5"
//               style={{
//                 fontFamily: "Montserrat",
//               }}
//             >
//               {symbol}{" "}
//               {numberWithCommas(
//                 coin?.market_data.market_cap[currency.toLowerCase()]
//                   .toString()
//                   .slice(0, -6)
//               )}
//               M
//             </Typography>
//           </span>
//         </div>
//       </div>
//       <CoinInfo coin={coin} />
//     </div>
//   );
// };

// export default CoinPage;
import React from 'react'

const CoinPage = () => {
  return (
    <div>
      CoinPage
    </div>
  )
}

export default CoinPage
