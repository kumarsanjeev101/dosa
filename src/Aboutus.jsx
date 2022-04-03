import React from "react";
import Navbar from "./Navbar";
function Aboutus()
{
    return(
        <>
        <Navbar/>
            <div class="container">
            <h1>ABOUT US</h1>
            <p><b>Our story changed one morning in alaknanda….</b>
            Back in April 2012, Mr. S L Ganapathi asked us to bring the Dosa Inc. 
            truck to his residential complex for some fresh dosa and vada… what we experienced 
            in the next 3 hours completely changed the way we looked at the business for good.

            We were sold out in 2 hours of our parking the truck in the Alaknanda neighborhood and that
            started our “food on the go!” journey - taking our food to the customers rather than waiting for
            them to arrive.
            </p>
            </div>
            <hr/><hr/>
            <br/><br/>
            <div className="card-deck">
            <div class="card">
            
            <div class="card-body">
            <img class="rounded-circle" src="http://www.dosainc.in/images/ganapathi.jpg" height="300" width="300"/>
            <p class="card text"><i>Cheif Mentor</i></p>
                <h4 class="card-title">S. L. Ganapathi</h4>
                <p class="card-text"> serial entrepreneur and an expert in the field of 
                Supply Chain and Logistics, S. L. Ganapathi has over 40 years 
                of experience in the logistics industry. As a first time 
                entrepreneur in the mid 80s, he played a pioneering role 
                in introducing container traffic to Delhi ICD. He is 
                a visiting faculty at premier Institutions like IIFT, 
                IMI, etc. He is a wonderful example of the entrepreneurship 
                spirit and has mentored several budding entrepreneurs in their 
                path of realizing their vision. S. L. Ganapathi is an 
                engineer from CIT, Coimbatore and a management graduate 
                from IIM Ahmedabad, '71.</p>
            </div>
            </div>
            <div class="card">
            <img class="card-img-top" className="rounded-circle" src="http://www.dosainc.in/images/joyti.jpg" height="300" width="300"/>
            <div class="card-body">
                <h4 class="card-title">Jyoti Ganapathi</h4>
                <p class="card text"><i>Founder, CEO</i></p>
                <p class="card-text">As a 17 year old, Jyoti Ganapathi, planned a 
                Dosa shop in the local market. 15 years later, 
                she made it to her locality with a Dosa Truck. 
                Such is the nature of enterprise. She returned 
                from the US after completing her BA, Knox College 
                and her Masters in HR and IR, UIUC to assist her 
                father in his Logistics and Supply Chain company. 
                One of the most valuable lessons she learnt was about 
                the value of quality service. Dosa Inc is not just 
                about the food, it is about giving a complete 
                product and service experience to the customer.</p>
            </div>
            </div>
            <div class="card">
            <img class="card-img-top" className="rounded-circle" src="http://www.dosainc.in/images/satya.jpg" height="300" width="300"/>
            <div class="card-body">
                <h4 class="card-title">Satya Sashikanth Koniki</h4>
                <p class="card text"><i>Co-founder, COO</i></p>
                <p class="card-text">Elbow deep in vada batter or scanning the
                recently arrived shipment of books, 
                Satya Sashikanth Koniki has always been 
                all-in in everything he has done. With a
                Masters degree in Telecom from the US and 
                over a decade long experience in start-ups 
                across Silicon Valley and Gurgaon in marketplaces, 
                e-com and digital advertising, Satya is a 
                complete ops person. He brings his commitment 
                and the passion for food to Dosa Inc. 
                He also brings his experience in building 
                and leading teams in a messy start up 
                environment to this unique venture.</p>
            </div>
            </div>
            </div>
            <br></br>
        </>
    );
}
export default Aboutus;