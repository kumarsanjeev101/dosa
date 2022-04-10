import React from "react"
import Navbar from "./Navbar";
import Delivery from "./delivery-pickup.jpg";
import Buffet from "./buffet.jpg";
import Truck from "./truck.jpg";
import Plaindosa from "./plain-dosa.jpg";
import Dahiwada from "./dahi-wada.jpg";
import Oniontomato from "./Onion-Tomato-Uttapam.jpg";
import Rava from "./rava-dosa.jpg";
import Medhuvada from "./Medhu-Vada.jpg";
import Andhravada from "./Andhra-Vada.jpg";
import Bendakaivada from "./Bendakai-Vepudu.jpg";
import Pesarattu from "./Pesarattu-Upma.jpg";
import Malabar from "./Malabar-Parotha.jpg";
import Peanut from "./Peanut-Chutney.jpg";
import Wedding from "./Wedding-Party-Set-Up.jpg";
import Cafeteria from "./Cafeteria-Set-Up.jpg";
import Concert from "./Concert-Set-Up.jpg";
import Resi from "./Residential-Monring-Set-Up.jpg";
import Office from "./Office-Cafe-Set-Up.jpg";
function Home()
{
    return(
        <>
        <Navbar/>
        <br></br>
<div className="card-deck">
<div className="card">
<div className="card-body text-center">
  <img className="rounded" src={Truck} />
  
</div>
</div>
<div className="card">
<div className="card-body text-center">
  <img className="rounded" src={Delivery} />
 </div>
</div>
<div className="card">
<div className="card-body text-center">
  <img className="rounded" src={Buffet} />
 </div>
</div>
</div>
<br/>
<ul className="nav nav-pills">
  <li className="nav-item">
    <a className="nav-link active" data-toggle="pill" href="#Menu">Menu</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-toggle="pill" href="#Specials">Specials</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-toggle="pill" href="#Setup">Setup</a>
  </li>
</ul>
<br></br>
<div className="tab-content">
  <div className="tab-pane container active" id="Menu">
    <div className="card-deck">

        <div className="card">
          <div className="card-body text-center">
            <img src={Plaindosa} height="200" width="200"/>
            <p className="card-text"></p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <img src={Dahiwada} height="200" width="200"/>
            <p className="card-text"></p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <img src={Oniontomato} height="200" width="200"/>
            <p className="card-text"></p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <img src={Rava} height="200" width="200"/>
            <p className="card-text"></p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <img src={Medhuvada} height="200" width="200"/>
            <p className="card-text"></p>
          </div>
        </div>
    </div>
  </div>
  <div className="tab-pane container fade" id="Specials">
  <div className="card-deck">

<div className="card">
  <div className="card-body text-center">
    <img src={Andhravada} height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src={Bendakaivada} height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src={Pesarattu} height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src={Malabar} height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src={Peanut} height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>
</div>
  </div>
  <div className="tab-pane container fade" id="Setup">
  <div className="card-deck">

<div className="card">
  <div className="card-body text-center">
    <img src={Wedding} height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src={Cafeteria} height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src={Concert} height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src={Resi} height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src={Office} height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>
</div>
  </div>
</div>
<br></br>
        </>
    );
}
export default Home;