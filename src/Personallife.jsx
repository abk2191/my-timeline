import ckiimage from "/ckk.png";
import rkimage from "/rk.png";
import nkimage from "/nk.png";
import ayaan from "/ayaan.png";
import sanna from "/sanna.png";
import lovelyimg from "/lovely.png";

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
    </>
  );
}

export default Personallife;
