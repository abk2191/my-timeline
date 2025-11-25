import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Timeline from "./Timeline";
import vitlogo from "/vit.png";
import aegislogo from "/aegis.png";
import dxclogo from "/dxc.png";
import hplogo from "/hp.png";
import quinnoxlogo from "/quinnox.png";
import concentrixlogo from "/concentrix.webp";
import amazonlogo from "/amazon.jpg";
import tplogo from "/tp.svg";
import cameologo from "/newera.png";
import aloricalogo from "/alorica.png";
import Personallife from "./Personallife";

function App() {
  const jobDetails = [
    {
      id: 1,
      compname: "Aegis BPO",
      duration: "Sept 2017 to Nov 2017",
      status: "Absconded",
      logo: aegislogo,
      designation: "Customer Support (JIO)",
    },
    {
      id: 2,
      compname: "DXC Technology",
      duration: "Feb 2018 to Nov 2018",
      status: "Absconded",
      logo: dxclogo,
      designation: "Tech Support L1 - Eon",
    },
    {
      id: 3,
      compname: "HP",
      duration: "Feb 2019 to Mar 2019",
      status: "Absconded",
      logo: hplogo,
      designation: "Tech Support L1",
    },
    {
      id: 4,
      compname: "Quinnox",
      duration: "Apr 2019 to Jun 2019",
      status: "Absconded",
      logo: quinnoxlogo,
      designation: "Mainframe Engineer - RPG",
    },
    {
      id: 5,
      compname: "Concentrix",
      duration: "Aug 2019 to Oct 2019",
      status: "Exit",
      logo: concentrixlogo,
      designation: "Customer Support (OnePlus)",
    },
    {
      id: 6,
      compname: "Amazon",
      duration: "Jan 2020",
      status: "Terminated - Violent behaviour with HR/Recruiter",
      logo: amazonlogo,
      designation: "Seller Support",
    },
    {
      id: 7,
      compname: "Teleperformance",
      duration: "Oct 2020",
      status: "Absconded",
      logo: tplogo,
      designation: "Customer Support",
    },
    {
      id: 8,
      compname: "Cameo Global",
      duration: "April 2023",
      status: "Terminated - Violent behaviour with HR/Recruiter",
      logo: cameologo,
      designation: "Technical Support L1 - (CISCO)",
    },
    {
      id: 9,
      compname: "Alorica",
      duration: "Jan 2025",
      status: "Absconded - Hostile text msg to whatsapp group",
      logo: aloricalogo,
      designation: "Customer Support (Amazon)",
    },
    {
      id: 10,
      compname: "Concentrix",
      duration: "Nov 2025",
      status: "Absconded - Hostile text msg to trainer",
      logo: concentrixlogo,
      designation: "Technical Support (VMWare)",
    },
  ];

  const mySchool = [
    {
      id: 1,
      schoolName: "Sarada Sishu Tirtha",
      duration: "1994 to 1996",
    },
    {
      id: 2,
      schoolName: "Sadar govt high school",
      duration: "1996 to 2004",
    },
    {
      id: 3,
      schoolName: "Manindranath High School",
      duration: "2005 to 2010",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div className="about">
          <div className="my-image-div"></div>
          <div className="name-div">
            <h1>Abhishek kabi</h1>
          </div>
          <div className="ditails-cont">
            <div className="details">
              <p>
                <strong>DOB:</strong> 21/DEC/1991
              </p>
              <p>
                <strong>AGE:</strong> 33
              </p>
              <p>
                <strong>HOMETOWN:</strong> COOCHBEHAR, WEST BENGAL
              </p>
              <p>
                <strong>CURRENT LOCATION:</strong> BENGALURU, KARNATAKA
              </p>
              <p>
                <strong>RELATIONSHIP STATUS:</strong> SINGLE/UNMARRIED
              </p>
            </div>
          </div>
        </div>
        <Router basename="/my-timeline">
          <nav className="nav">
            <Link to="/timeline">Timeline</Link>
            <Link to="/personallife">Personal Life</Link>
          </nav>

          <Routes>
            <Route
              path="/timeline"
              element={
                <Timeline
                  mySchool={mySchool}
                  jobDetails={jobDetails}
                  vitlogo={vitlogo}
                />
              }
            />
            <Route path="/personallife" element={<Personallife />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
