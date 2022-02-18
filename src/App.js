import './App.css';
import { AiOutlineSearch } from 'react-icons/ai';
import React from 'react';

function App() {
  return (
    <div className="contanier-fluid">
      <div>
      </div>
      <div className="content1">
        <div className="row">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-5 col-12">
            <img src="../yoga.webp" style={{ width: "100%" }} className="yoga mt-5"></img>
          </div>
          <div className="col-lg-4 col-12">
            <h1 className="mt-5 text-center">Begin Your Journey to Feeling Whole</h1>
            <hr className="horizonatlline rounded "></hr>
            <p className="text-center">
              Begin to Heal is an online platform that makes it easy for you to book sessions with 200 licensed alternative medicine or ho listic healing practitioners across 12 practices. You can also edu cate yourself through life-changing insights on holistic wellness through our articles and content
                </p>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div>
                  <p>  <img src="../doctor.jpeg" width="60px" height="60px" className="doctor" ></img> <b>200+ </b><small> Holistic <br /> Wellness Practitioners </small></p>
                </div>
                <div>
                  <img src="../medi.png" width="60px" height="60px" className="medi"></img> <p><b>200+ </b><br /> Guided Meditations</p>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div>
                  <p>  <img src="../article1.png" width="60px" height="60px" className="article" ></img> <b>300+ </b> <br /> Articles from Experts</p>
                </div>
                <div>
                  <img src="../book1.jpg" width="60px" height="60px" className="book"></img> <p> <b>100+ </b><br></br> Online Courses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
          </div>
          <div className="col-lg-4 col-12">
            <p className=" p-2">Download a Free 10 Minute Award Winning Medication</p>
          </div>
          <div className="col-lg-3 col-12">
            <button className="btn btndownload ">DOWNLOAD NOW</button>
          </div>
          <div className="col-lg-2">
          </div>
        </div>
      </div>
      <div className=" container-fluid content2">
        <div className="row p-5 p-5">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-5 col-12">
            <input type="text" name="search" id="search" placeholder="Search Conditions or Aliments.. " className="form-control p-3 mt-4" />
          </div>
          <div className="col-lg-4 col-12">
            <button type="button" className="btn  btn-lg btn-block btnfind  p-3 mt-4"><AiOutlineSearch />FIND YOUR PRACTITIONER</button>
          </div>
          <div className="col-lg-1">
          </div>
        </div>
      </div>
      <div className="content3">
        <div className="row">
          <h3 className="text-center pt-5 pb-2">
            As seen on...
        </h3>
          <hr className="horizonatlline rounded "></hr>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12 mb-5">
            <div>
              <div className="card">
                <h1 className="p-3 text-primary"> BUSINESS INSIDER</h1>
              </div>
              <p>"Providing easy access to</p>
              <p>Credible holistic practitioners"</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div>
              <div className="card">
                <h1 className="p-3 text-primary">Chicago Tribune</h1>
              </div>
              <div className="cardc">
                <p >"Revolutionary Online</p>
                <p>Holistic Wellness Platform"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content4">
        <div className="row">
          <div className="col-lg-12 p-4 content4A text-center">
            <h4>For Every 5 Sessions Booked on Begin to Heal,<b>Get 1 FREE session,</b>on us</h4>
          </div>
        </div>
      </div>
      <div className="content5">
        <div className="row p-4">
          <h2 className="text-center">Why book on Begin to Heal</h2>
          <hr className=" horizontalline rounded"></hr>
          <div className="row">
            <div className="col-lg-1 col-3 ">
              <img src="../icons8-price-100.png" width="50px" height="50px" className="content5img"></img>
            </div>
            <div className="col-lg-3 col-9">
              <p><h5>CURATED LIST OF <br /> PRACTITIONERS</h5>We have sampled sessions with all practitioners </p>
            </div>
            <div className="col-lg-1 col-3">
              <img src="../icons8-price-100.png" width="50px" height="50px" className="content5img"></img>
            </div>
            <div className="col-lg-3 col-9">
              <p> <h5>REWARDS</h5>Book 5 sessions across practitioners, and the 6th session is Free</p>
            </div>
            <div className="col-lg-1 col-3">
              <img src="../icons8-price-100.png" width="50px" height="50px" className="content5img"></img>
            </div>
            <div className="col-lg-3 col-9">
              <p><h5>LOWER PRICES</h5>Rates are lower on our site,than offline</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-1 col-2">
              <img src="../icons8-price-100.png" width="50px" height="50px" className="content5img"></img>
            </div>
            <div className="col-lg-3 col-9">
              <p> <h5>VIDEO SESSIONS</h5>Video sessions on our website or in person sessions at practitioners office</p>
            </div>
            <div className="col-lg-1 col-3">
              <img src="../icons8-price-100.png" width="50px" height="50px" className="content5img"></img>
            </div>
            <div className="col-lg-3 col-9">
              <p><h5>APPOINTMENT REMINDERS</h5> Receive text and email reminders for your appointment</p>
            </div>
            <div className="col-lg-1 col-3">
              <img src="../icons8-price-100.png" width="50px" height="50px" className="content5img"></img>
            </div>
            <div className="col-lg-3 col-9">
              <p><h5>#RATINGS AND REVIEWS</h5> Compare, review and provide ratings on our practitioners</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 col-12">
              <p className="text-center">We can help resolve any disputes, if any, with practitioners and take care of you.
</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content6">
        <div className="row p-5">
          <div className="col-lg-12">
            <h1 className="text-center ">What New Yorkers Experience</h1>
            <hr className="horizontalline mt-3 mb-5"></hr>
          </div>
          <div className="row">
            <div className="col-lg-2">
            </div>
            <div className='col-lg-1 col-12'>
              <img src="../yoga.webp" className="profile float-center"></img>
            </div>
            <div className="col-lg-4 col-12">
              <p className="para">"I had never tried therapy until last week. I never thought I needed it. I ended up doing a 2-hour spiritual counseling session with the amazing Ana Holub.Ana is seriously life changing. She helped me to clear Energy, tension, hurt, built up stress and helped me to identify what I was feeling. She was so amazing, I'm so thankful to @begin_to_heal for connecting me to Ana."
<br />
                <b>@bri.healthy-Bri Blank alexander, NYC</b>
              </p>
            </div>
            <div className='col-lg-1 col-12'>
              <img src="../yoga.webp" className="profile float-center"></img>
            </div>
            <div className="col-lg-4 col-12">
              <p className="para">"I tried Reiki via a remote video session on Begin to Heal, this experience exceeded expectations. Haven't slept that soundly in months, my symptoms have lessened, I feel at ease and more rested. If you haven't tried this modality I definitely recommend you giving it a shot! If nothing else it helps you calm the mind & nervous system. I will most likely start doing it on a more consistent basis
             <br />
                <b>@platinumandprime - Liz Walcott</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
