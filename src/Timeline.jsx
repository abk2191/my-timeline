function Timeline({ mySchool, jobDetails, vitlogo }) {
  return (
    <>
      <div className="divider">
        <h1>Schools</h1>
      </div>
      {/* School Details Section */}
      {mySchool.map((school) => (
        <div className="job-container" key={school.id}>
          <div className="job-container-details">
            <div className="heading">
              <div className="kont">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <p
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {school.id}.
                  </p>{" "}
                  <div className="img-comp-logo-div">
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ color: "gray", fontSize: "12px" }}>
                        School
                      </span>
                    </div>
                  </div>{" "}
                  <p className="compname">
                    <strong>{school.schoolName}</strong>
                  </p>
                </div>
                <div>
                  <p
                    className="duration"
                    style={{ color: "gray", margin: "0", padding: "0" }}
                  >
                    {school.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="badge-green">
            <i class="fa-solid fa-circle-check"></i>
          </div>
        </div>
      ))}
      <div className="divider">
        <h1>College</h1>
      </div>
      {/* College Card */}
      <div className="job-container">
        <div className="job-container-details">
          <div className="heading">
            <div className="kont">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <p
                  style={{
                    color: "grey",
                    fontSize: "20px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  1.
                </p>{" "}
                <div className="img-comp-logo-div">
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "50%",
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={vitlogo}
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>{" "}
                <p className="compname">
                  <strong>Vellore Institute of technology</strong>
                </p>
              </div>
              <div>
                <p
                  className="designation"
                  style={{ color: "gray", margin: "0", padding: "0" }}
                >
                  B.tech IT
                </p>
              </div>
              <div>
                <p
                  className="duration"
                  style={{ color: "gray", margin: "0", padding: "0" }}
                >
                  2010 to 2017
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="badge-green">
          <i class="fa-solid fa-circle-check"></i>
        </div>
      </div>
      <div className="divider">
        <h1>Work</h1>
      </div>
      {/* Job Details Section */}
      {jobDetails.map((details) => (
        <div className="job-container" key={details.id}>
          <div className="job-container-details">
            <div className="heading">
              <div className="kont">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <p
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {details.id}.
                  </p>{" "}
                  <div className="img-comp-logo-div">
                    <img
                      src={details.logo}
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>{" "}
                  <p className="compname">
                    <strong>{details.compname}</strong>
                  </p>
                </div>
                <div>
                  <p
                    className="designation"
                    style={{ color: "gray", margin: "0", padding: "0" }}
                  >
                    {details.designation}
                  </p>
                </div>
                <div>
                  <p
                    className="duration"
                    style={{ color: "gray", margin: "0", padding: "0" }}
                  >
                    {details.duration}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="status">
                <span style={{ color: "gray" }}>Status:</span>{" "}
                <span style={{ color: "gray" }}>{details.status}</span>
              </p>
            </div>
          </div>
          <div className="badge-red">
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
        </div>
      ))}
      <div className="info-desc">
        <div className="divider">
          <h1>End of Phase-1</h1>
          <p style={{ fontSize: "14px", marginTop: "6px" }}>
            Age: 34 | Bank Balance: 0 | Unemployed |
          </p>
          <p style={{ fontSize: "14px" }}>Debt: 0 | April 2026</p>
        </div>
        <div className="divider">
          <h1 style={{ paddingTop: "50px" }}>Beginning of Phase-2</h1>
          <p
            style={{
              fontSize: "14px",
              marginTop: "6px",
              paddingBottom: "30px",
            }}
          >
            The Restart | June 2025
          </p>
        </div>
      </div>
    </>
  );
}

export default Timeline;
