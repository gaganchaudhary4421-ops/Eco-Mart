import React, { useState, useEffect } from "react";
import jbl from "../assets/images/JBL_speaker.jpg";

export default function JBLBanner() {
  const [time, setTime] = useState({ hours: 23, minutes: 59, seconds: 35 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) hours = 23;
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      style={{ background: "#000", padding: "60px 0", margin: "40px 0" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <p
              style={{
                color: "#DB4444",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Categories
            </p>
            <h2
              style={{
                color: "#fff",
                fontSize: "36px",
                fontWeight: "700",
                marginBottom: "24px",
                lineHeight: 1.3,
              }}
            >
              Enhance Your
              <br />
              Music Experience
            </h2>
            <div className="d-flex gap-3 mb-4">
              {[
                ["23", "Hours"],
                ["59", "Minutes"],
                [pad(time.seconds), "Seconds"],
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "50%",
                      width: "56px",
                      height: "56px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                      fontSize: "18px",
                      marginBottom: "4px",
                    }}
                  >
                    {val}
                  </div>
                  <div style={{ color: "#fff", fontSize: "11px" }}>{label}</div>
                </div>
              ))}
            </div>
            <button className="btn-red">Buy Now!</button>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src={jbl}
              alt="JBL Speaker"
              style={{
                maxWidth: "100%",
                maxHeight: "300px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
