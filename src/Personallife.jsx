import ckiimage from "/ckk.png";
import rkimage from "/rk.png";
import nkimage from "/nk.png";
import ayaan from "/ayaan.png";
import sanna from "/sanna.png";
import lovelyimg from "/lovely.png";
import ckhouse from "/ckhouse.jpg";
import sagardighi from "/sagardighi.jpg";

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
        <div className="fam-mem">
          <img src={lovelyimg} alt="" className="fam-mem-img" />
          <div className="fam-mem-details">
            <h1>Madhuchhanda Sengupta</h1>
            <p>Aunt</p>
          </div>
        </div>
      </div>
      <div className="divider">
        <h1>My Story</h1>
      </div>
      <div className="my-story-div">
        <div className="my-story">
          <p>• As a kid I was into Electronics and Computers and Designs.</p>
          <p>
            • When I joined college, VIT, I found myself surrounded by rich kids
            from big Indian cities, did not learn anything, my time was wasted
            because of them.
          </p>
          <p>• Because of that reason I got hooked to ganja/weed in college.</p>
          <p>• I am a 13 year-long weed user and an addict.</p>
          <p>
            • Because of that I lost everything: The love of my life, all my
            jobs, I ended up absconding/running from every job I ever did, ended
            up in rehab twice.
          </p>
          <p>• My bank balance is zero. No career as of today.</p>
          <p>
            • But I am still here, still fighting, hoping for a stable future.
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
    </>
  );
}

export default Personallife;
