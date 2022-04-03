import React from "react";
import Navbar from "./Navbar";
function Locations()
{
    return(
       <>
       <Navbar/>
         <h1>LOCATIONS</h1>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h3>Konark Apartments, Pocket 4 Kalkaji Ext</h3>
              <p>Near Entry Gate</p>
              <p>5:00PM - 10:00PM</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.198925068595!2d55.3032913!3d25.2352499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d1d1d7d481%3A0x8b43bcb916ec6007!2sOud%20Metha%20Bldg!5e0!3m2!1sen!2sae!4v1647787322178!5m2!1sen!2sae" width="600" height="200" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h3>C-8 Vasant Kunj, New Delhi</h3>
              <p>Near Community Hall Park</p>
              <p>5:00PM - 10:00PM</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4680.331785088839!2d55.30262004523375!3d25.23593735288264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42db20d99d41%3A0xf93035af01a85798!2sThe%20Dubai%20Frame!5e0!3m2!1sen!2sae!4v1647787556570!5m2!1sen!2sae" width="600" height="200" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h3>Gurgaon One, Gurgaon, Sector 84</h3>
              <p>Near 24M Road Opposite Pocket 1 Gate</p>
              <p>5:00PM - 10:00PM</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.1460137014014!2d55.29865248013314!3d25.239171088268854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42dbb7cf9167%3A0xaf3e99af103b803f!2sLuLu%20Hypermarket%20-%20Dubai!5e0!3m2!1sen!2sae!4v1647787681296!5m2!1sen!2sae" width="600" height="200" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
        <br></br>
       </>
    );
}
export default Locations;