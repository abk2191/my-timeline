import ckiimage from "/ckk.png";
import rkimage from "/rk.png";
import nkimage from "/nk.png";
import ayaan from "/ayaan.png";
import sanna from "/sanna.png";
import lovelyimg from "/lovely.png";
import ckhouse from "/ckhouse.jpg";
import sagardighi from "/sagardighi.jpg";
import bangalore from "/blr.jpg";
import car from "/famcar.jpg";

function Personallife() {
  return (
    <>
      <div className="divider">
        <h1>Family Members</h1>
      </div>
      <div className="family-members">
        <div className="fam-mem">
          <img src={ckiimage} alt="" className="fam-mem-img" />
          <div className="fam-mem-details">
            <h1>Chayan Kumar Kabi</h1>
            <p>Father</p>
            <p>1950 - 2021</p>
          </div>
        </div>
        <div className="fam-mem">
          <img src={rkimage} alt="" className="fam-mem-img" />
          <div className="fam-mem-details">
            <h1>Rita Kabi</h1>
            <p>Mother</p>
          </div>
        </div>
        <div className="fam-mem">
          <img src={nkimage} alt="" className="fam-mem-img" />
          <div className="fam-mem-details">
            <h1>Nandita Kabi</h1>
            <p>Sister</p>
          </div>
        </div>
        <div className="fam-mem">
          <img src={ayaan} alt="" className="fam-mem-img" />
          <div className="fam-mem-details">
            <h1>Ayaan</h1>
            <p>Nephew</p>
          </div>
        </div>
        <div className="fam-mem">
          <img src={sanna} alt="" className="fam-mem-img" />
          <div className="fam-mem-details">
            <h1>Sanna</h1>
            <p>Niece</p>
          </div>
        </div>
      </div>
      <div className="divider">
        <h1>My Story</h1>
      </div>
      <div className="my-story-div">
        <div className="my-story">
          <p>
            Abhishek Kabi is from Coochbehar, a quiet town where his journey
            first began. He completed his engineering degree and moved to
            Bangalore to build a career in the tech world.{" "}
          </p>
          <p>
            Over time, he worked across different roles, gaining experience and
            understanding how things work in real life. At 34, he finds himself
            at a point where he is starting fresh, with more clarity about what
            he wants. He has been learning and building with React, creating
            apps and websites that reflect his ideas.
          </p>{" "}
          <p>
            Now, he is focused on rebuilding his path with purpose, determined
            to create something meaningful on his own terms.
          </p>
        </div>
      </div>
      <div className="divider">
        <h1>The Home I Grew Up In</h1>
      </div>
      <div className="ckhouse">
        <img src={ckhouse} className="ckhouse-img" />
      </div>
      <div className="divider">
        <h1>My City</h1>
      </div>
      <div className="my-city">
        <img src={sagardighi} className="my-city-img" />
      </div>
      <div className="divider">
        <h1>Our family car</h1>
      </div>
      <div className="famcar-div">
        <img src={car} alt="car" className="famcar-img" />
      </div>
    </>
  );
}

export default Personallife;
