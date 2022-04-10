import React from "react";
import Navbar from "./Navbar";
import Party from "./party-catering.gif";
import Retail from "./retail-services.gif";
import Corporate from "./corporate-catering.gif";
import Bulk from "./bulh-order.gif";
function Catering()
{
    return(
        <>
        <Navbar/>
            <h1 class="display-4">CATERING AND SERVICES</h1>
            <br></br>
            <p>Dosa Inc started out with the unique concept of Food Trucks and built it into a successful 
            Onsite Food Services Company providing retail services to residential neighbourhoods and 
            companies to catering options. The cuisine is authentic, home-styled Indian, with recipes 
            culled from our mothers kitchens. We are currently a team of 14 people, 4 trucks, 1 catering van
            and 2 fully fitted out base kitchens in Delhi and Gurgaon.</p>
            <br></br>
            <h1 class="display-4">PARTY CATERING</h1>
            <img src={Party}/>
            <br></br>
            <p>We have become the go to caterers for house warming parties or a havan for wedding or any 
            religious / auspicious occasion. We also specialize in kids birthday parties, as well as 
            kitty parties with live counters to serve an untapped market of small to medium sized gatherings. 
            Our ability to make this happen indoors and outdoors.</p>
            <br></br>
            <h1 class="display-4">RETAIL SERVICES</h1>
            <br></br>
            <img src={Retail}/>
            <br></br>
            <p>Our trucks are fully mobile kitchens on wheels that serve fresh South Indian food on a 
            retail basis at residential neighbourhoods as well as in company cafeterias. 
            Our live- counters make our food a compelling, must-have experience.</p>
            <h1 class="display-4">CORPORATE CATERING</h1>
            <br></br>
            <img src={Corporate}/>
            <br></br>
            <p>We go to different offices / institutional locations to serve fresh and flavorful 
            food during the weekdays. We specialize in indoor and outdoor Live Counters; 
            Breakfast and lunch packs for seminars and conferences and also provide 
            Lunch Services / Meal Plans (Thali services)</p>
            <br></br>
            <h1 class="display-4">BULK ORDER</h1>
            <br></br>
            <img src={Bulk}/>
            <br></br>
            <p>For pick up or delivery of a bulk order from one of our locations, 
            please order at least 24 hours in advance to check availability of items 
            and feasibility of menu. We would require a complete address with location 
            and contact person and time of delivery at least 48 hours in advance.</p>
            <br></br>
        </>
    );
}
export default Catering;