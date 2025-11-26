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
      <div className="divider">
        <h1>Our family car</h1>
      </div>
      <div className="famcar-div">
        <img src={car} alt="car" className="famcar-img" />
      </div>
      <div className="divider">
        <h1>About Bangalore</h1>
      </div>
      <div className="about-blr-div">
        <div className="about-blr-details">
          <div className="bangalore-poster">
            <img
              src={bangalore}
              alt="bangalore"
              className="bangalore-poster-img"
            />
          </div>
          <p>
            I first came to Bangalore back in 2012 or 2013, when I was in VIT,
            to a school-friends place, I actually started smoking weed for the
            first time from there. Then I returned to Bangalore in 2017, after
            finishing VIT, this time to search jobs. Bangalore gave me a lot of
            jobs, one after another, marathon of jobs, this city gave me
            Identity, a chance to grow, my first metro experience, but it also
            maximized my addiction. I never faced any kind of security and
            safety issues in Bangalore, people are nice, weather is nice, good
            food, the city is expensive and very large and also clean. it's been
            almost 9 years here in Bangalore for me, and I was unable to build
            any career and job due to my addiction, but Bangalore gave me one
            chance after another, I thank all the Job-Consultancy people who
            helped me find jobs and thanks to all the companies which gave me so
            many opportunities, and I am not done yet, I hope Bangalore will
            keep helping me even now even in the future. Whatever I am today
            truly, is because of Bangalore. Right now at age 33, I am looking
            for long-term stability, and I hope Bangalore will help me find
            that.
          </p>
        </div>
      </div>
    </>
  );
}

export default Personallife;
