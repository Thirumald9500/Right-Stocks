import { useState } from "react";
import { useLocation } from "react-router-dom";



const Sell = () =>{
    const {state} = useLocation();
    const [selqty,setselqty] = useState();
    const price = state.buyingprice;
    const tax_amount = 0.2*price;
    const tax_amount1 = parseFloat(tax_amount).toFixed(2);
    const total = parseFloat(state.buyingprice*state.quantity*tax_amount).toFixed(2);
    // console.log(state.nameofstock);
    return(
        // <div style="background-color: #eee;">
            <div class="container py-5">
            <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card text-black">
                <i class="fab fa-dell fa-lg pt-3 pb-1 px-3"></i>
                {/* <img src=""
                    class="card-img-top" alt="Apple Computer" /> */}
                <div class="card-body">
                    <div class="text-center">
                    <h5 class="card-title">Need To Sell {state.nameofstock} Stocks </h5>
                    <p class="text-muted mb-4">{state.nameofstock}</p>
                    </div>
                    <div>
                    <div class="d-flex justify-content-between">
                        <span>Buying Price</span><span>{state.buyingprice}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span>Available Quantity</span><span>{state.quantity}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span>Your Remaining Quantity</span><span>{state.quantity-selqty}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span>Enter the Quantity to Sell</span><span><input type="text" onChange={(e)=>{setselqty(e.target.value)}}/></span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span>Tax Amount</span><span>{tax_amount1}</span>
                    </div>
                    </div>
                    <div class="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span><span>{total}</span>
                    </div>
                    <button type='button' className='btn btn-primary'>Sell</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    // </div>
    )
}

export default Sell;