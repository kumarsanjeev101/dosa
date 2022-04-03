import React from "react";
import Navbar from "./Navbar";
function Contact()
{
    return(
        <>
        <Navbar/>
            <h1>CONTACT US</h1>
            <br/><br/>
            <div className="card-group">
            <div className="card">
                <div className="card-body" style={{backgroundColor:"peachpuff"}}>
            <form>
            <label>Your Name</label>
            <br></br>
            <input type="text"/>
            <br></br>
            <br></br>
            <label>Your Phone</label><br></br>
            <input type="number"/>
            <br></br>
            <br></br>
            <label>Your Email</label><br></br>
            <input type="email"/>
            <br></br>
            <br></br>
            <div class="form-group">
            <label for="comment">Your Message</label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
            <button type="submit">submit</button>
            </div>
            </form>
            </div>
            </div>
            <div className="card">
            <div className="card-body">
            <h5>Dosa Inc Foods Pvt. Ltd.</h5>
            <br/>
            <p>Delhi | Gurgaon</p>
            <p>+91 9211188877</p>
            <p>Info@Dosainc.In</p>
            <p>Monday – Sunday 10 AM – 8 PM</p>

            <h5>CATERING QUERIES</h5>
            <br/>
            <p>+91 9971662239</p>
            <p>Satya.Koniki@Dosainc.In</p>
            </div>
            </div>
            </div>
            <br></br>
        </>
    );
}
export default Contact;