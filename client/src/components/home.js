import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Company_details } from '../apiservice/apisrevice';


const Search = () => {
    const [stockSymbol,setStockSymbol] = useState("");
    const navigate = useNavigate();
    const [stockdata,setStockdata] = useState([]);
    // const [buyStock,setbuyStock] = useState({
    //   nameofstock:"amxn",
    //   buyingprice:0,
    //   quantity:0,
    //   amount:0,
    //   sellingprice:0
    // });
    const [noofstock,setstockcount] = useState(0);
    const [dateyes,setdateyes] = useState();
    let last_data = '';

    const FetchingData=async(e)=>{
        e.preventDefault();
        setStockSymbol(e.target[0].value);
        const API_KEY="TZ5ZMR1HSDJZZV46";
        // const STOCK_SYMBOL=" "
        let API_URL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`
        
        const res = await axios.get(API_URL)
        console.log(res.data["Time Series (Daily)"]);
        let date1 = res.data["Time Series (Daily)"];
        let last_data = Object.values(date1)[0];
        setdateyes(Object.keys(date1)[0]);
        console.log(last_data);
        setStockdata(last_data);
        //console.log(stockdata["1. open"]);
    }
    const sale = () => {
        // stockdata_post({"nameofstock":stockSymbol,"buyingprice":stockdata["1. open"],"quantity":noofstock}).then((res)=>{
        //   console.log('buyer');
        // })
        navigate('/sell',{state:{"nameofstock":stockSymbol,"buyingprice":stockdata["1. open"],"quantity":noofstock}})
    }

  return (
    <div>
      <form onSubmit={FetchingData}>
          <h1>Stocks</h1>
          <input value={stockSymbol} onChange={(e)=>{setStockSymbol(e.target.value)}} type="text" />
          
          <button>Fetch</button>
          <button  >Add to WatchList</button>
      </form>
      <br></br>
      <div class="row">
        <div class="col-lg-6">
          <div class="card text-bg-dark mb-3" >
            <div class="card-body ">
              <h5 class="card-title">{stockSymbol} Stocks</h5>
                <ul class="list-group">
                  <li class="list-group-item">
                    <b>OPEN : </b>{stockdata["1. open"]}
                  </li>
                  <li class="list-group-item"><b>HIGH : </b>{stockdata["2. high"]}</li>
                  <li class="list-group-item"><b>LOW : </b>{stockdata["3. low"]}</li>
                  <li class="list-group-item"><b>CLOSE : </b>{stockdata["4. close"]}</li>
                  <li class="list-group-item"><b>STOCKS AVAILABE : </b>{stockdata["6. volume"]}</li>
                  <li class="list-group-item"><b>DATE : </b>{dateyes}</li>
                </ul>
              
              <form onSubmit={(e)=>e.preventDefault()}>
                Enter The Stocks To Buy<input
                  className='form-control'
                  type='number'
                  placeholder='no of stocks'
                  value={noofstock}
                  onChange={(e)=>setstockcount(e.target.value)}
                  required
                />
                <input type='hidden' value={stockSymbol} name='stockcompany'/>
                <button type='button' onClick={sale} className='btn btn-primary'>BUY</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
</div> )
}
export default Search;





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