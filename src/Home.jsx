import React from "react"
import Navbar from "./Navbar";
function Home()
{
    return(
        <>
        <Navbar/>
        <br></br>
<div className="card-deck">
<div className="card">
<div className="card-body text-center">
  <img className="rounded" src="http://www.dosainc.in/images/banners/truck.jpg" />
  
</div>
</div>
<div className="card">
<div className="card-body text-center">
  <img className="rounded" src="http://www.dosainc.in/images/banners/delivery-pickup.jpg" />
 </div>
</div>
<div className="card">
<div className="card-body text-center">
  <img className="rounded" src="http://www.dosainc.in/images/banners/buffet.jpg" />
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
            <img src="http://www.dosainc.in/images/lightbox/plain-dosa.jpg" height="200" width="200"/>
            <p className="card-text"></p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <img src="http://www.dosainc.in/images/lightbox/dahi-wada.jpg" height="200" width="200"/>
            <p className="card-text"></p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <img src="http://www.dosainc.in/images/lightbox/Onion-Tomato-Uttapam.jpg" height="200" width="200"/>
            <p className="card-text"></p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <img src="http://www.dosainc.in/images/lightbox/rava-dosa.jpg" height="200" width="200"/>
            <p className="card-text"></p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <img src="http://www.dosainc.in/images/lightbox/Medhu-Vada.jpg" height="200" width="200"/>
            <p className="card-text"></p>
          </div>
        </div>
    </div>
  </div>
  <div className="tab-pane container fade" id="Specials">
  <div className="card-deck">

<div className="card">
  <div className="card-body text-center">
    <img src="http://www.dosainc.in/images/lightbox/Andhra-Vada.jpg" height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src="http://www.dosainc.in/images/lightbox/Bendakai-Vepudu.jpg" height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src="http://www.dosainc.in/images/lightbox/Pesarattu-Upma.jpg" height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src="http://www.dosainc.in/images/lightbox/Malabar-Parotha.jpg" height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src="http://www.dosainc.in/images/lightbox/Peanut-Chutney.jpg" height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>
</div>
  </div>
  <div className="tab-pane container fade" id="Setup">
  <div className="card-deck">

<div className="card">
  <div className="card-body text-center">
    <img src="http://www.dosainc.in/images/lightbox/Wedding-Party-Set-Up.jpg" height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src="http://www.dosainc.in/images/lightbox/Cafeteria-Set-Up.jpg" height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src="http://www.dosainc.in/images/lightbox/Concert-Set-Up.jpg" height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src="http://www.dosainc.in/images/lightbox/Residential-Monring-Set-Up.jpg" height="200" width="200"/>
    <p className="card-text"></p>
  </div>
</div>

<div className="card">
  <div className="card-body text-center">
    <img src="http://www.dosainc.in/images/lightbox/Office-Cafe-Set-Up.jpg" height="200" width="200"/>
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