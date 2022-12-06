import axios from 'axios';
import React, { useState } from 'react'


const Search = (id) => {
    const [stockXvalue,setStockXvalue] = useState([]);
    const [stockYvalue,setStockYvalue] = useState([]);
    const [stockSymbol,setStockSymbol] = useState("");
    const FetchingData=async(e)=>{
        e.preventDefault();
        setStockSymbol(e.target[0].value);
        let stockXvaluefunction =[];
        let stockYvaluefunction =[];
        const API_KEY="DUMMY";
        // const STOCK_SYMBOL=" "
        let API_URL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`
        
        const res = await axios.get(API_URL)
        console.log(res.data);
        for(var key in res.data["Time Series (Daily)"]){
            stockXvaluefunction.push(key);
            stockYvaluefunction.push(res.data["Time Series (Daily)"][key]["4. close"]);
        }
        setStockXvalue(stockXvaluefunction);
        setStockYvalue(stockYvaluefunction);
    }
    const handleWatchList =()=>{
      console.log(id);
    }
  return (
    <div>
      <form onSubmit={FetchingData}>
          <h1>Stock Chart</h1>
          <input value={stockSymbol} onChange={(e)=>{setStockSymbol(e.target.value)}} type="text" />
          {/* <Plot
              data={[
                {
                  x: stockXvalue,
                  y: stockYvalue,
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'red'},
                }]}
              layout={ {width: 720, height: 440, title: `${stockSymbol}`} }
          /> */}
          <button>Fetch</button>
          <button onClick={handleWatchList} >Add to WatchList</button>
      </form>
</div> )
}
export default Search




// import axios from "axios";
// import { useEffect } from "react";




// const Home =  () => {

//     // e.preventDefault();
//     console.log('api');
//     let api_key = "DUMMY";
//     const STOCK_SYMBOL="AMZN";
//     let API_URL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${STOCK_SYMBOL}&outputsize=compact&apikey=${api_key}`
//     const res = axios.get(API_URL);
//     console.log(res);
//     return(
//         <div>
//             <h1>in home page</h1>
//         </div>
//     )
// }

// export default Home;

// 'use strict';
// var request = require('request');

// // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
// var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo';

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
// });
// TZ5ZMR1HSDJZZV46

//const datas = await axios.get(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${location.current.value}&appid=3dac18809122ac4fdbed0a62b370ae6c`,
    // ).catch(function(error){
    //   var msg=error.response.data.message;
    //   showAlert(msg)
    // });