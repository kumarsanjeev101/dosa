import React from "react";
import Navbar from "./Navbar";
function Ordernow()
{
    return(
        <>
            <Navbar/>
            <h1>ORDER NOW</h1>
            <p>Order form for our newly launched menu!</p>
            <img src="http://www.dosainc.in/images/order-now.jpg"/>
            <br/>
            <br/>
            <form>
            <label>Your name</label>
            <br/>
            <input type="text"></input>
            <br/>
            <label>Your phone</label>
            <br/>
            <input type="number"></input>
            <br/>
            <label>Home/Delivery Address</label>
            <textarea class="form-control" rows="3"></textarea>
            <br/>
            <label>Please type in your order from the menu above. 
                Please mention the item and quantities. Minimum pack size is mentioned in the menu, 
                your quantity should be the number of packs.
                Eg. Muruku 2 packs would mean 250gms X 2= 500gms</label>
            <textarea class="form-control" rows="3"></textarea>
            <br/>
            <label>Kindly select the mode of payment</label><br/>
                <input type="radio"/>PayTM<br/>
                <input type="radio"/>GooglePay<br/>
                <input type="radio"/>Cash<br/>
                <br/>
                <label>If product customization is required kindly let us know.
                Eg. Less sugar in sweet items, etc. Minimum order for customizations is 1kg.</label>
                <br/>
                <textarea class="form-control" rows="3"></textarea>
            <button type="submit">submit</button>
            </form>
        </>
    );
}
export default Ordernow