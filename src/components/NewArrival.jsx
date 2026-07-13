import React from "react";
import ps5 from "../assets/images/PS5_Black_and_White.jpg";
import women from "../assets/images/Woman_s_collection.jpg";
import speakers from "../assets/images/Amazon_Speakers.png";
import perfume from "../assets/images/Gucci_perfume.jpg";

export default function NewArrival() {
  return (
    <section style={{ padding: "40px 0 60px" }}>
      <div className="container">
        <div className="section-label">
          <span></span>
          <p>Featured</p>
        </div>
        <h2 className="section-title">New Arrival</h2>

        <div className="row g-3">
          {/* PS5 big card */}
          <div className="col-12 col-md-6">
            <div
              style={{
                background: "#000",
                borderRadius: "4px",
                height: "100%",
                minHeight: "400px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
                padding: "24px",
              }}
            >
              <img
                src={ps5}
                alt="PS5"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80%",
                  objectFit: "contain",
                }}
              />
              <div style={{ position: "relative", zIndex: 1, color: "#fff" }}>
                <h3
                  style={{
                    fontWeight: "700",
                    fontSize: "22px",
                    marginBottom: "8px",
                  }}
                >
                  PlayStation 5
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    opacity: 0.8,
                    marginBottom: "10px",
                  }}
                >
                  Black and White version of the PS5 coming out on sale.
                </p>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    fontSize: "13px",
                    borderBottom: "1px solid #fff",
                    paddingBottom: "2px",
                    textDecoration: "none",
                  }}
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="col-12 col-md-6 d-flex flex-column gap-3">
            {/* Women's */}
            <div
              style={{
                background: "#000",
                borderRadius: "4px",
                position: "relative",
                overflow: "hidden",
                height: "190px",
                display: "flex",
                alignItems: "flex-end",
                padding: "20px",
              }}
            >
              <img
                src={women}
                alt="Women's Collection"
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  height: "100%",
                  width: "60%",
                  objectFit: "cover",
                }}
              />
              <div style={{ position: "relative", zIndex: 1, color: "#fff" }}>
                <h4
                  style={{
                    fontWeight: "700",
                    fontSize: "18px",
                    marginBottom: "6px",
                  }}
                >
                  Women's Collections
                </h4>
                <p
                  style={{
                    fontSize: "12px",
                    opacity: 0.8,
                    marginBottom: "8px",
                  }}
                >
                  Featured woman collections that give you another vibe.
                </p>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    fontSize: "13px",
                    borderBottom: "1px solid #fff",
                    paddingBottom: "2px",
                    textDecoration: "none",
                  }}
                >
                  Shop Now
                </a>
              </div>
            </div>

            {/* Speakers + Perfume */}
            <div className="row g-3">
              <div className="col-6">
                <div
                  style={{
                    background: "#000",
                    borderRadius: "4px",
                    position: "relative",
                    overflow: "hidden",
                    height: "190px",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "16px",
                  }}
                >
                  <img
                    src={speakers}
                    alt="Speakers"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80%",
                      objectFit: "contain",
                    }}
                  />
                  <div
                    style={{ position: "relative", zIndex: 1, color: "#fff" }}
                  >
                    <h5
                      style={{
                        fontWeight: "700",
                        fontSize: "15px",
                        marginBottom: "4px",
                      }}
                    >
                      Speakers
                    </h5>
                    <p
                      style={{
                        fontSize: "11px",
                        opacity: 0.8,
                        marginBottom: "6px",
                      }}
                    >
                      Amazon wireless speakers
                    </p>
                    <a
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: "12px",
                        borderBottom: "1px solid #fff",
                        paddingBottom: "2px",
                        textDecoration: "none",
                      }}
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div
                  style={{
                    background: "#000",
                    borderRadius: "4px",
                    position: "relative",
                    overflow: "hidden",
                    height: "190px",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "16px",
                  }}
                >
                  <img
                    src={perfume}
                    alt="Perfume"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80%",
                      objectFit: "contain",
                    }}
                  />
                  <div
                    style={{ position: "relative", zIndex: 1, color: "#fff" }}
                  >
                    <h5
                      style={{
                        fontWeight: "700",
                        fontSize: "15px",
                        marginBottom: "4px",
                      }}
                    >
                      Perfume
                    </h5>
                    <p
                      style={{
                        fontSize: "11px",
                        opacity: 0.8,
                        marginBottom: "6px",
                      }}
                    >
                      GUCCI INTENSE OUD EDP
                    </p>
                    <a
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: "12px",
                        borderBottom: "1px solid #fff",
                        paddingBottom: "2px",
                        textDecoration: "none",
                      }}
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
